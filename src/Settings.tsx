import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {useNavigation, useRoute, RouteProp} from '@react-navigation/native';
import Slider from '@react-native-community/slider';
import axios from 'axios';
import Dropdown from './Dropdown.tsx';

interface SettingsRouteParams {
  photoUri: string;
}

type SettingsRouteProp = RouteProp<{Settings: SettingsRouteParams}, 'Settings'>;

const pickerValues = [
  {label: 'The Great Wave off Kanagawa', value: 'The_Great_wave_off_Kanagawa'},
  {label: 'Abstract Snail', value: 'abstract_snail'},
  {label: 'Antimonocromatismo', value: 'antimonocromatismo'},
  {label: 'Asheville', value: 'asheville'},
  {label: 'Brushstrokes', value: 'brushstrokes'},
  {label: 'Contrast of Forms', value: 'contrast_of_forms'},
  {label: 'En Campo Gris', value: 'en_campo_gris'},
  {label: 'Graffiti', value: 'graffiti'},
  {label: 'Hosi', value: 'hosi'},
  {label: 'La Muse', value: 'la_muse'},
  {label: 'Mondrian', value: 'mondrian'},
  {label: 'Picasso Seated Nude', value: 'picasso_seated_nude_hr'},
  {label: 'Picasso Self Portrait', value: 'picasso_self_portrait'},
  {label: 'Scene de Rue', value: 'scene_de_rue'},
  {label: 'Sketch', value: 'sketch'},
  {label: 'Trial', value: 'trial'},
  {label: 'Woman in Peasant Dress', value: 'woman_in_peasant_dress_cropped'},
  {label: 'Woman With Hat', value: 'woman_with_hat_matisse'},
];

const Settings = (): React.JSX.Element => {
  const navigation = useNavigation();
  const route = useRoute<SettingsRouteProp>();
  const {photoUri} = route.params;

  const [selectedValue, setSelectedValue] = useState<string>(
    'The_Great_wave_off_Kanagawa',
  );
  const [alpha, setAlpha] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const submitData = async () => {
    const formData = new FormData();
    formData.append('style', selectedValue);
    formData.append('alpha', alpha.toString());
    formData.append('content', {
      uri: photoUri,
      type: 'image/jpeg',
      name: 'photo.jpg',
    });

    try {
      console.log('Submitting data...', formData);
      setIsLoading(true);
      const response = await axios.post(
        'http://192.168.0.11:5000/transfer',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          responseType: 'blob',
        },
      );
      setIsLoading(false);

      // Convert the response blob to a URL
      // @ts-ignore
      const blob = new Blob([response.data], {type: 'image/jpeg'});
      const responseImageUrl = URL.createObjectURL(blob);

      // Navigate to the ResultScreen with the responseImageUrl as a parameter
      // @ts-ignore
      navigation.navigate('ResultScreen', {responseImageUrl});
    } catch (error) {
      setIsLoading(false);
      console.error('Error:', error);
      Alert.alert('Error', 'Failed to submit data.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Select Style</Text>
      <Dropdown
        selectedValue={selectedValue}
        onValueChange={setSelectedValue}
      />

      <Text style={styles.label}>Alpha</Text>
      <Text style={styles.value}>
        Interpolation between original and transfered images (0 means keep
        original image)
      </Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={1}
        step={0.05}
        value={alpha}
        onValueChange={setAlpha}
      />
      <Text style={styles.value}>{alpha.toFixed(2)}</Text>

      <Button title="Submit" onPress={submitData} />
      {isLoading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  value: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
  },
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Settings;

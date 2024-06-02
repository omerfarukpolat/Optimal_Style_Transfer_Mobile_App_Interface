import React, {useState} from 'react';
import {SafeAreaView, Button, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ImagePickerComponent from './ImagePickerComponent.tsx';
import PhotoPreview from './PhotoReview.tsx';

const SelectPhotoScreen = (): React.JSX.Element => {
  const [photoUri, setPhotoUri] = useState<string | null>(null);
  const navigation = useNavigation();

  const handleImageSelected = (uri: string) => {
    setPhotoUri(uri);
  };

  return (
    <SafeAreaView style={styles.container}>
      {!photoUri ? (
        <ImagePickerComponent onImageSelected={handleImageSelected} />
      ) : (
        <>
          <PhotoPreview photoUri={photoUri} />
          <Button
            title="Settings"
            onPress={() =>
              // @ts-ignore
              navigation.navigate('Settings', {photoUri})
            }
          />
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SelectPhotoScreen;

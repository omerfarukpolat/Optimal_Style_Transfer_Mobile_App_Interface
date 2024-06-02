import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = (): React.JSX.Element => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>
          CMP 721: Computational Photography Project
        </Text>
        <Text style={styles.subtitle}>By: Omer Faruk Polat</Text>
        <Text style={styles.studentId}>Student ID: N23232076</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('./assets/comparison_small.png')}
          resizeMode={'contain'}
        />
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={[styles.button, styles.captureButton]}
            onPress={() =>
              // @ts-ignore
              navigation.navigate('TakePhoto')
            }>
            <Text style={styles.buttonText}>Capture Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.selectButton]}
            onPress={() =>
              // @ts-ignore
              navigation.navigate('SelectPhoto')
            }>
            <Text style={styles.buttonText}>Select from Photos</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.stylesListButton]}
            onPress={() =>
              // @ts-ignore
              navigation.navigate('StyleList')
            }>
            <Text style={styles.buttonText}>Styles List</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  headerContainer: {
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 8,
    textAlign: 'center',
  },
  studentId: {
    fontSize: 15,
    textAlign: 'center',
  },
  imageContainer: {
    marginTop: 40,
  },
  image: {
    width: Dimensions.get('window').width,
    height: 300,
  },
  buttonsContainer: {
    justifyContent: 'space-between',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 12,
    marginBottom: 10,
    marginHorizontal: 20,
    height: 50,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
  captureButton: {
    backgroundColor: '#86469C',
  },
  selectButton: {
    backgroundColor: '#BC7FCD',
  },
  stylesListButton: {
    backgroundColor: '#FB9AD1',
  },
});

export default HomeScreen;

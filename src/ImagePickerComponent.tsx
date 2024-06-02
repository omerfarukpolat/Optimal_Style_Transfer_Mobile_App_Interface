import React from 'react';
import { View, Button, Image, StyleSheet, Alert } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { ImagePickerResponse } from 'react-native-image-picker/src/types';

interface ImagePickerComponentProps {
  onImageSelected: (uri: string) => void;
}

const ImagePickerComponent: React.FC<ImagePickerComponentProps> = ({ onImageSelected }) => {
  const selectImage = () => {
    const options = {
      mediaType: 'photo' as const,
    };

    launchImageLibrary(options, (response: ImagePickerResponse) => {
      if (response.didCancel) {
        Alert.alert('User cancelled image picker');
      } else if (response.errorCode) {
        Alert.alert('ImagePicker Error: ', response.errorMessage ?? '');
      } else if (response.assets && response.assets.length > 0) {
        const uri = response.assets[0].uri;
        if (uri) {
          onImageSelected(uri);
        }
      }
    });
  };

  return <Button title="Select Image from Gallery" onPress={selectImage} />;
};

export default ImagePickerComponent;

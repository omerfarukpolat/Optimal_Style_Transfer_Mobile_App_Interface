import React, {useState} from 'react';
import {SafeAreaView, Button} from 'react-native';
import CameraComponent from './CameraComponent.tsx';
import PhotoPreview from './PhotoReview.tsx';
import {useNavigation} from '@react-navigation/native';

const TakePhotoScreen = (): React.JSX.Element => {
  const [photoUri, setPhotoUri] = useState<string | null>(null);
  const navigation = useNavigation();

  const handleCapture = (uri: string) => {
    setPhotoUri(uri);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      {!photoUri ? (
        <CameraComponent onCapture={handleCapture} />
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

export default TakePhotoScreen;

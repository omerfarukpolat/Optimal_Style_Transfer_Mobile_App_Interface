import React, {useRef} from 'react';
import {View, Button} from 'react-native';
import {RNCamera} from 'react-native-camera';

interface CameraComponentProps {
  onCapture: (uri: string) => void;
}

const CameraComponent: React.FC<CameraComponentProps> = ({onCapture}) => {
  const cameraRef = useRef<RNCamera | null>(null);

  const takePicture = async () => {
    if (cameraRef.current) {
      const options = {quality: 0.5, base64: true};
      const data = await cameraRef.current.takePictureAsync(options);
      onCapture(data.uri);
    }
  };

  return (
    <View style={{flex: 1}}>
      <RNCamera
        ref={cameraRef}
        style={{flex: 1}}
        type={RNCamera.Constants.Type.back}
        captureAudio={false}
      />
      <Button title="Capture" onPress={takePicture} />
    </View>
  );
};

export default CameraComponent;

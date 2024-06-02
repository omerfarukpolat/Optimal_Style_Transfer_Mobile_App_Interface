import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

interface PhotoPreviewProps {
  photoUri: string;
}

const PhotoPreview: React.FC<PhotoPreviewProps> = ({ photoUri }) => (
  <View style={styles.container}>
    <Image source={{uri: photoUri}} style={styles.image} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    overflow: 'hidden',
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: {
      width: 2,
      height: 2,
    },
  },
  image: {
    flex: 1,
  },
});

export default PhotoPreview;

import React from 'react';
import {View, StyleSheet} from 'react-native';
import ImageZoom from 'react-native-image-zoom-viewer';
import {RouteProp, useRoute} from '@react-navigation/native';

interface ResultScreenRouteParams {
  responseImageUrl: string;
}

type ResultScreenRouteProp = RouteProp<
  {ResultScreen: ResultScreenRouteParams},
  'ResultScreen'
>;

const ResultScreen = (): React.JSX.Element => {
  const route = useRoute<ResultScreenRouteProp>();
  const {responseImageUrl} = route.params;

  const images = [
    {
      url: responseImageUrl,
    },
  ];

  return (
    <View style={styles.container}>
      <ImageZoom imageUrls={images} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default ResultScreen;

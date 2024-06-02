import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

// List of picker values
const pickerValues = [
  'The Great Wave off Kanagawa',
  'Abstract Snail',
  'Antimonocromatismo',
  'Asheville',
  'Brushstrokes',
  'Contrast of Forms',
  'En Campo Gris',
  'Graffiti',
  'Hosi',
  'La Muse',
  'Mondrian',
  'Picasso Seated Nude',
  'Picasso Self Portrait',
  'Scene de Rue',
  'Sketch',
  'Trial',
  'Woman in Peasant Dress',
  'Woman with Hat',
];

// Importing images from the local directory
const artworkImages = {
  'The Great Wave off Kanagawa': require('./styleImages/The_Great_Wave_off_Kanagawa.jpg'),
  'Abstract Snail': require('./styleImages/abstract_snail.jpg'),
  Antimonocromatismo: require('./styleImages/antimonocromatismo.jpg'),
  Asheville: require('./styleImages/asheville.jpg'),
  Brushstrokes: require('./styleImages/brushstrokes.jpg'),
  'Contrast of Forms': require('./styleImages/contrast_of_forms.jpg'),
  'En Campo Gris': require('./styleImages/en_campo_gris.jpg'),
  Graffiti: require('./styleImages/graffiti.jpg'),
  Hosi: require('./styleImages/hosi.jpg'),
  'La Muse': require('./styleImages/la_muse.jpg'),
  Mondrian: require('./styleImages/mondrian.jpg'),
  'Picasso Seated Nude': require('./styleImages/picasso_seated_nude_hr.jpg'),
  'Picasso Self Portrait': require('./styleImages/picasso_self_portrait.jpg'),
  'Scene de Rue': require('./styleImages/scene_de_rue.jpg'),
  Sketch: require('./styleImages/sketch.png'),
  Trial: require('./styleImages/trial.jpg'),
  'Woman in Peasant Dress': require('./styleImages/woman_in_peasant_dress_cropped.jpg'),
  'Woman with Hat': require('./styleImages/woman_with_hat_matisse.jpg'),
};

const StyleListScreen = (): React.JSX.Element => {
  const [expanded, setExpanded] = useState<{[key: string]: boolean}>({});

  const toggleExpand = (value: string) => {
    setExpanded(prevState => ({
      ...prevState,
      [value]: !prevState[value],
    }));
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.innerContainer}>
        {pickerValues.map(value => (
          <View key={value} style={styles.item}>
            <TouchableOpacity onPress={() => toggleExpand(value)}>
              <Text style={styles.title}>{value.replace(/_/g, ' ')}</Text>
            </TouchableOpacity>
            {expanded[value] && (
              <Image source={artworkImages[value]} style={styles.image} />
            )}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  innerContainer: {
    marginVertical: 20,
  },
  item: {
    marginBottom: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginTop: 10,
  },
});

export default StyleListScreen;

import React from 'react';
import {Picker} from '@react-native-picker/picker';

interface DropdownProps {
  selectedValue: string;
  onValueChange: (itemValue: string, itemIndex: number) => void;
}

const Dropdown: React.FC<DropdownProps> = ({selectedValue, onValueChange}) => (
  <Picker
    selectedValue={selectedValue}
    style={{height: 50, marginBottom: 150}}
    onValueChange={onValueChange}>
    <Picker.Item
      label="The Great Wave off Kanagawa"
      value="The_Great_Wave_off_Kanagawa"
    />
    <Picker.Item label="Abstract Snail" value="abstract_snail" />
    <Picker.Item label="Antimonocromatismo" value="antimonocromatismo" />
    <Picker.Item label="Asheville" value="asheville" />
    <Picker.Item label="Brushstrokes" value="brushstrokes" />
    <Picker.Item label="Contrast of Forms" value="contrast_of_forms" />
    <Picker.Item label="En Campo Gris" value="en_campo_gris" />
    <Picker.Item label="Graffiti" value="graffiti" />
    <Picker.Item label="Hosi" value="hosi" />
    <Picker.Item label="La Muse" value="la_muse" />
    <Picker.Item label="Mondrian" value="mondrian" />
    <Picker.Item label="Picasso Seated Nude" value="picasso_seated_nude_hr" />
    <Picker.Item label="Picasso Self Portrait" value="picasso_self_portrait" />
    <Picker.Item label="Scene de Rue" value="scene_de_rue" />
    <Picker.Item label="Sketch" value="sketch" />
    <Picker.Item label="Trial" value="trial" />
    <Picker.Item
      label="Woman in Peasant Dress"
      value="woman_in_peasant_dress_cropped"
    />
    <Picker.Item label="Woman With Hat" value="woman_with_hat_matisse" />
  </Picker>
);

export default Dropdown;

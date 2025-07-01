import React from 'react';
import { View, Text, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { provinces } from './mockData';
import { styles } from './styles';

type Props = {
  selectedProvince: string | null;
  setSelectedProvince: (province: string) => void;
  onNext: () => void;
};

export default function Step1Province({
  selectedProvince,
  setSelectedProvince,
  onNext,
}: Props) {
  return (
    <View>
      <Text style={styles.subheading}>Step 1: Choose a Province</Text>

      <Picker
        selectedValue={selectedProvince}
        onValueChange={(value) => {
            if (value !== null) setSelectedProvince(value);
            }}
      >
        <Picker.Item label="Select a province..." value={null} />
        {provinces.map((province) => (
          <Picker.Item key={province} label={province} value={province} />
        ))}
      </Picker>

      <Button title="Next" onPress={onNext} disabled={!selectedProvince} />
    </View>
  );
}

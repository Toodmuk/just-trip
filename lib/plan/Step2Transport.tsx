import React from 'react';
import { View, Text, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { styles } from './styles';

type Props = {
  transportType: string | null;
  setTransportType: (value: string) => void;
  onNext: () => void;
};

export default function Step2Transport({
  transportType,
  setTransportType,
  onNext,
}: Props) {
  return (
    <View>
      <Text style={styles.subheading}>Step 2: Select Transport</Text>

      <Picker
        selectedValue={transportType}
        onValueChange={(value) => { if (value != null) setTransportType(value); }}
      >
        <Picker.Item label="Select transport..." value={null} />
        <Picker.Item label="Plane" value="plane" />
        <Picker.Item label="Train" value="train" />
        <Picker.Item label="Bus" value="bus" />
      </Picker>

      <Button title="Next" onPress={onNext} disabled={!transportType} />
    </View>
  );
}

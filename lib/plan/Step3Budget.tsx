import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { styles } from './styles';

type Props = {
  budget: string;
  setBudget: (value: string) => void;
  onNext: () => void;
};

export default function Step3Budget({ budget, setBudget, onNext }: Props) {
  return (
    <View>
      <Text style={styles.subheading}>Step 3: Enter Budget Per Person (Baht)</Text>

      <TextInput
        value={budget}
        onChangeText={setBudget}
        placeholder="e.g. 2000"
        keyboardType="numeric"
        style={styles.input}
      />

      <Button
        title="Next"
        onPress={onNext}
        disabled={!budget || isNaN(Number(budget)) || Number(budget) <= 0}
      />
    </View>
  );
}

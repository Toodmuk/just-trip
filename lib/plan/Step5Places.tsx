import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { mockPlacesByProvince } from './mockData';
import { styles } from './styles';

type Props = {
  selectedProvince: string;
  selectedPlaces: string[];
  setSelectedPlaces: React.Dispatch<React.SetStateAction<string[]>>; // ✅ this fixes the TS error
  onFinish: () => void;
};

export default function Step5Places({
  selectedProvince,
  selectedPlaces,
  setSelectedPlaces,
  onFinish,
}: Props) {
  const togglePlace = (place: string) => {
    setSelectedPlaces((prev) =>
      prev.includes(place)
        ? prev.filter((p) => p !== place)
        : [...prev, place]
    );
  };

  return (
    <View>
      <Text style={styles.subheading}>Step 5: Select Places to Visit</Text>

      <View style={styles.placesContainer}>
        {mockPlacesByProvince[selectedProvince].map((place) => {
          const isSelected = selectedPlaces.includes(place);

          return (
            <TouchableOpacity
              key={place}
              style={[
                styles.placeCard,
                isSelected && styles.placeCardSelected,
              ]}
              onPress={() => togglePlace(place)}
            >
              <Text style={styles.placeText}>{place}</Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <Button
        title="Finish & Save Plan"
        onPress={onFinish}
        disabled={selectedPlaces.length === 0}
      />
    </View>
  );
}

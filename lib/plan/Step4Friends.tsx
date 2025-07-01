import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { styles } from './styles';

type Props = {
  friendInput: string;
  setFriendInput: (value: string) => void;
  invitedFriends: string[];
  setInvitedFriends: (list: string[]) => void;
  onNext: () => void;
};

export default function Step4Friends({
  friendInput,
  setFriendInput,
  invitedFriends,
  setInvitedFriends,
  onNext,
}: Props) {
  const addFriend = () => {
    if (friendInput.trim()) {
      setInvitedFriends([...invitedFriends, friendInput.trim()]);
      setFriendInput('');
    }
  };

  const removeFriend = (index: number) => {
    const updated = invitedFriends.filter((_, i) => i !== index);
    setInvitedFriends(updated);
  };

  return (
    <View>
      <Text style={styles.subheading}>Step 4: Invite Friends (Optional)</Text>

      <TextInput
        placeholder="Enter friend's name or email"
        value={friendInput}
        onChangeText={setFriendInput}
        style={styles.input}
      />

      <Button title="Add Friend" onPress={addFriend} />

      <View style={styles.chipsContainer}>
        {invitedFriends.map((friend, index) => (
          <View key={index} style={styles.chip}>
            <Text style={styles.chipText}>{friend}</Text>
            <Button title="×" onPress={() => removeFriend(index)} />
          </View>
        ))}
      </View>

      <Button title="Next" onPress={onNext} />
    </View>
  );
}

import { View, Text, Button } from 'react-native';
import { useAuth } from '../context/AuthContext';
import { Redirect } from 'expo-router';

export default function LoginScreen() {
  const { isLoggedIn, login } = useAuth();

  if (isLoggedIn) return <Redirect href={{ pathname: "/(tabs)" }} />;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Login Screen</Text>
      <Button title="Login" onPress={login} />
    </View>
  );
}

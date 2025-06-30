import { Tabs, Redirect } from 'expo-router';
import { useAuth } from '../../context/AuthContext';

export default function TabLayout() {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <Redirect href={{ pathname: "/login" }} />;
  }

  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="plan" options={{ title: "Plan" }} />
      <Tabs.Screen name="chats" options={{ title: "Chats" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
}

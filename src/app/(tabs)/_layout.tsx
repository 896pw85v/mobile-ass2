import { Tabs } from "expo-router";
import BottomNavbar from "../../../components/BottomNavbar";
const TabLayout = () => {
  return (
    <Tabs 
      tabBar={() => (<BottomNavbar />)}
      
      screenOptions={{
        // tabBarActiveTintColor: "#0b0b11",
        // tabBarInactiveTintColor: "#94A3B8",
        // headerTintColor: "#7C3AED",
        
        headerShown: false, 
      }}
    >
      <Tabs.Screen name="index" options={{title: "Index"}} />
      <Tabs.Screen name="notification" options={{ title: "Notification" }} />
      <Tabs.Screen name="you" options={{title: "You"}} />
    </Tabs>
  );
};
export default TabLayout;
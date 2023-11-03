import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Layout1 from "./view/Layout1"
import Layout2 from "./view/Layout2"
//import Layout3 from "./view/Layout3"
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Layout1"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Layout1" component={Layout1} />
        <Stack.Screen name="Layout2" component={Layout2}/> 
        {/* <Stack.Screen name="Layout3" component={Layout3}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
  }
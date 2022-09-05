import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './src/screens/HomeScreen';
import { LandingPage } from './src/screens/LandingPage';
import { AddPlayer } from './src/screens/AddPlayer';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <TailwindProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen name='Landing Page' component={LandingPage} />
          <Stack.Screen name='Add Player' component={AddPlayer} />
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}

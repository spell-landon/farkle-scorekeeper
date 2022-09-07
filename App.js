// Tailwind
import { TailwindProvider } from 'tailwindcss-react-native';
// Navigation
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Screens
import { HomeScreen } from './src/screens/HomeScreen';
import { LandingPage } from './src/screens/LandingPage';
import { AddPlayer } from './src/screens/AddPlayer';

const Stack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

const handleAddUser = () => {};

export default function App() {
  return (
    <TailwindProvider>
      <NavigationContainer theme={theme}>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName='Home'>
          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen name='Landing Page' component={LandingPage} />
          <Stack.Screen name='Add Player' component={AddPlayer} />
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}

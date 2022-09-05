import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export const LandingPage = ({ navigation }) => {
  return (
    <LinearGradient
      colors={['#5CC8D8', '#5D66E2']}
      className='flex-1 justify-center gap-8 items-center bg-gradient-to-br py-16 px-4'>
      <View className='justify-center items-center px-8'>
        <Text className='text-2xl text-white/80 font-bold text-center'>
          Begin by adding players to the game
        </Text>
      </View>
      <TouchableHighlight
        onPress={() => navigation.navigate('Add Player')}
        className='bg-[#5CC8D8] py-4 px-8 rounded-full'>
        <View>
          <Text className='text-white text-lg font-medium'>Add Player</Text>
        </View>
      </TouchableHighlight>
    </LinearGradient>
  );
};

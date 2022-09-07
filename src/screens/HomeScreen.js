import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export const HomeScreen = ({ navigation }) => {
  return (
    <LinearGradient
      colors={['#5CC8D8', '#5D66E2']}
      className='flex-1 justify-between items-center bg-gradient-to-br py-16'>
      <View className='justify-center items-center mt-10'>
        <Image
          className='h-64 w-64'
          source={require('../../assets/dice.png')}
        />
        <Text className='text-3xl text-white/80 font-bold'>Farkle</Text>
        <Text className='text-3xl text-white/80 font-bold'>Scorekeeper</Text>
      </View>
      <TouchableHighlight
        onPress={() => navigation.navigate('Landing Page')}
        className='bg-[#5CC8D8] py-4 px-8 rounded-full mb-40'>
        <View>
          <Text className='text-white text-lg font-medium'>Start Game</Text>
        </View>
      </TouchableHighlight>
    </LinearGradient>
  );
};

import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  TextInput,
  ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { PLAYER_COLORS } from '../const/playerColors';

export const AddPlayer = ({ navigation }) => {
  const [playerName, setPlayerName] = useState('');
  const [playerColor, setPlayerColor] = useState('');

  return (
    <LinearGradient
      colors={['#5CC8D8', '#5D66E2']}
      className='flex-1 items-stretch justify-start gap-8 py-4 px-4'>
      {/* Player Name */}
      <View className='flex flex-col space-y-2'>
        <Text className='text-lg text-white/80 font-medium'>
          Player's Name:
        </Text>
        <TextInput
          className='bg-white/25 h-[50px] rounded-full p-4 text-white'
          onChangeText={(newText) => setPlayerName(newText)}
          defaultValue={playerName}
        />
      </View>
      {/* Player Color */}
      <View className='flex-1 space-y-2 mt-8'>
        <View className='flex mx-auto flex-row justify-between'>
          <Text className='text-lg text-white/80 font-medium'>
            Player's Color:
          </Text>
          <View className={`h-6 w-6 rounded-full ${playerColor}`}></View>
        </View>
        <View className='bg-white rounded-xl p-4 mx-auto flex-wrap flex-row justify-between gap-4'>
          {PLAYER_COLORS.map((color) => {
            return (
              <TouchableHighlight
                key={color.name}
                className='w-[50px] rounded-full'
                onPress={() => setPlayerColor(color.color)}>
                <View
                  className={`${color.color} h-[50px] w-[50px] rounded-full`}></View>
              </TouchableHighlight>
            );
          })}
        </View>
      </View>
      {/* Add Player Button */}
      <TouchableHighlight
        onPress={() =>
          alert('Player has been added (not functional though...)')
        }
        className='bg-[#5CC8D8] py-4 px-8 rounded-full'>
        <View>
          <Text className='text-white text-lg font-medium'>Add Player</Text>
        </View>
      </TouchableHighlight>
    </LinearGradient>
  );
};

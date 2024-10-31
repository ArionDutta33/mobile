import { View, Text, ImageBackground, ActivityIndicator, Pressable } from 'react-native';
import React from 'react';
import { router } from 'expo-router';

const HomeScreen = () => {
  return (
    <>
      <ImageBackground
        resizeMode="cover"
        className="h-full w-full flex-1 justify-end pb-10"
        source={{
          uri: 'https://images.pexels.com/photos/1684913/pexels-photo-1684913.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2',
        }}>
        <View className="">
          <Text className="mb-16 px-4 text-6xl font-bold text-white">
            Fuel your imagination and connect with like minded youth
          </Text>
        </View>
        <Pressable
          onPress={() => router.push('/(tabs)')}
          className="mx-6 items-center justify-center rounded-lg bg-red-500 p-4">
          <Text className=" text-xl font-bold text-white">Get Started</Text>
        </Pressable>
      </ImageBackground>
    </>
  );
};

export default HomeScreen;

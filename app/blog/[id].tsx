import { View, Text, Image, ScrollView } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
const DetailScreen = () => {
  return (
    <>
      <Stack.Screen options={{ title: 'Detail' }} />
      <ScrollView className="flex-1 bg-white">
        <Text className=" p-4 text-2xl font-bold leading-10 tracking-wider">
          The Power of Meditation : Finding Inner Balance and Clarity
        </Text>
        <Text className="p-4 text-xs  font-bold text-gray-500">
          Health & Wellness &#183; 5 min read
        </Text>
        <View className="flex-row items-center ">
          <Image
            className="mx-4 h-10 w-10 rounded-full"
            source={{
              uri: 'https://images.pexels.com/photos/1684913/pexels-photo-1684913.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2',
            }}
          />
          <Text className=" text-xs font-medium text-gray-500">Michael Durains</Text>
        </View>
        <Image
          resizeMode="cover"
          className="mx-4 mt-8 h-60  w-auto rounded-lg"
          source={{
            uri: 'https://images.pexels.com/photos/1684913/pexels-photo-1684913.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2',
          }}
        />
        <View className="m-4 ">
          <Text className="leading-loose tracking-wide">
            Meditation is an effective way to relax, release stress, and calm down. It can help you
            focus on the present moment, reduce stress, and increase productivity. When you take a
            deep breath in and out, you can release tension and calm down. Meditation can also help
            you reduce anxiety, improve concentration, and promote relaxation. It can help you focus
            on the present moment, reduce stress, and increase productivity. When you take a deep
            breath in and out, you can release tension and calm down. Meditation can also help you
            reduce embarrassment, improve concentration, and promote relaxation. It can help you
            focus on the present moment, reduce stress, and increase productivity. When you take a
            deep breath in and out, you can release tension and calm down. It can help you focus on
            the present moment, reduce stress, and increase productivity. When you take a deep
            breath in and out, you can release tension and calm down. Meditation can also help you
            reduce anxiety, improve concentration, and promote relaxation.
          </Text>
        </View>
      </ScrollView>
    </>
  );
};

export default DetailScreen;

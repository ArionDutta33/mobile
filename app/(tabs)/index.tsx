import { View, Text, TextInput, FlatList, Pressable, ScrollView } from 'react-native';
import React from 'react';
import data from 'assets/data.json';
import BlogCard from '~/components/blogcard';
import { router } from 'expo-router';
const TabOne = () => {
  return (
    <>
      <View className="flex-1 bg-white">
        <Text className="  p-4 text-xl font-bold tracking-wider">
          Start your bloggin journey with InspireSphere
        </Text>
        <TextInput className="mx-4 my-4 border border-gray-300 p-2 px-4" placeholder="Search" />
        <View className="flex-1">
          <FlatList data={data} renderItem={({ item }) => <BlogCard />} />
        </View>
      </View>
    </>
  );
};

export default TabOne;

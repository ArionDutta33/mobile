import { View, Text, Image } from 'react-native';
import React from 'react';

const BlogCard = () => {
  return (
    <View className="mx-4 mt-10 rounded-t-lg    ">
      <Image
        className="    h-80 w-auto rounded-lg"
        source={{
          uri: 'https://images.pexels.com/photos/1684913/pexels-photo-1684913.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2',
        }}
      />
      <Text className="  p-2 text-lg font-bold tracking-wide">
        The Power of Meditation: Finding Inner Balance and Clarity
      </Text>
      <Text className="p-2 text-xs  font-bold text-gray-500">
        Health & Wellness &#183; 5 min read
      </Text>
    </View>
  );
};

export default BlogCard;

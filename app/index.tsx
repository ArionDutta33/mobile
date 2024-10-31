import { View, Text, ImageBackground } from 'react-native';
import React from 'react';

const HomeScreen = () => {
  return (
    <>
      <ImageBackground
        resizeMode="cover"
        className="h-full w-full flex-1"
        source={{
          uri: 'https://images.pexels.com/photos/1684913/pexels-photo-1684913.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2',
        }}>
        <Text>Fuel your imagination and connect with like minded youth</Text>
      </ImageBackground>
    </>
  );
};

export default HomeScreen;

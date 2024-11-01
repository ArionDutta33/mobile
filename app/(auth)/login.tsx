import { View, Text, TextInput, Pressable } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const LoginScreen = () => {
  return (
    <View className="">
      <View className="mx-4 my-2 gap-2">
        <Text>Email</Text>
        <TextInput placeholder="Email" className="border border-gray-500 p-2" />
      </View>
      <View className="mx-4 my-2 gap-2">
        <Text>Password</Text>
        <TextInput placeholder="Password" className="border border-gray-500 p-2" />
      </View>
      <Pressable className="mx-8 my-8  items-center justify-center rounded-lg border-2 border-red-500">
        <Text className=" p-3 text-xl font-bold text-red-500">Sign In</Text>
      </Pressable>

      <Text className="my-4 text-center">
        Do not have an account?
        <Link href={'/register'} className="text-blue-500">
          Register
        </Link>
      </Text>
    </View>
  );
};

export default LoginScreen;

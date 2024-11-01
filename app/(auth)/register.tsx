import { View, Text, TextInput, Pressable } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const RegisterScreen = () => {
  return (
    <View>
      <View className="mx-4 my-2 gap-2">
        <Text>Upload Avatar</Text>
        <TextInput placeholder="Avatar" className="border border-gray-500 p-2" />
      </View>
      <View className="mx-4 my-2 gap-2">
        <Text>Full Name</Text>
        <TextInput placeholder="Avatar" className="border border-gray-500 p-2" />
      </View>
      <View className="mx-4 my-2 gap-2">
        <Text> Email</Text>
        <TextInput placeholder="Avatar" className="border border-gray-500 p-2" />
      </View>
      <View className="mx-4 my-2 gap-2">
        <Text> Password</Text>
        <TextInput placeholder="Avatar" className="border border-gray-500 p-2" />
      </View>
      <Pressable className="mx-8 my-8 items-center justify-center rounded-lg bg-red-500">
        <Text className=" p-3 text-xl font-bold text-white">Sign Up</Text>
      </Pressable>
      <Text className="text-center">
        Already have an account?
        <Link href={'/login'} className="text-blue-500">
          Login
        </Link>
      </Text>
    </View>
  );
};

export default RegisterScreen;

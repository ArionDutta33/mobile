import { View, Text, TextInput, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Link, router } from 'expo-router';
import axios from 'axios';
const RegisterScreen = () => {
  const [fullname, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const registerUser = async () => {
    setLoading(true);
    const input = await axios
      .post('http://192.168.1.4:3000/api/v1/auth/register', {
        fullname,
        email,
        password,
      })
      .then((res) => {
        if (res.status === 201) {
          setError('');
          setLoading(false);
          setTimeout(() => {
            router.push('/login');
          }, 1000);
        }
      })
      .catch((err) => {
        setError(err.response.data.message);
        setLoading(false);
        console.log(err.response.data);
      });
  };

  return (
    <View>
      <View className="mx-4 my-2 gap-2">
        <Text>Upload Avatar</Text>
        <TextInput placeholder="Avatar" className="border border-gray-500 p-2" />
      </View>
      <View className="mx-4 my-2 gap-2">
        <Text>Full Name</Text>
        <TextInput
          value={fullname}
          onChangeText={(e) => setName(e)}
          placeholder="Avatar"
          className="border border-gray-500 p-2"
        />
      </View>
      <View className="mx-4 my-2 gap-2">
        <Text> Email</Text>
        <TextInput
          value={email}
          onChangeText={(e) => setEmail(e)}
          placeholder="Avatar"
          className="border border-gray-500 p-2"
        />
      </View>
      <View className="mx-4 my-2 gap-2">
        <Text> Password</Text>
        <TextInput
          value={password}
          onChangeText={(e) => setPassword(e)}
          secureTextEntry={false}
          autoCorrect={false}
          placeholder="Avatar"
          className="border border-gray-500 p-2"
        />
      </View>
      <Pressable
        onPress={registerUser}
        className="mx-8 my-8 items-center justify-center rounded-lg bg-red-500">
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

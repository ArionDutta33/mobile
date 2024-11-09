import { View, Text, TextInput, Pressable } from 'react-native';
import React, { useContext, useState } from 'react';
import { Link, router } from 'expo-router';
import { AuthContext } from '~/components/context/AuthProvider';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Toast } from 'react-native-toast-notifications';

const LoginScreen = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { authenticated, setAuthenticated } = useContext(AuthContext);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const loginUser = async () => {
    setLoading(true);
    const input = await axios
      .post('http://192.168.1.4:3000/api/v1/auth/login', {
        email,
        password,
      })
      .then(async (res) => {
        if (res.status === 200) {
          setLoading(false);
          setError('');
          console.log(res);
          setAuthenticated({ user: res.data.user, token: res.data.token });
          await AsyncStorage.setItem(
            '@auth',
            JSON.stringify({
              user: res.data.user,
              token: res.data.token,
            })
          );
          Toast.show('Login successful', {
            type: 'success',
            animationType: 'slide-in',
            duration: 1000,
          });
          console.log('logging authenticated', authenticated);
          setTimeout(() => {
            router.push('/(tabs)/');
          }, 2000);
        }
      })
      .catch((err) => {
        setLoading(false);
        setError(err.response.data.message);
        Toast.show(err.response.data.message, {
          type: 'error',
          animationType: 'slide-in',
          duration: 1000,
        });
        console.log(err);
      });
  };

  return (
    <View className="">
      <View className="mx-4 my-2 gap-2">
        <Text>Email</Text>
        <TextInput
          value={email}
          onChangeText={(e) => setEmail(e)}
          placeholder="Email"
          className="border border-gray-500 p-2"
        />
      </View>
      <View className="mx-4 my-2 gap-2">
        <Text>Password</Text>
        <TextInput
          value={password}
          onChangeText={(e) => setPassword(e)}
          placeholder="Password"
          autoCorrect={false}
          secureTextEntry={true}
          className="border border-gray-500 p-2"
        />
      </View>
      <Pressable
        onPress={loginUser}
        className="mx-8 my-8  items-center justify-center rounded-lg border-2 border-red-500">
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

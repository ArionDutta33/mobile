import { View, Text, TextInput, Pressable } from 'react-native';
import React, { useState } from 'react';
import { Link, router } from 'expo-router';
import axios from 'axios';
import { useToast } from 'react-native-toast-notifications';
import * as ImagePicker from 'expo-image-picker';
import { cld, uploadImage } from '~/libs/cloudinary';
import AntDesign from '@expo/vector-icons/AntDesign';

const RegisterScreen = () => {
  const [fullname, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [profilePic, setProfilePic] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const toast = useToast();

  const registerUser = async () => {
    setLoading(true);
    if (!fullname || !email || !password) {
      toast.show('Something went wrong', {
        type: 'error',
        animationType: 'slide-in',
        duration: 1000,
      });
      return;
    }
    const imageToUpload = profilePic
      ? await uploadImage(profilePic)
      : {
          secure_url:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcZsL6PVn0SNiabAKz7js0QknS2ilJam19QQ&s',
        };
    const input = await axios
      .post('http://192.168.1.4:3000/api/v1/auth/register', {
        fullname,
        email,
        password,
        profilePic:
          imageToUpload.secure_url ||
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcZsL6PVn0SNiabAKz7js0QknS2ilJam19QQ&s',
      })
      .then((res) => {
        if (res.status === 201) {
          toast.show('Registration successful', {
            type: 'success',
            animationType: 'slide-in',
            duration: 1000,
          });
          setError('');
          setEmail('');
          setPassword('');
          setName('');
          setProfilePic('');
          setLoading(false);
          setTimeout(() => {
            router.push('/login');
          }, 1000);
        }
      })
      .catch((err) => {
        setError(err.response.data.message);
        toast.show(err.response.data.message, {
          type: 'danger',
          animationType: 'slide-in',
          duration: 1000,
        });
        setLoading(false);
        console.log(err.response.data);
      });
  };

  //dummy
  // const registerUser = async () => {
  //   console.log('clicked');
  //   console.log(fullname, email, password, profilePic);
  // };

  //image picker

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setProfilePic(result.assets[0].uri);
    }
  };

  return (
    <View>
      <View className="mx-4 my-2 gap-2">
        <Text>Upload Avatar</Text>
        <View className="w-12 items-center justify-center rounded-full bg-red-500 p-2">
          <AntDesign onPress={pickImage} name="user" size={24} color="white" />
        </View>
        {/* <TextInput placeholder="Avatar" className="border border-gray-500 p-2" /> */}
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

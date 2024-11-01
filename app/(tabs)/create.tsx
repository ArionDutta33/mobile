import { View, Text, TextInput, Pressable, ScrollView } from 'react-native';
import React, { useContext, useState } from 'react';
import { AuthContext } from '~/components/context/AuthProvider';
import { Redirect, router } from 'expo-router';
import { Picker } from '@react-native-picker/picker';
import AntDesign from '@expo/vector-icons/AntDesign';
import * as ImagePicker from 'expo-image-picker';
const CreateScreen = () => {
  const { authenticated, setAuthenticated } = useContext(AuthContext);
  const [selectedValue, setSelectedValue] = useState('');
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const actions = [
    {
      text: 'Accessibility',
      icon: require('assets/access.png'),
      name: 'bt_accessibility',
      position: 2,
    },
    {
      text: 'Language',
      icon: require('assets/splash.png'),
      name: 'bt_language',
      position: 1,
    },
    {
      text: 'Camera',
      icon: require('assets/potrait.png'),
      name: 'camera',
      position: 3,
    },
    {
      text: 'Video',
      icon: require('assets/video.png'),
      name: 'bt_videocam',
      position: 4,
    },
  ];
  const handleFloatingButtonOnPress = (name: string) => {
    if (name === 'bt_videocam') {
      console.log('cam pressed');
    }
    if (name === 'camera') {
      router.push('/camera');
    }
  };
  console.log(authenticated);
  if (!authenticated.user) {
    return <Redirect href="/login" />;
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false} className="flex-1   bg-white">
      <View className="mx-4 my-4 gap-4  ">
        <Text>Title</Text>
        <TextInput className="border border-gray-300 p-2 px-4" placeholder="Title..." />
      </View>
      <View className="mx-4 my-4 gap-4  ">
        <Text>Body</Text>
        <TextInput
          className="border border-gray-300 p-2 px-4"
          placeholder="Body..."
          multiline
          numberOfLines={10}
          textAlignVertical="top"
        />
      </View>
      <View className="mx-4 my-4 flex-row  gap-8  ">
        <Text>Images</Text>
        <AntDesign onPress={pickImage} name="upload" size={24} color="black" />
      </View>
      <Text className="mx-4 my-8">Category</Text>
      <View className="mx-4 border border-gray-300 ">
        <Picker
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          selectedValue={selectedValue}>
          <Picker.Item label="Health & Wellness" value="Health & Wellness" />
          <Picker.Item label="Science & Technology" value="Science & Technology" />
          <Picker.Item label="Yoga & Spirituality" value="Yoga & Spirituality" />
          <Picker.Item label="Food & Drink" value="Food & Drink" />
          <Picker.Item label="Video Games" value="Video Games" />
          <Picker.Item label="Travel & Friendship" value="Travel & Friendship" />
        </Picker>
      </View>
      <Pressable className="mx-4 my-8 flex-row items-center justify-center gap-2 rounded-lg bg-red-500 p-4 ">
        <Text className="text-xl font-bold text-white">Create</Text>
      </Pressable>
    </ScrollView>
  );
};

export default CreateScreen;

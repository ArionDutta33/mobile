import { View, Text, TextInput, Pressable, ScrollView } from 'react-native';
import React, { useContext, useState } from 'react';
import { AuthContext } from '~/components/context/AuthProvider';
import { Redirect, router } from 'expo-router';
import { Picker } from '@react-native-picker/picker';
import AntDesign from '@expo/vector-icons/AntDesign';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
import { uploadImage } from '~/libs/cloudinary';
import AsyncStorage from '@react-native-async-storage/async-storage';
const CreateScreen = () => {
  const { authenticated, setAuthenticated } = useContext(AuthContext);
  const [selectedValue, setSelectedValue] = useState('');
  const [images, setImages] = useState<string | null>(null);
  const [body, setBody] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  //create a post
  const createPost = async () => {
    const { authenticated } = useContext(AuthContext);
    console.log(authenticated.token);
    try {
      setLoading(true);
      if (!body || !selectedValue || !images) {
        setLoading(false);
        setError('All fields are required');
        return;
      }
      setLoading(false);
      const uploadedImages = await uploadImage(images);
      console.log('uploaded to cloudinary', uploadedImages);
      const postData = await axios.post(
        'http://192.168.1.4:3000/api/v1/blogs',
        {
          body,
          http: selectedValue,
          images,
        },
        {
          headers: {
            Authorization: AsyncStorage.getItem('@auth'),
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      allowsMultipleSelection: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      result.assets.forEach((asset) => {
        setImages(asset.uri);
      });
    }
  };

  if (!authenticated.user) {
    return <Redirect href="/login" />;
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false} className="flex-1   bg-white">
      <View className="mx-4 my-4 gap-4  ">
        <Text>Title</Text>
        <TextInput
          value={title}
          onChangeText={setTitle}
          className="border border-gray-300 p-2 px-4"
          placeholder="Title..."
        />
      </View>
      <View className="mx-4 my-4 gap-4  ">
        <Text>Body</Text>
        <TextInput
          className="border border-gray-300 p-2 px-4"
          placeholder="Body..."
          multiline
          value={body}
          onChangeText={setBody}
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
      <Pressable
        onPress={createPost}
        className="mx-4 my-8 flex-row items-center justify-center gap-2 rounded-lg bg-red-500 p-4 ">
        <Text className="text-xl font-bold text-white">Create</Text>
      </Pressable>
    </ScrollView>
  );
};

export default CreateScreen;

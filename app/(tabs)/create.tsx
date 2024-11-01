import { View, Text, TextInput } from 'react-native';
import React, { useContext } from 'react';
import { AuthContext } from '~/components/context/AuthProvider';
import { Redirect } from 'expo-router';
import { FloatingAction } from 'react-native-floating-action';
const CreateScreen = () => {
  const { authenticated, setAuthenticated } = useContext(AuthContext);
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
      console.log('camera btn pressed');
    }
  };
  console.log(authenticated);
  if (!authenticated.user) {
    return <Redirect href="/login" />;
  }
  return (
    <View className="flex-1   bg-white">
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
      <FloatingAction
        onPressItem={handleFloatingButtonOnPress}
        onPressMain={() => console.log('main btn')}
        actions={actions}
      />
    </View>
  );
};

export default CreateScreen;

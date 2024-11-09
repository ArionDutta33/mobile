import { View, Text, Pressable } from 'react-native';
import React, { useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Toast } from 'react-native-toast-notifications';
import { AuthContext } from '~/components/context/AuthProvider';

const Logout = () => {
  const { authenticated, setAuthenticated } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      // Clear authentication data from AsyncStorage
      await AsyncStorage.removeItem('@auth');

      // Clear the user data from context
      setAuthenticated({ token: '', user: null });

      console.log('Logged out successfully');
      Toast.show('Logged out successfully', {
        type: 'danger',
        animationType: 'slide-in',
        duration: 1000,
      });
    } catch (error) {
      console.error('Failed to log out:', error);
      Toast.show(error.response.data.message, {
        type: 'error',
        animationType: 'slide-in',
        duration: 1000,
      });
    }
  };
  return (
    <Pressable className="bg-blue-500 text-white" onPress={handleLogout}>
      <Text>Logout</Text>
    </Pressable>
  );
};

export default Logout;

import { View, Text } from 'react-native';
import React, { useContext } from 'react';
import { AuthContext } from '~/components/context/AuthProvider';
import { Redirect } from 'expo-router';

const create = () => {
  const { authenticated, setAuthenticated } = useContext(AuthContext);
  console.log(authenticated);
  if (!authenticated.user) {
    return <Redirect href="/login" />;
  }
  return (
    <View>
      <Text>create</Text>
    </View>
  );
};

export default create;

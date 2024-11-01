import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useEffect, useState } from 'react';

const AuthContext = createContext({
  user: null,
  token: '',
});

const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState({ user: null, token: '' });

  useEffect(() => {
    const setUpLocalStorage = async () => {
      try {
        const data = await AsyncStorage.getItem('@auth');
        if (data) {
          const loginData = JSON.parse(data);
          setAuthenticated({ user: loginData?.user, token: loginData?.token });
        }
      } catch (error) {
        console.error('Failed to load auth data:', error);
      }
    };

    setUpLocalStorage();
  }, []);

  return (
    <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };

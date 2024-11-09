import { Link, Redirect, Tabs } from 'expo-router';

import { HeaderButton } from '../../components/HeaderButton';
import { TabBarIcon } from '../../components/TabBarIcon';
import { Image } from 'react-native';
import { AuthContext } from '~/components/context/AuthProvider';
import { useContext } from 'react';

export default function TabLayout() {
  const { authenticated } = useContext(AuthContext);
  if (!authenticated.user) {
    return <Redirect href="/(auth)/login" />;
  }
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'blue',
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShadowVisible: false,
          headerTintColor: 'blue',
          headerTitleAlign: 'center',
          headerLeft: () => {
            return (
              <Image
                className="ml-4 h-10 w-10 rounded-full "
                source={{ uri: 'https://randomuser.me/api/portraits/men/4.jpg' }}
              />
            );
          },
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <HeaderButton />
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: 'Create',

          tabBarIcon: ({ color }) => <TabBarIcon name="plus" color={color} />,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Third',

          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </Tabs>
  );
}

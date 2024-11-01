import '../global.css';
import { ToastProvider } from 'react-native-toast-notifications';
import { Stack } from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

export default function RootLayout() {
  return (
    <ToastProvider
      textStyle={{ fontSize: 20 }}
      offset={50} // offset for both top and bottom toasts
      offsetTop={30}
      offsetBottom={40}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </ToastProvider>
  );
}

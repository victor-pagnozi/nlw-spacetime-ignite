import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className='flex-1 bg-red-300 items-center justify-center'>
      <Text className='font-bold text-red-600 text-5xl'>Ola!</Text>
      <StatusBar style="auto" />
    </View>
  );
}



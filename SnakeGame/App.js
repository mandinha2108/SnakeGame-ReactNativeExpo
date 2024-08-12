import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Gesture, GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
 return (
  <SafeAreaProvider>
    <GestureHandlerRootView style={{ flex: 1}}>
      <StatusBar style='light'/>
      <Game />
    </GestureHandlerRootView>
  </SafeAreaProvider>
 );
}
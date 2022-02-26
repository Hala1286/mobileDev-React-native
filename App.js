import React from 'react';
import {LogBox} from 'react-native';
import AppNavigator from './navigation/AppNavigator';
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);
export default function App() {
  return (
        <AppNavigator />
  );
}
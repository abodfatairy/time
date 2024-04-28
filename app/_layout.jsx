import { Link, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name='(main)'
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='index'
        options={{ headerShown: false }}
      />
    </Stack>
  );
}

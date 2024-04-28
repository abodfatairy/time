import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Home = () => {
  return (
    <View className=' w-screen h-screen items-center justify-center'>
      <Text>Hello </Text>
      <Link href={"/time"}>hjkjh</Link>
      <Link href={"/asdads"}>اكاليل</Link>
    </View>
  );
};

export default Home;

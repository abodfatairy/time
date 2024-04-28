import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const Name = () => {
    const params = useLocalSearchParams()
    console.log(params.name);
    
  return (
    <View>
          <Text>{params.name }</Text>
    </View>
  );
};

export default Name;

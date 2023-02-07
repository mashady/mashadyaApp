import { View, Text, Button } from "react-native";
import React from "react";

export default function screenTestTwo({ navigation }) {
  return (
    <View>
      <Text>Screen Test Two </Text>
      <Button
        onPress={() => navigation.navigate("One")}
        title="Go A Head "
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}

import { View, Text, Button, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import colors from "../config/colors";
import Constants from "expo-constants";

export default function screenTestOne({ navigation }) {
  return (
    <SafeAreaView style={[styles.screen]}>
      <View>
        <Text>screenTestOne</Text>
        <Button
          onPress={() => navigation.navigate("Two")}
          title="Go A Head "
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});

import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import AppScreen from "../components/AppScreen";
import ScreenTestOne from "../screens/screenTestOne";
import ScreenTestTwo from "../screens/screenTestTwo";

const Stack = createStackNavigator();
const FeedNavigator = () => (
  <AppScreen>
    <View>
      <Text>setting screen</Text>
    </View>
  </AppScreen>
);

export default FeedNavigator;

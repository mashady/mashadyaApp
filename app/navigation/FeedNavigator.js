import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ScreenTestOne from "../screens/screenTestOne";
import ScreenTestTwo from "../screens/screenTestTwo";

const Stack = createStackNavigator();
const FeedNavigator = () => (
  <Stack.Navigator mode="modal">
    <Stack.Screen
      name="One"
      component={ScreenTestOne}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Two"
      component={ScreenTestTwo}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default FeedNavigator;

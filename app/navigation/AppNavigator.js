import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import FeedNavigator from "./FeedNavigator";
import SettingNavigator from "./settingNavigator";
import AppAddListingButton from "../components/AppAddListingButton";
import AppListingFormScreen from "../screens/listingFormScreen.js";

const Tap = createBottomTabNavigator();
const AppNavigator = () => (
  <Tap.Navigator>
    <Tap.Screen
      name="Feed"
      component={FeedNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="home" size={size} color={color} />
        ),
        headerShown: false,
      }}
    />
    <Tap.Screen
      name="ListingEdit"
      component={AppListingFormScreen}
      options={({ navigation }) => ({
        tabBarButton: () => (
          <AppAddListingButton
            onPress={() => navigation.navigate("ListingEdit")}
          />
        ),
        headerShown: false,
      })}
    />
    <Tap.Screen
      name="Setting"
      component={SettingNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="menu" size={size} color={color} />
        ),
        headerShown: false,
      }}
    />
  </Tap.Navigator>
);

export default AppNavigator;

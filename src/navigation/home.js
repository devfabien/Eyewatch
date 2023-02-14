import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {  ProfileScreen, SearchScreen, FolderScreen } from "../screens/index";
import { AntDesign, Feather } from "@expo/vector-icons";
import { MainNav } from "./mainnavigation";


const Tab = createBottomTabNavigator();
const { Navigator, Screen } = Tab;
export const Bottoms = () => {
  return (
    <Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarActiveBackgroundColor: "#27272a",
        tabBarInactiveBackgroundColor: "black",
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <Screen
        options={{
          tabBarIcon: ({ size, color }) => {
            return <Feather name="home" size={24} color="gold" />;
          },
        }}
        name="MainNav"
        component={MainNav}
      />
      <Screen
        options={{
          tabBarIcon: ({ size, color }) => {
            return <Feather name="search" size={24} color="gold" />;
          },
        }}
        name="search"
        component={SearchScreen}
      />
      <Screen
        options={{
          tabBarIcon: ({ size, color }) => {
            return <Feather name="folder" size={24} color="gold" />;
          },
        }}
        name="folder"
        component={FolderScreen}
      />
      <Screen
        options={{
          tabBarIcon: ({ color, size }) => {
            return <AntDesign name="appstore-o" size={24} color="gold" />;
          },
        }}
        name="profile"
        component={ProfileScreen}
      />
    </Navigator>
  );
};

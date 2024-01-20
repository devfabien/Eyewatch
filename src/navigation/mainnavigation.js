import React from "react";
import { StyleSheet, Text, View, StatusBar, ScrollView, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { scale } from "react-native-size-matters";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  FilmScreen,
  ListScreen,
  OriginScreen,
  SerieScreen,
  
} from "../screens/index";
import {
  Entypo,
  AntDesign,
  Feather,
  Fontisto,
  Ionicons,
} from "@expo/vector-icons";

const Tab = createMaterialTopTabNavigator();

export const MainNav = () => {
  return (
    <View style={{ flex: scale(1) }}>
      <SafeAreaView style={{backgroundColor:"transparent"}}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "black",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              paddingLeft: scale(10),
              marginTop: scale(2),
              padding: scale(5),
            }}
          >
           <Image source={require("../assets/logo.png")}/>
          </View>
          <View style={{ marginTop: scale(9), marginRight: scale(27) }}>
            <Ionicons name="notifications-outline" size={scale(27)} color="white" />
          </View>
        </View>
      </SafeAreaView>
      <Tab.Navigator
        screenOptions={{
          tabBarPressColor: "#ffd131",
          tabBarActiveTintColor: "#ffd131",
          tabBarInactiveTintColor: "white",
          tabBarLabelStyle: {
            fontWeight: "bold",
          },

          tabBarContentContainerStyle: { backgroundColor: "black" },
          tabBarIndicatorStyle: {
            width: scale(5),
            padding: scale(2),
            borderRadius: scale(3),
            backgroundColor: "gold",
            borderBottomWidth: scale(2),
            padding: scale(2),
          },
          headerStyle: {
            marginTop: scale(30),
          },
        }}
      >
        <Tab.Screen name="Feature" component={ListScreen} />
        <Tab.Screen name="series" component={SerieScreen} />

        <Tab.Screen name="Films" component={FilmScreen} />

        <Tab.Screen name="Origin" component={OriginScreen} />
      </Tab.Navigator>
    </View>
  );
};
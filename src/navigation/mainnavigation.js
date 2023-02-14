import React from "react";
import { StyleSheet, Text, View, StatusBar, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
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
    <View style={{ flex: 1 }}>
      <SafeAreaView>
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
              paddingLeft: 10,
              marginTop: 2,
              paddingTop: 5,
            }}
          >
            <View
              style={{ backgroundColor: "black", padding: 12, borderRadius: 5 }}
            >
              <Entypo name="eye" size={30} color="gold" />
            </View>
            <View
              style={{ backgroundColor: "gold", padding: 13, borderRadius: 5 }}
            >
              <Text
                style={{ color: "black", fontWeight: "bold", fontSize: 20 }}
              >
                Watch
              </Text>
            </View>
          </View>
          <View style={{ marginTop: 9, marginRight: 27 }}>
            <Ionicons name="notifications-outline" size={27} color="white" />
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
            width: 5,
            padding: 2,
            borderRadius: 3,
            backgroundColor: "gold",
            borderBottomWidth: 2,
            padding: 2,
          },
          headerStyle: {
            marginTop: 30,
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
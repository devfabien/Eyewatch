import React,{useEffect,useState} from "react";

import {useNavigation} from "@react-navigation/native"
import { ImageBackground, View, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Searchsmall = ({ image, title, date, description,key}) => {

   
    
  return (
    
    <SafeAreaView style={{ paddingHorizontal: 8, flexDirection:'row',backgroundColor:"transparent" }}>
        
      <Image
        source={{
          uri: `https:/image.tmdb.org/t/p/w500${image}`,
        }}
        imageStyle={{ borderRadius: 10 }}
        style={{
          fontSize: 15,
          height: 120,
          width: 200,
          marginTop:10,
          borderRadius: 10,
          justifyContent: "flex-end",
        }}
      ></Image>
 
      <View style={{ color: "white" ,marginHorizontal:20}}>
        <Text
          style={{
            fontSize: 18,
            color: "white",
            width: 160,
          }}
        >
          {title}
        </Text>
        <Text style={{ color: "white", fontSize: 10, width: 150 }}>{date}</Text>
        <Text
          numberOfLines={4}
          style={{ color: "grey", fontSize: 10, width: 180}}
        >
          {description}
        </Text>
      </View>
    </SafeAreaView>
  );
};
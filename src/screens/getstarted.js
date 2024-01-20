import React from "react";
import { StatusBar } from "react-native";
import { ImageBackground, View ,Text, Pressable,Image} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";

const img= {uri:"https://imgs.search.brave.com/sSjjhbceRGTcVkXrfuyToNFFQ7eAIiXjBMAhtcyn70c/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/bW9yZGVvLm9yZy9m/aWxlcy91cGxvYWRz/LzIwMjAvMDEvSm9r/ZXItQXJ0d29yay00/Sy1VbHRyYS1IRC1N/b2JpbGUtV2FsbHBh/cGVyLmpwZw"};

export const GetScreen = ({navigation})=>{
    return(
        <SafeAreaView style={{backgroundColor:"transparent"}}>
            
        <View style={{flexDirection:"column",backgroundColor:"black"}}>
            
            <ImageBackground source={img} resizeMode="cover" fadeDuration={1000} style={{height:"100%"}}>
            <View style={{flexDirection:"row",padding:5}}>
            <Image source={require("../assets/logo.png")} style={{width:120,height:40}}/>
            </View>
              <View style={{marginTop:230}}>
              <Text style={{color:"white",fontSize:25,marginBottom:5,padding:4}}>Enjoy your favourite {'\n'} movie everywhere </Text>
              <Text style={{color:"white",padding:4}}>Browse through our collections and {"\n"}discover hundreds of movies and seires that{"\n"} you'll love! </Text>
            </View >
            <View style={{backgroundColor:"#Ffd601",marginTop:200,}}>
            <Pressable onPress={()=>navigation.navigate("Signup")}><Text style={{color:"black",alignSelf:"center",fontWeight:"bold",padding:15,alignContent:"center",}}>Get started</Text></Pressable>
            </View>
            </ImageBackground>
            <View>
              
            </View>
        </View>


    </SafeAreaView>
);
   
}
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export const DoScreen = () =>{
    return(
    
        <View style={{backgroundColor:"#27272a" ,height:"100%"}}>
            <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",flex:1}}>
            <Text style={{color:"gold",fontWeight:"bold",fontSize:33}}>No </Text>   
            <Text style={{color:"white",fontWeight:"bold",fontSize:31}}>downloads</Text>
            </View>
        </View>
       
    )
}
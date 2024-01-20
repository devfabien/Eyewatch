import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View ,Text,Image } from 'react-native';
export const InboxScreen =() =>{
    return(
        <SafeAreaView style={{backgroundcolor:"transparent"}}>
<View style={{backgroundColor:"#24262b",height:"100%"}}>
    <View style={{flex:1,justifyContent:"center", alignItems:"center"}}>
        <Image source={require("../assets/inbox.png")} style={{width:200,height:200}}/>
        <Text style={{color:"white",fontWeight:"bold", marginTop:20,fontSize:24}}> No Inbox yet</Text>
    </View>

</View>
        </SafeAreaView>
    )
}

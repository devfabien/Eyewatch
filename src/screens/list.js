import React from "react";
import { useEffect } from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {View ,Text,ImageBackground, ScrollView, TouchableOpacity} from "react-native";
import axios from "axios";
import { Card } from "../components/Card";
import { Cardb } from "../components/Cardb";
export const ListScreen = ({navigation})=>{
    const [list,setList] = React.useState([])

     useEffect(() => {
        Listapi()
     }, [])

    const Listapi = () =>{
        axios({
            method:'get',
            url:'https://api.themoviedb.org/3/movie/popular?api_key=d9cf23cf23f14a29b69eccb99afeaeff&language=en-US&page=1'
        }).then((data)=>{
            console.log(data.data)
            setList(data.data.results)
        }).catch((err)=>{
            console.log(err)
        })
    }



    return (
        <ScrollView>
        <View style={{backgroundColor:"#27272a",height:"100%"}}>
        <Text style={{fontWeight:"bold",color:"white",fontSize:16}}> Trending this week</Text>
        <View style={{flexDirection:"row"}}>
            <ScrollView horizontal>
            {list.map((item)=>{
                return(
                    <TouchableOpacity onPress={() => navigation.navigate("detail", item)}>
                    <ImageBackground source={{uri:`https://image.tmdb.org/t/p/w500/${item.poster_path}`,}}
                    style={{width:320,height:200,justifyContent:"flex-end",paddingLeft:20,paddingBottom:15,marginRight:15}} 
                    imageStyle={{borderRadius:20}} >
                        <Text style={{color:"white",fontSize:20}}>
                            
                            {item.title}
                            {item.key}
                        </Text>
                        <Text style={{color:"yellow",fontSize:18}}>
                            {item.release_date}
                            {item.key}
                        </Text>
                    </ImageBackground>
                    </TouchableOpacity>
                
                )
            })}
            
            </ScrollView>
            </View>
            <Card/>
            <Cardb/>
            
        </View>
        </ScrollView>
    )
}
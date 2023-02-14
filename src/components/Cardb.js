import React from "react";
import { useEffect } from "react";
import {useNavigation} from "@react-navigation/native";
import {SafeAreaView} from "react-native-safe-area-context";
import {View ,Text,Image, ScrollView, TouchableOpacity,} from "react-native";
import axios from "axios";
export const Cardb=()=>{
    const Nav= useNavigation();

    const [lista,setlista] = React.useState([])

     useEffect(() => {
        listaapi()
     }, [])

    const listaapi = () =>{
        axios({
            method:'get',
            url:'https://api.themoviedb.org/3/movie/popular?api_key=d9cf23cf23f14a29b69eccb99afeaeff&language=en-US&page=5'
        }).then((data)=>{
            console.log(data.data)
            setlista(data.data.results)
        }).catch((err)=>{
            console.log(err)
        })
    }



    return (
        <View>
        <Text style={{fontWeight:"bold",color:"white",fontSize:16,padding:10}}> New on cinemas</Text>
        <View style={{flexDirection:"row"}}>
            <ScrollView horizontal>
            {lista.map((item)=>{
                return(
                    <View>
                        <TouchableOpacity onPress={() => Nav.navigate("detail",item)}>
                    <Image source={{uri:`https://image.tmdb.org/t/p/w500/${item.poster_path}`}}
                    style={{width:160,height:130,paddingLeft:20,marginRight:10,borderRadius:8}} 
                    imageStyle={{borderRadius:2}} />
                    </TouchableOpacity>
                        
                        <Text style={{color:"white",fontSize:14,width:110}}>
                            {item.title}
                            {item.key}
                        </Text>
                        <Text style={{color:"gold",fontSize:8}}>
                            {item.release_date}
                            {item.key}
                        </Text>
                      
                        
                        </View>
                    
                
                )
            })}
            </ScrollView>
            </View>
            </View>

    )
}
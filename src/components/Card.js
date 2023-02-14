import React from "react";
import { useEffect } from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {useNavigation} from "@react-navigation/native";
import {View ,Text,Image, ScrollView, TouchableOpacity,} from "react-native";
import axios from "axios";
export const Card=({navigation})=>{
    const Nav = useNavigation();
    const [lista,setlista] = React.useState([])

     useEffect(() => {
        listaapi()
     }, [])

    const listaapi = () =>{
        axios({
            method:'get',
            url:'https://api.themoviedb.org/3/movie/popular?api_key=d9cf23cf23f14a29b69eccb99afeaeff&language=en-US&page=2'
        }).then((data)=>{
            console.log(data.data)
            setlista(data.data.results)
        }).catch((err)=>{
            console.log(err)
        })
    }



    return (
        <View>
        <Text style={{fontWeight:"bold",color:"white",fontSize:16,padding:10}}> Popular movies</Text>
        <View style={{flexDirection:"row"}}>
            <ScrollView horizontal>
            {lista.map((item)=>{
                return(
                    <View>
                        <TouchableOpacity onPress={() => Nav.navigate("detail",item)}>
                    <Image source={{uri:`https://image.tmdb.org/t/p/w500/${item.poster_path}`}}
                    style={{width:140,height:130,paddingLeft:20,marginRight:15,borderRadius:8}} 
                    imageStyle={{borderRadius:2}} />
                    </TouchableOpacity>
                        
                        <Text  style={{color:"white",fontSize:13,width:120 }}>
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
import React from "react";
import { useEffect } from "react";
import {useNavigation} from "@react-navigation/native";
import {SafeAreaView} from "react-native-safe-area-context";
import {scale} from "react-native-size-matters";
import {View ,Text,Image, ScrollView, TouchableOpacity,} from "react-native";
import axios from "axios";
export const Cardc=({key})=>{
const Nav = useNavigation ();
    const [lista,setlista] = React.useState([])

     useEffect(() => {
        listaapi()
     }, [])

    const listaapi = () =>{
        axios({
            method:'get',
            url:'https://api.themoviedb.org/3/movie/popular?api_key=d9cf23cf23f14a29b69eccb99afeaeff&language=en-US&page=3'
        }).then((data)=>{
            console.log(data.data)
            setlista(data.data.results)
        }).catch((err)=>{
            console.log(err)
        })
    }



    return (
        <View>
        <Text style={{fontWeight:"bold",color:"white",fontSize:scale(19),padding:scale(10)}}> Popular Search</Text>
        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
            <ScrollView >
            {lista.map((item)=>{
                return(
                    <View style={{flexDirection:"row",marginBottom:10}}>
                    <View>
                        

                        <TouchableOpacity onPress = {()=> Nav.navigate("detail",item)}> 
                        <Image source={{uri:`https://image.tmdb.org/t/p/w500/${item.poster_path}`}}
                        style={{width:scale(160),height:scale(130),paddingLeft:scale(20),marginRight:scale(10),borderRadius:scale(8)}} 
                        imageStyle={{borderRadius:scale(2)}} />
                        </TouchableOpacity>
                     
                    </View>



<View style={{flexDirection:"column",marginTop:scale(30)}}>
                        <Text style={{color:"white",fontSize:scale(17),width:scale(170)}}>
                            {item.title}
                            {item.key}
                        </Text>
                        <Text style={{color:"gold",fontSize:scale(13)}}>
                            {item.release_date}
                            {item.key}
                        </Text>
                        
                        </View>

                       
                        </View>
                    
                
                )
            })}
            </ScrollView>
            </View>
            </View>

    )
}
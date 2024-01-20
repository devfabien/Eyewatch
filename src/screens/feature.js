import React from "react";
import { useEffect,useState } from "react";
import axios from "axios";
import {SafeAreaView} from "react-native-safe-area-context";
import {View ,Text, ImageBackground} from "react-native";
export const FeatureScreen = ({image,title,date})=>{
    const [popularMovies,setPopularMovies]=useState()
    useEffect(()=>{
        getData();

    },[]);
    const getData =()=>{
        axios(
            {
                method:"GET",
                url:"https://api.themoviedb.org/3/movie/{movie_id}?api_key=d9cf23cf23f14a29b69eccb99afeaeff&language=en-US",
               
            }
        ).then((response)=>{
            setPopularMovies(response.data.results);
        }).catch((error)=>{
            console.log(error);
        })
    }
    return (
        <SafeAreaView style={{backgroundColor:"transparent"}}>
            <View style={{backgroundColor:"black",height:"100%",padding:15}}>
           
                <ImageBackground source={{uri:`https://image.tmdb.org/t/p/w500/${image}`}}
                style={{width:340,height:200,justifyContent:"flex-end",paddingLeft:20,paddingBottom:15,marginRight:15}} 
                imageStyle={{borderRadius:20}}>
                    <Text style={{color:"white",fontSize:20}}>
                        {title}
                    </Text>
                    <Text style={{color:"white",fontSize:18}}>
                        {date}
                    </Text>
                </ImageBackground>
            </View>
        </SafeAreaView>
    )
}
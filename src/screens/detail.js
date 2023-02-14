import { View, Text, Image, ImageBackground, TouchableOpacity, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { AntDesign, Entypo, Feather, FontAwesome } from "@expo/vector-icons";
import YoutubeFrame from "react-native-youtube-iframe";


export const MovieDetail = ({ route }) => {
  console.log(route.params);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    setMovie(route.params);
  }, []);

  return (
    <View
      style={{
        backgroundColor: "#27272a",
       
        
      }}
    >
    
      <StatusBar backgroundColor="transparent" style="light" />
      <ImageBackground  resizeMode="cover" imageStyle={{height:300,opacity:0.4,backgroundColor:'transparent'}}
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
        }}>
      <Image
     
        style={{
          marginTop:30,
          width: 380,
          height: 320,
        }}
        resizeMode="contain"
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
        }}
      />
      <View style={{backgroundColor:"#27272a",borderTopRightRadius:20,borderTopLeftRadius:20,height:"100%",padding:10}}>
      <Text style={{color:"white",fontSize:18}}>{movie.title}</Text>
      <View style={{flexDirection:"row",marginTop:5}}>
        <View style={{flexDirection:"row"}}>
        <FontAwesome name="star" size={15} color="gold"/>
      <Text style={{color:"white"}}>{movie.vote_average}</Text>
      </View>
      <View style={{marginLeft:15,flexDirection:"row"}}>
        <AntDesign name="like1" size={15} color="gold"/>
      <Text style={{color:"white"}}>{movie.vote_count}</Text>
      </View>

      </View>
      <TouchableOpacity style={{backgroundColor:"gold",height:40,flexDirection:"row",borderRadius:5,alignContent:"center",justifyContent:"center",marginTop:30,paddingVertical:8}}>
        <Feather name="play" size={20} color="black"/>

        <Text style={{fontSize:17}}>Play</Text>
      </TouchableOpacity>
      <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:5,marginHorizontal:16,marginTop:20}}>
        <Pressable style={{flexDirection:"row",borderWidth:1,borderColor:"black",paddingVertical:8,paddingHorizontal:15,borderRadius:6,width:150}}>
          <Entypo name="plus" size={20} color="gold"/>

          <Text style={{color:"white"}}> My List</Text>
        </Pressable>
        <Pressable style={{flexDirection:"row",borderWidth:1,borderColor:"black",paddingVertical:8,paddingHorizontal:15,borderRadius:6,width:150}}>
         <Feather name="download" size={21} color="gold"/>
          <Text style={{color:"white"}}> Download</Text>
        </Pressable>
      </View>
      <Text style={{color:"white",marginTop:20}}>
        {movie.overview}
      </Text>
      </View>
      </ImageBackground>
    </View>
  );
};
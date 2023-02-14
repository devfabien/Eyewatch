import React, { useEffect, useState } from "react";

import { SafeAreaView } from "react-native-safe-area-context";
import {View ,Text, TextInput, TouchableOpacity,ScrollView, Image, ImageBackground} from "react-native";
import axios from "axios";
import { Entypo, Feather, AntDesign } from "@expo/vector-icons";
import { Cardc } from "../components/Cardc";
import { Cardb } from "../components/Cardb";
import { Searchsmall } from "./Searchh";

export const SearchScreen = ({navigation})=>{
    const [search, setsearch] = useState("");
    const [popularmovies, setPopularmovies] = useState([]);
    useEffect(() => {
      if(search.length > 0)
      getdata();
       else {
        setPopularmovies([])
       }
      
    }, [search]);
  
    const getdata = () => {
      axios({
        method: "get",
        url: `https://api.themoviedb.org/3/search/movie?api_key=d9cf23cf23f14a29b69eccb99afeaeff&language=en-US&query=${search}&&include_adult=false`,
      })
        .then((response) => {
          setPopularmovies(response.data.results);
        })
        .catch((err) => {
          console.log(err);
        });
    };
  
    return (
      <SafeAreaView>
        <View style={{ backgroundColor: "#26272a", padding: 10 , height:'100%'}}>
          <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>
            Search
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: "#2c2d31",
              padding:5
              
            }}
          >
            <TextInput
              placeholder="Type title, categories,years "
              style={{ backgroundColor: "#2c2d31" ,color:"white"}}

              onChangeText={(text) => setsearch(text)}
            />
            <AntDesign
              name="search1"
              size={24}
              color="gold"
              style={{ paddingTop: 10, marginRight: 10 }}
            />
          </View>

         
       
          
          <ScrollView>
            <View style>
              {popularmovies.map((item, key) => {
                return (
                  <TouchableOpacity
                  onPress={() => navigation.navigate('detail',item) }
                  >
  
                  <Searchsmall
                    key={key}
                    image={item.poster_path}
                    title={item.title}
                    date={item.release_date}
                    description={item.overview}

                    />
                    </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
}
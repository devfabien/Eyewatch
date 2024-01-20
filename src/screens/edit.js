import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getItemAsync } from 'expo-secure-store';

import { Button, Image, View, Platform,ImageBackground,Text, TouchableOpacity ,StatusBar,Pressable} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context"
import * as ImagePicker from 'expo-image-picker';
import { MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import { TextInput } from "react-native-paper";
import { EditUser } from '../features/AuthenticationSlice';

export default function ImagePickerExample({route}) {
  const dispatch = useDispatch();
  const [usercredential, setUserCredential] = useState({});
  const [username, setEditUserName] = useState("");
  const [email, setEditEmail] = useState("")
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  const EditUserDataHandler = () => {
  const data = {
    id: usercredential,
    email: email,
    name: username,
  };
  console.log(data);
  dispatch(EditUser(data));
};

React.useEffect(() => {
  getUserData();
}, []);
const getUserData = () => {
  setUserCredential(route.params);
};

  return (
    <SafeAreaView style={{backgroundColor:"transparent"}}>
      
    <View>
        <View style={{backgroundColor:"#27272a",padding:15,flexDirection:"row",justifyContent:"space-between"}}>
            <Text style={{color:"white",fontWeight:"bold",fontSize:20}}>Edit profile</Text>
            
             </View>
     <ImageBackground source={{uri:"https://imgs.search.brave.com/v6KurX3D4Wjr2VtOWvu3bAxrCFaErcHNYHJd-tV4M7g/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvcHJl/dmlld3MvMDAwLzM5/Ni82MDkvb3JpZ2lu/YWwvdmVjdG9yLW1v/bm9jaHJvbWUtYWJz/dHJhY3QtY29udG91/ci1saW5lLWlsbHVz/dHJhdGlvbi5qcGc"}} 
     style={{height:180}}>
      <View style={{flexDirection:"row",justifyContent:"center", alignItems:"center"}}>
     {image &&   <Image source={{uri:image}} style={{height:120,width:120,borderRadius:200,alignSelf:"center",marginTop:20,borderWidth:1,borderColor:"gold"}}/>}
       <TouchableOpacity onPress={pickImage}>
       <MaterialCommunityIcons name='pencil' size={24} color="gold" style={{marginTop:80}}/>
      </TouchableOpacity>
       </View>
        <View style={{backgroundColor:"#27272a",padding:15,height:480,borderTopRightRadius:20,borderTopLeftRadius:20,marginTop:20}}>
<View style={{borderBottomWidth:1,borderColor:"white",padding:7}}>
<Text style={{color:"white",fontSize:20}}>{username} </Text>
<Text style={{color:"white",fontSize:15}}>{email}</Text>
</View></View></ImageBackground>


<View
          style={{
           justifyContent:"center",
           alignItems:"center",
          }}
        >
          <View
            style={{
              flexDirection: "column",
              padding: 10,
              marginLeft: 20,
              marginTop: 20,
            }}
          >
            <Text style={{ color: "white", marginLeft: 15, fontSize: 14 }}>
              Edit User name
            </Text>
            <TextInput
              placeholder=" Enter Username"
              label="NewUsername"
              textColor="white"
              onChangeText={(text) => {
                setEditUserName(text);
              }}
              activeUnderlineColor="#fdd130"
              style={{
                backgroundColor: "#26272a",

                width: "90%",
              }}
            />
            <Text style={{ color: "white", marginLeft: 15, fontSize: 14 }}>
              Edit Email
            </Text>
            <TextInput
              placeholder=" Enter email"
              label="NewEmail"
              textColor="white"
              activeUnderlineColor="#fdd130"
              onChangeText={(text) => {
                setEditEmail(text);
              }}
              style={{
                backgroundColor: "#26272a",
                paddingTop: 10,
                width: "90%",
              }}
            />
          </View>

          <Pressable
            style={{
              borderRadius: 6,
              alignSelf: "center",
              marginTop: 20,
              borderWidth: 1,
              paddingHorizontal: 150,
              paddingVertical: 10,
              backgroundColor: "gold",
            }}
            onPress={EditUserDataHandler}
          >
            <Text style={{ color: "black" }}>Save</Text>
          </Pressable>
       </View>
</View></SafeAreaView>
  );
  }
import {
  AntDesign,
  Feather,
  FontAwesome,
  Fontisto,
  Entypo,
} from "@expo/vector-icons";
import React, { useState } from "react";
import { Pressable, Text, TouchableOpacity, View,Image } from "react-native";
import { TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { registerUser } from "../features/AuthenticationSlice";
import { useDispatch,useSelector } from "react-redux";

export const SignupScreen = ({ navigation }) => {
  const {isLoading,error} = useSelector((state) => state.auth);
  const dispatch = useDispatch ();
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState();
  const [hidePassword, sethidePassword] = useState(password)

  const handleSignUp = () => {
    const data = {
      name:username,
      email:email,
      password:password
    };
    console.log(data);
    dispatch(registerUser(data));
  };

  return (
    <SafeAreaView style={{backgroundColor:"transparent"}}>
      <View style={{ padding: 15, backgroundColor: "#27272a", height: "100%" }}>
        <View
          style={{ flexDirection: "row", alignSelf: "center", marginTop: 25 }}
        >
         <View style={{flexDirection:"row",padding:5}}>
            <Image source={require("../assets/logo.png")} style={{width:120,height:40}}/>
            </View>
        </View>
        <View style={{ marginTop: 13 }}>
          <Text style={{ color: "white", alignSelf: "center" }}>
            Sign up to discover all our movies and enjoy
          </Text>
          <Text style={{ color: "white", alignSelf: "center" }}>
            our features
          </Text>
        </View>
        <View style={{ marginTop: 34 }}>
          <View
            style={{
              color: "white",
              padding: 2,
              marginTop: 8,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TextInput
              underlineColor="grey"
              textColor="white"
              activeUnderlineColor="gold"
              label={"Username"}
             
              onChangeText={(text) => {
                setUserName(text);
              }}
              style={{
                color: "gold",
                fontSize: 20,
                backgroundColor: "#27272a",
                width: "96%",
              }}
            />
            <Feather name="lock" size={20} color="gold" />
          </View>
          <View
            style={{
              color: "white",
              padding: 2,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TextInput
              underlineColor="grey"
              textColor="white"
              activeUnderlineColor="gold"
              label={"email"}
              onChangeText={(text) => setEmail(text)}
              style={{
                color: "gold",
                fontSize: 20,
                width: "96%",
                backgroundColor: "#27272a",
              }}
            />
            <AntDesign name="mail" size={20} color="gold" />
          </View>
          <View
            style={{
              color: "white",
              borderColor: "grey",
              padding: 2,
              marginTop: 8,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TextInput
              textColor="white"
              activeUnderlineColor="gold"
              underlineColor="grey"
              label={"password"}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={hidePassword}
              style={{
                color: "gold",
                fontSize: 20,
                backgroundColor: "#27272a",
                width: "96%",
              }}
            />
            <Feather onPress={()=>sethidePassword(!hidePassword)} name={hidePassword ? "eye" : "eye-off"} size={20} color="gold" />
          </View>
        </View>
      
<TouchableOpacity>
        <View style={{ backgroundColor: "gold", padding: 6, marginTop: 40 }}>
          <Pressable onPress={handleSignUp}>
            <Text
              style={{ alignSelf: "center", fontSize: 18, fontWeight: "bold" }}
            >
              Sign up
            </Text>
          </Pressable>
        </View></TouchableOpacity>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <Text style={{ color: "white" }}> By signing up i accept</Text>
          <Text style={{ color: "gold" }}> terms of use</Text>
          <Text style={{ color: "white" }}> and</Text>
          <Text style={{ color: "gold" }}> privacy policy</Text>
        </View>
        <Text style={{ color: "white", alignSelf: "center", marginTop: 10 }}>
         
          Or simply sign up with
        </Text>
        <View style={{ backgroundColor: "black", padding: 9, marginTop: 20 }}>
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text
              style={{
                alignSelf: "center",
                fontSize: 18,
                fontWeight: "bold",
                color: "white",
              }}
            >
              <AntDesign name="apple1" size={17} color="white" /> Sign up with
              apple
            </Text>
          </Pressable>
        </View>
        <View style={{ backgroundColor: "white", padding: 9, marginTop: 20 }}>
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text
              style={{
                alignSelf: "center",
                fontSize: 18,
                fontWeight: "bold",
                color: "black",
              }}
            >
              <AntDesign name="google" size={17} color="green" /> Sign up with
              google
            </Text>
          </Pressable>
        </View>
        <View
          style={{ flexDirection: "row", marginTop: 10, alignSelf: "center" }}
        >
          <Text style={{ color: "white" }}> Already have an account? </Text>
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text style={{ color: "gold" }}> sign in</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};
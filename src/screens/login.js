import React, { useState } from "react";
import { Entypo, AntDesign, Feather, Fontisto } from "@expo/vector-icons";
import { TextInput } from "react-native-paper";
import { ImageBackground, Pressable, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { loginUser } from "../features/AuthenticationSlice";
import { useDispatch } from "react-redux";

export const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [userEmail, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const data = {
      email: userEmail,
      password,
    };
    console.log(data);
    dispatch(loginUser(data));
  };

  return (
    <SafeAreaView>
      <View style={{ padding: 15, backgroundColor: "#27272a", height: "100%" }}>
        <View
          style={{ flexDirection: "row", alignSelf: "center", marginTop: 25 }}
        >
          <View
            style={{ backgroundColor: "black", padding: 12, borderRadius: 5 }}
          >
            <Entypo name="eye" size={30} color="gold" />
          </View>
          <View
            style={{ backgroundColor: "gold", padding: 13, borderRadius: 5 }}
          >
            <Text style={{ color: "black", fontWeight: "bold", fontSize: 20 }}>
              Watch
            </Text>
          </View>
        </View>
        <View style={{ marginTop: 13 }}>
          <Text style={{ color: "white", alignSelf: "center" }}>
            Please log in to enjoy more benefits and we
          </Text>
          <Text style={{ color: "white", alignSelf: "center" }}>
            won't let you go.
          </Text>
        </View>
        <View style={{ marginTop: 34 }}>
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
              secureTextEntry={true}
              onChangeText={(password) => setPassword(password)}
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
              flexDirection: "row",
              marginTop: 10,
              alignSelf: "flex-end",
            }}
          >
            <Pressable>
              <Text style={{ color: "gold" }}> forgot password?</Text>
            </Pressable>
          </View>
        </View>
<TouchableOpacity>
        <View style={{ backgroundColor: "gold", padding: 6, marginTop: 50 }}>
          <Pressable onPress={handleLogin}>
            <Text
              style={{ alignSelf: "center", fontSize: 18, fontWeight: "bold" }}
            >
              Log in
            </Text>
          </Pressable>
        </View></TouchableOpacity>

        <Text style={{ color: "white", alignSelf: "center", marginTop: 10 }}>
          
          Or simply log in with
        </Text>
        <View style={{ backgroundColor: "black", padding: 9, marginTop: 20 }}>
          <Pressable onPress={() => navigation.navigate("home")}>
            <Text
              style={{
                alignSelf: "center",
                fontSize: 18,
                fontWeight: "bold",
                color: "white",
              }}
            >
              <AntDesign name="apple1" size={17} color="white" /> log in with
              apple
            </Text>
          </Pressable>
        </View>
        <View style={{ backgroundColor: "white", padding: 9, marginTop: 20 }}>
          <Pressable onPress={() => navigation.navigate("home")}>
            <Text
              style={{
                alignSelf: "center",
                fontSize: 18,
                fontWeight: "bold",
                color: "black",
              }}
            >
              <AntDesign name="google" size={17} color="green" /> log in with
              google
            </Text>
          </Pressable>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 10,
            alignSelf: "center",
            marginTop: 70,
          }}
        >
          <Text style={{ color: "white" }}> Don't have an account? </Text>
          <Pressable onPress={() => navigation.navigate("Signup")}>
            <Text style={{ color: "gold" }}> sign up</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};
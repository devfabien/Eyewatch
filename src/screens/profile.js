import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  Pressable,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { SignupScreen } from "./index";
import { AppNavigation } from "../navigation/appnavigation";
import {
  LogoutUser,
  EditUser,
  loginUser,
} from "../features/AuthenticationSlice";
import {
  AntDesign,
  Feather,
  MaterialIcons,
  Octicons,
} from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { getItemAsync } from "expo-secure-store";

import { useNavigation } from "@react-navigation/native";
export const ProfileScreen = ({ navigation }) => {
  const [usercredential, setUserCredential] = useState({});
  const Nav = useNavigation();
  // const dispatch = useDispatch();
  // React.useEffect(() => {
  //     getUserData();
  //   }, []);
  //   const getUserData = () => {
  //     getItemAsync("userInformation")
  //       .then((res) => {
  //         console.log(res, "userInformation");
  //         const data = JSON.parse(res);
  //         setUserCredential(data);
  //       })
  //       .catch((erro) => {
  //         console.log(erro);
  //       });

  //   };
  return (
    <SafeAreaView style={{ backgroundColor: "transparent" }}>
      <View>
        <View
          style={{
            backgroundColor: "#27272a",
            padding: 15,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
            More
          </Text>
          <Octicons
            name="inbox"
            size={28}
            color="white"
            onPress={() => Nav.navigate("inbox")}
          />
        </View>
        <ImageBackground
          source={{
            uri: "https://imgs.search.brave.com/v6KurX3D4Wjr2VtOWvu3bAxrCFaErcHNYHJd-tV4M7g/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvcHJl/dmlld3MvMDAwLzM5/Ni82MDkvb3JpZ2lu/YWwvdmVjdG9yLW1v/bm9jaHJvbWUtYWJz/dHJhY3QtY29udG91/ci1saW5lLWlsbHVz/dHJhdGlvbi5qcGc",
          }}
          style={{ height: 180 }}
        >
          <Image
            source={require("../assets/image.png")}
            style={{
              height: 120,
              width: 120,
              borderRadius: 200,
              alignSelf: "center",
              marginTop: 20,
            }}
          />
          <View
            style={{
              backgroundColor: "#27272a",
              padding: 15,
              height: 480,
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
              marginTop: 20,
            }}
          >
            <View
              style={{ borderBottomWidth: 1, borderColor: "white", padding: 7 }}
            >
              <Text style={{ color: "white", fontSize: 20 }}>
                Hi, devFabien{" "}
              </Text>
              <Text style={{ color: "white", fontSize: 8 }}>
                {" "}
                ish001fabi@gmail.com
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("edit");
              }}
            >
              <View style={{ flexDirection: "row", padding: 11 }}>
                <Feather name="user" size={27} color="white" />
                <Text style={{ color: "white", fontSize: 16, marginLeft: 10 }}>
                  Account Settings
                </Text>
              </View>
            </TouchableOpacity>
            <View style={{ flexDirection: "row", padding: 11 }}>
              <AntDesign name="setting" size={27} color="white" />
              <Text style={{ color: "white", fontSize: 16, marginLeft: 10 }}>
                App Settings
              </Text>
            </View>
            <View style={{ flexDirection: "row", padding: 11 }}>
              <AntDesign name="like2" size={27} color="white" />
              <Text style={{ color: "white", fontSize: 16, marginLeft: 10 }}>
                Rate us on Appstore
              </Text>
            </View>
            <View style={{ flexDirection: "row", padding: 11 }}>
              <AntDesign name="exclamationcircleo" size={27} color="white" />
              <Text style={{ color: "white", fontSize: 16, marginLeft: 10 }}>
                Help
              </Text>
            </View>
            <TouchableOpacity onPress={() => dispatch(LogoutUser())}>
              <View style={{ flexDirection: "row", padding: 11 }}>
                <MaterialIcons name="logout" size={27} color="white" />
                <Text style={{ color: "white", fontSize: 16, marginLeft: 10 }}>
                  Signout
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

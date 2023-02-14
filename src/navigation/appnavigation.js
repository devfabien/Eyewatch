import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  GetScreen,
  LoginScreen,
  SignupScreen,
  MovieDetail,
} from "../screens/index";
import { Bottoms } from "./home";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getItemAsync } from "expo-secure-store";
const Stack = createNativeStackNavigator();
import {
  storeToken,
  login as storeLoginData,signUp as SignUpData
} from "../features/AuthenticationSlice";



const { Navigator, Screen } = Stack;

export const AppNavigation = () => {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.auth.isLoggedIn);
  console.log(login, "Login state from redux");
  const signUp = useSelector((state)=> state.auth.isLoggedIn);
  console.log(signUp,"signup state");

  useEffect(() => {
    getItemAsync("userToken").then((res) => {
      console.log(res, "data from storage");
      dispatch(storeToken(res));
    });
    getItemAsync("userInformation").then((res) => {
      console.log(res);
      dispatch(storeLoginData(res));
    });
  }, []);
  useEffect(() =>{
    getItemAsync("registerData").then((res) =>{
      console.log(res);
      dispatch(SignUpData(res));
    })
  },[])

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      {login || signUp == true ? (
        <>
          <Screen name="home" component={Bottoms} />
          <Screen name="detail" component={MovieDetail} />
        </>
      ) : (
        <>
          <Screen name="Welcome" component={GetScreen} />
          <Screen name="Signup" component={SignupScreen} />
          <Screen name="Login" component={LoginScreen} />
        </>
      )}
    </Navigator>
  );
};
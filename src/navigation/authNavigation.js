import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  GetScreen,
  LoginScreen,
  SignupScreen,
  
} from "../screens/index";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { Bottoms } from "./home";
const Stack = createNativeStackNavigator();

const { Navigator, Screen } = Stack;

export const AuthNavigation = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Welcome" component={GetScreen} />
      <Screen name="Signup" component={SignupScreen} />
      <Screen name="Login" component={LoginScreen} />
      <Screen name="home" component={Bottoms} />
    </Navigator>
  );
};
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { View, Text } from "react-native";
import { AppNavigation } from "./appnavigation";
import { AuthNavigation } from "./authNavigation";

export const RootNavigation = () => {
  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
};
export default RootNavigation;
const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import HomeScreen from "./screens/HomeScreen";
import SearchIcon from "./components/SearchIcon";
import SearchField from "./components/SearchField";
import Property2Email from "./components/Property2Email";
import Property1SettingsInformatio from "./components/Property1SettingsInformatio";
import TypeHeaderWithBack from "./components/TypeHeaderWithBack";
import HomeBar from "./components/HomeBar";
import Property1Tab3 from "./components/Property1Tab3";
import Property1Tab1 from "./components/Property1Tab1";
import TabBar1Item from "./components/TabBar1Item";
import TypeHomePageHeader from "./components/TypeHomePageHeader";
import Price from "./components/Price";
import CourseCard from "./components/CourseCard";
import LevelPrimary from "./components/LevelPrimary";
import Property1ButtonsProperty2 from "./components/Property1ButtonsProperty2";
import PasswordField from "./components/PasswordField";
import UserDataField from "./components/UserDataField";
import Rectangle from "./components/Rectangle";
import Image3 from "./components/Image3";
import Learning from "./screens/Learning";
import Dictionary from "./screens/Dictionary";
import Settings from "./screens/Settings";
import SignUp from "./screens/SignUp";
import Login from "./screens/Login";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Rubik-Regular": require("./assets/fonts/Rubik-Regular.ttf"),
    "Rubik-Medium": require("./assets/fonts/Rubik-Medium.ttf"),
    "Rubik-Bold": require("./assets/fonts/Rubik-Bold.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            
            <Stack.Screen
              name="Learning"
              component={Learning}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Dictionary"
              component={Dictionary}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Settings"
              component={Settings}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;

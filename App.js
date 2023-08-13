import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Landing from "./screens/Landing";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Home from "./screens/Home";
import ReportScreen from "./screens/ReportScreen";
import Info from "./screens/Info";
import AnimalDetails from "./screens/AnimalDetails";
import CommunityScreen from "./screens/community";
import AlertScreen from "./screens/alert";
import DonateScreen from "./screens/donate";
import Adopt from "./screens/Adopt";
import ResourcesScreen from "./screens/Resources";
import Emergency from "./screens/emergency";
import TourScreen from "./screens/tour";
import ChatScreen from "./screens/ChatScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen
          name="Landing"
          component={Landing}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="Log In"
          component={Login}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="ReportScreen"
          component={ReportScreen}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="InfoScreen"
          component={Info}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="DetailsScreen"
          component={AnimalDetails}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="CommunityScreen"
          component={CommunityScreen}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="AlertScreen"
          component={AlertScreen}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="DonateScreen"
          component={DonateScreen}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="AdoptScreen"
          component={Adopt}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="ResourceScreen"
          component={ResourcesScreen}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="EmergencyScreen"
          component={Emergency}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="TourScreen"
          component={TourScreen}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="ChatScreen"
          component={ChatScreen}
          options={{ headerShown: false }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

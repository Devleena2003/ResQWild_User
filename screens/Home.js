import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from "./HomeScreen";
import ContactScreen from "./ContactScreen";
import ProfileScreen from "./ProfileScreen";
import LeaderBoard from "./LeaderBoard";

const Tab = createBottomTabNavigator();
const Home = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size, opacity }) => {
          let iconName;
          size = 25;
          color = "#1E5128";
          opacity = 1;

          if (route.name === "Homes") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Contact") {
            iconName = focused ? "call" : "call-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          } else if (route.name === "Leaderboard") {
            iconName = focused ? "star" : "star-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#74C962",

          height: 60,
          position: "absolute",
        },
      })}
    >
      <Tab.Screen
        name="Homes"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Contact"
        component={ContactScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Leaderboard"
        component={LeaderBoard}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};
export default Home;

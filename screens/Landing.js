import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
const Landing = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={require("../assets/Landing.jpg")}
      resizeMode="cover"
      blurRadius={3}
      style={{ flex: 1 }}
    >
      <Text
        style={{
          color: "#E5D9B6",
          fontSize: 35,

          fontWeight: "bold",
          paddingTop: "28%",
          paddingLeft: 30,
        }}
      >
        Join Hands
      </Text>

      <Text
        style={{
          color: "#E5D9B6",
          fontSize: 45,

          fontWeight: "bold",

          paddingLeft: 30,
        }}
      >
        Save The
      </Text>

      <Text
        style={{
          color: "#4E9F3D",
          fontSize: 55,

          fontWeight: "bold",

          paddingLeft: 30,
        }}
      >
        Wildlife
      </Text>

      <TouchableOpacity
        style={{
          marginTop: "90%",
          borderColor: "#4E9F3D",
          borderWidth: 2,
          borderRadius: 15,
          paddingTop: 20,
          paddingBottom: 20,
          paddingLeft: 50,
          paddingRight: 50,
          alignSelf: "center",
        }}
        onPress={() => {
          navigation.navigate("Log In");
        }}
      >
        <Text style={{ color: "#E5D9B6", fontSize: 20 }}>Get Started</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default Landing;

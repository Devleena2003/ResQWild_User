import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { loginUser } from "../services/api.auth";
import * as SecureStore from "expo-secure-store";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(true);
  const navigation = useNavigation();

  const login = async () => {
    let req;
    try {
      req = {
        email: email,
        password: password,
      };
      const res = await loginUser(req);
      await SecureStore.setItemAsync("secure_token", res.data.token);
      const token = await SecureStore.getItemAsync("secure_token");
      console.log("token", token);
      navigation.navigate("Home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          color: "#006600",
          fontSize: 40,
          marginBottom: 60,
          textAlign: "center",
        }}
      >
        Welcome Back!
      </Text>
      <View style={{ position: "relative", left: 45, bottom: 10 }}>
        <Text style={{ color: "#1E5128" }}>Email</Text>
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          value={email}
          placeholderTextColor="#0F6408"
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={{ position: "relative", left: 45, bottom: 10 }}>
        <Text style={{ color: "#1E5128" }}>Password</Text>
      </View>
      <View
        style={{
          borderWidth: 1,
          borderColor: "#1E5128",
          borderRadius: 20,
          width: "80%",
          height: 60,
          marginBottom: 10,
          alignSelf: "center",
        }}
      >
        <TextInput
          style={styles.TextInput}
          value={password}
          placeholderTextColor="#0F6408"
          secureTextEntry={passwordVisible}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity
          style={styles.btnEye}
          onPress={() => {
            setPasswordVisible(!passwordVisible);
            setShow(!show);
          }}
        >
          <MaterialCommunityIcons
            name={show === false ? "eye-outline" : "eye-off-outline"}
            size={20}
            color={"#0F6408"}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn} onPress={login}>
        <Text
          style={{
            alignSelf: "center",
            fontSize: 18,
            paddingTop: 17,
            color: "#E5D9B6",
          }}
        >
          Log In
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderColor: "#1E5128",
          borderRadius: 20,
          alignSelf: "center",
          width: "70%",
          height: 60,
          marginTop: 18,
          flexDirection: "row",
          justifyContent: "center",
          gap: 15,
        }}
      >
        <Image
          source={require("../assets/google.png")}
          style={{ width: 25, height: 25, alignSelf: "center" }}
        />
        <Text style={{ alignSelf: "center", fontSize: 16, color: "#1E5128" }}>
          Log In with Google
        </Text>
      </TouchableOpacity>

      <Text style={{ textAlign: "center", marginTop: 20, color: "#4E9F3D" }}>
        Don't have an account?
        <Text
          style={{ color: "#0F6408", fontWeight: "bold" }}
          onPress={() => navigation.navigate("Register")}
        >
          Register
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",

    justifyContent: "center",
  },
  small_txt: {
    height: 30,
    marginTop: 20,
    color: "#0F6408",
    textAlign: "center",
  },

  btnEye: {
    position: "absolute",
    right: 25,
    top: 20,
  },
  inputView: {
    borderWidth: 1,
    borderColor: "#1E5128",
    borderRadius: 20,
    width: "80%",
    height: 60,
    marginBottom: 20,
    alignSelf: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
  },
  forgot_button: {
    alignSelf: "flex-end",
    paddingRight: "15%",
    color: "#1E5128",
  },
  loginBtn: {
    width: "70%",
    borderRadius: 20,
    height: 60,
    alignSelf: "center",

    marginTop: 20,
    backgroundColor: "#1E5128",
  },
});
export default Login;

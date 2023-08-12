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
import { signUpUser } from "../services/api.auth";
const Register = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(true);

  const register = async () => {
    try {
      const req = {
        email: email,
        password: password,
      };
      const res = await signUpUser(req);
      navigation.navigate("Home");
      console.log(res);
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
        ResQWild
      </Text>
      <View style={{ position: "relative", left: 45, bottom: 10 }}>
        <Text style={{ color: "#1E5128" }}>Name</Text>
      </View>
      <View style={styles.inputView}>
        <TextInput style={styles.TextInput} />
      </View>
      <View style={{ position: "relative", left: 45, bottom: 10 }}>
        <Text style={{ color: "#1E5128" }}>Email</Text>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={{ position: "relative", left: 45, bottom: 10 }}>
        <Text style={{ color: "#1E5128" }}>Password</Text>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          value={password}
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

      <TouchableOpacity style={styles.loginBtn} onPress={register}>
        <Text
          style={{
            alignSelf: "center",
            fontSize: 18,

            color: "#E5D9B6",
          }}
        >
          Register
        </Text>
      </TouchableOpacity>
      <Text
        style={{
          color: "#4E9F3D",
          height: 30,
          marginTop: 20,
          textAlign: "center",
        }}
      >
        Already have an account?{" "}
        <Text
          style={{ color: "#1E5128", fontWeight: "bold" }}
          onPress={() => navigation.navigate("Log In")}
        >
          Log In
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

  btnEye: {
    position: "absolute",
    right: 25,
    top: 20,
  },
  inputView: {
    width: "80%",
    height: 60,
    marginBottom: 20,
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "#1E5128",
    borderRadius: 20,
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
  },

  loginBtn: {
    width: "70%",
    borderRadius: 25,
    height: 60,
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#1E5128",
  },
});
export default Register;

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  FlatList,
  Alert,
  ScrollView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import * as Linking from "expo-linking";
import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";

const ContactScreen = ({ navigation }) => {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleAddContact = () => {
    if (name === "" || phoneNumber === "") {
      Alert.alert("Error", "Please enter both name and phone number.");
      return;
    }
    const newContact = { name, phoneNumber };
    setContacts((prevContacts) => [...prevContacts, newContact]);
    setName("");
    setPhoneNumber("");
  };
  const handleDeleteContact = (index) => {
    const updatedContacts = [...contacts];
    updatedContacts.splice(index, 1);
    setContacts(updatedContacts);
  };
  return (
    <ScrollView>
      <View style={{ paddingTop: "15%", paddingLeft: 15 }}>
        <Text style={{ fontSize: 30, fontWeight: "bold", color: "#1E5128" }}>
          Get In Touch With Us
        </Text>
      </View>
      <View
        style={{
          borderWidth: 0.5,
          width: "85%",
          marginTop: 10,
          marginLeft: 15,
        }}
      ></View>
      <View style={{ flexDirection: "row", gap: 10, padding: 15 }}>
        <View>
          <FontAwesome name="envelope" size={30} color="black" />
        </View>
        <TouchableOpacity
          onPress={() => Linking.openURL("mailto:xyz@gmail.com")}
        >
          <Text style={{ fontSize: 20 }}>xyz@gmail.com</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", gap: 10, padding: 15 }}>
        <View>
          <FontAwesome name="phone" size={35} color="black" />
        </View>
        <TouchableOpacity onPress={() => Linking.openURL("tel:+123456789")}>
          <Text style={{ fontSize: 20 }}>+123456789</Text>
        </TouchableOpacity>
      </View>

      <View style={{ backgroundColor: "#74C962", padding: 20 }}>
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>
          Join Our Community
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: "#E5D9B6",
            width: "30%",
            padding: 10,
            borderRadius: 15,
            marginTop: 10,
          }}
          onPress={() => navigation.navigate("CommunityScreen")}
        >
          <Text style={{ alignSelf: "center", fontWeight: 500 }}>Join</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <View style={{ paddingLeft: 10 }}>
          <Text style={{ fontSize: 30, fontWeight: "bold", color: "#1E5128" }}>
            Help Needed?
          </Text>
          <Text style={{ fontSize: 15, paddingTop: 10 }}>
            You are just away of one call
          </Text>
        </View>
      </View>
      <View
        style={{
          paddingTop: 15,
          paddingLeft: 15,
        }}
      >
        <FlatList
          data={contacts}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={{ flexDirection: "row", gap: 5 }}>
              <TouchableOpacity
                style={styles.contact}
                onPress={() => Linking.openURL("tel:(`${phoneNumber})")}
              >
                <Text style={styles.contactName}>{item.name}</Text>
                <Text style={styles.contactNumber}>{item.phoneNumber}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ padding: 15 }}
                onPress={() => handleDeleteContact(index)}
              >
                <FontAwesome5 name="trash" size={24} color="#1E5128" />
              </TouchableOpacity>
            </View>
          )}
        />
        <TextInput
          style={styles.input}
          placeholder="Contact Name"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
          keyboardType="numeric"
        />
        <TouchableOpacity
          style={{
            alignSelf: "center",
            backgroundColor: "#E5D9B6",

            padding: 15,
            borderRadius: 15,
          }}
          onPress={handleAddContact}
        >
          <Text style={{ color: "#1E5128" }}> Add Contact</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default ContactScreen;
const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  input: {
    marginBottom: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: "#1E5128",
    borderRadius: 15,
    width: "95%",
  },
  contact: {
    marginBottom: 8,
    elevation: 3,
    backgroundColor: "#E5D9B6",
    borderRadius: 10,
    padding: 8,
    width: "80%",
  },
  contactName: {
    fontWeight: "bold",
  },
  contactNumber: {
    color: "#666",
  },
});

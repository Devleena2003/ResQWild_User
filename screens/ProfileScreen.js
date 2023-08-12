import React, { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as SecureStore from "expo-secure-store";
import { UserData } from "../services/api.user";
const activityData = [
  "Someone reported an incident",
  "Devleena posted in Community",
  "Udit reported an incident",
  // Add more notifications here
];
const ProfileScreen = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const profile = async () => {
    const token = await SecureStore.getItemAsync("secure_token");
    try {
      const res = await UserData(token);
      console.log(res.data.user);
      setUserData(res.data.user);
      setIsLoading(false);
    } catch (error) {
      console.log("user token => \n", token);
      console.log(error);
    }

    // try {
    //   const res = await UserData(token);
    //   console.log(res);
    // } catch (error) {
    //   console.log(error);
    // }
  };
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.cancelled) {
      setSelectedImage(result.uri);
    }
  };
  const fetchUserData = async () => {
    const token = await SecureStore.getItemAsync("secure_token");
    console.log("user token => \n", token);
    try {
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View style={{ paddingTop: "20%" }}>
      {selectedImage && (
        <View style={{ alignSelf: "center" }}>
          <Image
            source={{ uri: selectedImage }}
            style={{ width: 100, height: 100 }}
          />
        </View>
      )}

      <View style={{ alignSelf: "center", paddingTop: 20, width: "70%" }}>
        <View>
          <Text
            style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}
          >
            User Name
          </Text>
        </View>
        <TouchableOpacity
          style={{
            padding: 12,
            backgroundColor: "#1E5128",
            borderRadius: 20,
            width: "50%",
            alignSelf: "center",
            marginTop: 15,
          }}
        >
          <Text style={{ fontSize: 15, color: "#E5D9B6", textAlign: "center" }}>
            Pick a Photo
          </Text>
        </TouchableOpacity>
        <View
          style={{
            backgroundColor: "#74C962",
            padding: 15,
            elevation: 3,
            marginTop: 10,
            borderRadius: 15,
          }}
        >
          <Text>{!userData && !isLoading ? "Not Found" : userData.email}</Text>
        </View>
        <View
          style={{
            backgroundColor: "#74C962",
            padding: 15,
            elevation: 3,
            marginTop: 10,
            borderRadius: 15,
          }}
        >
          <Text>{!userData && !isLoading ? "Not Found" : "*******"}</Text>
        </View>
      </View>
      <View>
        <Text style={{ fontSize: 25, fontWeight: "bold", padding: 15 }}>
          User Activities
        </Text>
        <FlatList
          data={activityData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.notification}>
              <Text style={styles.notificationText}>{item}</Text>
              <View style={styles.borderBottom} />
            </View>
          )}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  notification: {
    padding: 10,
    marginBottom: 10,
  },
  notificationText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "darkgreen",
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    marginVertical: 10,
  },
});
export default ProfileScreen;

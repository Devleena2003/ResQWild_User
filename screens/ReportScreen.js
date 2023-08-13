import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  Video,
  Audio,
  StyleSheet,
  Platform,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import * as VideoPicker from "expo-image-picker";
import { ScrollView } from "react-native";
import { addReport } from "../services/api.report";
import { UserData } from "../services/api.user";

const ReportScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [reportedBy, setreportedBy] = useState("");

  // const userDetails = async () => {
  //   try {
  //     console.log("Loading");
  //     const result = await UserData();
  //     console.log("result", result);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // console.log(reportedBy);

  const handleSubmit = async () => {
    let req;
    if (
      title === "" ||
      location === "" ||
      description === "" ||
      reportedBy === ""
    ) {
      Alert.alert("Enter all the fields");
    } else {
      req = {
        title: title,
        location: location,
        description: description,
        reportedBy: reportedBy,
      };

      try {
        console.log(req);
        const res = await addReport(req);
        console.log(res.data);
        navigation.navigate("Contact");
      } catch (error) {
        console.log(error);
      }
    }
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

  const pickVideo = async () => {
    const result = await VideoPicker.launchImageLibraryAsync({
      mediaTypes: VideoPicker.MediaTypeOptions.Videos,
    });

    if (!result.cancelled) {
      setSelectedVideo(result.uri);
    }
  };

  return (
    <ScrollView>
      <View
        style={{
          backgroundColor: "#1E5128",
          paddingBottom: "70%",
          borderRadius: 20,
          elevation: 5,
        }}
      >
        <Text
          style={{
            fontSize: 40,
            color: "#E5D9B6",
            fontWeight: "bold",
            paddingTop: "20%",
            paddingLeft: 20,
          }}
        >
          Report a title
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "#E5D9B6",
          padding: 40,
          margin: 20,
          borderRadius: 20,
          position: "relative",
          bottom: "20%",
        }}
      >
        <View style={{ position: "relative", left: 10, bottom: 10 }}>
          <Text style={{ color: "#1E5128" }}>Name</Text>
        </View>
        {/* <View
          style={{
            borderWidth: 1,
            borderColor: "#1E5128",
            borderRadius: 20,
            width: "100%",
            height: 60,
            marginBottom: 20,
            alignSelf: "center",
          }}
        >
          <TextInput
            style={{ height: 50, flex: 1, padding: 10 }}
            value={name}
            placeholderTextColor="#0F6408"
            onChangeText={(text) => setTitle(text)}
          />
          
        </View> */}
        <View
          style={{
            borderWidth: 1,
            borderColor: "#1E5128",
            borderRadius: 20,
            width: "100%",
            height: 60,
            marginBottom: 20,

            alignSelf: "center",
          }}
        >
          <TextInput
            style={{ height: 50, flex: 1, padding: 10 }}
            value={reportedBy}
            placeholderTextColor="#0F6408"
            onChangeText={(text) => setreportedBy(text)}
          />
        </View>
        <View style={{ position: "relative", left: 10, bottom: 10 }}>
          <Text style={{ color: "#1E5128" }}>Incident</Text>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: "#1E5128",
            borderRadius: 20,
            width: "100%",
            height: 60,
            marginBottom: 20,
            alignSelf: "center",
          }}
        >
          <TextInput
            style={{ height: 50, flex: 1, padding: 10 }}
            value={title}
            placeholderTextColor="#0F6408"
            onChangeText={(text) => setTitle(text)}
          />
        </View>
        <View style={{ position: "relative", left: 10, bottom: 10 }}>
          <Text style={{ color: "#1E5128" }}>Location</Text>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: "#1E5128",
            borderRadius: 20,
            width: "100%",
            height: 60,
            marginBottom: 20,
            alignSelf: "center",
          }}
        >
          <TextInput
            style={{ height: 50, flex: 1, padding: 10 }}
            value={location}
            placeholderTextColor="#0F6408"
            onChangeText={(text) => setLocation(text)}
          />
        </View>
        <View style={{ position: "relative", left: 10, bottom: 10 }}>
          <Text style={{ color: "#1E5128" }}>Description</Text>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: "#1E5128",
            borderRadius: 20,
            width: "100%",
            height: 100,
            marginBottom: 20,
            alignSelf: "center",
          }}
        >
          <TextInput
            multiline={true}
            style={{ height: 50, padding: 10 }}
            numberOfLines={4}
            placeholderTextColor="#0F6408"
            onChangeText={(text) => setDescription(text)}
            value={description}
          />
        </View>
        <View
          style={{ flexDirection: "row", gap: 15, justifyContent: "center" }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#74C962",
              borderRadius: 30,
              padding: 15,
            }}
            onPress={pickVideo}
          >
            <AntDesign name="videocamera" size={24} color="black" />
          </TouchableOpacity>
          {selectedVideo && (
            <Video
              source={{ uri: selectedVideo }}
              style={styles.media}
              controls={true}
            />
          )}
          <TouchableOpacity
            style={{
              backgroundColor: "#74C962",
              borderRadius: 30,
              padding: 15,
            }}
            onPress={pickImage}
          >
            <Entypo name="image" size={24} color="black" />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: "#74C962",
              borderRadius: 30,
              padding: 15,
            }}
          >
            <MaterialIcons name="keyboard-voice" size={24} color="black" />
          </TouchableOpacity>
        </View>

        {selectedImage && (
          <View style={{ alignSelf: "center" }}>
            <Image source={{ uri: selectedImage }} style={styles.media} />
          </View>
        )}
      </View>

      <TouchableOpacity
        style={{
          width: "70%",
          borderRadius: 20,
          height: 60,
          alignSelf: "center",
          position: "absolute",
          top: "75%",
          backgroundColor: "#1E5128",
        }}
        onPress={handleSubmit}
      >
        <Text
          style={{
            alignSelf: "center",
            fontSize: 18,
            paddingTop: 17,
            color: "#E5D9B6",
          }}
        >
          Report
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
export default ReportScreen;
const styles = StyleSheet.create({
  media: {
    width: 200,
    height: 200,
    marginVertical: 10,
  },
});

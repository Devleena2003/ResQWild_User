import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ScrollView,
  Image,
  Touchable,
} from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import * as Linking from "expo-linking";

const ResourcesScreen = ({ navigation }) => {
  const articleData = [
    {
      id: 1,
      title: "Impact of Climate Change on Wildlife",
      link: "https://www.ifaw.org/international/journal/impact-climate-change-animals",
    },
    {
      id: 2,
      title: "Conservation Strategies for Endangered Species",
      link: "https://join.wwfindia.org/?source=google_grant&gad=1&gclid=CjwKCAjw29ymBhAKEiwAHJbJ8gkTvxhTs-5obp6O_f8IwTysUS1NoPK_uUAsh32JkIFhV5fmK_-_9hoCltMQAvD_BwE",
    },
    {
      id: 3,
      title: "Prevention of Wildlife Poaching",
      link: "https://www.stoppoaching-now.org/global-e-race-extinction/global-e-race-2023/?",
    },
  ];

  const videoData = [
    {
      id: 1,
      image: require("../assets/video1.png"),
      videoUrl: "https://youtu.be/sCrvaG_aMGI",
    },
    {
      id: 2,
      image: require("../assets/video2.png"),
      videoUrl: "https://youtu.be/JwUuaKOTTLM",
    },
    {
      id: 3,
      image: require("../assets/video3.png"),
      videoUrl: "https://youtu.be/pR83Woy0zDs",
    },
  ];

  const openArticleInBrowser = (link) => {
    // Check if the link is a YouTube video link
    if (link.includes("youtu.be")) {
      // Open YouTube app or browser
      Linking.openURL(link);
    } else {
      // Open the provided link in the browser
      Linking.openURL(link);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={{ padding: 20, backgroundColor: "#1E5128" }}>
        <Text style={styles.resourcesText}>Resources</Text>
      </View>
      <View style={styles.lowerPart}>
        <Text style={styles.locationText}>
          Write area's name here and see area specific cases
        </Text>
        <View style={styles.searchBar}>
          <TextInput
            style={styles.searchInput}
            placeholder="Enter location"
            placeholderTextColor="#666"
          />
          <TouchableOpacity style={styles.micButton}>
            <FontAwesome name="microphone" size={24} color="darkgreen" />
          </TouchableOpacity>
        </View>
        <View>
          <Text>Need Emergency Help?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("EmergencyScreen")}
          >
            <Text>Guide Me</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.seeVideosText}>See Videos</Text>
        <FlatList
          data={videoData}
          horizontal
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.videoCard}
              onPress={() => Linking.openURL(item.videoUrl)}
            >
              <Image source={item.image} style={styles.videoImage} />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
        <Text style={styles.readArticlesText}>Read Articles</Text>
        <FlatList
          data={articleData}
          renderItem={({ item }) => (
            <>
              <View style={styles.articleCard}>
                <TouchableOpacity>
                  <Text style={styles.articleTitle}>{item.title}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.arrowButton}
                  onPress={() => Linking.openURL(item.link)}
                >
                  <MaterialIcons
                    name="arrow-forward-ios"
                    size={24}
                    color="darkgreen"
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.borderBottom} />
            </>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  upperPart: {
    backgroundColor: "darkgreen",

    padding: 20,
  },

  resourcesText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#E5D9B6",
    paddingTop: 15,
  },
  upperPartBg: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 40,
    backgroundColor: "darkgreen",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  lowerPart: {
    padding: 20,
  },
  locationText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
    marginBottom: 10,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,

    backgroundColor: "white",
  },
  micButton: {
    marginLeft: 10,
  },
  seeVideosText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "darkgreen",
    marginBottom: 10,
  },
  videoCard: {
    marginRight: 10,
    width: 150,
    height: 100,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    overflow: "hidden",
  },
  videoImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  readArticlesText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "darkgreen",
    marginBottom: 20,
    marginTop: 20,
  },
  articleCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  articleTitle: {
    flex: 1,
    fontSize: 16,
    color: "green",
  },
  arrowButton: {
    marginLeft: 10,
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    marginVertical: 20,
  },
});

export default ResourcesScreen;

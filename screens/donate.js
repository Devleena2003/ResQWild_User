import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const styles = StyleSheet.create({
  container: {
    //flex: 1,

    padding: 20,
  },
  sectionHeading: {
    fontSize: 28,
    fontWeight: "bold",
    color: "darkgreen",
    marginBottom: 20,
    paddingTop: 20,
  },
  campaignContainer: {
    marginBottom: 20,
    marginRight: 10,
    //flex: 2,
  },
  campaignImage: {
    width: 200,
    height: 150,
    borderRadius: 10,
  },
  campaignLocation: {
    marginTop: 5,
    fontSize: 16,
  },
  campaignName: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 5,
  },
  donateButton: {
    backgroundColor: "darkgreen",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
    width: "50%",
  },
  donateButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "center",
  },
  adoptHeading: {
    fontSize: 28,
    fontWeight: "bold",
    color: "darkgreen",
  },
  adoptionText: {
    fontSize: 16,
    marginTop: 10,
  },
  seeMoreText: {
    color: "darkgreen",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
});

const trendingCampaignsData = [
  {
    id: 1,
    image: require("../assets/rhino.jpg"),
    location: "Kaziranga, Assam",
    campaignName: "Save the Rhino",
  },
  {
    id: 2,
    image: require("../assets/rhino.jpg"),
    location: "Sunderbans, West Bengal",
    campaignName: "Protect Sunderbans",
  },
  {
    id: 3,
    image: require("../assets/rhino.jpg"),
    location: "Sunderbans, West Bengal",
    campaignName: "Protect Sunderbans",
  },
];

const DonateScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionHeading}>Trending Campaigns</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginBottom: 20 }}
      >
        {trendingCampaignsData.map((item) => (
          <View key={item.id} style={styles.campaignContainer}>
            <Image source={item.image} style={styles.campaignImage} />

            <Text style={styles.campaignName}>{item.campaignName}</Text>
            <Text style={styles.campaignLocation}>{item.location}</Text>
            <TouchableOpacity style={styles.donateButton}>
              <Text style={styles.donateButtonText}>Donate</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      <Text style={styles.adoptHeading}>Want to Adopt</Text>
      <Text style={styles.adoptionText}>
        Adopting an animal is a meaningful way to support conservation efforts
        and protect endangered species. Explore our adoption programs and make a
        difference today.
      </Text>
      <TouchableOpacity
        style={styles.donateButton}
        onPress={() => navigation.navigate("AdoptScreen")}
      >
        <Text style={styles.donateButtonText}>See More</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DonateScreen;

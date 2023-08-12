import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

const AdoptData = [
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
const Adopt = () => {
  return (
    <View style={{ padding: 15 }}>
      <View style={{ padding: 20 }}>
        <Text
          style={{
            color: "#1E5128",
            fontSize: 30,
            fontWeight: "bold",
            paddingTop: 15,
          }}
        >
          Give Them a Life
        </Text>
      </View>
      <View>
        <ScrollView
          vertical
          showsHorizontalScrollIndicator={false}
          style={{ marginBottom: 20 }}
        >
          {AdoptData.map((item) => (
            <View key={item.id} style={styles.campaignContainer}>
              <Image source={item.image} style={styles.campaignImage} />
              <View style={{ width: "50%" }}>
                <Text style={styles.campaignName}>{item.campaignName}</Text>
                <Text style={styles.campaignLocation}>{item.location}</Text>
                <TouchableOpacity style={styles.donateButton}>
                  <Text style={styles.donateButtonText}>Adopt</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};
export default Adopt;
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
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    //flex: 2,
  },
  campaignImage: {
    width: 150,
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
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
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

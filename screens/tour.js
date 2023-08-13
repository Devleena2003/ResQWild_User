import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
  Linking,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from "accordion-collapse-react-native"; // You can use a library like accordion-collapse-react-native for the collapsible behavior

const TourScreen = () => {
  const [searchText, setSearchText] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("All"); // Default selected location is "All"

  const locations = [
    {
      id: 0,
      title: "All",
    },
    {
      id: 1,
      title: "Jim Corbett National Park",
      state: "Uttarakhand",
      website: "https://www.corbettnationalpark.in/",
      image: require("../assets/leopard.jpg"),
    },
    {
      id: 2,
      title: "Sunderbans",
      state: "West Bengal",
      website: "https://www.sunderbans-national-park.com/",
      image: require("../assets/rhino.jpg"),
    },
    {
      id: 3,
      title: "Jaldapara National Park",
      state: "West Bengal",
      website: "http://jaldaparanationalpark.org/",
      image: require("../assets/red_panda.jpg"),
    },
  ];

  const renderLocationCard = (location) => {
    return (
      <View style={styles.locationCard}>
        <Image source={location.image} style={styles.locationImage} />
        <View style={styles.locationDetails}>
          <Text style={styles.locationTitle}>{location.title}</Text>
          <Text style={styles.locationState}>{location.state}</Text>
          <TouchableOpacity
            style={styles.detailsButton}
            onPress={() => Linking.openURL(location.website)}
          >
            <Text style={styles.detailsButtonText}>See Details</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Let's Take a Tour</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Search..."
        value={searchText}
        onChangeText={setSearchText}
      />
      <Collapse isCollapsed={false}>
        <CollapseHeader>
          <View style={styles.locationDropdownHeader}>
            <Text>{selectedLocation}</Text>
            <FontAwesome name="angle-down" size={24} color="black" />
          </View>
        </CollapseHeader>
        <CollapseBody>
          <FlatList
            data={locations}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.locationOption}
                onPress={() => setSelectedLocation(item.title)}
              >
                <Text>{item.title}</Text>
              </TouchableOpacity>
            )}
          />
        </CollapseBody>
      </Collapse>
      {selectedLocation === "All" ? (
        <FlatList
          data={locations.slice(1)}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => renderLocationCard(item)}
        />
      ) : (
        renderLocationCard(
          locations.find((item) => item.title === selectedLocation)
        )
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "white",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    paddingTop: 15,
    fontSize: 20,
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  locationDropdownHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#f0f0f0",
    paddingTop: 15,
    paddingBottom: 15,
  },
  locationOption: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  locationCard: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: "darkgreen",
    backgroundColor: "darkgreen",
    marginBottom: 10,
    borderRadius: 10,
    paddingLeft: 15,
  },
  locationImage: {
    width: "50%",
    height: "100%",
    borderRadius: 10,
  },
  locationDetails: {
    flex: 1,
    marginLeft: 10,
  },
  locationTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  locationState: {
    fontSize: 18,
    color: "#bbb",
    marginBottom: 5,
  },
  detailsButton: {
    backgroundColor: "#edb525",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    width: "75%",
    alignItems: "center",
  },
  detailsButtonText: {
    color: "black",
    fontWeight: "bold",
  },
});

export default TourScreen;

// AlertScreen.js
import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },
  sectionHeading: {
    fontSize: 28,
    fontWeight: "bold",
    color: "darkgreen",
    marginBottom: 10,
  },
  notificationheader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 20,
  },
  notification: {
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
    marginVertical: 20,
  },
  caseItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  caseCard: {
    width: "55%",
  },
  caseImage: {
    width: 100,
    height: 75,
    marginRight: 15,
    borderRadius: 10,
  },
  caseText: {
    fontSize: 16,
  },
});

const casesData = [
  {
    id: 1,
    title: "Trafficked: Kidnapped chimps, jailed Rhino Horn Traffickers",
    image: require("../assets/rhino.jpg"),
  },
  {
    id: 2,
    title: "Over 300 exotic animals being smuggled into country from Thailand",
    image: require("../assets/elephant.jpg"),
  },
  {
    id: 3,
    title: "Four Leopard Skins seized, Three wildlife Traders held",
    image: require("../assets/leopard.jpg"),
  },
  // Add more cases here
];

const notificationsData = [
  "Someone reported an incident",
  "Devleena posted in Community",
  "Udit reported an incident",
  // Add more notifications here
];

const AlertScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.notificationheader}>
        <Text style={styles.sectionHeading}>Notifications</Text>
        <Ionicons name="md-notifications-sharp" size={24} color="darkgreen" />
      </View>
      <FlatList
        data={notificationsData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.notification}>
            <Text style={styles.notificationText}>{item}</Text>
            <View style={styles.borderBottom} />
          </View>
        )}
      />

      <Text style={styles.sectionHeading}>Nearby Cases</Text>
      <FlatList
        data={casesData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <>
            <View style={styles.caseItem}>
              <View style={styles.caseCard}>
                <Text style={styles.caseText}>{item.title}</Text>
              </View>
              <Image source={item.image} style={styles.caseImage} />
            </View>
            <View style={styles.borderBottom} />
          </>
        )}
      />
    </View>
  );
};

export default AlertScreen;

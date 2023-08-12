import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { SpeciesData } from "../component/SpeciesData";
const AnimalDetails = () => {
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      data={SpeciesData}
      renderItem={({ item, index }) => {
        return (
          <View>
            <View>
              <Image
                source={require("../assets/leopard.jpg")}
                style={{ width: 200, height: 200 }}
              />
            </View>
            <Text>{item.name}</Text>
            <Text>{item.des}</Text>
            <TouchableOpacity style={{ backgroundColor: "#1E5128" }}>
              <Text>Donate</Text>
            </TouchableOpacity>
          </View>
        );
      }}
    />
  );
};
export default AnimalDetails;

import React from "react";
import { View, Text, ScrollView, FlatList } from "react-native";
import InfoData from "../component/InfoData";
import { SpeciesData } from "../component/SpeciesData";

const Info = () => {
  return (
    <ScrollView>
      <View
        style={{
          backgroundColor: "#1E5128",
          padding: 20,
          borderRadius: 20,
          elevation: 5,
        }}
      >
        <Text
          style={{
            fontSize: 35,
            color: "#E5D9B6",
            fontWeight: "bold",
            paddingTop: 25,
            paddingLeft: 20,
          }}
        >
          Endangered Species
        </Text>
      </View>
      <View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={SpeciesData}
          renderItem={({ item, index }) => {
            return (
              <View>
                <InfoData data={item} />
              </View>
            );
          }}
        />
      </View>
    </ScrollView>
  );
};
export default Info;

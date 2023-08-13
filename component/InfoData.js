import React, { useState } from "react";
import {
  Text,
  View,
  Modal,
  Image,
  ImageBackground,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SpeciesData } from "./SpeciesData";

export default function InfoData({ data }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View
      style={{
        flexDirection: "row",
        gap: 10,
        justifyContent: "center",
        marginTop: 20,
      }}
    >
      <TouchableOpacity
        style={{
          width: "90%",
          borderWidth: 2,
          borderColor: "#1E5128",
          borderRadius: 20,
        }}
        onPress={() => setModalVisible(true)}
      >
        <ImageBackground
          resizeMode="cover"
          source={data.src}
          style={{
            padding: 40,
          }}
          blurRadius={3}
          imageStyle={{ borderRadius: 15 }}
        >
          <Text
            style={{
              fontSize: 15,
              color: "#fff",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            {" "}
            {data.name}
          </Text>
        </ImageBackground>
      </TouchableOpacity>
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View>
                <Image source={data.src} style={{ width: 200, height: 200 }} />
              </View>
              <Text style={styles.modalText}>{data.name}</Text>
              <Text style={styles.modalText}>{data.des}</Text>
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={() => Alert.alert("Success")}
              >
                <Text style={styles.textStyle}>Donate</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: "#1E5128",
  },
  buttonOpen: {
    backgroundColor: "#1E5128",
  },
  buttonClose: {
    backgroundColor: "#1E5128",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    color: "#E5D9B6",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

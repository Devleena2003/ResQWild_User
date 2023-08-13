import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  ScrollView,
} from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import React from "react";
import { data } from "../component/CarouselData";
import DonateScreen from "./donate";

const SLIDER_WIDTH = Dimensions.get("window").width + 80;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.5);

const CarouselCardItem = ({ item, index }) => {
  return (
    <TouchableOpacity>
      <View style={styles.container} key={index}>
        <Text style={styles.header}>{item.title}</Text>
        <Text style={styles.body}>{item.body}</Text>
        <TouchableOpacity>
          <Text
            style={{
              paddingLeft: 20,
              fontWeight: 500,
              paddingTop: 10,
              paddingBottom: 20,
            }}
          >
            Read More
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E5D9B6",
    borderRadius: 8,
    width: 400,
    alignSelf: "center",
  },

  header: {
    color: "#222",
    fontSize: 15,
    fontWeight: "bold",
    padding: 15,
  },
  body: {
    color: "#222",
    fontSize: 15,
    padding: 15,
    marginRight: 30,
  },
});

const CarouselCards = () => {
  const [index, setIndex] = React.useState(0);
  const isCarousel = React.useRef(null);

  return (
    <View>
      <Carousel
        layout="stack"
        ref={isCarousel}
        data={data}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={true}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: "rgba(0, 0, 0, 0.92)",
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
    </View>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View
        style={{
          padding: 20,
          backgroundColor: "#1E5128",
        }}
      >
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: "#E5D9B6",
            paddingTop: 25,
          }}
        >
          ResQWild
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          gap: 5,
          flexWrap: "wrap",
        }}
      >
        <TouchableOpacity
          style={{
            marginTop: 15,
            paddingLeft: 10,

            width: "40%",
          }}
          onPress={() => navigation.navigate("InfoScreen")}
        >
          <ImageBackground
            source={require("../assets/info.jpg")}
            imageStyle={{ borderRadius: 15 }}
            style={{ padding: 25, borderRadius: 15, elevation: 3 }}
            blurRadius={3}
          >
            <Text style={{ fontSize: 23, fontWeight: "bold", color: "#fff" }}>
              Info
            </Text>

            <Text
              style={{
                fontSize: 15,
                fontWeight: "500",
                color: "#E5D9B6",
                paddingTop: 10,
              }}
            >
              Read More
            </Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginTop: 15,
            paddingRight: 10,

            width: "55%",
          }}
          onPress={() => {
            navigation.navigate("ReportScreen");
          }}
        >
          <ImageBackground
            source={require("../assets/info.jpg")}
            imageStyle={{ borderRadius: 15 }}
            style={{ padding: 25, borderRadius: 15, elevation: 3 }}
            blurRadius={3}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>
              Report a Crime
            </Text>

            <Text
              style={{
                fontSize: 15,
                fontWeight: "500",
                color: "#E5D9B6",
                paddingTop: 10,
              }}
            >
              Read More
            </Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginTop: 5,
            paddingLeft: 10,

            width: "55%",
          }}
          onPress={() => navigation.navigate("ResourceScreen")}
        >
          <ImageBackground
            source={require("../assets/info.jpg")}
            imageStyle={{ borderRadius: 15 }}
            style={{ padding: 20, borderRadius: 15, elevation: 3 }}
            blurRadius={3}
          >
            <Text style={{ fontSize: 18, fontWeight: "bold", color: "#fff" }}>
              First Aid & Resources
            </Text>

            <Text
              style={{
                fontSize: 15,
                fontWeight: "500",
                color: "#E5D9B6",
                paddingTop: 10,
              }}
            >
              Read More
            </Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginTop: 5,
            paddingRight: 10,

            width: "40%",
          }}
          onPress={() => navigation.navigate("AlertScreen")}
        >
          <ImageBackground
            source={require("../assets/alert.jpg")}
            imageStyle={{ borderRadius: 15 }}
            style={{ padding: 25, borderRadius: 15, elevation: 3 }}
            blurRadius={3}
          >
            <Text style={{ fontSize: 23, fontWeight: "bold", color: "#fff" }}>
              Alert
            </Text>

            <Text
              style={{
                fontSize: 15,
                fontWeight: "500",
                color: "#E5D9B6",
                paddingTop: 10,
              }}
            >
              Read More
            </Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginTop: 5,
            paddingLeft: 10,

            width: "40%",
          }}
          onPress={() => navigation.navigate("TourScreen")}
        >
          <ImageBackground
            source={require("../assets/forest.jpg")}
            imageStyle={{ borderRadius: 15 }}
            style={{ padding: 25, borderRadius: 15, elevation: 3 }}
            blurRadius={3}
          >
            <Text style={{ fontSize: 23, fontWeight: "bold", color: "#fff" }}>
              Travel
            </Text>

            <Text
              style={{
                fontSize: 15,
                fontWeight: "500",
                color: "#E5D9B6",
                paddingTop: 10,
              }}
            >
              Read More
            </Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginTop: 5,
            paddingRight: 10,

            width: "55%",
          }}
          onPress={() => navigation.navigate(DonateScreen)}
        >
          <ImageBackground
            source={require("../assets/donate.jpg")}
            imageStyle={{ borderRadius: 15 }}
            style={{ padding: 25, borderRadius: 15, elevation: 3 }}
            blurRadius={3}
          >
            <Text style={{ fontSize: 19, fontWeight: "bold", color: "#fff" }}>
              Make a Change
            </Text>

            <Text
              style={{
                fontSize: 15,
                fontWeight: "500",
                color: "#E5D9B6",
                paddingTop: 10,
              }}
            >
              Read More
            </Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#1E5128" }}>
          Trending Now
        </Text>
      </View>
      <CarouselCards onPress={() => navigation.navigate("ResourcesScreen")} />
    </ScrollView>
  );
};
export default HomeScreen;

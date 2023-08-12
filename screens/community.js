import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

const CommunityScreen = () => {
  const [searchText, setSearchText] = useState("");
  const [newDiscussionTitle, setNewDiscussionTitle] = useState("");
  const [newDiscussionContent, setNewDiscussionContent] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [discussionThread, setDiscussionThread] = useState([
    {
      id: 1,
      category: "Conservation",
      title: "Supporting Wildlife Conservation Efforts",
      username: "Arjya",
      leafCnt: 9,
      content:
        "I'm deeply passionate about wildlife conservation and want to contribute to the cause. Can anyone recommend reputable organizations that are actively working to protect endangered species and their habitats? Whether it's through donations, volunteering, or spreading awareness, I'd love to hear about your experiences and suggestions!",
    },
    {
      id: 2,
      category: "Illegal Wildlife Trade Prevention",
      title: "Combatting Illegal Trade of Exotic Species",
      username: "Devleena",
      leafCnt: 11,
      content:
        "Illegal wildlife trade continues to pose a serious threat to our planet's biodiversity. Let's discuss strategies and initiatives aimed at curbing the trade of exotic species. Are there any success stories or organizations making a significant impact in this area? Share your insights and thoughts on how we can collectively address this critical issue.",
    },
    {
      id: 3,
      category: "Conservation",
      title: "Saving the Last of the Tigers",
      username: "Udit",
      leafCnt: 8,
      content:
        "Tigers are on the brink of extinction, and urgent action is needed to save these magnificent creatures. If you're aware of projects, campaigns, or conservation efforts focused on tiger preservation, please share. Let's discuss ways to protect their habitats and ensure a future where tigers roam free in the wild.",
    },
    {
      id: 4,
      category: "Conservation",
      title: "Preserving Our Ecosystem's Biodiversity",
      username: "Ankesh",
      leafCnt: 7,
      content:
        "Biodiversity loss affects not only wildlife but also the balance of our ecosystems. Let's talk about initiatives that aim to protect both plant and animal species. Whether it's reforestation, habitat restoration, or sustainable agriculture, share your knowledge and ideas for promoting a thriving natural world.",
    },
    {
      id: 5,
      category: "Wildlife Sanctuaries,Reserves,Rehabiliation",
      title: "Exploring Wildlife Sanctuaries: Recommendations?",
      username: "Rajarshi",
      leafCnt: 10,
      content:
        "I'm planning to visit wildlife sanctuaries to witness the beauty of animals in their natural habitats. If you've been to any exceptional sanctuaries or reserves, please share your experiences and recommendations. Let's inspire each other to appreciate and protect the incredible wildlife that graces our planet.",
    },
    {
      id: 6,
      category: "Wildlife Sanctuaries,Reserves,Rehabiliation",
      title: "Rehabilitating and Releasing Injured Wildlife",
      username: "Anonymous",
      leafCnt: 5,
      content:
        "Injured or orphaned wildlife often require specialized care and rehabilitation. If you're involved with or know of wildlife rehabilitation centers, let's discuss their vital role in giving injured animals a second chance at life. Share stories of successful releases and the challenges faced by those working tirelessly to ensure the well-being of wildlife.",
    },
  ]);

  const startDiscussion = () => {
    const newDiscussion = {
      id: discussionThread.length + 1,
      category: selectedCategory,
      title: newDiscussionTitle,
      username: "User",
      content: newDiscussionContent,
    };

    setDiscussionThread([...discussionThread, newDiscussion]);

    // Clear new discussion fields after posting
    setNewDiscussionTitle("");
    setNewDiscussionContent("");
  };

  const renderDiscussionThread = ({ item }) => (
    <View style={styles.postContainer}>
      <View style={{ flexDirection: "row" }}>
        <Text style={[styles.username, { marginRight: 5 }]}>
          {item.username}
        </Text>
        <Text style={[styles.username, { color: "darkgreen" }]}>
          {item.leafCnt}
        </Text>
        <Entypo name="leaf" size={20} color="darkgreen" />
      </View>
      <Text>{item.content}</Text>
    </View>
  );

  const renderCategory = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.categoryItem,
        selectedCategory === item ? styles.selectedCategory : null,
      ]}
      onPress={() => setSelectedCategory(item)}
    >
      <Text style={styles.categoryText}>{item}</Text>
    </TouchableOpacity>
  );

  const filteredDiscussions = discussionThread.filter((discussion) => {
    const categoryMatches =
      selectedCategory === "All" || discussion.category === selectedCategory;
    const searchMatches =
      discussion.title.toLowerCase().includes(searchText.toLowerCase()) ||
      discussion.content.toLowerCase().includes(searchText.toLowerCase());

    return categoryMatches && searchMatches;
  });

  return (
    <SafeAreaView>
      <View
        style={{
          padding: 20,
          backgroundColor: "#1E5128",
        }}
      >
        <Text
          style={{
            color: "#E5D9B6",
            fontSize: 30,
            fontWeight: "bold",
            paddingTop: 15,
          }}
        >
          Our Community
        </Text>
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.searchBar}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>

        <View style={styles.categories}>
          <Text style={styles.categoryTitle}>Categories and Topics:</Text>
          <FlatList
            data={[
              "All",
              "Conservation",
              "Illegal Wildlife Trade Prevention",
              "Wildlife Sanctuaries,Reserves,Rehabiliation",
            ]}
            renderItem={renderCategory}
            keyExtractor={(item) => item}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={styles.recentDiscussions}>
          <Text style={styles.discussionTitle}>Recent Discussions:</Text>
          <FlatList
            data={filteredDiscussions}
            renderItem={({ item }) => <Text>{item.title}</Text>}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>

        <View style={styles.newDiscussion}>
          <Text style={styles.discussionTitle}>Start a New Discussion:</Text>
          <TextInput
            style={styles.discussionInput}
            placeholder="Title"
            value={newDiscussionTitle}
            onChangeText={setNewDiscussionTitle}
          />
          <TextInput
            style={styles.discussionInput}
            placeholder="Content"
            value={newDiscussionContent}
            onChangeText={setNewDiscussionContent}
            multiline
          />
          <TouchableOpacity style={styles.postButton} onPress={startDiscussion}>
            <Text style={styles.postButtonText}>Post</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.discussionThread}>
          <Text style={styles.discussionTitle}>Discussion Thread:</Text>
          <FlatList
            data={filteredDiscussions}
            renderItem={renderDiscussionThread}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    padding: 10,
    backgroundColor: "white",
  },
  searchBar: {
    marginBottom: 10,
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    backgroundColor: "white",
  },
  categories: {
    marginBottom: 10,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "darkgreen",
  },
  categoryItem: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
    borderRadius: 5,
    backgroundColor: "darkgreen",
  },
  categoryText: {
    color: "white",
  },
  selectedCategory: {
    backgroundColor: "#edb525",
  },
  recentDiscussions: {
    marginBottom: 10,
  },
  discussionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "darkgreen",
  },
  newDiscussion: {
    marginBottom: 10,
  },
  discussionInput: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: "white",
  },
  postButton: {
    backgroundColor: "darkgreen",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  postButtonText: {
    color: "white",
    textAlign: "center",
  },
  discussionThread: {
    marginBottom: 10,
    // paddingBottom : 50
  },
  postContainer: {
    marginBottom: 10,
    backgroundColor: "white",
    padding: 10,
    // paddingBottom: 70,
  },
  username: {
    fontWeight: "bold",
    marginBottom: 5,
    color: "black",
  },
  notifications: {
    // Add styles for notifications
  },
});

export default CommunityScreen;

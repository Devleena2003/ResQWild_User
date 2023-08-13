import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import { chatbotcall } from "../services/api.ml";

const ChatScreen = () => {
  const [input, setInput] = useState("");
  const [chatlog, setChatlog] = useState([
    { user: "bot", message: "What is the problem?" },
  ]);
  const [reply, setReply] = useState("");

  //   const messageContainerRef = useRef(null);
  //   useEffect(() => {
  //     messageContainerRef.current.scrollTop =
  //       messageContainerRef.current.scrollHeight;
  //   }, [chatlog]);

  const handleSend = async () => {
    // if (newMessage.trim() !== "") {
    //   setMessages([
    //     ...messages,
    //     { id: messages.length + 1, text: newMessage, mine: true },
    //   ]);
    //   setNewMessage("");
    // }
    if (input === "") {
      return;
    }
    let chatlogNew = [...chatlog, { user: "user", message: `${input}` }];
    console.log(...chatlogNew);
    await setInput("");
    await setChatlog(chatlogNew);
    let req = {
      text: `${input}`,
    };
    try {
      const res = await chatbotcall(req);
      console.log("res.data", res.data);
      setReply(res.data.message);
    } catch (error) {
      console.log(error);
    }

    await setChatlog([...chatlogNew, { user: "bot", message: reply }]);
  };

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator
        data={chatlog}
        // keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <View style={{ flexDirection: "row", gap: 10, padding: 20 }}>
              <View
                style={{
                  height: 50,
                  width: 50,
                  padding: 15,
                  borderRadius: 30,
                  backgroundColor: "#d9d9d9",
                }}
              ></View>
              <View
                style={
                  item.user === "user"
                    ? styles.myMessageContainer
                    : styles.otherMessageContainer
                }
              >
                <Text style={styles.messageText}>{item.message}</Text>
              </View>
            </View>
          </View>
        )}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message..."
          value={input}
          onChangeText={setInput}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f5f5f5",
  },
  myMessageContainer: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 20,
    color: "#000",
    marginBottom: 10,
    width: "80%",
  },
  otherMessageContainer: {
    backgroundColor: "#1E5128",
    padding: 15,
    borderRadius: 10,

    marginBottom: 10,
    width: "80%",
  },
  messageText: {
    color: "#000",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    paddingTop: 10,
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: "white",
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  sendButton: {
    paddingHorizontal: 15,
  },
  sendButtonText: {
    color: "#1E5128",
  },
});

export default ChatScreen;

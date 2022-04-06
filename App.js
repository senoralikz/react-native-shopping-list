import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "react-native-get-random-values";
import Header from "./components/Header";

const App = () => {
  const [items, setItems] = useState([
    { id: uuidv4(), text: "Milk" },
    { id: uuidv4(), text: "Eggs" },
    { id: uuidv4(), text: "Bread" },
    { id: uuidv4(), text: "Juice" },
  ]);
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>Welcome to the Journey</Text> */}
      <Header title="Shopping List" />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    // color: '#fff',
    // backgroundColor: '#000',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  text: {
    color: "#fff",
    fontSize: 30,
  },
});

export default App;

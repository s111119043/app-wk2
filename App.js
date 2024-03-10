import React from "react";
import { StyleSheet, StatusBar, SafeAreaView } from "react-native";
import Header from "./components/Header";
import AlbumList from "./components/AlbumList";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Header />
      <AlbumList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#9f8992",
    flex: 1,
  },
});

export default App;
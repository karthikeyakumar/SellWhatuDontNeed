import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import * as Font from "expo-font";
function WelcomScreen(props) {
  console.log("welcomeScreen Executed");

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}>
      <View style={styles.logocontainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.titleText}>Sell What You Don't Need Anymore</Text>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logocontainer: {
    position: "absolute",
    top: 100,
    alignItems: "center",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
export default WelcomScreen;

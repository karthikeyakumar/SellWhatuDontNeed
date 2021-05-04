import { StatusBar } from "expo-status-bar";
import React from "react";

import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  Image,
  Platform,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
} from "react-native";
import ViewImageScreen from "./App/screens/ViewImageScreen";
import WelcomeScreen from "./App/screens/WelcomScreen";
export default function App() {
  console.log("App executed");
  return <WelcomeScreen />;
}

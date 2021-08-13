 import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable ,StatusBar} from "react-native";
import { HomeScreen } from "./screens";
import RootNavigator from "./navigation";

export default function App() {
  return (
    <>
    <StatusBar StatusBar="light-content" />
      <RootNavigator/>
    </>
  );
}

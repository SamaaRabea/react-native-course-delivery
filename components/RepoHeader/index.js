import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import styles from "./style";

function RepoHeader() {
  return (
    <View style={styles.Headercontainer}>
      <Image
        source={{
          uri: "https://cdn0.iconfinder.com/data/icons/shift-logotypes/32/Github-512.png",
        }}
        style={styles.image}
      />
      <Text style={styles.header}>All repositories</Text>
    </View>
  );
}
export { RepoHeader };

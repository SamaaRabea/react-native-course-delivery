import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import styles from "./style";  
function RepoHeader({ imageSrc, text, containerStyle, imageStyle, textStyle }) {
  return (
    <View style={[styles.container, containerStyle]}>
      <Image
        source={imageSrc ? { uri: imageSrc } :{uri: "https://cdn0.iconfinder.com/data/icons/shift-logotypes/32/Github-512.png"}}
        style={styles.image}
      />
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </View>
  );
}

export { RepoHeader };
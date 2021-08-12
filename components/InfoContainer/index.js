import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./style";

function InfoContainer({starsNum,issuseNum,githubNum}) {
  return (
    <View style={styles.container}>
      <View style={styles.smallview}>
        <Ionicons name="star"  color="#ffa31a" style={styles.icon}/>
        <Text style={styles.count}>{starsNum}</Text>
      </View>
      <View style={styles.smallview}>
        <Ionicons name="alert" color="#c00" style={styles.icon}/>
        <Text style={styles.count}>{issuseNum}</Text>
      </View>
      <View style={styles.smallview}>
        <Ionicons name="logo-github" color="#000" style={styles.icon}/>
        <Text style={styles.count}>{githubNum}</Text>
      </View>
    </View>
  );
}
export { InfoContainer };

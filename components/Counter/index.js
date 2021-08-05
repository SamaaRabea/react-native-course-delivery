import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from "react-native";
import styles from './style';
function Counter(){ 
  const [count, newCount] = useState(0);
  const increment = () => {
    newCount((val) => val + 1);
  };
  const decrement = () => {
    newCount((val) => val - 1);
  };
return(
    <View style={styles.container}>
        <Pressable style={styles.button} onPress={() => increment()}>
          <Text style={styles.fonts}>{"+"}</Text>
        </Pressable>
        <Text style={styles.fonts}>{count}</Text>
        <Pressable style={styles.button} onPress={() => decrement()}>
          <Text style={styles.fonts}>{"-"}</Text>
        </Pressable>
  </View>
)
}
export {Counter}
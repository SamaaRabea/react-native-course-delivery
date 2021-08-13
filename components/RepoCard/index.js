import React from "react";
import { Pressable, Text, Image, View } from "react-native";
import styles from "./style";
import { InfoContainer } from "../InfoContainer";
import { limitTextLength } from "../../utils";
function RepoCard({
  image,
  title,
  description,
  starsNumber,
  issuesNumber,
  providerName,
  onPress,
}) {
  return (
    <Pressable style={styles.itemContainer} onPress={onPress}>
      <View style={styles.imagecontainer}>
        <Image
          source={{
            uri: image,
          }}
          style={styles.image}
        />
        <View style={{ overflow: "hidden", width: 280 }}>
          <Text style={styles.title} numberOfLines={1}>
            {limitTextLength(20, title)}
          </Text>
          <Text style={styles.description} numberOfLines={1}>
            {limitTextLength(33, description)}
          </Text>
        </View>
      </View> 
      <View style={styles.infoCardsContainer}>
        <InfoContainer
          iconName={"star"}
          text={starsNumber}
          iconColor={"#F8B703"}
          iconSize={16}
        />
        <InfoContainer
          iconName={"alert"}
          text={issuesNumber}
          iconColor={"#DD1212"}
          iconSize={16}
        />
        <InfoContainer
          iconName={"logo-github"}
          text={providerName}
          iconColor={"#000000"}
          iconSize={16}
        />
      </View>
    </Pressable>
  );
}
export { RepoCard };

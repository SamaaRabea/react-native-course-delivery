import React from "react";
import { Pressable, Text, Image, View } from "react-native";
import styles from "./style";
import {InfoContainer} from "../InfoContainer";
import {limitTextLength} from "../../utils"
function RepoCard({image,title,description,starsNum,issuseNum,githubNum}) {
  return (
    <Pressable style={styles.itemContainer}>
      <View style={styles. imagecontainer}>
        <Image
          source={{
            uri:image
          }}
          style={styles.image}
        />
        <View style={{overflow:'hidden',width:280}}>
          
          <Text style={styles.title} numberOfLines={1}>{limitTextLength(20,title)}</Text>
          <Text style={styles.description} numberOfLines={1}>{limitTextLength(33,description)}</Text>
        </View>
      </View>
      <InfoContainer starsNum={starsNum} issuseNum={issuseNum} githubNum={githubNum}/>
    </Pressable>
  );
}
export { RepoCard };

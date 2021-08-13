import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center", 
    width: 110,
    height: 110,
    shadowColor:"#000", 
    borderColor:"#f7f7f7",
    borderWidth:2,
    shadowOffset: {
      width: 0,
      height: 3,

    },
    shadowOpacity: 0.2,
    shadowRadius: 2.22,
    elevation: 3,
  },
  infoText: {
    fontSize: 15,
    textAlign: "center",
  },
  infoNumber: {
    fontSize: 13,
    textAlign: "center",
    lineHeight: 24,
  },
});
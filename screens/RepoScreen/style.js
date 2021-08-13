import { StyleSheet } from "react-native";

export default StyleSheet.create({
  header: {
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E7E7E7",
    height:110,
    paddingVertical:20
  },
  headerText: {
    color: "#000000", 
    paddingEnd:50,
    marginRight:20,
    paddingVertical:20

  },
  description: {
    fontSize: 18,
    color: "#656565",
  },
  contentContainer: {
    paddingHorizontal: 16,
    // paddingTop: 2,
  },
  btn: {
    backgroundColor: "teal",
    marginTop: 14,
    alignSelf: "center",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  btnText: {
    color: "#FFFFFF",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 16,
  },
});
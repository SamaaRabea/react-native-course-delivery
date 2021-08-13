import { StyleSheet } from "react-native";
export default StyleSheet.create({
  itemContainer: {
    backgroundColor: "#fff",
    shadowColor: "#000",
    borderRadius: 8,
    paddingVertical:14,
    paddingHorizontal:16,
    marginBottom:20,
    shadowOffset: {
      width: 0,
      height: 3,

    },
    shadowOpacity: 0.2,
    shadowRadius: 2.22,
    elevation: 3,
  },
  infoCardsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingTop:10
  },
  image: {
    width: 60,
    height: 60, 
    marginEnd:10,
    // backgroundColor:"#f00"
  },
  imagecontainer: {
    flexDirection: "row",
  },
  title:{
      fontSize:17,
      // paddingRight:60
  }
});

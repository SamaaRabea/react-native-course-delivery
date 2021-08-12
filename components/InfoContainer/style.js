import { StyleSheet } from "react-native";
export default StyleSheet.create({
   count:{
       fontSize:14
   },
   container:{
       flexDirection:'row',
       justifyContent:'space-evenly',
    //    backgroundColor:'#f00',
       marginTop:12,

   },
   smallview:{
       backgroundColor:'#fff',
       flexDirection:'row',
       paddingHorizontal:6,
       paddingVertical:4,
       borderRadius:10,
       shadowOffset: {
        width: 0,
        height: 3,
  
      },
      shadowOpacity: 0.2,
      shadowRadius: 2.22,
      elevation:3
   },
   icon:{
       fontSize:20
   }

});

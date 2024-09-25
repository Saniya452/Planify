import { StyleSheet, Dimensions } from "react-native";
import colors from "../../../components/constants/colors";

const { width, height } = Dimensions.get("window");

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: width * 0.05, // 5% margin on horizontal
    justifyContent: 'center', // Center content vertically
  },
  footerText: {
    color: colors.grey,
    fontSize: width * 0.04, // Responsive font size (4% of screen width)
    textAlign: 'center',
    marginTop: height * 0.02, // Responsive margin
    marginBottom: height * 0.05, // Responsive spacing below footer text
  },
  footerLink: {
    color: colors.purple,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: height * 0.015, // Responsive vertical margin for better spacing
  },
  agreeText: {
    color: colors.grey,
    fontSize: width * 0.035, // Responsive font size (3.5% of screen width)
    marginLeft: width * 0.02, // Responsive margin left
  },
  link: {
    textDecorationLine: 'underline',
  },
});

export default style;




// import { Dimensions, StyleSheet } from "react-native";
// import colors from "../../../components/constants/colors";

// const { width } = Dimensions.get("window");

// const style = StyleSheet.create({
//   container: {
//     flex:1,
//     marginHorizontal: width * 0.06, // Responsive horizontal margin
//   },
//   footerText:{
//     color:colors.grey,
//     fontSize: width * 0.038, // Responsive font size
//     textAlign:'center',
//     marginTop: 18
//   },
//   footerLink:{
//     color:colors.purple,
//     fontWeight: 'bold'
//   },
//   button:{
//     color:colors.blue
//   },
//   row:{
//     flexDirection:'row',
//     alignItems:'center',
//     marginVertical: 16
//   },
//   agreeText:{
//     color: colors.grey,
//     fontSize: width * 0.03, // Responsive font size
//     marginLeft: 8 
//   },
//   link:{
//     textDecorationLine:'underline'
//   }
// });

// export default style;
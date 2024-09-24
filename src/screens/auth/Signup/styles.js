import { StyleSheet } from "react-native";
import colors from "../../../components/constants/colors";

const style = StyleSheet.create({
  container: {
    flex:1,
    marginHorizontal: 24,
  },
  footerText:{
    color:colors.grey,
    fontSize: 15,
    textAlign:'center',
    marginTop: 18
  },
  footerLink:{
    color:colors.purple,
    fontWeight: 'bold'
  },
  button:{
    color:colors.blue
  }
});

export default style;
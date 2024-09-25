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
  },
  row:{
    flexDirection:'row',
    alignItems:'center',
    marginVertical: 16
  },
  agreeText:{
    color: colors.grey,
    fontSize: 12,
    marginLeft: 8 
  },
  link:{
    textDecorationLine:'underline'
  }
});

export default style;
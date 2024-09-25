import {Dimensions, StyleSheet} from "react-native";
import colors from "../constants/colors";

const { width } = Dimensions.get("window");

const style = StyleSheet.create ({
    container:{
        borderWidth:1,
        borderColor: colors.purple,
        borderRadius: 3,
        height: width * 0.045, // Responsive checkbox size
        width: width * 0.045, // Responsive checkbox size
        justifyContent:'center',
        alignItems:'center'
    },
    innerSquare:{
        width: width * 0.025, // Responsive inner square size
        height: width * 0.025, // Responsive inner square size
        backgroundColor: colors.purple 
    },
    checkedBox:{
         borderWidth:2, 
     },
    
});

export default style;
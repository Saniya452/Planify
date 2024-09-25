import {StyleSheet} from "react-native";
import colors from "../constants/colors";

const style = StyleSheet.create ({
    container:{
        borderWidth:1,
        borderColor: colors.purple,
        borderRadius: 3,
        height:18,
        width:18,
        justifyContent:'center',
        alignItems:'center'
    },
    innerSquare:{
        width: 10,
        height: 10,
        backgroundColor: colors.purple 
    },
    checkedBox:{ borderWidth:2 },
    
});

export default style;
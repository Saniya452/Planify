import {StyleSheet} from "react-native";
import colors from "../constants/colors";
// import colors from "../Constants/colors";

const styles = StyleSheet.create ({
    container:{
        backgroundColor:colors.purple,
       // flex: 1,
        // flexDirection: 'row',
        //alignItems: 'center',
        //justifyContent: 'center',
        borderRadius: 10,
        padding: 13,
        marginVertical: 8
    },
    text:{
        color: colors.white,
        fontSize:18,
        fontWeight: "bold",
        textAlign: 'center'
    },
    blueBg:{
        backgroundColor:colors.blue,
    }

})

export default styles;
import { StyleSheet, Dimensions } from "react-native";
import colors from "../../../components/constants/colors";

const { width, height } = Dimensions.get("window");

 const style = StyleSheet.create({
    container:{
        flex:1,  
    },
    image: {
        width: '100%',
        flex:1,
        height: height * 0.5, // Adjusts based on 50% of the screen height
    },
    content:{
        padding: width * 0.06, // Responsive padding
        paddingTop:0,
        backgroundColor: colors.white
       
    },
    title:{
        color: colors.black,
        textAlign: 'center',
        fontSize: width * 0.055, // Responsive font size
        fontWeight:'bold'
    },
    subtitle:{
        color: colors.grey,
        textAlign: 'center',
        fontSize: width * 0.035, // Responsive font size
        marginVertical: 12

    },
    footer:{
        position:'absolute',
        bottom: 0,
        height: height * 0.05, // Responsive footer height
        width:'100%',
        backgroundColor:colors.white,
        borderTopRightRadius:30,
        borderTopLeftRadius:30
    }
    
 })

 export default style;
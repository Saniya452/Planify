import { StyleSheet, Dimensions } from "react-native";
import colors from "../../../components/constants/colors";

 const style = StyleSheet.create({
    container:{
        flex:1,  
    },
    image: {
        width: '100%',
        flex:1
    },
    content:{
        padding: 26,
        paddingTop:0,
        backgroundColor: colors.white
       
    },
    title:{
        color: colors.black,
        textAlign: 'center',
        fontSize: 22,
        fontWeight:'bold'
    },
    subtitle:{
        color: colors.grey,
        textAlign: 'center',
        fontSize: 14,
        marginVertical: 12

    },
    footer:{
        position:'absolute',
        bottom: 0,
        height: 30,
        width:'100%',
        backgroundColor:colors.white,
        borderTopRightRadius:30,
        borderTopLeftRadius:30
    }
    
 })

 export default style;
import {Dimensions, StyleSheet} from "react-native";
import colors from "../constants/colors";

const { width, height } = Dimensions.get("window");

const style = StyleSheet.create ({
    title:{
        color: colors.black,
        fontSize: width * 0.07, // Responsive font size (7% of screen width)
        fontWeight: "bold",
        paddingVertical: height * 0.03, // Responsive padding (3% of screen height)
        marginTop: height * 0.035, // Responsive margin (3.5% of screen height)
        marginBottom: height * 0.002, // Responsive margin (3.5% of screen height)
    },
    
})

export default style;
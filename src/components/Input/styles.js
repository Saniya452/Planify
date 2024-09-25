import { StyleSheet, Dimensions } from "react-native";
import colors from "../constants/colors";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.lightgrey,
    paddingHorizontal: width * 0.06, // Responsive horizontal padding (6% of screen width)
    paddingVertical: height * 0.015, // Responsive vertical padding (1.5% of screen height)
    borderRadius: 10,
    color: colors.black,
    marginVertical: height * 0.01, // Reduced vertical margin (1% of screen height)
    fontSize: width * 0.04, // Responsive font size (4% of screen width)
  },
});

export default styles;

import { StyleSheet, Dimensions } from "react-native";
import colors from "../constants/colors";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.purple,
    borderRadius: 10,
    paddingVertical: height * 0.02, // Responsive vertical padding (2% of screen height)
    paddingHorizontal: width * 0.05, // Responsive horizontal padding (5% of screen width)
    marginVertical: height * 0.01, // Responsive vertical margin (1% of screen height)
  },
  text: {
    color: colors.white,
    fontSize: width * 0.045, // Responsive font size (4.5% of screen width)
    fontWeight: "bold",
    textAlign: "center",
  },
  blueBg: {
    backgroundColor: colors.blue,
  },
});

export default styles;

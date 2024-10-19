import { Dimensions, StyleSheet } from "react-native";
import colors from "../constants/colors";

const { width, height } = Dimensions.get("window");

const style = StyleSheet.create({
  title: {
    color: colors.black,
    fontSize: width * 0.07,
    fontWeight: "bold",
    paddingVertical: height * 0.03,
    marginTop: height * 0.035,
    marginBottom: height * 0.003,
  },
});

export default style;

import { Dimensions, StyleSheet } from "react-native";
import colors from "../constants/colors";

const { width } = Dimensions.get("window");

const style = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.purple,
    borderRadius: 3,
    height: width * 0.045,
    width: width * 0.045,
    justifyContent: "center",
    alignItems: "center",
  },
  innerSquare: {
    width: width * 0.025,
    height: width * 0.025,
    backgroundColor: colors.purple,
  },
  checkedBox: {
    borderWidth: 2,
  },
});

export default style;

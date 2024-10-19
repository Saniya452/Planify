import { StyleSheet, Dimensions } from "react-native";
import colors from "../constants/colors";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.lightgrey,
    paddingHorizontal: width * 0.06,
    paddingVertical: height * 0.015,
    borderRadius: 10,
    color: colors.black,
    marginVertical: height * 0.01,
    fontSize: width * 0.04,
  },
});

export default styles;

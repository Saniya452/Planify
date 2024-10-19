import { StyleSheet, Dimensions } from "react-native";
import colors from "../constants/colors";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.purple,
    borderRadius: 10,
    paddingVertical: height * 0.02,
    paddingHorizontal: width * 0.05,
    marginVertical: height * 0.01,
  },
  text: {
    color: colors.white,
    fontSize: width * 0.045,
    fontWeight: "bold",
    textAlign: "center",
  },
  blueBg: {
    backgroundColor: colors.blue,
  },
});

export default styles;

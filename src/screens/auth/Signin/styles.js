import { Dimensions, StyleSheet } from "react-native";
import colors from "../../../components/constants/colors";

const { width } = Dimensions.get("window");

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: width * 0.06,
  },
  footerText: {
    color: colors.grey,
    fontSize: width * 0.038,
    textAlign: "center",
    marginTop: 28,
  },
  footerLink: {
    color: colors.purple,
    fontWeight: "bold"
  }
});

export default style;

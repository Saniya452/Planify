import { StyleSheet, Dimensions } from "react-native";
import colors from "../../../components/constants/colors";

const { width, height } = Dimensions.get("window");

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: width * 0.05, 
    justifyContent: "center",
  },
  footerText: {
    color: colors.grey,
    fontSize: width * 0.04, 
    textAlign: "center",
    marginTop: height * 0.02, 
    marginBottom: height * 0.05, 
  },
  footerLink: {
    color: colors.purple,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: height * 0.015, 
  },
  agreeText: {
    color: colors.grey,
    fontSize: width * 0.035,
    marginLeft: width * 0.02, 
  },
  link: {
    textDecorationLine: "underline",
  },
});

export default style;

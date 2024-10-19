import { StyleSheet, Dimensions } from "react-native";
import colors from "../../../components/constants/colors";

const { width, height } = Dimensions.get("window");

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    flex: 1,
    height: height * 0.5,
  },
  content: {
    padding: width * 0.06,
    paddingTop: 0,
    backgroundColor: colors.white,
  },
  title: {
    color: colors.black,
    textAlign: "center",
    fontSize: width * 0.055,
    fontWeight: "bold",
  },
  subtitle: {
    color: colors.grey,
    textAlign: "center",
    fontSize: width * 0.035,
    marginVertical: 12,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    height: height * 0.05,
    width: "100%",
    backgroundColor: colors.white,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
});

export default style;

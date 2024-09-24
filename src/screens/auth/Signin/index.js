import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import styles from "./styles";
import Button from "../../../components/Button";
import Title from "../../../components/Title";
import Input from "../../../components/Input";

const Signin = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Title>Welcome back!</Title>

      <Input placeholder="Email" />
      <Input placeholder="Password" />

      <Button>Login </Button>

      <Text style={styles.footerText}>
        Not Registered?
        <Text
          onPress={() => navigation.navigate("Signup")}
          style={styles.footerLink}>
          {" "}
          Sign up!
        </Text>
      </Text>
    </SafeAreaView>
  );
};
export default React.memo(Signin);

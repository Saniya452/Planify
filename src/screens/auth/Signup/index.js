import React, { useState } from "react";
import { Linking, SafeAreaView, Text, View, Alert } from "react-native";
import Button from "../../../components/Button";
import styles from "./styles";
import Title from "../../../components/Title";
import Input from "../../../components/Input";
import Checkbox from "../../../components/Checkbox";
import { auth } from "../../../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreed, setAgreed] = useState(false);

  const onCheckboxPress = () => {
    setAgreed((value) => !value);
  };

  const signUp = async () => {
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match!");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("User signed up:", user);
      Alert.alert("Success", "Your account has been created!");
      navigation.navigate("Signin");
    } catch (error) {
      console.error("Error signing up:", error.message);
      Alert.alert("Error", error.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Title>Join the hub!</Title>
      <Input placeholder="First Name" />
      <Input placeholder="Last Name" />
      <Input
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <Input
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Input
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <View style={styles.row}>
        <Checkbox checked={agreed} onPress={onCheckboxPress} />
        <Text style={styles.agreeText}>
          I agree to Terms and Conditions and Privacy policy
        </Text>
      </View>
      <Button onPress={signUp}>Create Account</Button>
      <Text style={styles.footerText}>
        Already Registered?
        <Text
          onPress={() => navigation.navigate("Signin")}
          style={styles.footerLink}
        >
          {" "}
          Sign in!
        </Text>
      </Text>
    </SafeAreaView>
  );
};

export default React.memo(Signup);

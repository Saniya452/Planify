import React, { useState } from "react";
import { Linking, SafeAreaView, Text, View, Dimensions } from "react-native";
import Button from "../../../components/Button";
import styles from "./styles";
import Title from "../../../components/Title";
import Input from "../../../components/Input";
import Checkbox from "../../../components/Checkbox";
import {
  PRIVACY_POLICY_LINK,
  TERMS_CONDITIONS_LINK,
} from "../../../components/constants/links";

const { width, height } = Dimensions.get("window");

const Signup = ({ navigation }) => {
  const [agreed, setAgreed] = useState(false);

  const onCheckboxPress = () => {
    setAgreed((value) => !value);
  };
  const onLinkPress = (url) => {
    Linking.openURL(url);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Title>Join the hub!</Title>
      <Input placeholder="First Name" />
      <Input placeholder="Last Name" />
      <Input placeholder="Email" keyboardType="email-address" />
      <Input placeholder="Password" secureTextEntry />
      <Input placeholder="Confirm Password" secureTextEntry />

      <View style={styles.row}>
        <Checkbox checked={agreed} onPress={onCheckboxPress} />
        <Text style={styles.agreeText}>
          I agree to
          <Text
            style={styles.link}
            onPress={() => onLinkPress(TERMS_CONDITIONS_LINK)}
          >
            {" "}
            Terms and Conditions
          </Text>{" "}
          and
          <Text
            style={styles.link}
            onPress={() => onLinkPress(PRIVACY_POLICY_LINK)}
          >
            {" "}
            Privacy policy
          </Text>
        </Text>
      </View>

      <Button type={"blue"}>Create Account</Button>

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





// import React, { useState } from "react";
// import { Linking, SafeAreaView, Text, View } from "react-native";
// import Button from "../../../components/Button";
// import styles from "./styles";
// import Title from "../../../components/Title";
// import Input from "../../../components/Input";
// import Checkbox from "../../../components/Checkbox";
// import {
//   PRIVACY_POLICY_LINK,
//   TERMS_CONDITIONS_LINK,
// } from "../../../components/constants/links";

// const Signup = ({ navigation }) => {
//   const [agreed, setAgreed] = useState(false);

//   const onCheckboxPress = () => {
//     setAgreed((value) => !value);
//   };
//   const onLinkPress = (url) => {
//     Linking.openURL(url);
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <Title> Join the hub! </Title>
//       <Input placeholder="First Name" />
//       <Input placeholder="Last Name" />
//       <Input placeholder="Email" keyboardType="email-address" />
//       <Input placeholder="Password" secureTextEntry />
//       <Input placeholder="Confirm Password" secureTextEntry />

//       <View style={styles.row}>
//         <Checkbox checked={agreed} onPress={onCheckboxPress} />

//         <Text style={styles.agreeText}>
//           I agree to
//           <Text
//             style={styles.link}
//             onPress={() => onLinkPress(TERMS_CONDITIONS_LINK)}
//           >
//             {" "}
//             Terms and Conditions
//           </Text>{" "}
//           and
//           <Text
//             style={styles.link}
//             onPress={() => onLinkPress(PRIVACY_POLICY_LINK)}
//           >
//             {" "}
//             Privacy policy
//           </Text>
//         </Text>
//       </View>

//       <Button type={"blue"}>Create Account</Button>
//       <Text style={styles.footerText}>
//         Already Registered?
//         <Text
//           onPress={() => navigation.navigate("Signin")}
//           style={styles.footerLink}
//         >
//           {" "}
//           Sign in!
//         </Text>
//       </Text>
//     </SafeAreaView>
//   );
// };
// export default React.memo(Signup);

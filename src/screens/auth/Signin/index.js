import React from "react";
import { SafeAreaView } from "react-native"
import styles from "./styles";
import Button from "../../../components/Button";

const Signin = () => {
    return(
        <SafeAreaView style={styles.container}>
            <Button>login</Button>
      </SafeAreaView>
    )
}
export default React.memo(Signin);

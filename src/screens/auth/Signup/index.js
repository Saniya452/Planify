import React from 'react';
import { SafeAreaView, View } from "react-native";
import Button from '../../../components/Button';
import styles from './styles';

const Signup = () => {
    return(
        <SafeAreaView style={styles.container} >
            <Button>Signup</Button>
      </SafeAreaView>
    )
}
export default React.memo(Signup);

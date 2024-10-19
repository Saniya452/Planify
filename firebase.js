import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyDav4GAT3FeWJiGj_gfLSivojsjVrOsmV8",
  authDomain: "planify-7ecf1.firebaseapp.com",
  projectId: "planify-7ecf1",
  storageBucket: "planify-7ecf1.appspot.com",
  messagingSenderId: "622018762836",
  appId: "1:622018762836:web:8e7ff867074f5ca94bb5c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence (AsyncStorage),
});
// const auth = getAuth(app);

export { auth };

import { LogBox } from 'react-native';
LogBox.ignoreLogs(['@firebase/auth']);

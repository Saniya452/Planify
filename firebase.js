import { initializeApp, getApps, getApp } from "firebase/app";
import {
  initializeAuth,
  getAuth,
  getReactNativePersistence,
} from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDav4GAT3FeWJiGj_gfLSivojsjVrOsmV8",
  authDomain: "planify-7ecf1.firebaseapp.com",
  projectId: "planify-7ecf1",
  storageBucket: "planify-7ecf1.appspot.com",
  messagingSenderId: "622018762836",
  appId: "1:622018762836:web:8e7ff867074f5ca94bb5c1",
};

let app;
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

let auth;
if (!getAuth().app) {
  auth = initializeAuth(app, {});
} else {
  auth = getAuth();
}

export { auth };

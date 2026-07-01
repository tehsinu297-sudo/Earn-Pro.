// Firebase Configuration for EarnPro
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA2qFFGnMJH1CD5gSrVE4WJM7RlyY0GEGE",
  authDomain: "earnpro-81a87.firebaseapp.com",
  projectId: "earnpro-81a87",
  storageBucket: "earnpro-81a87.firebasestorage.app",
  messagingSenderId: "870626732031",
  appId: "1:870626732031:web:b50ee2710c221a4b9769ca",
  measurementId: "G-WNDQF52FJD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };

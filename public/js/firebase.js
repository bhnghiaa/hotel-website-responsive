// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB69D_wXoQ8XdmZ6Kfw6a91W2N1Gdi3Eao",
    authDomain: "hotel-web-70673.firebaseapp.com",
    projectId: "hotel-web-70673",
    storageBucket: "hotel-web-70673.appspot.com",
    messagingSenderId: "453367099469",
    appId: "1:453367099469:web:ef84276c727d5478c2ec04",
    measurementId: "G-TR6X8L3MK6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
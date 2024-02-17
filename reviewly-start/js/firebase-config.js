// Get your configuration here: https://console.firebase.google.com/project/_/settings/general/web:

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGIYQW_URyXFy3tw1I8yraWGG-6iONzM4",
  authDomain: "ai-extensions-codelab-dcf62.firebaseapp.com",
  projectId: "ai-extensions-codelab-dcf62",
  storageBucket: "ai-extensions-codelab-dcf62.appspot.com",
  messagingSenderId: "794519732796",
  appId: "1:794519732796:web:97f26397e134d2b373b939",
  measurementId: "G-C805T8Q6KS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyB059QqtnBPBVpoP9XDWdTE5q-2N-vuT60",
    authDomain: "fir-a9d4d.firebaseapp.com",
    projectId: "fir-a9d4d",
    storageBucket: "fir-a9d4d.appspot.com",
    messagingSenderId: "118041568771",
    appId: "1:118041568771:web:dbe1dba3ca50956e0f1036",
    measurementId: "G-JDHMXLDMFK"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
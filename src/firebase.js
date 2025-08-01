import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAAoFeATgKYfs4MZOFjGuKwbYI-WGV3HEk",
  authDomain: "clase-f281e.firebaseapp.com",
  projectId: "clase-f281e",
  storageBucket: "clase-f281e.firebasestorage.app",
  messagingSenderId: "781603186079",
  appId: "1:781603186079:web:0dc80a447987c09c3009aa",
  measurementId: "G-F24NKJSMCK"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const analytics = getAnalytics(firebaseApp);

export { auth, analytics };
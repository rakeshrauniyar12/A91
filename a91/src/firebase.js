import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDOW2GfOthXWxk8w5rqWfsRcAWt3evJQYQ",
  authDomain: "a91-8f7fd.firebaseapp.com",
  projectId: "a91-8f7fd",
  storageBucket: "a91-8f7fd.firebasestorage.app",
  messagingSenderId: "106832494037",
  appId: "1:106832494037:web:a2aabae9263125d004915c",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { provider, auth };

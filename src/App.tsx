import "./App.css";
import LandingPage from "./components/LandingPage";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import Signin from "./components/Signin";

const firebaseConfig = {
  apiKey: "AIzaSyCcjLZn-QwgJWUEZl9EK_CU3ouAjKxha4U",
  authDomain: "leetcode-clone-2fca7.firebaseapp.com",
  projectId: "leetcode-clone-2fca7",
  storageBucket: "leetcode-clone-2fca7.appspot.com",
  messagingSenderId: "696008388519",
  appId: "1:696008388519:web:c76e6d21f979b996b95082",
  measurementId: "G-0YMSK1V5ZK",
};

const app = initializeApp(firebaseConfig);

export default function App() {
  return (
    <h1 className="">
      <Signin />
    </h1>
  );
}

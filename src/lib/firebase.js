import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: import.meta.env.VITE_API_KEY,
	authDomain: "usechat-2e600.firebaseapp.com",
	projectId: "usechat-2e600",
	storageBucket: "usechat-2e600.appspot.com",
	messagingSenderId: "437379623611",
	appId: "1:437379623611:web:0b11dc2adb94b6281b979e",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();

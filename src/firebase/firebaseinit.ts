// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyA_VBujsSvC1N6Ts768C-Eq9BqwaPKKA7E",
	authDomain: "kitade-shift-kanri.firebaseapp.com",
	databaseURL:
		"https://kitade-shift-kanri-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "kitade-shift-kanri",
	storageBucket: "kitade-shift-kanri.appspot.com",
	messagingSenderId: "831001752310",
	appId: "1:831001752310:web:66f3814d443cfefdc5f2d7",
}

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig)

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase
const FirebaseConfig = () => {
	// initializeApp({
	// 	apiKey: 'AIzaSyAvumc_J9EK7kiK0A4yxSRPILvWWPjEXv8',

	// 	authDomain: 'red-onion-18efd.firebaseapp.com',

	// 	projectId: 'red-onion-18efd',

	// 	storageBucket: 'red-onion-18efd.appspot.com',

	// 	messagingSenderId: '711759647934',

	// 	appId: '1:711759647934:web:51a46d65c5fc3766163aef',
	// });
	initializeApp({
		apiKey: process.env.REACT_APP_API_KEY,
		authDomain: process.env.REACT_APP_AUTH_DOMAIN,
		projectId: process.env.REACT_APP_PROJECT_ID,
		storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
		messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
		appId: process.env.REACT_APP_APP_ID,
	});
};

export default FirebaseConfig;

import { useEffect, useState } from 'react';
import {
	GoogleAuthProvider,
	getAuth,
	signInWithPopup,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	updateProfile,
	onAuthStateChanged,
	signOut,
} from 'firebase/auth';
import FirebaseConfig from '../firebase.config';

FirebaseConfig();
const useFirebase = () => {
	const [user, setUser] = useState([]);
	const [loading, setLoading] = useState(true);

	const googleProvider = new GoogleAuthProvider();
	const auth = getAuth();
	const handleGoogleLogin = () => {
		signInWithPopup(auth, googleProvider)
			.then(res => {
				const user = res.user;
				setUser(user);
				setLoading(false);
			})
			.finally(() => setLoading(false));
	};
	const handleLogin = (email, password) => {
		signInWithEmailAndPassword(auth, email, password)
			.then(res => {
				const user = res.user;
				setUser(user);
				setLoading(false);
			})
			.catch(e => console.log(e.message))
			.finally(() => setLoading(false));
	};

	const handleRegister = (name, email, password) => {
		createUserWithEmailAndPassword(auth, email, password)
			.then(res => {
				setLoading(false);
				setName(name);
				alert('Registration Successful');
			})
			.catch(e => alert(e.message))
			.finally(() => setLoading(false));
	};
	const setName = name => {
		updateProfile(auth.currentUser, {
			displayName: name,
		});
	};

	useEffect(() => {
		onAuthStateChanged(auth, user => {
			if (user) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/firebase.User
				setUser(user);
				setLoading(false);
				// ...
			} else {
				// User is signed out
				// ...
			}
		});
	}, [auth]);

	const logout = () => signOut(auth).then(() => setUser([]));

	return {
		user,
		loading,
		handleGoogleLogin,
		handleLogin,
		handleRegister,
		logout,
	};
};

export default useFirebase;

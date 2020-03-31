import * as firebase from 'firebase';

// for the firebase database updates on the website, I had to run the promises.js file plus running the dev-server



//Firebase does not support arrays

const firebaseConfig = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.FIREBASE_DATABASE_URL,
	projectId: process.env.FIREBASE_PROJECT_ID,
	storageBucket: process.env.FIREBASE_STORAGE_BUCKETS,
	messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.FIREBASE_APP_ID,
	measurementId: process.env.FIREBASE_MEASUREMENT_ID
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
googleAuthProvider.setCustomParameters({
	prompt: 'select_account'
});

export{firebase,googleAuthProvider,database as default}












// database.ref('expenses').once('value').then((snapshot)=>{
// 	const expenses = []
	
// 	snapshot.forEach(childSnapshot=>{
		
// 		expenses.push({
// 			id: childSnapshot.key,
// 			...childSnapshot.val()
// 		})
		
// 	})
// 	console.log(expenses)
	
// })
// database.ref('expenses').on('value',(snapshot)=>{
// 	// console.log(snapshot.val())
// 	const expenses = []
// 	snapshot.forEach(childSnapshot=>{
		
// 		expenses.push({
// 			id: childSnapshot.key,
// 			...childSnapshot.val()
// 		})
		
// 	})
// 	console.log(expenses)

// })








// database.ref('expenses').push({
// 	description: 'water bill',
// 	note: '',
// 	amount: 100,
// 	createdAt: 105000
// });


// database.ref('expenses').push({
// 	description: 'water bill',
// 	note: '',
// 	amount: 100,
// 	createdAt: 105000
// });

// database.ref('expenses').once('value').then((snapshot)=>{
// 	console.log(snapshot.val())

// })





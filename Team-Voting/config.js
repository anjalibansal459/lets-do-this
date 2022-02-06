import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD7KznSHvbp5qC3hTY03iaPyUL3GT2S6c4",
    authDomain: "teamvotingapp-dbf18.firebaseapp.com",
    projectId: "teamvotingapp-dbf18",
    storageBucket: "teamvotingapp-dbf18.appspot.com",
    messagingSenderId: "269656757755",
    appId: "1:269656757755:web:6243ed8f3e9c8191a6e75e"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

export default firebase.database();
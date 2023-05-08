import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

try {
    firebase.initializeApp({
        databaseURL: 'https://api.themoviedb.org/3/genre', 
    })
}
catch (err) {
    console.error('Firebase init error')
}

const root = firebase.database().ref('v0');

export default root;
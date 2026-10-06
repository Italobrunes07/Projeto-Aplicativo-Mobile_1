import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyAwUK6mZSZTDLKPdLohL_i2pHrS43P0ryk',
    authDomain: 'saas-fe0cb.firebaseapp.com',
    projectId: 'saas-fe0cb',
    storageBucket: 'saas-fe0cb.firebasestorage.app',
    messagingSenderId: '473580415741',
    appId: '1:473580415741:web:5639598c502e19d5996c94',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

export default app;
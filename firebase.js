// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA0vo5h0gQ12Km5co02HAdCNt7-QNwwJk4',
  authDomain: 'instagram-cloning-efc22.firebaseapp.com',
  projectId: 'instagram-cloning-efc22',
  storageBucket: 'instagram-cloning-efc22.appspot.com',
  messagingSenderId: '1087277217858',
  appId: '1:1087277217858:web:a7767a7457307a51e8d5db',
}

// Initialize Firebase, if there is no app initialized, w initialize an app. if we have an app initialized, we get the app we initialized.
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export {app, db, storage}
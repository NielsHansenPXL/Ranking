import firebase from 'firebase/app'
import 'firebase/database'

export const db = firebase
  .initializeApp({ databaseURL: "https://babyproject-fbee0.firebaseio.com" })
  .database();

/*
const app = initializeApp({
  apiKey: "AIzaSyCK92vsedUZs2BcHt-6Q_-BaVCPuboDpXI",
  authDomain: "babyproject-fbee0.firebaseapp.com",
  databaseURL: "https://babyproject-fbee0.firebaseio.com",
  projectId: "babyproject-fbee0",
  storageBucket: "babyproject-fbee0.appspot.com",
  messagingSenderId: "34654236947",
  appId: "1:34654236947:web:5647ff3a7d88c88d6c6ae6",
  measurementId: "G-SS2PPN2S7S"
}); */

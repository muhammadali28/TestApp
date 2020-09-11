import * as firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyBRRlYMCY2qzwBIGGdJ3gZ2FzgCmsYTC-A",
    authDomain: "stones-blog-e0bdb.firebaseapp.com",
    databaseURL: "https://stones-blog-e0bdb.firebaseio.com",
    projectId: "stones-blog-e0bdb",
    storageBucket: "stones-blog-e0bdb.appspot.com",
    messagingSenderId: "280023596519",
    appId: "1:280023596519:web:17323acadaf26d60dfd142"
};
// Initialize Firebase
 const fire = firebase.initializeApp(firebaseConfig);
export default fire;

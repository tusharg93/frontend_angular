/**
 * Created by maphishaphanbuh on 14/08/17.
 */


importScripts('https://www.gstatic.com/firebasejs/3.6.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.6.1/firebase-messaging.js');
var configMc4kFire = {
    // apiKey: "AIzaSyCh8WyPBrDRUcqxhZ2LvcuwQ9E481CEUu8",//local
    apiKey:"AIzaSyBGaGgqBEuBUCItJ9VGm9sKCtgGnnEsMGI",//live
    apiToken : "AAAAANU6cdc:APA91bFMv5MQpaCCmQZdI2ZB3O64FtDQjFjr6aNljCfBE0DvDVfqKi6xejR9F_a7UuR4HTVAxzxMxU3p4W-4Msw5jN0XFSX84rJ5BOa7BBPvjq9VJfqY4SJkiD6SIoHtc1v6CkNdDgQN",//api
    authDomain: "api-project-3577377239.firebaseapp.com",
    databaseURL: "https://api-project-3577377239.firebaseio.com",
    storageBucket: "api-project-3577377239.appspot.com",
    // messagingSenderId: "332195161496" //local
    messagingSenderId: "3577377239"
};
firebase.initializeApp(configMc4kFire);
const messaging = firebase.messaging();



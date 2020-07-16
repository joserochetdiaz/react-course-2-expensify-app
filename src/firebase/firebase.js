import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB4Zi0nxFt0zyKkw4ZOAQFqZfECXUGVsdU",
    authDomain: "expensify-a378e.firebaseapp.com",
    databaseURL: "https://expensify-a378e.firebaseio.com",
    projectId: "expensify-a378e",
    storageBucket: "expensify-a378e.appspot.com",
    messagingSenderId: "823381426887",
    appId: "1:823381426887:web:cd0a62f371a103d41df4e2",
    measurementId: "G-V4911W0RCP"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

database.ref().on('value', (snapshot) => {
    console.log(snapshot)
});

/*database .ref().set({
    name: "jrochet",
    stressLevel: 6,
    age: 26,
    isSingle: true,
    job: {
        title: 'software developer',
        company: 'google'
    },
    location: {
        city: "rd",
        country: "Hell"
    }, 
}).then(() => {
    console.log('data is saved');
}).catch((error) => {
    console.log('this failed', e);
});


database.ref().update({
    stressLevel: 9,
    'job/company': 'Amazon',
    'location/city': 'seattle'
});*/
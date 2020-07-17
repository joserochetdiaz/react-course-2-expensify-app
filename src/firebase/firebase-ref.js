
// database.ref('expenses').on('value' , (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses)
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });
// database.ref('expenses')
//     .once('value')
//     .then((snapshot)  =>{
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });

//         console.log(expenses);
//     });

/*
database.ref('expenses').push({
    description: 'food', 
    note: 'puse',
    amount: 656556,
    createdAt: 0
});
*/

/*database.ref().on('value', (snapshot) => {
    const val = snapshot.val();
    console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
});
 const firebaseNotes = {
     notes:{
        112123: {
            title: 'title 1',
            body: 'body'
        },
        112123: {
            title: 'title 1',
            body: 'body'
        }
     }
 };/*

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
// console.log('destructuring')

// const person = {
//     name: 'Andrew',
//     age: '23',
//     location:{
//         city: 'Philadelphia',
//         temp: 92
//     }
// };

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'penguin'
//     }
// };

// const {name: publisherName = 'Self-published'} = book.publisher
// console.log(publisherName);

const address = ['1299 s junioer street', 'Phil', 'penn', '19147'];

const [street, city, state] = address;

console.log(`You are in ${city}`);

const item = ['coffee (hot)', '$2.00', '$2.50', '2.75'];
const [type, , medium, ] = item;

console.log(`a medium ${type} cost ${medium}`)
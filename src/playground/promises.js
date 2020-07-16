const promise = new Promise((resolve, reject) => {
    /*setTimeout(() => {
        resolve('this is my resolve');
    }, 3500);*/
    reject('Something went wrong');
    
});

promise.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log('error', error);
});
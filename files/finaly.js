const withError = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('resolve')
    }, 1000);

    setTimeout(() => {
        reject('REJECTED')
    }, 500);
});

const test = async () => {
        return withError
            .then(data => console.log(data))
            .catch(error => console.error(error))
            .then(data => console.log('finally ' + data))
};


test().then(console.log);

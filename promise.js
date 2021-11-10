let request = require('native-request');

const getData = () => {
    return new Promise((resolve, reject) => {
        request.get('http://jsonplaceholdertypicode.com/todos/1', (err, data) => {
            if (err) reject(data)

            resolve(data)
        })
    })
};


getData().then(response => console.log(response)).catch(err => console.log(err));
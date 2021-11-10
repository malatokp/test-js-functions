

const firstFunction = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const processFirst = ' process in progress '
            console.log(processFirst);
            resolve(processFirst);
        }, 2000);
    })
};

const secondFunction = (message) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const processSecond = message + ' process started '
            console.log(processSecond);
            resolve(processSecond);
        },1000)
    })
}

const ThirdFunction = (message) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const processThird = message + ' process finished '
            console.log(processThird);
            resolve()
        }, 3000);
    })
}

firstFunction().then(text => secondFunction(text)).then(text => ThirdFunction(text));
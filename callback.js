const firstFunction = (callback) => {
    console.log('process started');
    setTimeout(() => {
        callback();
    }, 2000);
}



const secondFunction = () => console.log('process finished')

firstFunction(secondFunction);
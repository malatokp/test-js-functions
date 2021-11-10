const timerId = setInterval(() => {
    const message = 'Hello1';
    if(message === "Hello!!!!"){
        clearInterval(timerId);
    }
    console.log(message)
}, 1500);
setTimeout(() => { clearInterval(timerId); console.log('time is over'); }, 5000);


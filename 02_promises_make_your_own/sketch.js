function setup(){
    noCanvas();
    delay(1000)
        .then(() => createP('hello'))
        .catch((err) => console.error(err));
}

function delay(time){
    // setTimeout(sayHello, time);
    return new Promise((resolve, reject) => {
        if(isNaN(time)){
            reject(new Error('delay requires a valid number'));
        }
        setTimeout(resolve, time);
    });
}

// function sayHello(){
//     createP('hello');
// }
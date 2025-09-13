function printWorld() {
    console.log('Hello World')
}
// setTimeout(printWorld,1000);
// console.log('waiting...')


function increase(number,callback) {
    setTimeout(() => {
        const result = number + 10
        if(callback){
            callback(result)
        }
    },1000)
}

increase(0, result =>  {
    console.log(result);
})
console.log('this is running increase!')
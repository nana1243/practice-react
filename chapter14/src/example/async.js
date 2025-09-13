function increase(number) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = number + 10;
            if (result > 50) {
                const e = new Error('number too big!')
                return reject(e)
            }
            resolve(result)
        }, 1000)
    })
    return promise
}

async function runTask(){
    try{
        let result = await increase(10);
        console.log(result);
        result = await increase(result);
        console.log(result);
        result = await increase(result);
        console.log(result);
        result = await increase(result);
        console.log(result);
        result = await increase(result);
        console.log(result);
    }catch (e){
        console.log(e)
    }
}

runTask()
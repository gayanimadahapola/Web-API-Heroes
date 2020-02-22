console.log("synchronous...")

let value = "Hello world!";

console.log("second : "+ value);

//asynchronous opertaions
function doAssyncWork() {

    return new Promise(function(resolve, reject){
    setTimeout(() => {
    console.log("Doing somthing ion a timer..");
    resolve("Async result");
}, 3000);
});
}

async function GetAsyncResult(){
    try{
let asynchronousWork = await doAssyncWork();
console.log("3. second : " + asynchronousWork);
} catch(err) {
    console.log(err);
}
}




console.log("3. I am Second : " + asynchronousWork);
console.log("4. I am third : " + asynchronousWork);

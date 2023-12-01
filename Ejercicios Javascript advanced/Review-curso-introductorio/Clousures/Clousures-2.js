function printName(){
    let helloName="hello John";
    function inner(){
        setTimeout(()=>{
            console.log(helloName);
        },1000);
        
    }
    return inner;
 }
 setTimeout
console.log(printName()());
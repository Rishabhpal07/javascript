let firstpromise=new Promise((resolve,reject)=> {
setTimeout(function sayMyName(){
    console.log("My Name is rishabh");
}, 10000);
return 1;
} );
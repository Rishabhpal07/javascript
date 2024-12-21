let todo=[];

let req=prompt("please enter your request")
console.log(req);

while(true){
    if(req=="quit"){
        console.log("quitting app");
    break;
    }
    if(req=="list"){
        console.log("________");
        for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log("_______");
    }
    else if(req=="add"){
        let task=prompt("please enter the task you want to add");
        todo.push(task);
        console.log("task added");
    }
    else if(req=="delete"){
        let idx=prompt("please enter the task you wnat to delete");
        todo.splice(idx,1);
        console.log("task deleted");
    }
   req=prompt("please enter your request");
}
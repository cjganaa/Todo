let todos = [
];

function addOne(){
    let newItemName = prompt("Enter task name:");
    if (newItemName != null){
        let item = { name:newItemName, status:"todo"}
        todos.push(item);
    }
    result();
}
function result(){
    let resultStr="<table><tr><th>No</th><th>name</th><th>status</th></tr>"
    for(let i=0; i<todos.length;i++){
        resultStr += "<tr><th>"+i+"</th><th>"+todos[i].name+"</th><th>"+todos[i].status+"</th></tr>";
    }
    resultStr += "</table>"
    document.getElementById("result").innerHTML=resultStr;
}
function editStatus(){
    let index = prompt("Enter task Id:");
    if (index != null){
        index = Number(index);
        let status = prompt("Enter task status:");
        if (status != null){
            todos[index].status = status;
        }
    }
    result();
}
function editName(){
    let index = prompt("Enter task Id:");
    if (index != null){
        index = Number(index);
        let name = prompt("Enter task Name:");
        if (name != null){
            todos[index].name = name;
        }
    }
    result();
}
function deleteOne(){
    let index = prompt("Enter task Id:");
    if (index != null){
        index = Number(index);
        let Newtodos = [];
        for(let i=0;i<todos.length;i++){
            if(i!=index){
                Newtodos.push(todos[i]);
            }
        }
        todos = Newtodos;
    }
    
    result();
}
function deleteAll(){
    todos = [];
    result();
}
function countDown(){
    let count = 0;
    for(let i=0; i<todos.length;i++){
        if(todos[i].status == "todo"){
            count++ ;
        }
    }
    return count;
}
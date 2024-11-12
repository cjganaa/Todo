let tasks = [];
function taskHTML(name,index){
    return `
    <div class="task">
            <div class="task-name">`+name+`</div>
            <div class="buttons">
                <a onclick="editForm(`+index+`)">
                    <div class="fa fa-pencil" style="font-size: 25px;"></div>
                </a>
                <a onclick="deleteTask(`+index+`)">
                    <div class="fa fa-trash-o" style="font-size: 25px;"></div>
                </a>
            </div>
    </div>\n`;
}

function refresh(){
    let todo = '';
    let inprogress = '';
    let done = '';
    let blocked = '';
    let todoCount = 0;
    let inprogressCount = 0;
    let doneCount = 0;
    let blockedCount = 0;
    for(let i=0;i<tasks.length;i++){
        if(tasks[i].status == "todo"){
            todo += taskHTML(tasks[i].name,i);
            todoCount++;
        }else if(tasks[i].status == "inprogress"){
            inprogress += taskHTML(tasks[i].name,i);
            inprogressCount++;
        }else if(tasks[i].status == "done"){
            done += taskHTML(tasks[i].name,i);
            doneCount++;
        }else if(tasks[i].status == "blocked"){
            blocked += taskHTML(tasks[i].name,i);
            blockedCount++;
        }
    }
    document.getElementById("todo").innerHTML = todo;
    document.getElementById("inprogress").innerHTML = inprogress;
    document.getElementById("done").innerHTML = done;
    document.getElementById("blocked").innerHTML = blocked;

    document.getElementById("todo-counter").innerText = todoCount;
    document.getElementById("inprogress-counter").innerText = inprogressCount;
    document.getElementById("done-counter").innerText = doneCount;
    document.getElementById("blocked-counter").innerText = blockedCount;
}

function addForm(){
    document.getElementById("form-title").innerText="Enter task";
    document.querySelector(".black-background").style.display = "flex";
    document.getElementById("name").value = "";
    document.getElementById("status").value = "none";
    document.getElementById("submit").innerHTML = '<button class="submit-button" onclick="addTask()">Submit</button>';
}

function addTask(){
    let prename = document.getElementById("name").value;
    let prestatus = document.getElementById("status").value;
    if(prename != "" && prestatus != "none"){
        tasks.push({name:prename, status:prestatus});
        document.querySelector(".black-background").style.display = "none";
        refresh();
    }else{
        alert("None value");
    }
    
}
function editForm(index){
    document.getElementById("form-title").innerText="Edit task";
    document.querySelector(".black-background").style.display = "flex";
    document.getElementById("name").value = tasks[index].name;
    document.getElementById("status").value = tasks[index].status;
    document.getElementById("submit").innerHTML = '<button class="submit-button" onclick="editTask('+index+')">Submit</button>';
}
function editTask(index){
    let prename = document.getElementById("name").value;
    let prestatus = document.getElementById("status").value;
    if(prename != "" && prestatus != "none"){
        tasks[index].name = prename;
        tasks[index].status = prestatus;
        document.querySelector(".black-background").style.display = "none";
        refresh();
    }else{
        alert("None value");
    }
}
function deleteTask(index){
    tasks.splice(index,1);
    refresh();
}
function closeForm(){
    document.querySelector(".black-background").style.display = "none";
}
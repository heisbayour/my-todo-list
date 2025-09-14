//Create 3 variables and store the html elements
const input = document.querySelector("#myInput");
const addBtn = document.querySelector("#btn");
const list = document.querySelector(".myUl");

//variable and function for default delete for defContent and defChecked
const contentDefault = document.querySelector("#defContent");
const checkedDefault = document.querySelector("#defChecked");
const delContentDefault = document.querySelector("#delbtnCNT");
const delCheckedDefault = document.querySelector("#delbtnCHK");
delContentDefault.addEventListener("click", function() {
    contentDefault.parentNode.removeChild(contentDefault);
    contentDefault.parentNode.removeChild(delContentDefault);
})
delCheckedDefault.addEventListener("click", function() {
    checkedDefault.parentNode.removeChild(checkedDefault);
    checkedDefault.parentNode.removeChild(delCheckedDefault);
})
//add task function
function addTask() {
    //get input value and store in a variable
    const taskText = input.value.trim();
    //condition to avoid empty task storage.
    if (taskText === "") {
        let noDataMessage = "Please enter some texts";
        alert(noDataMessage);
        return;
    }

    //Create a variable for list,store a new li element in it, append it to the list of tasks
    const li = document.createElement("li");
    li.textContent = taskText;
    li.classList.add('content');
    const inComplete = document.createElement("button");
    inComplete.textContent = "Incompleted";
    inComplete.addEventListener("click", function(){
        li.classList.toggle('content');
        li.classList.remove('checked');
        list.removeChild(inComplete);
        list.appendChild(checkedBtn);
    })
    const delBtn = document.createElement("button");
    delBtn.textContent = "X";
    delBtn.addEventListener("click", function(){
        list.removeChild(li);
        list.removeChild(delBtn);
        list.removeChild(checkedBtn);
    });

    //toggle css completion design
    const checkedBtn = document.createElement("button");
    checkedBtn.textContent = "Completed";
    checkedBtn.addEventListener("click", function(){
        li.classList.remove('content');
        li.classList.toggle('checked');
        list.removeChild(checkedBtn);
        list.appendChild(inComplete);
    })
    //append the childs to the list of tasks
    list.appendChild(li);
    list.appendChild(delBtn);
    list.appendChild(checkedBtn);
    input.value = "";
}

//add event listener to the button
addBtn.addEventListener("click", addTask);
// addBtn.addEventListener("keypress", addTask);

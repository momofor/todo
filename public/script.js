var task = document.querySelector("#task");
var taskButton = document.getElementById("taskBut");
var clearButton = document.querySelector("#clear");
var tasks = document.querySelector("#tasks");
var taskCard = document.querySelector(".taskCard");
var removeBut = document.getElementsByClassName("removeBut");
var checkBut = document.getElementsByClassName("checkBut");
var filterOption = document.querySelector(".filter-tasks");
taskButton.addEventListener("click", addTask);
filterOption.addEventListener("click", filterTasks);
function addTask() {
    var taskVal = task.value;
    var createTaskContainer = tasks.appendChild(document.createElement("ul"));
    createTaskContainer.classList.add("taskContainer");
    var createTaskCard = createTaskContainer.appendChild(document.createElement("li"));
    createTaskCard.classList.add("taskCard");
    createTaskCard.innerHTML = taskVal;
    var createTaskDelBut = createTaskContainer.appendChild(document.createElement("button"));
    createTaskDelBut.classList.add("removeBut");
    createTaskDelBut.innerHTML = "<i class=\"fas fa-trash\"></i>";
    var createCheckBut = createTaskContainer.appendChild(document.createElement("button"));
    createCheckBut.innerHTML = "<i class=\"fas fa-check\"></i>";
    createCheckBut.classList.add("checkBut");
    for (var i = 0; i < removeBut.length; i++) {
        removeBut[i].onclick = function () {
            var thisParent = this.parentElement;
            thisParent.classList.add("fall");
            thisParent.addEventListener("transitionend", function () {
                thisParent.remove();
            });
        };
    }
    for (var i = 0; i < checkBut.length; i++) {
        checkBut[i].onclick = function () {
            var coo = this.parentElement;
            coo.classList.add("checked");
        };
    }
    task.value = "";
}
tasks.addEventListener("click", function (e) {
    var target = e.target;
    if (target.classList.contains("checkBut")) {
        var thisParent = target.parentElement;
        thisParent.classList.toggle("checked");
    }
});
clearButton.addEventListener("click", clearTasks);
function clearTasks() {
    while (tasks.firstChild) {
        tasks.removeChild(tasks.lastChild);
    }
}
function filterTasks(e) {
    var taskList = tasks.childNodes;
    taskList.forEach(function (taskCard) {
        switch (e.target.value) {
            case "all":
                taskCard.style.display = "flex";
                break;
            case "completed":
                if (taskCard.classList.contains("checked")) {
                    taskCard.style.display = "flex";
                }
                else {
                    taskCard.style.display = "none";
                }
        }
    });
}

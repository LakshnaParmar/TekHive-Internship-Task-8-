const todoType = document.getElementById("todoType")
const ulList = document.getElementById("ulList")

function addTask(){
    if (todoType.value === "") {
        alert("You must write something! ")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = todoType.value;
        ulList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    todoType.value = "";
    SaveData();
}
ulList.addEventListener("click", function(e){
    if (e.target.tagName ==="LI") {
        e.target.classList.toggle("checked");
        SaveData();
    }
    else  if (e.target.tagName ==="SPAN") {
        e.target.parentElement.remove();
        SaveData();
    }
} , false);

function SaveData() {
    localStorage.setItem("data" , ulList.innerHTML);
}

function ShowTaSk() {
    ulList.innerHTML = localStorage.getItem("data");
}
ShowTaSk();
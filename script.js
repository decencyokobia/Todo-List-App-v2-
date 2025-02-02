const input = document.getElementById("input");
const listItems = document.getElementById("list_items");

function addTask(){
    if(input.value === ''){
        alert(`Add new task!`);
    }

    else {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        listItems.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = `&#128465`;
        li.appendChild(span);
    }

    input.value = "";
    saveData();
}

listItems.addEventListener("click", (e) => {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);


const saveData = () => {
    localStorage.setItem("data", listItems.innerHTML);
}

const showData = () => {
    listItems.innerHTML = localStorage.getItem("data");
}

showData();
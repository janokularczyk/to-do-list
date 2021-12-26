// deleting task 
let close = document.getElementsByClassName("delete-btn");
let i = 0;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
    }
}

document.getElementById("add-task-button").addEventListener("click", function newElement() {
    // creating li element
    let li = document.createElement("li");

    // appending checkbox
    let input = document.createElement("input");
    input.type = "checkbox";
    li.appendChild(input);

    // appending task
    let taskValue = document.getElementById("input-task").value;
    let txt = document.createTextNode(taskValue);

    let span = document.createElement("span");
    span.className = "task";
    span.appendChild(txt);
    li.appendChild(span);

    if(taskValue === '') {
        alert("nothing to add!");
    } else {
        document.getElementById("task-list").appendChild(li);
    }
    document.getElementById("input-task").value = '';

    // close 'minus' 
    let div = document.createElement("div");
    div.className = "delete";

    // appending button
    let button = document.createElement("button");
    button.className = "delete-btn";
    button.appendChild(div);
    li.appendChild(button);

    for (i = 0; i < close.length; i++) {
            close[i].onclick = function() {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
});

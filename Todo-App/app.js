//Accesing Element Using Selector.
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click",function(){
    let item = document.createElement("li");
    ul.appendChild(item);
    item.innerText = inp.value;
    inp.value = "";

// priority Tag
let priority = document.createElement("span");
priority.innerText = "High";
priority.classList.add("priority");

//delete button
let del = document.createElement("button");
del.innerText = "Delete";
del.classList.add("delbtn");

item.appendChild(priority);
item.appendChild(del);

});

//event deligation
ul.addEventListener("click",function(event){
    if(event.target.classList.contains("delbtn")){
    event.target.parentElement.remove();
    }
});

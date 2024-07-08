let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click" ,function(){
   
    let li = document.createElement('li');
    li.innerHTML=inp.value;

    let checkbox = document.createElement("input");
    checkbox.setAttribute("type" , "checkbox");
    checkbox.setAttribute("id" , "checkbox");  
    
    ul.append(li);
    li.prepend(checkbox);

    inp.value = "";

})


ul.addEventListener("click", function(event) {

    if (event.target.nodeName === "INPUT" && event.target.type === "checkbox") {
        let listItem = event.target.parentElement;
       
        if (event.target.checked) {
            alert("Task Completed!");
            listItem.style.textDecoration = 'line-through';
        } else {
            listItem.style.textDecoration = 'none';
        }
   
    }
});




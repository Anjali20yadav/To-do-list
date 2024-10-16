let input=document.querySelector("input");
let btn=document.querySelector("button");
let ul=document.querySelector("ul");
btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=input.value;
    
    let del=document.createElement("button");
    del.innerHTML="delete";

    ul.appendChild(item);
    item.appendChild(del);

    del.addEventListener("click",function(){
        item.remove();
    })

    input.value="";
})
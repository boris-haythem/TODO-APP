var addtask=document.getElementById('new-task')
var addto=document.getElementById('add-button')
var mytodo=document.getElementById("mytodo")

addto.addEventListener("click",()=>{
    var newtodo=document.createElement('li')
    var completebutton=document.createElement('button')
    completebutton.innerHTML='Complete'
    var deletebutton=document.createElement('button')
    deletebutton.innerHTML="delete"
    var newtask=document.createElement("span")
    newtask.innerHTML=addtask.value 
    newtodo.appendChild(completebutton)
    newtodo.appendChild(deletebutton)
    newtodo.appendChild(newtask)
    mytodo.prepend(newtodo)
    completebutton.addEventListener("click",()=>{
        if(completebutton.innerHTML==='Complete'){
            completebutton.innerHTML='Undo'
            completebutton.nextSibling.nextSibling.style.textDecoration='line-through'
        }
        else{
            completebutton.innerHTML='Complete'
            completebutton.nextElementSibling.nextElementSibling.style.textDecoration='none'
        }

    })
    deletebutton.addEventListener('click',()=>{
        deletebutton.parentElement.remove()
    })
})
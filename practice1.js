function addTask() {

    let inputData = document.getElementById("enterData");
    let inputDataValue = inputData.value.trim()

    let allTasksContainer = document.querySelector("#tasks")

    let liTag = document.createElement("li");

    liTag.innerHTML = `
    ${inputDataValue}
     <button class="edit">Edit</button>
     <button class="delete">Delete</button> `

    liTag.style.listStyleType = "none"
  
       inputData.value = ""

    allTasksContainer.appendChild(liTag)

    let editBtn = liTag.querySelector(".edit")
    editBtn.style.backgroundColor = "blue"

    let dlteBtn = liTag.querySelector(".delete")
    dlteBtn.style.backgroundColor = "red"

    

        dlteBtn.addEventListener("click", () => {
        deleteTask(liTag)
        console.log("df is called")
    })

    editBtn.addEventListener("click", ()=>
    {
        edittask(liTag)
    } )

}

function deleteTask(liTag) {
    let a = confirm("are you conform to delete task")
    if (a) {
        liTag.remove()
    }
}


function  edittask(item)
{
    let x=prompt("eneter the data",item.firstChild.textContent)
    

    if(x!==null && x.trim()!==" ")
    {
        item.firstChild.textContent=x;
    }
}



document.getElementById("addBtn").addEventListener("click",addBtn)
let arrayStd = []
function addBtn() {
    let stdName = document.querySelector(".stdName").value
    let stdSureName = document.querySelector(".stdSureName").value
    console.log(stdName, stdSureName);
    let student_container = document.querySelector(".StudentWrapper")
    let stdObj = {
        stdName:stdName,
        stdSureName:stdSureName
    }
    arrayStd.push(stdObj)
    console.log(arrayStd);
    let studentList = document.createElement("li")
    studentList.innerHTML = `${stdName} ${stdSureName}`
    student_container.appendChild(studentList)
    let button = document.createElement("button")
    studentList.appendChild(button)
    button.innerHTML = "удалить"
    button.addEventListener("click", function() {
        student_container.removeChild(studentList)
    })
}

import Swal from 'sweetalert2';
import { addList, deletList, doneList, editList } from "./list.js";
import { listGroup } from "./selectors.js";

export const listGroupHandler = (event) => {
    // ***
    const list = event.target.closest(".list");

    if(event.target.classList.contains("list-edit-btn")){
        editList(event.target.closest(".list").id);
    };

    if(event.target.classList.contains("list-del-btn")){
        deletList(event.target.closest(".list").id);
    };
    if(event.target.classList.contains("list-done-check")){
        doneList(event.target.closest(".list").id)            
    }
    
};


export const addTaskBtnHandler = () => {
    if(taskInput.value.trim() ? true : false){
        addList(taskInput.value)
    } else {
        alert("u must input something")
    }
}

export const taskInputHandler = (event) => {
    // console.clear();
    // console.log(event);
    if(event.key === "Enter") {
        if(taskInput.value.trim() ? true : false){
            addList(taskInput.value)
        } else {
            alert("u must input something")
        }
    }
}


export const deleteAllHandler = () => {
    // if(confirm("Are you sure to delete all tasks ?")){
    //     const allList = listGroup.querySelectorAll(".list");
    //     allList.forEach((list) => list.remove())
    // }
    Swal.fire(
        {
            title: "Are you sure to delete all tasks?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!"
          }
        ).then((result) => {
        if(result.isConfirmed){
            const allList = listGroup.querySelectorAll(".list");
        allList.forEach((list) => list.remove())
        }
    })
}

export const doneAllHandler = () => {
    // if(confirm("Are you sure to delete all tasks ?")){
    //     const allList = listGroup.querySelectorAll(".list");
    //     allList.forEach((list) => {
    //         list.querySelector(".list-done-check").checked = true;
    //         doneList(list.id)
    //     }
    //     )
    // }
    Swal.fire(
        {
            title: "Are you sure to done all tasks?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!"
          }
        ).then((result) => {
        if(result.isConfirmed){
            const allList = listGroup.querySelectorAll(".list");
            allList.forEach((list) => {
                list.querySelector(".list-done-check").checked = true;
                doneList(list.id)
            }
            )
        }
    })
}
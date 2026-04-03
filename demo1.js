function todo(task) {
    if( task === "Task 2"){
        task="CHll be lode."
    }
    setTimeout(function fun(){
        console.log("Completed ", task);
    }, 3000)

}

console.log("starting the task");
todo("Task 1");
todo("Task 2");
todo("Task 3");

console.log("All tasks are scheduled");
console.log("End of the program");
todo("Task 4");
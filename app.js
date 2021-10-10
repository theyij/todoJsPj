
let input = prompt("Please choose your action with the todo app.");
let todoList =["learn js", "build todot project"];
let listLength = 0;

//while loop CONtinue if not "quite"
while(input !== "quit" &&  input !== "q"){
//if quite -> leave app

    if (input === "list"){
        //if list -> print all item and index
        console.log("**************")
        listLength = 0;
        for(let todos of todoList){
            listLength ++;
            console.log(`#${listLength}: ${todos}`);
        }
        console.log("**************")
    }else if (input === "new"){
        //if new -> add new item

        let newItem = prompt("enter new todo");
        todoList.push(newItem);
        console.log(`${newItem} added in the todo list.`);
    }else if (input === "delete" || input === "d"){
        //if delete -> use index to remove item

        let deleteItem = parseInt(prompt ("Which number you liket to delete?"));
        let deleted = todoList.splice(deleteItem -1, 1);

        console.log(`#${deleteItem}: ${deleted} - is deleted.`);
    }
    input = prompt("Please choose your action with the todo app.");
}
console.log("You have quit the todo app.")

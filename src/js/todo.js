import inialRender from "./initialRender.js";
import listener from "./listener.js";
import observer from "./observer.js";

class Todo {
    init(){
        console.log('todo start');
        observer();
        inialRender();
        listener();
    }
}

export default Todo;
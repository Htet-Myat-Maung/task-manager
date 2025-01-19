import { addList, tasks } from "./list.js";

const inialRender = () => {
    tasks.forEach(task => {
        addList(task)
    });
};

export default inialRender;
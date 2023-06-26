import { reactive } from "vue";

export const store = reactive([])

export const addTodo = (todo) => {
    if(todo.trim() !== ""){
        store.push(todo);
        todo = "";
    }
};
    

export const complete = (index) => {
    store[index]
    store.splice(index,1)
}
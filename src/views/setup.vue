<script>
import { reactive,computed } from "vue";
export default {
    setup() {
        const state = reactive({
            todo: '',
            todos: [],
        })

        const addTodo = () => {
            state.todos.push(state.todo)
            state.todo = ''
        }

        const removeTodo = index => state.todos.splice(index,1)
        
        const  getListLength = computed(() => state.todos.length)

        return {
            state,
            addTodo,
            removeTodo,
            getListLength
        }
    }
}
</script>

<template>
    <div id="app">
    <h1>Todoリスト{{ getListLength }}</h1>
    <input v-model="state.todo">
    <button @click="addTodo">追加</button>
    <ul>
      <li v-for="(todo, index) in state.todos" :key="index">
        {{ todo }} <button type="checkbox" @click="removeTodo(index)">削除</button>
      </li>
    </ul>
  </div>
</template>

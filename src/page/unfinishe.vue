<script setup>
// import addToDo from './addToDo';
// import { defineProps } from "vue";
import {addTodo, complete, store } from "./store";
import { computed, ref } from "vue";
// import { ref } from 'vue';
// props = defineProps({
//       foo:{
//         type:String,
//         default: '表示する内容がありません'
//       },
//     }),

  // console.log(props.foo)

  // const { current,onclick } = addToDo(props.init)

  // const removeTodo = index => store.splice(index,1)
  
  const getListLength = computed(() => store.length);

  const todo = ref("");
  
</script>

<template>
  <div id="app">
  <h1>未達成</h1><!--{{ getListLength }}-->
  <input v-model="todo">
  <button @click="addTodo(todo)">追加</button>
  <ul>
    <li v-for="(todo, index) in store" :key="index">
      {{ todo }} <button @click=complete(index)>達成</button>
    </li>
    console.log(index);
  </ul>
  </div>
</template>

<script setup>
import { store } from "./store";
</script>

<template>
    <!-- <div>
    <h1>達成{{ data }}</h1> -->
    <!-- <unfinishe>達成{{ peops }}</unfinishe> -->
    <ul>
    <li v-for="(todo, index) in store" :key="index">
      {{ todo }} <button @click=(index)>達成</button>
    </li>
  </ul>
<!-- </div> -->
</template>
<style>

</style>
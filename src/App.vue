<!-- <script>
  export default{
    name: 'unfinishe',
    props:{
      foo: String
    }
  }
</script> -->

<template>
  <header>
    <h1>ToDoアプリ</h1>
  </header>
  <div id="center">
    <nav>
      <router-link to="/">一覧</router-link> |
      <router-link to="/finishe">達成</router-link>
    </nav>
  </div>
  <div class="wrapper">
    <div id="center">
      <div class="container">
        <div class="area">
            <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#center{
  width: fit-content;
  margin: auto;
}
.wrapper{
  height: 100%;
  min-height: 100vh;
  position: relative;
  padding-bottom: 120px;
  box-sizing: border-box;
}
.container{
  max-width: 1200px;
  min-height: 300px;
}
.row{
    display: flex;
    flex-direction: row;
    padding: 0;
}
.area{
  text-align: -webkit-center;
  /* margin: 50px; */
  /* padding: 30px; */
  border-radius: 10%;
}
.area_inner{
  width: 100%;
  height: 200px;
  background-color: blue;
}

body{
  margin: 0;
}

button{
  text-align: right;
}

a{
  text-decoration: none;
  color: black;
}

h1{
  margin: 0 auto;
  text-align: center;
}

header{
  display: flex;
  background-color: #42b983;
  padding: 10px;
}

nav {
  display: flex;
  text-align: center;
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<!-- Script content -->
<script>
//semantic imports
import TodoItem from "./components/TodoItem.vue";
// Access exernal images
import Logo from "./assets/logo.png";

// the default object is where the datas and functions goes
export default {
  data() {
    return {
      list: [
        {
          id: 1,
          item: "clean the house"
        },
        {
          id: 2,
          item: "buy milk"
        }
      ],
      todo: {
        id: 0,
        item: ""
      },
      logo: Logo
    };
  }, // Datas goes inside the return of the data() function

  name: "to-do", // html tag of the component
  components: {
    TodoItem
  }, // components used inside my html content
  methods: {
    // Functions goes inside "methods" object
    // to ADD
    createNewToDoItem() {
      // not empty check
      if (this.todo.item === "") {
        alert("Please enter a todo!");
        return;
      }
      // Mutate list data
      this.list = [
        ...this.list,
        {
          id: Math.max.apply(null, this.list.map(t => t.id)) + 1,
          item: this.todo.item
        }
      ];
      // reset input variable
      this.todo.item = "";
    },
    // And REMOVE
    onDeleteItem(todo) {
      // Mutate list data
      this.list = this.list.filter(el => el !== todo);
    }
  }
};
</script>

<!-- HTML content -->
<template>
  <main id="app">
    <img :src="logo" alt="Vue logo">
    <h1>Vue Todo List</h1>
    <section>
      <!-- For loop over the list -->
      <TodoItem
        v-for="todoElement of list"
        :key="todoElement.id"
        :TodoAttribut="todoElement"
        @delete="onDeleteItem(todoElement)"
      />
    </section>
    <!-- Two ways data binding, event handling(@->2.2) -->
    <section>
      <input type="text" v-model="todo.item" @keyup.enter="createNewToDoItem()">
      <button @click="createNewToDoItem()">+</button>
    </section>
  </main>
</template>

<!-- CSS rules -->
<style>
img {
  height: 100px;
}
</style>

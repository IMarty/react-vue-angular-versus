<template>
  <main id="app">
    <img :src="logo" alt="Vue logo">
    <h1>Vue Todo List</h1>
    <section>
      <TodoItem
        v-for="todoElement of list"
        :key="todoElement.id"
        :TodoAttribut="todoElement"
        @delete="onDeleteItem(todoElement)"
      />
    </section>
    <section>
      <input type="text" v-model="todo.item" v-on:keyup.enter="createNewToDoItem">
      <button @click="createNewToDoItem()">+</button>
    </section>
  </main>
</template>

<script>
import TodoItem from "./components/TodoItem.vue";
import Logo from "./assets/logo.png";
export default {
  name: "to-do",
  components: {
    TodoItem
  },
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
  },
  methods: {
    createNewToDoItem() {
      // not empty
      if (this.todo.item === "") {
        alert("Please enter a todo!");
        return;
      }
      this.list = [
        ...this.list,
        {
          id: Math.max.apply(null, this.list.map(t => t.id)) + 1,
          item: this.todo.item
        }
      ];
      // reset input
      this.todo.item = "";
    },
    onDeleteItem(todo) {
      this.list = this.list.filter(el => el !== todo);
    }
  }
};
</script>

<style>
</style>

<template>
  <article>
    <p>{{TodoAttribut.item}}</p>
    <button @click="deleteItem()">-</button>
  </article>
</template>

<script>
export default {
  name: "to-do-item",
  props: ["TodoAttribut"],
  methods: {
    deleteItem() {
      this.$emit("delete");
    }
  }
};
</script>

<style scoped>
</style>

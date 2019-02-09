<template>
    <article>
        <p>{{todo.text}}</p>
        <button
             @click="deleteItem(todo)">-
        </button>
    </article>
</template>

<script>
    export default {
        name: "to-do-item",
        props: ['todo'],
        methods: {
            deleteItem(todo) {
                this.$emit('delete', todo)
            }
        }
    }
</script>

<style scoped>

</style>

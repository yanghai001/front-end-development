<template>
  <div>
    <todo-item></todo-item>
    <todo-item></todo-item>
    <todo-item></todo-item>
  </div>
</template>

<script>
// 引入组件
import TodoItem from "./TodoItem.vue";
export default {
  name: "TodoList",
  components: {
    TodoItem,
  },
};
</script>

<style lang="less" scoped>
</style>
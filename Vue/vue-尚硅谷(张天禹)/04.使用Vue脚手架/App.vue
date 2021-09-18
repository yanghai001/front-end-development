<template>
  <todo-header></todo-header>
</template>

<script>
// 引入组件
import TodoHeader from "./components/TodoHeader.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";

export default {
  name: "App",
  // 注册组件
  components: {
    TodoHeader,
    TodoList,
    TodoFooter,
  },
};
</script>

<style>
</style>
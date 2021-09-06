<template>
  <div style="width: 600px; margin: 50px auto">
    <h1>Todos</h1>
    <todo-input @add="onAddNewTask"></todo-input>
    <!-- 添加行内样式，拉开input组件和list组件的上下间距 -->
    <todo-list :list="tasklist" style="margin-top: 10px"></todo-list>
    <todo-button v-model:active="activeBtnIndex"></todo-button>
  </div>
</template>

<script>
// 导入TodoList组件
import TodoList from "./components/todo-list/TodoList.vue";
// 导入TodoInput组件
import TodoInput from "./components/todo-input/TodoInput.vue";
// 导入TodoButton组件
import TodoButton from "./components/todo-button/TodoButton.vue";

export default {
  name: "MyApp",
  // 任务列表的数据
  data() {
    return {
      todolist: [
        { id: 1, task: "周一早晨9点开会", done: false },
        { id: 2, task: "周一晚上8点聚餐", done: false },
        { id: 3, task: "准备周三上午的演讲稿", done: true },
      ],
      // 保存下一个可用id
      nextId: 4,
      // 激活的按钮的索引
      activeBtnIndex: 2,
      showList: [],
    };
  },
  // 注册私有组件
  components: {
    TodoList,
    TodoInput,
    TodoButton,
  },
  methods: {
    // taskname是TodoInput传递出来的数据
    onAddNewTask(taskname) {
      // 创建一个任务对象
      var newtask = {};
      // 给对象的属性赋值
      newtask.id = this.nextId;
      newtask.task = taskname;
      newtask.done = false;
      // 将对象添加到todolist数组中
      this.todolist.push(newtask);
      // 下一个可用id+1
      this.nextId++;
    },
  },
  computed: {
    // 根据激活按钮的索引值，动态计算要展示的列表数据
    tasklist() {
      switch (this.activeBtnIndex) {
        case 0: //全部
          return this.todolist;
        case 1: //已完成
          return this.todolist.filter((x) => x.done == true);
        case 2: //未完成
          return this.todolist.filter((x) => x.done == false);
      }
    },
  },
};
</script>

<style lang="less" scoped>
</style>
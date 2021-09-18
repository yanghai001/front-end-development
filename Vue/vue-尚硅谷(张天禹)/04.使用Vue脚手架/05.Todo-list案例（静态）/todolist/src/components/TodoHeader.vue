<template>
  <div>
    <div>
      <el-input
        placeholder="请输入内容"
        v-model="inputText"
      >
        <template #prepend>新任务</template>
      </el-input>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoHeader",
  data() {
    return {
      inputText: "",
    };
  },
};
</script>

<style lang="less" scoped>
</style>
<template>
  <div>
    <el-input
      placeholder="请输入内容"
      v-model="input1"
    >
      <template slot="prepend">Http://</template>
    </el-input>
  </div>
</template>

<script>
export default {
  name: "TodoHeader",
};
</script>

<style lang="less" scoped>
</style>
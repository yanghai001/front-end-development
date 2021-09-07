<template>
  <!-- v-bind指令绑定属性，注意具体样式需要用{}包含，不同项用逗号隔开 -->
  <div
    class="header-container"
    :style="{ color: color, backgroundColor: bgcolor, fontSize: fsize + 'px' }"
  >
    {{ title }}
  </div>
</template>

<script>
export default {
  name: "EsHeader",
  props: {
    title: {
      //标题内容
      type: String,
      default: "es-header组件",
    },
    // 文字颜色
    color: {
      type: String,
      default: "#ffffff",
    },
    // 背景颜色
    bgcolor: {
      type: String,
      default: "#007BFF",
    },
    // 文字大小
    fsize: {
      type: Number,
      default: 16,
    },
  },
};
</script>

<style lang="less" scoped>
.header-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 45px;
  text-align: center;
  line-height: 45px;
  z-index: 999;
}
</style>

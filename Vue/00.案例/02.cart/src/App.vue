<template>
  <div class="main-container">Cart</div>
  <hr />
  <es-header
    title="购物车"
    color="white"
    bgcolor="blue"
    :fsize="18"
  ></es-header>
</template>

<script>
// 导入EsHeader组件
import EsHeader from "./components/es-header/EsHeader.vue";

export default {
  name: "Cart",

  components: {
    // 注册EsHeader组件
    EsHeader,
  },

  directives: {},

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="less" scoped>
.main-container {
  margin-top: 45px;
}
</style>

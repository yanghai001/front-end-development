<template>
  <div class="main-container">Cart</div>
  <hr />
  <es-header
    title="购物车"
    color="white"
    bgcolor="blue"
    :fsize="18"
  ></es-header>
  <es-footer></es-footer>
</template>

<script>
// 导入EsHeader组件
import EsHeader from "./components/es-header/EsHeader.vue";
// 导入EsFooter组件
import EsFooter from "./components/es-footer/EsFooter.vue";


export default {
  name: "Cart",

  components: {
    // 注册EsHeader组件
    EsHeader,
    // 注册EsFooter组件
    EsFooter,
  },

  directives: {},

  data() {
    return {
      // 商品信息列表数据
      goodslist: [],
    };
  },
  // 组件创建完成之后触发的生命周期函数
  created() {
    // 调用methods中的getGoodsList方法，请求商品列表的数据
    this.getGoodsList();
  },
  mounted() {},

  methods: {
    // 请求商品列表的数据
    async getGoodsList() {
      // 通过组件实例this访问到全局挂载的$http属性，并发起axios数据请求
      const { data: res } = await this.$http.get("/api/cart");
      // 判断请求是否成功
      if (res.status !== 200) return alert("商品列表数据请求失败！");
      // 如果请求成功，将数据存储到对应的数组中
      console.log(res);
      this.goodslist = res.list;
    },
  },
};
</script>

<style lang="less" scoped>
.main-container {
  margin-top: 45px;
}
</style>

<template>
  <div class="main-container">
    <!-- 调用EsHeader.vue组件 -->
    <es-header
      title="购物车"
      color="white"
      bgcolor="blue"
      :fsize="18"
    ></es-header>
    <!-- 调用EsFooter.vue组件 -->
    <es-goods v-for="item in goodslist" :key="item.id"></es-goods>
    <!-- 调用EsFooter.vue组件 -->
    <es-footer
      :isfull="true"
      :total="11"
      :amount="11.32123"
      @fullChange="onFullStateChange"
    ></es-footer>
  </div>
</template>

<script>
// 导入EsHeader组件
import EsHeader from "./components/es-header/EsHeader.vue";
// 导入EsFooter组件
import EsFooter from "./components/es-footer/EsFooter.vue";
// 导入EsGoods组件
import EsGoods from "./components/es-goods/EsGoods.vue";

export default {
  name: "Cart",

  components: {
    // 注册EsHeader组件
    EsHeader,
    // 注册EsFooter组件
    EsFooter,
    // 注册EsGoods组件
    EsGoods,
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
    // 监听全选按钮选中状态的变化
    onFullStateChange(isFull) {
      // 打印全选按钮选中状态
      console.log(isFull);
    },
  },
};
</script>

<style lang="less" scoped>
.main-container {
  margin-top: 45px;
  margin-bottom: 50px;
}
</style>

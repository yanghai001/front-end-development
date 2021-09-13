<template>
  <div class="main-container">
    <!-- 调用EsHeader.vue组件 -->
    <es-header
      title="购物车"
      color="white"
      bgcolor="blue"
      :fsize="18"
    ></es-header>
    <!-- 调用EsGoods.vue组件 -->
    <es-goods
      v-for="item in goodslist"
      :key="item.id"
      :id="item.id"
      :title="item.goods_name"
      :thumb="item.goods_img"
      :price="item.goods_price"
      :count="item.goods_count"
      :checked="item.goods_state"
      @stateChange="onGoodStateChange"
      @countChange="onGoodsCountChange"
    ></es-goods>
    <!-- 调用EsFooter.vue组件 -->
    <es-footer
      :isfull="true"
      :total="total"
      :amount="amount"
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
  computed: {
    // 计算属性，返回选中商品的总价格
    amount() {
      // 总价格变量
      let a = 0;
      this.goodslist
        .filter((item) => item.goods_state === true)
        .forEach((item) => {
          // 循环累加被选中的商品价格
          a += item.goods_price * item.goods_count;
        });
      return a;
    },
    // 计算属性，返回被选中商品的总数量
    total() {
      // 声明总数量的变量
      let t = 0;
      this.goodslist
        .filter((item) => item.goods_state === true)
        .forEach((item) => {
          // 循环累加被选中的商品数量
          t += item.goods_count;
        });
      return t;
    },
  },

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
      // 循环将每个商品的复选框选中状态改成跟全选复选框的选中状态一样
      this.goodslist.forEach(item =>{
        item.goods_state = isFull
      })
    },
    // 单个商品选中状态变化触发的函数
    onGoodStateChange(e) {
      // 在数组中找到指定id的数组元素
      const result = this.goodslist.find((item) => item.id === e.id);
      // 判断是否找到
      if (result) {
        // 找到了则更新对应商品的选中状态
        result.goods_state = e.value;
      }
    },
    // 某个商品的数量发生变化时更新数据
    onGoodsCountChange(e){
      const result = this.goodslist.find(item=>item.id === e.id)
      if(result){
        result.goods_count =e.count
      }
    }
  },
};
</script>

<style lang="less" scoped>
.main-container {
  margin-top: 45px;
  margin-bottom: 50px;
}
</style>

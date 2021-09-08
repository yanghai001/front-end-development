<template>
  <div class="footer-container">
    <!-- 全选按钮 -->
    <div class="form-check">
      <input
        class="form-check-input"
        type="checkbox"
        name="fullCheck"
        id="fullCheck"
        :checked="isfull"
        @change="onCheckBoxChange"
      />
      <label class="form-check-label" for="fullCheck"> 全选 </label>
    </div>
    <!-- 合计区域 -->
    <div>
      <span>合计：</span>
      <!-- 将amount的值保留两位小数 -->
      <span class="amount">￥{{ amount.toFixed(2) }}</span>
    </div>
    <!-- 结算按钮 -->
    <!-- disabled的值为true表示禁用按钮 -->
    <button
      type="button"
      class="btn btn-primary btn-settle"
      :disabled="total === 0"
    >
      结算({{ total }})
    </button>
  </div>
</template>

<script>
export default {
  name: "Esfooter",
  props: {
    // 已勾选商品的总价格
    amount: {
      type: Number,
      default: 0,
    },
    // 已勾选商品的总数量
    total: {
      type: Number,
      default: 0,
    },
    // 全选按钮是否选中
    isfull: {
      type: Boolean,
      default: false,
    },
  },
  // 声明自定义事件
  emits: ["fullChange"],

  methods: {
    // 全选选择框选中状态变化处理函数
    onCheckBoxChange(e) {
      // e.target.checked是复选框最新的选中状态,自定义事件将这个值向父组件传递
      this.$emit("fullChange", e.target.checked);
    },
  },
};
</script>

<style lang="less" scoped>
.footer-container {
  // 设置宽度和高度
  width: 100%;
  height: 50px;
  // 设置背景色和顶边框
  background-color: #fff;
  border-top: 1px solid #ccc;
  // 底部固定定位
  position: fixed;
  left: 0;
  bottom: 0;
  // 组件内内部元素的对齐方式
  display: flex;
  justify-content: space-between;
  align-items: center;
  // 设置左右padding
  padding: 0 10px;
  // 设置z-index防止被遮挡
  z-index: 999;
}
.amount {
  color: red;
  font-weight: 700;
}
.btn-settle {
  min-width: 90px;
  height: 38px;
  border-radius: 19px;
}
</style>

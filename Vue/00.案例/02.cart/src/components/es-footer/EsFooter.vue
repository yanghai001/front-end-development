<template>
  <div class="footer-container">
    <!-- 全选按钮 -->
    <div class="form-check">
      <input
        class="form-check-input"
        type="checkbox"
        name="fullCheck"
        id="fullCheck"
      />
      <label class="form-check-label" for="fullCheck"> 全选 </label>
    </div>
    <!-- 合计区域 -->
    <div>
      <span>合计：</span>
      <span class="amount">￥0.00</span>
    </div>
    <!-- 结算按钮 -->
    <button type="button" class="btn btn-primary btn-settle">结算(0)</button>
  </div>
</template>

<script>
export default {
  name: "Esfooter",
  data() {
    return {};
  },
  methods: {},
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
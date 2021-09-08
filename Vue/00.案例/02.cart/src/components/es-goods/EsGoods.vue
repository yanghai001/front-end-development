<template>
  <div class="goods-container">
    <!-- 左侧图片区域 -->
    <div class="left">
      <!-- 复选框 -->
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="fullCheck" />
        <label class="form-check-label" for="fullCheck">
          <img src="商品图片" class="thumb" />
        </label>
      </div>
    </div>
    <!-- 右侧信息区域 -->
    <div class="right">
      <!-- 商品名称 -->
      <div class="top">xxx</div>
      <div class="bottom">
        <!-- 商品价格 -->
        <div class="price">￥0.00</div>
        <!-- 商品数量 -->
        <div class="count">数量</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Esgoods",
};
</script>

<style lang="less" scoped>
.goods-container {
  display: flex;
  padding: 10px;
  // 最终生成的选择器为 .goods-container + .goods-container
  // 在css中（+）是“相邻兄弟选择器”，表示选择紧连着另一个元素后的元素，两者具有相同的父元素
  + .goods-container {
    border-top: 1px solid #efefef;
  }

  // 左侧图片的样式
  .left {
    margin-right: 10px;
    // 复选框的样式
    .form-check-input {
      margin-top: 2.5em;
    }
    // 缩略图的样式
    .thumb {
      display: block;
      width: 100px;
      height: 100px;
      background-color: #efefef;
    }
  }
  //   右侧商品信息的样式
  .right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    // 顶部标题区域
    .top {
      font-weight: 700;
    }
    .bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .price {
        color: red;
        font-weight: 700;
      }
    }
  }
}
</style>

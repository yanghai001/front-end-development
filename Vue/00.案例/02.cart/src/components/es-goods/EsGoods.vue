<template>
  <div class="goods-container">
    <!-- 左侧图片区域 -->
    <div class="left">
      <!-- 复选框 -->
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          :id="id"
          :checked="checked"
          @change="onCheckBoxChange"
        />
        <label class="form-check-label" :for="id">
          <img :src="thumb" class="thumb" />
        </label>
      </div>
    </div>
    <!-- 右侧信息区域 -->
    <div class="right">
      <!-- 商品名称 -->
      <div class="top">{{ title }}</div>
      <div class="bottom">
        <!-- 商品价格 -->
        <div class="price">￥{{ price.toFixed(2) }}</div>
        <!-- 商品数量 -->
        <div class="count">数量:{{ count }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Esgoods",
  props: {
    // id,thumb,title,price,count,checked
    // 商品id
    id: {
      type: [String, Number],
      required: true,
    },
    // 商品图片
    thumb: {
      type: String,
      required: true,
    },
    // 商品名称
    title: {
      type: String,
      required: true,
    },
    // 商品价格
    price: {
      type: Number,
      required: true,
    },
    // 商品数量
    count: {
      type: Number,
      required: true,
    },
    // 商品选中状态
    checked: {
      type: Boolean,
      required: true,
    },
  },
  // 复选框状态变化自定义事件
  emits: ["stateChange"],
  // 复选框选中状态变化处理函数，通过事件对象e获取最新选中状态
  methods: {
    onCheckBoxChange(e) {
      // 触发自定义事件,向外传递id和复选框的最新选中状态
      this.$emit("stateChange", {
        id: this.id,
        value: e.target.checked,
      });
    },
  },
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

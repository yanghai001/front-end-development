<template>
  <div class="counter-container">
    <!-- 减1按钮 -->
    <button type="button" class="btn btn-light btn-sm" @click="numSub">
      -
    </button>
    <!-- 中间输入框 -->
    <input
      type="number"
      class="form-control form-control-sm ipt-num"
      v-model="number"
    />
    <!-- 加1按钮 -->
    <button type="button" class="btn btn-light btn-sm" @click="numAdd">
      +
    </button>
  </div>
</template>

<script>
export default {
  name: "Escounter",
  data() {
    //   data内的变量可读可写
    return {
      number: this.num,
    };
  },
  props: {
    //   外部传入数量，只读属性，无法写入，所以无法使用v-model双向绑定
    num: {
      type: Number,
      required: true,
    },
  },
  //   声明自定义事件
  emits: ["numberChange"],
  methods: {
    //   减1操作
    numSub() {
      // 限制最小值为1
      if (this.number - 1 < 1) return;
      this.number--;
      //   触发自定义事件向外传递最新的数量
      this.$emit("numberChange", this.number);
    },
    // 加1操作
    numAdd() {
      // 限制最大值为99
      if (this.number + 1 > 99) return;
      this.number++;
      //   触发自定义事件向外传递最新的数量
      this.$emit("numberChange", this.number);
    },
  },
};
</script>

<style lang="less" scoped>
.counter-container {
  display: flex;
  // 按钮的样式
  .btn {
    width: 25px;
  }
  //   输入框的样式
  .ipt-num {
    width: 34px;
    text-align: center;
    margin: 0 4px;
  }
}
</style>

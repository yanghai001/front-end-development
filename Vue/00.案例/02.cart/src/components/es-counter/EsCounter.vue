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
      v-model.lazy="number"
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
  methods: {
    //   减1操作
    numSub() {
      // 限制最小值为1
      if (this.number - 1 < 1) return;
      this.number--;
    },
    // 加1操作
    numAdd() {
      // 限制最大值为99
      if (this.number + 1 > 99) return;
      this.number++;
    },
  },
  // 声明自定义事件
  emits:['numChange'],
  // 声明监听器
  watch: {
    // 监听number的数据变化
    number(newVal) {
      // 将输入的值转换成整数
      const parseResult = parseInt(newVal);
      // 如果转换的结果不是数字或者＜1，则强制number的值等于1
      if (isNaN(parseResult) || parseResult < 1) {
        this.number = 1;
        return;
      }
      // 如果转换结果>99，强制为99
      if (parseResult > 99) {
        this.number = 99;
        return;
      }
      if (String(parseResult).indexOf(".") !== -1) {
        // 其他情况把转换结果赋给number
        this.number = parseResult;
        return;
      }
      // 数据发生变化的时候触发自定义事件，并把数据传递出去
      this.$emit('numChange',this.number);
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

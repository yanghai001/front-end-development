<template>
  <div class="btn-container">
    <div class="btn-group" role="group">
      <button
        type="button"
        class="btn"
        :class="active === 0 ? 'btn-primary' : 'btn-secondary'"
        @click="onBtnClick(0)"
      >
        全部
      </button>
      <button
        type="button"
        class="btn"
        :class="active === 1 ? 'btn-primary' : 'btn-secondary'"
        @click="onBtnClick(1)"
      >
        已完成
      </button>
      <button
        type="button"
        class="btn"
        :class="active === 2 ? 'btn-primary' : 'btn-secondary'"
        @click="onBtnClick(2)"
      >
        未完成
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Todobutton",
  emits: ["update:active"],
  props: {
    //   激活的索引值
    active: {
      type: Number,
      required: true,
      //   默认激活索引值为0的按钮（0：全部，1：已完成，2：未完成）
      default: 0,
    },
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {
    //   按钮的点击处理事件
    onBtnClick(index) {
      // 如果当前点击的按钮索引等于props传递过来的索引值，则没必要触发update:active自定义事件
      if (index === this.active) return;
      // 触发自定义事件传递数据
      this.$emit("update:active", index);
    },
  },
};
</script>

<style lang="less" scoped>
.btn-container {
  // 文字居中
  text-align: center;
  // 上边距和左右居中
  margin: 10px auto;
}
</style>

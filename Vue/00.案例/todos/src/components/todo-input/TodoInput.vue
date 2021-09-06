<template>
    <!-- 输入组 -->
    <div class="input-group flex-nowrap">
        <!-- 输入框前缀 -->
        <span class="input-group-text" id="addon-wrapping">任务</span>
        <!-- 输入框 -->
        <input type="text" class="form-control" placeholder="请输入新任务信息"  v-model.trim="taskname" @keyup.enter="onFormSubmit">
        <!-- 添加按钮 -->
        <button class="btn btn-outline-secondary" type="button" id="add-task" @click="onFormSubmit" >添加新任务</button>
    </div>

</template>

<script>
export default {
    name: 'Todoinput',

    data() {
        return {
            // 新任务的名称
            taskname:"",
        };
    },

    mounted() {
        
    },

    emits:["add",],

    methods: {
        // 添加任务的处理函数
        onFormSubmit(){
            // 先判断任务是否为空
            if(this.taskname == "") return alert("任务不能为空")
            // 触发自定义事件，将数据传递出去
            this.$emit('add', this.taskname);
            // 清空任务名称
            this.taskname=""
        }
    },
};
</script>

<style lang="less" scoped>

</style>
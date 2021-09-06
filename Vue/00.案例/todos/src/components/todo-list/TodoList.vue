<template>
    <div>
        <!-- 列表组 -->
        <ul class="list-group">
            <!-- 通过v-for指令循环渲染,并将具有唯一性的id动态给到key -->
            <li class="list-group-item d-flex justify-content-between align-items-left" v-for="item in list" :key="item.id" @click="item.done=!item.done">
                <!-- 复选框 -->
                <div class="form-check">
                    <!-- 把id值跟checkbox的id进行动态绑定;通过v-model进行双向绑定 -->
                    <input class="form-check-input" type="checkbox" value="" :id="item.id" v-model="item.done">
                    <!-- 把id值跟label的for属性，以便点击label能控制checkbox -->
                    <label class="form-check-label" :for="item.id" :class="item.done ? 'delete' : ''">
                        <!-- 把task值给到label -->
                        {{item.task}}
                    </label>
                </div>

                <!-- 徽章 -->
                <!-- 通过v-if和v-else指令控制显示完成标签还是未完成标签 -->
                <span class="badge bg-success rounded-pill" v-if="item.done">已完成</span>
                <span class="badge bg-warning rounded-pill" v-else>未完成</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Todolist',
    props: {
        // 用于接收列表数据
        list: {
            type:Array,
            require:true,
            default:[]
        },
    },
};
</script>

<style lang="less" scoped>
    
    //已完成项目的样式效果 
    .delete{
        text-decoration: line-through;
        color: gray;
        font-style: italic;
    }
</style>
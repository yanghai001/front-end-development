# vue ToDoList Project


### 一、项目初始化

1、创建项目：在合适的文件夹中启动命令行，执行以下指令

```
    npm init vite-app todos
```

2、进入todos

```
    cd todos
```

3、安装依赖

```
    npm install
```

4、安装其他依赖包：这里我们需要使用less语法，但只需要在开发环境下,加上参数-D

```
    npm install less -D
```

5、使用VSCode打开todos文件夹

### 二、梳理项目结构

1、重置index.css中的全局样式

```
    
    :root {
    font-size: 12px;
    }

    body {
    padding: 8px;
    }
```

2、重置APP根组件:删除原来app.vue中的所有内容，输入以下内容

```
    <template>
    <div>
        <h1>APP根组件</h1>
    </div>
    </template>

    <script>
    export default {
    name: 'MyApp',
    // 任务列表的数据
    data() {
        return {
        todolist:[
            {id:1,task:'周一早晨9点开会',done:false},
            {id:2,task:'周一晚上8点聚餐',done:false},
            {id:3,task:'准备周三上午的演讲稿',done:true},

        ]
        };
    },
    };
    </script>

    <style lang="less" scoped>

    </style>
```

3、删除components下的helloworld.vue文件
4、在终端下运行以下命令，将项目运行起来：

```
    npm run dev
```

### 三、封装 todo-list 组件

#### 3.1创建并注册TodoList组件

1、在src/components/todo-list/目录下创建TodoList.vue组件：

```
    <template>
        <div>
            TodoList 组件
        </div>
    </template>

    <script>
    export default {
        name: 'Todolist',
    };
    </script>

    <style lang="less" scoped>

    </style>
```

2、在App.vue组件中导入并注册TodoList.vue组件：

```
    // 导入TodoList组件
    import TodoList from './components/todo-list/TodoList.vue'

    export default {
    name: 'MyApp',

    // 注册私有组件
    components:{
        TodoList,
    },
    }
```
3、在APP.vue的HTML结构中使用TodoList组件：
```
    <template>
    <div>
        <h1>APP根组件</h1>
        <TodoList></TodoList>
    </div>
    </template>
```

#### 3.2基于bootstrap渲染列表组件
1、下载[bootstrap](https://v5.bootcss.com/docs/getting-started/download/)，并复制css文件夹到项目src/assets/静态资源目录中。
2、在main.js中导入bootstrap.min.css：
```
    import {createApp} from 'vue'
    import App from './App.vue'

    // 导入bootstrap.css
    import './assets/css/bootstrap.min.css'
    import './index.css'

    createApp(App).mount('#app')
```
3、基于bootstrap提供的[列表组](https://v5.bootcss.com/docs/components/list-group/)和[复选框](https://v5.bootcss.com/docs/forms/checks-radios/#indeterminate)在TodoList.vue中构造列表组的基本机构：
```
    <template>
        <div>
            <!-- 列表组 -->
            <ul class="list-group">
                <li class="list-group-item d-flex justify-content-between align-items-left">
                    <!-- 复选框 -->
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate">
                        <label class="form-check-label" for="flexCheckIndeterminate">
                            Indeterminate checkbox
                        </label>
                    </div>

                    <!-- 徽章 -->
                    <span class="badge bg-success rounded-pill">已完成</span>
                    <span class="badge bg-warning rounded-pill">未完成</span>
                </li>
            </ul>
        </div>
    </template>
```

#### 3.3为TodoList组件声明props属性
1、在TodoList.vue中，创建props属性：
```
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
```
2.在App.vue组件中通过list属性，将数据传递到TodoList组件中：
```
    <template>
    <div>
        <h1>APP根组件</h1>
        <TodoList :list="todolist"></TodoList>
    </div>
    </template>
```

#### 3.4渲染列表的DOM结构
1、在TodoList.vue组件中通过v-for指令将数据渲染到列表组中：
```
    <template>
        <div>
            <!-- 列表组 -->
            <ul class="list-group">
                <!-- 通过v-for指令循环渲染,并将具有唯一性的id动态给到key -->
                <li class="list-group-item d-flex justify-content-between align-items-left" v-for="item in list" :key="item.id">
                    <!-- 复选框 -->
                    <div class="form-check">
                        <!-- 把id值跟checkbox的id进行动态绑定 -->
                        <input class="form-check-input" type="checkbox" value="" :id="item.id" v-model="item.done">
                        <!-- 把id值跟label的for属性，以便点击label能控制checkbox -->
                        <label class="form-check-label" :for="item.id">
                            <!-- 把task值给到label -->
                            {{item.task}}
                        </label>
                    </div>

                    <!-- 徽章 -->
                    <span class="badge bg-success rounded-pill" >已完成</span>
                    <span class="badge bg-warning rounded-pill" >未完成</span>
                </li>
            </ul>
        </div>
    </template>
```
2、通过v-if和v-else指令控制显示完成标签还是未完成标签：
```
    <!-- 徽章 -->
    <!-- 通过v-if和v-else指令控制显示完成标签还是未完成标签 -->
    <span class="badge bg-success rounded-pill" v-if="item.done">已完成</span>
    <span class="badge bg-warning rounded-pill" v-else>未完成</span>
```
3、通过v-model双向绑定checkbox的选中状态和list完成状态：
```
    <!-- 把id值跟checkbox的id进行动态绑定;通过v-model进行双向绑定 -->
    <input class="form-check-input" type="checkbox" value="" :id="item.id" v-model="item.done">
```
4、在TodoList.vue组件中的style中创建类名，修改已完成项目的样式：
```
    <style lang="less" scoped>
        
        //已完成项目的样式效果 
        .delete{
            text-decoration: line-through;
            color: gray;
            font-style: italic;
        }
    </style>
```
5、通过v-bind属性绑定，动态切换元素的class类名，达到动态改变样式的效果:
```
    <!-- 把id值跟label的for属性，以便点击label能控制checkbox -->
    <label class="form-check-label" :for="item.id" :class="item.done ? 'delete' : ''">
```
6、给li绑定点击事件，每次点击就让对应的done属性取反：
```
    <li class="list-group-item d-flex justify-content-between align-items-left" v-for="item in list" :key="item.id" @click="item.done=!item.done">
```


### 四、封装 todo-input 组件
#### 4.1 创建并注册TodoInput组件
1、在src/components/todo-input/目录下创建TodoInput.vue组件,并完成以下架构：
```
    <template>
        <div>
            Todoinput组件
        </div>
    </template>

    <script>
    export default {
        name: 'Todoinput',
    };
    </script>

    <style lang="less" scoped>

    </style>
```
2、在App.vue组件中导入并注册TodoInput.vue组件：
```
    <script>
    // 导入TodoList组件
    import TodoList from './components/todo-list/TodoList.vue'
    // 导入TodoInput组件
    import TodoInput from './components/todo-input/TodoInput.vue'

    export default {
    name: 'MyApp',
    // 任务列表的数据
    data() {
        return {
        todolist:[
            {id:1,task:'周一早晨9点开会',done:false},
            {id:2,task:'周一晚上8点聚餐',done:false},
            {id:3,task:'准备周三上午的演讲稿',done:true},

        ]
        };
    },
    // 注册私有组件
    components:{
        TodoList,
        TodoInput,
    },
    };
    </script>
```

3、在App.vue的HTML结构中使用TodoInput组件
```
    <template>
    <div>
        <h1>APP根组件</h1>
        <todo-input></todo-input>
        <todo-list :list="todolist"></todo-list>
    </div>
    </template>
```
#### 4.2 基于bootstrap渲染组件
基于bootstrap提供的[输入组](https://v5.bootcss.com/docs/forms/input-group/#wrapping)搭建以下HTML架构：
```
    <template>
        <!-- 输入组 -->
        <div class="input-group flex-nowrap">
            <!-- 输入框前缀 -->
            <span class="input-group-text" id="addon-wrapping">任务</span>
            <!-- 输入框 -->
            <input type="text" class="form-control" placeholder="请输入新任务信息" aria-label="Username" aria-describedby="addon-wrapping">
            <!-- 添加按钮 -->
            <button class="btn btn-outline-secondary" type="button" id="add-task">添加新任务</button>
        </div>

    </template>
```

#### 4.3 通过自定义事件向外传输数据
1、在TodoInput组件的data中声明如下数据：
```
    data() {
            return {
                // 新任务的名称
                taskname:"",
            };
        },
```
2、在TodoInput组件的input输入框进行v-model数据双向绑定,添加trim修饰符去掉前后空白,同时绑定按下回车键的事件：
```
    <!-- 输入框 -->
    <input type="text" class="form-control" placeholder="请输入新任务信息"  v-model.trim="taskname" @keyup.enter="onFormSubmit">
```
3、在TodoInput组件的button上指定鼠标点击处理事件函数：
```
    <!-- 添加按钮 -->
    <button class="btn btn-outline-secondary" type="button" id="add-task" @click="onFormSubmit" >添加新任务</button>
```

4、在TodoInput组件添加自定义事件,跟data平级：
```
    emits:["add",],
```

5、在TodoInput组件声明onFormSubmit处理函数：
```
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
```

6、在app组件中监听TodoInput组件的自定义事件，获取到要添加的新任务的名称,并触发处理函数：
```
    <template>
        <div>
            <h1>APP根组件</h1>
            <todo-input @add="onAddNewTask"></todo-input>
            <!-- 添加行内样式，拉开input组件和list组件的上下间距 -->
            <todo-list :list="todolist" style="margin-top:10px"></todo-list>
        </div>
    </template>
```

7、在App组件中声明onAddNewTask方法，输出接收到的来自TodoInput的数据：
```
    methods:{
        onAddNewTask(taskname){
        console.log(taskname);
        }
    }
```


#### 4.4 实现添加新任务的功能
1.在App组件中创建以下数据：
```
  data() {
    return {
      todolist:[
        {id:1,task:'周一早晨9点开会',done:false},
        {id:2,task:'周一晚上8点聚餐',done:false},
        {id:3,task:'准备周三上午的演讲稿',done:true},

      ],
      // 保存下一个可用id
      nextId:4,
    };
  },
```

2、改造onAddNewTask方法：
```
    // taskname是TodoInput传递出来的数据
    onAddNewTask(taskname){
      // 创建一个任务对象
      var newtask = {}
      // 给对象的属性赋值
      newtask.id = this.nextId
      newtask.task = taskname
      newtask.done=false
      // 将对象添加到todolist数组中
      this.todolist.push(newtask)
      // 下一个可用id+1
      this.nextId++
    },
```


### 五、封装 todo-button 组件
#### 5.1 创建并注册todo-button组件
1、在src/components/todo-button/目录下创建TodoButton.vue组件,并完成以下架构：
```
    <template>
        <div>
            TodoButton组件
        </div>
    </template>

    <script>
    export default {
        name: 'Todobutton',

    };
    </script>

    <style lang="less" scoped>

    </style>
```
2、在App.vue组件中导入并注册TodoButton.vue组件：
```
    <script>
// 导入TodoList组件
import TodoList from './components/todo-list/TodoList.vue'
// 导入TodoInput组件
import TodoInput from './components/todo-input/TodoInput.vue'
// 导入TodoButton组件
import TodoButton from './components/todo-button/TodoButton.vue'



export default {
  name: 'MyApp',
  
  // 注册私有组件
  components:{
    TodoList,
    TodoInput,
    TodoButton,
  },
  
};
</script>
```

3、在App.vue的HTML结构中使用TodoButton组件
```
<template>
  <div style="width:600px;margin:50px auto;">
    <h1>APP根组件</h1>
    <todo-input @add="onAddNewTask"></todo-input>
    <!-- 添加行内样式，拉开input组件和list组件的上下间距 -->
    <todo-list :list="todolist" style="margin-top:10px"></todo-list>
    <todo-button></todo-button>
  </div>
</template>
```

#### 5.2 基于bootstrap渲染组件的内容
1、基于bootstrap提供的[按钮组](https://v5.bootcss.com/docs/components/button-group/)，渲染以下HTML结构：
```
<template>
    <div>
        <div class="btn-group" role="group" >
            <button type="button" class="btn btn-primary">全部</button>
            <button type="button" class="btn btn-secondary">已完成</button>
            <button type="button" class="btn btn-secondary">未完成</button>
        </div>
    </div>
</template>
```
2、给btn-container设置样式，美化组件：
```
<style lang="less" scoped>
    .btn-container{
        // 文字居中
        text-align: center;
        // 上边距和左右居中
        margin: 10px auto;
    }
</style>
```

#### 5.3 通过props指定默认激活的按钮
1、在TodoButton组件中声明如下props，用来指定默认激活的按钮的索引：
```
    props: {
        //   激活的索引值
        active: {
        type: number,
        required: true,
        //   默认激活索引值为0的按钮（0：全部，1：已完成，2：未完成）
        default: 0,
        },
    },
```
2、在TodoButton组件中通过动态绑定类名的方式控制按钮激活状态：
```
    <template>
        <div class="btn-container">
            <div class="btn-group" role="group">
            <button
                type="button"
                class="btn"
                :class="active === 0 ? 'btn-primary' : 'btn-secondary'"
            >
                全部
            </button>
            <button
                type="button"
                class="btn"
                :class="active === 1 ? 'btn-primary' : 'btn-secondary'"
            >
                已完成
            </button>
            <button
                type="button"
                class="btn"
                :class="active === 2 ? 'btn-primary' : 'btn-secondary'"
            >
                未完成
            </button>
            </div>
        </div>
    </template>
```
3、在app组件中声明默认激活项的索引，并通过属性绑定的方式传给TodoButton组件：
```
    data() {
        return {
        // 激活的按钮的索引
        activeBtnIndex: 0,
        };
    },

    <todo-button :active="activeBtnIndex"></todo-button>
```
#### 5.4 通过v-model更新激活项的索引
1、需求分析：
    父→子 通过props传递了激活项的索引（active)
    子→父 需要更新父组件中的激活项索引
    这中情况非常适合使用v-model指令，维护组内外数据的同步。
2、在TodoButton组件中为三个按钮分别绑定click事件处理函数：
```
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
```
3、在TodoButton组件中声明如下自定义事件，用来更新父组件通过v-model指令传递过来的props数据：
```
emits: ["update:active"],

methods: {
    //   按钮的点击处理事件
    onBtnClick(index) {
      // 如果当前点击的按钮索引等于props传递过来的索引值，则没必要触发update:active自定义事件
      if (index === this.active) return;
      // 触发自定义事件传递数据
      this.$emit("update:active", index);
    },
  },
```
4、在app组件中更新调用todo-button标签的结构，添加v-model：
```
    <todo-button v-model:active="activeBtnIndex"></todo-button>
```


#### 5.5 通过计算属性动态切换列表的数据
1、在App组件中声明如下的计算属性：
```
    computed: {
        // 根据激活按钮的索引值，动态计算要展示的列表数据
        tasklist() {
        switch (this.activeBtnIndex) {
            case 0: //全部
            return this.todolist;
            case 1: //已完成
            return this.todolist.filter((x) => x.done == true);
            case 2: //未完成
            return this.todolist.filter((x) => x.done == false);
        }
        },
    },
```
2、在app组件中将todo-list绑定的数据修改为tasklist:
```
    <todo-list :list="tasklist" style="margin-top: 10px"></todo-list>
```


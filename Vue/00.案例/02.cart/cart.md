# 购物车案例
### 一、初始化项目结构
1.在合适的文件夹位置运行以下命令，初始化 vite 项目：
```
npm init vite-app cart
cd cart
npm i
```
2、整理项目结构：
+ 把bootstrap相关的文件放入src/asset目录下；
+ 在main.js中导入bootstrap.css
+ 清空app.vue组件
+ 删除components目录下的helloworld.vue组价
  
3、安装less，让组件的样式能适应less语法：
```
npm i less -D
```
4、初始化index.css全局样式：
```
    :root {
        font-size: 14px;
        }
```
### 二、封装es-header组件
#### 2.1创建和注册es-header组件
1.在src/components目录下创建EsHeader.vue组件，并完成以下结构：
```
    <template>
    <div>EsHeader组件</div>
    </template>

    <script>
    export default {
    name: "EsHeader",
    };
    </script>

    <style lang="less" scoped>
    </style>
```
2.在app.vue组件中完成以下结构，导入并注册EsHeader.vue组件：
```
    <template>
    <div>Cart</div>
    </template>

    <script>
    // 导入EsHeader组件
    import EsHeader from "./components/es-header/EsHeader.vue";

    export default {
    name: "Cart",

    components: {
        // 注册EsHeader组件
        EsHeader,
    },

    directives: {},

    data() {
        return {};
    },

    mounted() {},

    methods: {},
    };
    </script>

    <style lang="less" scoped>
    </style>
```
3.在app.vue的template模板结构中使用EsHeader组件：
```
    <template>
    <div>Cart</div>
    <es-header></es-header>
    </template>
```
#### 2.2封装es-header组件


### 三、基于axios请求商品列表数据
### 四、封装es-footer组件
### 五、封装es-goods组件
### 六、实现合计、结算数量、全选功能
### 七、封装es-counter组件

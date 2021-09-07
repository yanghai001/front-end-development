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
1、封装需求：
    - 允许用户自定义 **title** 标题内容
    - 允许用户自定义 **color** 文字颜色
    - 允许用户自定义 **bgcolor** 背景颜色
    - 允许用户自定义 **fsize** 字体大小
    - es-header组件必须**固定定位**到页面**顶部**的位置，**高度**为45px,**文本居中**，z-index为999

2、在es-header组件下封装以下props属性：
```
    <script>
        export default {
        name: "EsHeader",
        props: {
            title: {
            //标题内容
            type: String,
            default: "es-header组件",
            },
            // 文字颜色
            color: { 
            type: String,
            default: "#ffffff",
            },
            // 背景颜色
            bgcolor: {
            type: String,
            default: "#007BFF",
            },
            // 文字大小
            fsize: {
            type: Number,
            default: 16,
            },
        },
        };
    </script>
```
3、在EsHeader.vue的template模板结构中修改成以下形式,将props属性应用到div标签上：
```
    <template>
    <!-- v-bind指令绑定属性，注意具体样式需要用{}包含，不同项用逗号隔开 -->
    <div
        :style="{ color: color, backgroundColor: bgcolor, fontSize: fsize + 'px' }"
    >
        {{ title }}
    </div>
    </template>
```
4、在EsHeader.vue的template模板结构中给div增加类名header-container，并在style中设置类样式：
```

```
5、在app.vue的template模板结构中修改EsHeader组件的使用：
```
    <template>
      <es-header title="购物车" color="white" bgcolor="blue"  :fsize="18" ></es-header>
    </template>
```

### 三、基于axios请求商品列表数据
### 四、封装es-footer组件
### 五、封装es-goods组件
### 六、实现合计、结算数量、全选功能
### 七、封装es-counter组件

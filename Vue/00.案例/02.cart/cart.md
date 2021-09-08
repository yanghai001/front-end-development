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
    <template>
    <!-- v-bind指令绑定属性，注意具体样式需要用{}包含，不同项用逗号隔开 -->
    <div
        class="header-container"
        :style="{ color: color, backgroundColor: bgcolor, fontSize: fsize + 'px' }"
    >
        {{ title }}
    </div>
    </template>

    <style lang="less" scoped>
    .header-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 45px;
    text-align: center;
    line-height: 45px;
    z-index: 999;
    }
    </style>
```
5、在app.vue的template模板结构中修改EsHeader组件的使用：
```
    <template>
      <es-header title="购物车" color="white" bgcolor="blue"  :fsize="18" ></es-header>
    </template>
```

### 三、基于axios请求商品列表数据
#### 3.1 全局布置axios
1、安装axios插件：
```
    npm i axios -S
```
2、在main.js入口文件中导入并全局配置axios：
```
    // 导入axios
    import axios from 'axios'

    // 改造vue实例化方法
    // createApp(App).mount('#app')
    const app = createApp(App)
    // 配置axios请求的根路径
    axios.defaults.baseURL = 'https://www.escook.cn'
    // 将axios挂载为全局的$http自定义属性
    app.config.globalProperties.$http = axios
    app.mount('#app')
```
#### 3.2 发起axios请求获取商品信息列表
1、在app.vue组件中生命如下的data数据：
```
    data() {
        return {
        // 商品信息列表数据
        goodslist:[],
        };
    },
```
2、在app.vue组件的created生命周期函数中，**预调用**获取商品信息列表数据的methods方法：
```
    // 组件创建完成之后触发的生命周期函数
    created() {
        // 调用methods中的getGoodsList方法，请求商品列表的数据
        this.getGoodsList();
    },
```
3、在app.vue组件的methods节点中声明getGoodsList方法，并发起axios请求获取商品列表数据：
```
    methods: {
        // 请求商品列表的数据
        async getGoodsList() {
        // 通过组件实例this访问到全局挂载的$http属性，并发起axios数据请求
        const { data: res } = await this.$http.get("/api/cart");
        // 判断请求是否成功
        if (res.status !== 200) return alert("商品列表数据请求失败！");
        // 如果请求成功，将数据存储到对应的数组中
        console.log(res);
        this.goodslist = res.list;
        },
    },
```
### 四、封装es-footer组件
#### 4.1创建并注册es-footer组件
1、在src/components/es-footer/目录先创建EsFooter.vue组件，并完成以下结构：
```
    <template>
    <div>EsFooter组件</div>
    </template>

    <script>
    export default {
    name: "Esfooter",
    data() {
        return {};
    },
    methods: {},
    };
    </script>

    <style lang="less" scoped>
    </style>
```
2、在App.vue组件中导入并注册EsFooter组件：
```
    // 导入EsFooter组件
    import EsFooter from "./components/es-footer/EsFooter.vue";

    components: {
        // 注册EsHeader组件
        EsHeader,
        // 注册EsFooter组件
        EsFooter,
    },
```
3、在app.vue的template模板结构中使用EsFooter组件：
```
    <template>
        <div class="main-container">Cart</div>
        <hr />
        <es-header title="购物车" color="white"  bgcolor="blue" :fsize="18"></es-header>
        <es-footer></es-footer>
    </template>
```
#### 4.2封装es-footer组件
##### 4.2.1 封装需求：
    - es-footer组件必须**固定定位**在页面底部的位置，**高度**为50px，**内容两端贴边对齐**，z-index为999
    - 允许用户自定义**amount**总价格（单位是元），并在渲染时**保留两位小时**
    - 允许用户自定义**total**总数量，并渲染到**结算按钮**中，如果结算的商品数量为0，则**禁用结算按钮**
    - 允许用户通过**自定义事件**的形式监听全选按钮**选中状态的变化**，并获取到**最新的选中状态**
    - 使用实例:
  ```
    <!--footer组件-->
    <es-footer :isfull="false" :total="1" :amount="98" @fullChange="onFullStateChange"></es-footer>
  ```
##### 4.2.2 渲染组件的基础布局
1、将EsFooter.vue组件在页面底部进行固定定位：
```
    <template>
    <div class="footer-container">EsFooter组件</div>
    </template>

    <style lang="less" scoped>
    .footer-container {
    // 设置宽度和高度
    width: 100%;
    height: 50px;
    // 设置背景色和顶边框
    background-color: #fff;
    border-top: 1px solid #efefef;
    // 底部固定定位
    position: fixed;
    left: 0;
    bottom: 0;
    // 组件内内部元素的对齐方式
    display: flex;
    justify-content: space-between;
    align-items: center;
    // 设置左右padding
    padding: 0 10px;
    // 设置z-index防止被遮挡
    z-index: 999;
    }
    </style>
```
2、在EsFooter.vue的template模板中构造以下DOM结构：
```
    <template>
    <div class="footer-container">
        <!-- 全选按钮 -->
        <div class="form-check">
        <input
            class="form-check-input"
            type="checkbox"
            name="fullCheck"
            id="fullCheck"
        />
        <label class="form-check-label" for="fullCheck"> 全选 </label>
        </div>
        <!-- 合计区域 -->
        <div>
        <span>合计：</span>
        <span class="amount">￥0.00</span>
        </div>
        <!-- 结算按钮 -->
        <button type="button" class="btn btn-primary btn-settle">结算(0)</button>
    </div>
    </template>
```
3、在全局样式表index.css中给选择按钮添加样式，将方形选择框改为圆形(后续商品列表单件商品的选择也用到，所以放到全局样式表中)：
```
    .form-check .form-check-input[type="checkbox"] {
    border-radius: 50%;
    }
```
4、在EsFooter.vue组件中为合计区域、结算按钮设置样式：
```
    <style lang="less" scoped>
    .amount {
    color: red;
    font-weight: 700;
    }
    .btn-settle {
    min-width: 90px;
    height: 38px;
    border-radius: 19px;
    }
    </style>
```
##### 4.2.3 封装自定义属性amount
1、在EsFooter.vue组件的props节点中声明如下的自定义属性：
```
    <script>
    export default {
    name: "Esfooter",
    props: {
        // 已勾选商品的总价格
        amount: {
        type: Number,
        default: 0,
        },
    },
    };
    </script>
```
2、在EsFooter.vue组件的DOM结构中渲染amount的值：
```
    <!-- 合计区域 -->
    <div>
    <span>合计：</span>
    <!-- 将amount的值保留两位小数 -->
    <span class="amount">￥{{ amount.toFixed(2) }}</span>
    </div>
```
##### 4.2.4 封装自定义属性total
1、在EsFooter.vue组件的props节点中声明如下的自定义属性：
```
    props: {
        // 已勾选商品的总价格
        amount: {
        type: Number,
        default: 0,
        },
        // 已勾选商品的总数量
        total: {
        type: Number,
        default: 0,
        },
    },
```
2、在EsFooter.vue组件的DOM结构中渲染total的值：
```
    <!-- 结算按钮 -->
    <button type="button" class="btn btn-primary btn-settle">
      结算({{ total }})
    </button>
```
3、动态控制**结算按钮**的禁用状态：
```
    <!-- 结算按钮 -->
    <!-- disabled的值为true表示禁用按钮 -->
    <button
      type="button"
      class="btn btn-primary btn-settle"
      :disabled="total === 0"
    >
      结算({{ total }})
    </button>
```
##### 4.2.5 封装自定义属性isfull
1、在EsFooter.vue组件的props节点中声明如下的自定义属性：
```
    props: {
        // 已勾选商品的总价格
        amount: {
        type: Number,
        default: 0,
        },
        // 已勾选商品的总数量
        total: {
        type: Number,
        default: 0,
        },
        // 全选按钮是否选中
        isfull: {
        type: Boolean,
        default: false,
        },
    },
```
2、在EsFooter.vue组件的DOM结构中根据isfull的值渲染全选按钮的选中状态：
```
    <!-- 全选按钮 -->
    <div class="form-check">
      <input class="form-check-input" type="checkbox" name="fullCheck" id="fullCheck" :checked="isfull"/>
      <label class="form-check-label" for="fullCheck"> 全选 </label>
    </div>
```
##### 4.2.6 封装自定义事件fullChange
1、在EsFooter.vue组件的emits节点中声明fullChange自定义事件：
```
    // 声明自定义事件
    emits: ["fullChange"],
```
2、在EsFooter.vue组件的DOM结构中为全选选择框绑定状态变化change的处理函数onCheckBoxChange：
```
    <!-- 全选按钮 -->
    <div class="form-check">
      <input class="form-check-input" type="checkbox" name="fullCheck" id="fullCheck" :checked="isfull" @change="onCheckBoxChange"/>
      <label class="form-check-label" for="fullCheck"> 全选 </label>
    </div>
```
3、在EsFooter.vue组件的methods节点中声明onCheckBoxChange方法，并通过事件对象e获取最新的选中状态，并通过触发自定义事件将全选选中的状态值传递给父组件：
```
    methods: {
        // 全选选择框选中状态变化处理函数
        onCheckBoxChange(e) {
        // e.target.checked是复选框最新的选中状态,自定义事件将这个值向父组件传递
        this.$emit("fullChange", e.target.checked);
        },
    },
```
4、在app.vue组件中测试EsFooter.vue组件：
```
    <!-- 调用EsFooter.vue组件 -->
    <es-footer :isfull="true" :total="11" :amount="11.32123" @fullChange="onFullStateChange"></es-footer>
```
并在methods节点中声明onFullStateChange函数，通过形参获取到EsFooter.vue组件传递出来的**全选按钮**最新的选中状态
```
    // 监听全选按钮选中状态的变化
    onFullStateChange(isFull) {
      // 打印全选按钮选中状态
      console.log(isFull);
    },
```

### 五、封装es-goods组件
#### 5.1 创建并注册es-goods组件
1、在src/components/es-goods/目录先创建EsGoods.vue组件，并完成以下结构：
```
    <template>
        <div>EsGoods组件</div>
    </template>

    <script>
        export default {
            name: "Esgoods",
        };
    </script>

    <style lang="less" scoped></style>
```
2、在App.vue组件中导入并注册EsGoods.vue组件：
```
    <script>
    // 导入EsGoods组件
    import EsGoods from "./components/es-goods/EsGoods.vue";

    export default {
    name: "Cart",
    components: {
        // 注册EsGoods组件
        EsGoods,
    },
    };
    </script>
```
3、在app.vue的template模板结构中使用EsGoods.vue组件：
```
    <template>
    <div class="main-container">Cart</div>
    <hr />
    <!-- 调用EsHeader.vue组件 -->
    <es-header
        title="购物车"
        color="white"
        bgcolor="blue"
        :fsize="18"
    ></es-header>
    <!-- 调用EsFooter.vue组件 -->
    <es-goods></es-goods>
    <!-- 调用EsFooter.vue组件 -->
    <es-footer
        :isfull="true"
        :total="11"
        :amount="11.32123"
        @fullChange="onFullStateChange"
    ></es-footer>
    </template>
```
#### 5.2 封装es-goods组件
##### 5.2.1 封装需求
1、实现EsGoods组件的基本布局
2、封装组件的6个自定义属性（id,thumb,title,price,count,checked)
3、封装自定义事件stateChange，运行外界监听组件选中状态的变化
4、使用实例：
```

```
##### 5.2.2 渲染组件的基础布局
1、在EsGoods.vue组件中的template节点完善如下DOM结构：
```
    <template>
    <div class="goods-container">
        <!-- 左侧图片区域 -->
        <div class="left">
        <img src="商品图片" class="thumb" />
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
```
2、在EsGoods.vue组件中为组件进行布局样式的美化：
```
    <style lang="less" scoped>
    .goods-container {
    display: flex;
    padding: 10px;
    // 左侧图片的样式
    .left {
        margin-right: 10px;
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
```  

3、在EsGoods.vue组件中在缩略图组件外部再包裹一个复选框（从EsFooter.vue组件中复制）,以便选择图片也能选中商品：  

```
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
```
4、在EsGoods.vue组件中通过样式调整复选框的上下位置：
```
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
```
5、在app.vue组件中通过v-for指令循环渲染EsGoods组件：
```
    <!-- 调用EsFooter.vue组件 -->
    <es-goods v-for="item in goodslist" :key="item.id"></es-goods>
```
并给app.vue组件添加上下margin样式,以全部显示列表：
```
    <style lang="less" scoped>
    .main-container {
    margin-top: 45px;
    margin-bottom: 50px;
    }
    </style>
```
6、在EsGoods.vue组件中为EsGoods添加顶边框：
```
    .goods-container {
    display: flex;
    padding: 10px;
    // 最终生成的选择器为 .goods-container + .goods-container
    // 在css中（+）是“相邻兄弟选择器”，表示选择紧连着另一个元素后的元素，两者具有相同的父元素
    + .goods-container {
        border-top: 1px solid #efefef;
    }
    //省略其他样式
```
##### 5.2.3 封装自定义属性


##### 5.2.4 封装自定义事件stateChange


### 六、实现合计、结算数量、全选功能
### 七、封装es-counter组件

# Vue2 & Vue3 教程
## 1.课程内容
  1. vue基础
  2. vue-cli
  3. vue-router
  4. vuex
  5. element-ui
  6. vue3

## 2.vue基础
### 2.1 vue简介
1. vue是什么？
   一套用于**构造用户界面**的**渐进式**的JavaScript框架
   **构造用户数据**：不管数据如何得到的，只负责把数据显示到用户界面
   **渐进式**：vue可以**自底向上**逐层的应用，简单的应用只需一个轻量小巧的核心库，复杂的应用可以引入各种各样的vue插件库
2. vue是谁开发的？
   * 2013年尤雨溪受Angular框架启发，开发出轻量框架seed，12月更名为vue，版本0.6.0；
   * 2014年正式发布，版本0.8.0；
   * 2015年10月27正式发布 Vue 1.0.0 Evangelion(新世纪福音战士)
   * 2016年10月1日正式发布 Vue 2.0.0 Ghost in the Shell(攻壳机动队)
   * 2020年9月18日正式发布 Vue 3.0.0 One Piece (海贼王)
3. Vue的特点
    1. 采用**组件化**模式，提高代码复用率、且让代码更好维护
    2. **声明式**编码，让编码人员无需直接操作DOM，提高开发率
    3. 使用**虚拟DOM**+优秀的**Diff算法**，尽量复用DOM节点
4. 学习vue之前要掌握的JavaScript基础知识
   * ES6语法规范
   * ES6模块化
   * 包管理器
   * **原型、原型链**
   * 数组常用方法
   * axios
   * promise

### 2.2 

## 3.vue核心

## 4.vue组件化编程
### 4.1 模块与组件，模块化与组件化
### 4.2 非单文件组件
### 4.3 单文件组件


## 5.使用Vue脚手架
### 5.1 初始化脚手架
#### 5.1.1 脚手架文件结构
```
├── node_modules 
    ├── public
    │   ├── favicon<span class="hljs-selector-class">.ico</span>: 页签图标
    │   └── index<span class="hljs-selector-class">.html</span>: 主页面
    ├── src
    │   ├── assets: 存放静态资源
    │   │   └── logo<span class="hljs-selector-class">.png</span>
    │   │── component: 存放组件
    │   │   └── HelloWorld<span class="hljs-selector-class">.vue</span>
    │   │── App<span class="hljs-selector-class">.vue</span>: 汇总所有组件
    │   │── main<span class="hljs-selector-class">.js</span>: 入口文件
    ├── <span class="hljs-selector-class">.gitignore</span>: git版本管制忽略的配置
    ├── babel<span class="hljs-selector-class">.config</span><span class="hljs-selector-class">.js</span>: babel的配置文件
    ├── package<span class="hljs-selector-class">.json</span>: 应用包配置文件 
    ├── README<span class="hljs-selector-class">.md</span>: 应用描述文件
    ├── package-lock.json：包版本控制文件`</pre>
```
#### 5.1.2 关于不同版本的Vue
1. vue.js与vue.runtime.xxx.js的区别：
   1. vue.js是完整版的Vue，包含：核心功能 + 模板解析器。
   2. vue.runtime.xxx.js是运行版的Vue，只包含：核心功能；没有模板解析器。
2. 因为vue.runtime.xxx.js没有模板解析器，所以不能使用template这个配置项，需要使用render函数接收到的createElement函数去指定具体内容
#### 5.1.3 vue.config.js配置文件
1. 使用vue inspect > output.js可以查看到Vue脚手架的默认配置。
2. 使用vue.config.js可以对脚手架进行个性化定制，详情见：https://cli.vuejs.org/zh

### 5.2 ref和props
#### 5.2.1 ref属性
1. 被用来给元素或子组件注册引用信息（id的替代者）
2. 应用在html标签上获取的是真实DOM元素，应用在组件标签上是组件实例对象（vc）
3. 使用方式：
   1. 打标识：```<h1 ref="xxx">.....</h1>``` 或 ```<School ref="xxx"></School>```
   2. 获取：```this.$refs.xxx```
#### 5.2.2 props配置项
1. 功能：让组件接收外部传过来的数据
2. 传递数据：<Demo name="xxx"/>
3. 接收数据：
   1. 第一种方式（只接收）：```props:['name']```
   2. 第二种方式（限制类型）：```props:{name:String}```
   3. 第三种方式（限制类型、限制必要性、指定默认值）：
   ```
      props:{
         name:{
         type:String, //类型
         required:true, //必要性
         default:'老王' //默认值
         }
      }
   ```
   > 备注：props是只读的，Vue底层会监测你对props的修改，如果进行了修改，就会发出警告，若业务需求确实需要修改，那么请复制props的内容到data中一份，然后去修改data中的数据。

### 5.3 mixin(混入)
1. 功能：可以把多个组件共用的配置提取成一个混入对象
2. 使用方式：
3. 

第一步定义混合：

{
    data(){....},
    methods:{....}
    ....
}
第二步使用混入：

​	全局混入：Vue.mixin(xxx) ​	局部混入：mixins:['xxx']
### 5.4 插件
### 5.5 Todo-list案例（静态）
#### 5.5.1 组件化编程流程通用
1. **实现静态组件**：抽取组件，使用组件实现静态页面效果
2. **展示动态数据**：
   + 2.1 数据的类型、名称是什么
   + 2.2 数据保存在哪个组件
3. **交互**——从绑定事件监听开始
### 5.6 Vue中的自定义事件
### 5.7 消息订阅与发布
### 5.8 全局事件总线
### 5.9 slot插槽

## 6.Vue中的ajax
## 7.Vuex
## 8.Vue UI组件库
## 9.Vue-router


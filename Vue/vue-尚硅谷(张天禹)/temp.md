
<article class="markdown-body"><div>

# [](#尚硅谷-张天禹老师vue2笔记)尚硅谷 张天禹老师vue2笔记

## [](#脚手架文件结构)脚手架文件结构

    

    ## [](#关于不同版本的vue)关于不同版本的Vue

1.  vue.js与vue.runtime.xxx.js的区别：

        1.  vue.js是完整版的Vue，包含：核心功能 + 模板解析器。
    2.  vue.runtime.xxx.js是运行版的Vue，只包含：核心功能；没有模板解析器。
2.  因为vue.runtime.xxx.js没有模板解析器，所以不能使用template这个配置项，需要使用render函数接收到的createElement函数去指定具体内容。

    ## [](#vueconfigjs配置文件)vue.config.js配置文件

1.  使用vue inspect &gt; output.js可以查看到Vue脚手架的默认配置。
2.  使用vue.config.js可以对脚手架进行个性化定制，详情见：[https://cli.vuejs.org/zh](https://cli.vuejs.org/zh)

    ## [](#ref属性)ref属性

1.  被用来给元素或子组件注册引用信息（id的替代者）
2.  应用在html标签上获取的是真实DOM元素，应用在组件标签上是组件实例对象（vc）
3.  使用方式：

        1.  打标识：`&lt;h1 ref="xxx"&gt;.....&lt;/h1&gt;` 或 `&lt;School ref="xxx"&gt;&lt;/School&gt;`
    2.  获取：`this.$refs.xxx`

    ## [](#props配置项)props配置项

1.  功能：让组件接收外部传过来的数据
2.  传递数据：`&lt;Demo name="xxx"/&gt;`
3.  接收数据：

        1.  第一种方式（只接收）：`props:['name']`
    2.  第二种方式（限制类型）：`props:{name:String}`
    3.  第三种方式（限制类型、限制必要性、指定默认值）：
    <pre data-source-line="56">`props:{
    	<span class="hljs-attr">name</span>:{
    	<span class="hljs-attr">type</span>:<span class="hljs-built_in">String</span>, <span class="hljs-comment">//<span class="zh-hans">类型</span></span>
    	required:<span class="hljs-literal">true</span>, <span class="hljs-comment">//<span class="zh-hans">必要性</span></span>
    	<span class="hljs-keyword">default</span>:<span class="hljs-string">'<span class="zh-hans">老王</span>'</span> <span class="hljs-comment">//<span class="zh-hans">默认值</span></span>
    	}
    }
    `</pre>> 备注：props是只读的，Vue底层会监测你对props的修改，如果进行了修改，就会发出警告，若业务需求确实需要修改，那么请复制props的内容到data中一份，然后去修改data中的数据。

    ## [](#mixin混入)mixin(混入)

1.  功能：可以把多个组件共用的配置提取成一个混入对象
2.  使用方式：
    第一步定义混合：
    <pre data-source-line="76">`{
        data()<span class="hljs-meta">{....}</span>,
        methods:<span class="hljs-meta">{....}</span>
        ....
    }
    `</pre>
    第二步使用混入：
    ​	全局混入：`Vue.mixin(xxx)`
    ​	局部混入：`mixins:['xxx']`

    ## [](#插件)插件

1.  功能：用于增强Vue
2.  本质：包含install方法的一个对象，install的第一个参数是Vue，第二个以后的参数是插件使用者传递的数据。
3.  定义插件：
    <pre data-source-line="97">`<span class="zh-hans">对象</span>.install = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">Vue, options</span>) </span>{
        <span class="hljs-comment">// 1. <span class="zh-hans">添加全局过滤器</span></span>
        Vue.filter(....)
        <span class="hljs-comment">// 2. <span class="zh-hans">添加全局指令</span></span>
        Vue.directive(....)
        <span class="hljs-comment">// 3. <span class="zh-hans">配置全局混入</span>(<span class="zh-hans">合</span>)</span>
        Vue.mixin(....)
        <span class="hljs-comment">// 4. <span class="zh-hans">添加实例方法</span></span>
        Vue.prototype.$myMethod = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{...}
        Vue.prototype.$myProperty = xxxx
    }
    `</pre>
4.  使用插件：`Vue.use()`

    ## [](#scoped样式)scoped样式

1.  作用：让样式在局部生效，防止冲突。
2.  写法：`&lt;style scoped&gt;`

    ## [](#总结todolist案例)总结TodoList案例

1.  组件化编码流程：
    ​	(1).拆分静态组件：组件要按照功能点拆分，命名不要与html元素冲突。
    ​	(2).实现动态组件：考虑好数据的存放位置，数据是一个组件在用，还是一些组件在用：
    ​			1).一个组件在用：放在组件自身即可。
    ​			2). 一些组件在用：放在他们共同的父组件上（<span style="color: red;">状态提升</span>）。
    ​	(3).实现交互：从绑定事件开始。
2.  props适用于：
    ​	(1).父组件 ==&gt; 子组件 通信
    ​	(2).子组件 ==&gt; 父组件 通信（要求父先给子一个函数）
3.  使用v-model时要切记：v-model绑定的值不能是props传过来的值，因为props是不可以修改的！
4.  props传过来的若是对象类型的值，修改对象中的属性时Vue不会报错，但不推荐这样做。

    ## [](#webstorage)webStorage

1.  存储内容大小一般支持5MB左右（不同浏览器可能还不一样）
2.  浏览器端通过 Window.sessionStorage 和 Window.localStorage 属性来实现本地存储机制。
3.  相关API：

        1.  `xxxxxStorage.setItem('key', 'value');`
    				该方法接受一个键和值作为参数，会把键值对添加到存储中，如果键名存在，则更新其对应的值。
    2.  `xxxxxStorage.getItem('person');`
    ​		该方法接受一个键名作为参数，返回键名对应的值。
    3.  `xxxxxStorage.removeItem('key');`
    ​		该方法接受一个键名作为参数，并把该键名从存储中删除。
    4.  `xxxxxStorage.clear()`
    ​		该方法会清空存储中的所有数据。
4.  备注：

        1.  SessionStorage存储的内容会随着浏览器窗口关闭而消失。
    2.  LocalStorage存储的内容，需要手动清除才会消失。
    3.  `xxxxxStorage.getItem(xxx)`如果xxx对应的value获取不到，那么getItem的返回值是null。
    4.  `JSON.parse(null)`的结果依然是null。

    ## [](#组件的自定义事件)组件的自定义事件

1.  一种组件间通信的方式，适用于：**子组件 ===&gt; 父组件**
2.  使用场景：A是父组件，B是子组件，B想给A传数据，那么就要在A中给B绑定自定义事件（<span style="color: red;">事件的回调在A中</span>）。
3.  绑定自定义事件：

        1.  第一种方式，在父组件中：`&lt;Demo @atguigu="test"/&gt;`  或 `&lt;Demo v-on:atguigu="test"/&gt;`
    2.  第二种方式，在父组件中：
    <pre data-source-line="187">`&lt;Demo ref=<span class="hljs-string">"demo"</span>/&gt;
    ......
    mounted(){
       <span class="hljs-keyword">this</span>.$refs.xxx.$on(<span class="hljs-string">'atguigu'</span>,<span class="hljs-keyword">this</span>.test)
    }
    `</pre>
    3.  若想让自定义事件只能触发一次，可以使用`once`修饰符，或`$once`方法。
4.  触发自定义事件：`this.$emit('atguigu',数据)`
5.  解绑自定义事件`this.$off('atguigu')`
6.  组件上也可以绑定原生DOM事件，需要使用`native`修饰符。
7.  注意：通过`this.$refs.xxx.$on('atguigu',回调)`绑定自定义事件时，回调<span style="color: red;">要么配置在methods中</span>，<span style="color: red;">要么用箭头函数</span>，否则this指向会出问题！

    ## [](#全局事件总线globaleventbus)全局事件总线（GlobalEventBus）

1.  一种组件间通信的方式，适用于<span style="color: red;">任意组件间通信</span>。
2.  安装全局事件总线：
    <pre data-source-line="211">`<span class="hljs-keyword">new</span> Vue({
    	......
    	beforeCreate() {
    		Vue.prototype.$bus = <span class="hljs-keyword">this</span> <span class="hljs-comment">//<span class="zh-hans">安装全局事件总线，</span>$bus<span class="zh-hans">就是当前应用的</span>vm</span>
    	},
        ......
    })    `</pre>
3.  使用事件总线：

        1.  接收数据：A组件想接收数据，则在A组件中给$bus绑定自定义事件，事件的<span style="color: red;">回调留在A组件自身。</span>
    <pre data-source-line="225">`methods(){
      demo(data){......}
    }
    ......
    mounted() {
      <span class="hljs-keyword">this</span>.$bus.$on(<span class="hljs-string">'xxxx'</span>,<span class="hljs-keyword">this</span>.demo)
    }
    `</pre>
    2.  提供数据：`this.$bus.$emit('xxxx',数据)`
4.  最好在beforeDestroy钩子中，用$off去解绑<span style="color: red;">当前组件所用到的</span>事件。

    ## [](#消息订阅与发布pubsub)消息订阅与发布（pubsub）

1.  一种组件间通信的方式，适用于<span style="color: red;">任意组件间通信</span>。
2.  使用步骤：

        1.  安装pubsub：`npm i pubsub-js`
    2.  引入: `import pubsub from 'pubsub-js'`
    3.  接收数据：A组件想接收数据，则在A组件中订阅消息，订阅的<span style="color: red;">回调留在A组件自身。</span>
    <pre data-source-line="251">`methods(){
      demo(data){......}
    }
    ......
    mounted() {
      <span class="hljs-keyword">this</span>.pid = pubsub.subscribe(<span class="hljs-string">'xxx'</span>,<span class="hljs-keyword">this</span>.demo) <span class="hljs-comment">//<span class="zh-hans">订阅消息</span></span>
    }
    `</pre>
    4.  提供数据：`pubsub.publish('xxx',数据)`
    5.  最好在beforeDestroy钩子中，用`PubSub.unsubscribe(pid)`去<span style="color: red;">取消订阅。</span>

    ## [](#nexttick)nextTick

1.  语法：`this.$nextTick(回调函数)`
2.  作用：在下一次 DOM 更新结束后执行其指定的回调。
3.  什么时候用：当改变数据后，要基于更新后的新DOM进行某些操作时，要在nextTick所指定的回调函数中执行。

    ## [](#vue封装的过度与动画)Vue封装的过度与动画

1.  作用：在插入、更新或移除 DOM元素时，在合适的时候给元素添加样式类名。
2.  图示：![](https://img04.sogoucdn.com/app/a/100520146/5990c1dff7dc7a8fb3b34b4462bd0105)
3.  写法：

        1.  准备好样式：

                *   元素进入的样式：

                        1.  v-enter：进入的起点
            2.  v-enter-active：进入过程中
            3.  v-enter-to：进入的终点
        *   元素离开的样式：

                        1.  v-leave：离开的起点
            2.  v-leave-active：离开过程中
            3.  v-leave-to：离开的终点
    2.  使用`&lt;transition&gt;`包裹要过度的元素，并配置name属性：
    <pre data-source-line="292">`&lt;transition name="hello"&gt;
    	&lt;h1 v-show="isShow"&gt;<span class="zh-hans">你好啊！</span>&lt;/h1&gt;
    &lt;/transition&gt;
    `</pre>
    3.  备注：若有多个元素需要过度，则需要使用：`&lt;transition-group&gt;`，且每个元素都要指定`key`值。

    ## [](#vue脚手架配置代理)vue脚手架配置代理

    ### [](#方法一)方法一

    ​	在vue.config.js中添加如下配置：
    <pre data-source-line="306">`devServer:{
      <span class="hljs-attr">proxy</span>:<span class="hljs-string">"http://localhost:5000"</span>
    }
    `</pre>

    说明：

1.  优点：配置简单，请求资源时直接发给前端（8080）即可。
2.  缺点：不能配置多个代理，不能灵活的控制请求是否走代理。
3.  工作方式：若按照上述配置代理，当请求了前端不存在的资源时，那么该请求会转发给服务器 （优先匹配前端资源）

    ### [](#方法二)方法二

    ​	编写vue.config.js配置具体代理规则：
    <pre data-source-line="322">`<span class="hljs-built_in">module</span>.exports = {
    	<span class="hljs-attr">devServer</span>: {
          <span class="hljs-attr">proxy</span>: {
          <span class="hljs-string">'/api1'</span>: {<span class="hljs-comment">// <span class="zh-hans">匹配所有以</span> '/api1'<span class="zh-hans">开头的请求路径</span></span>
            target: <span class="hljs-string">'http://localhost:5000'</span>,<span class="hljs-comment">// <span class="zh-hans">代理目标的基础路径</span></span>
            changeOrigin: <span class="hljs-literal">true</span>,
            <span class="hljs-attr">pathRewrite</span>: {<span class="hljs-string">'^/api1'</span>: <span class="hljs-string">''</span>}
          },
          <span class="hljs-string">'/api2'</span>: {<span class="hljs-comment">// <span class="zh-hans">匹配所有以</span> '/api2'<span class="zh-hans">开头的请求路径</span></span>
            target: <span class="hljs-string">'http://localhost:5001'</span>,<span class="hljs-comment">// <span class="zh-hans">代理目标的基础路径</span></span>
            changeOrigin: <span class="hljs-literal">true</span>,
            <span class="hljs-attr">pathRewrite</span>: {<span class="hljs-string">'^/api2'</span>: <span class="hljs-string">''</span>}
          }
        }
      }
    }
    <span class="hljs-comment">/*
       changeOrigin<span class="zh-hans">设置为</span>true<span class="zh-hans">时，服务器收到的请求头中的</span>host<span class="zh-hans">为：</span>localhost:5000
       changeOrigin<span class="zh-hans">设置为</span>false<span class="zh-hans">时，服务器收到的请求头中的</span>host<span class="zh-hans">为：</span>localhost:8080
       changeOrigin<span class="zh-hans">默认值为</span>true
    */</span>
    `</pre>

    说明：

1.  优点：可以配置多个代理，且可以灵活的控制请求是否走代理。
2.  缺点：配置略微繁琐，请求资源时必须加前缀。

    ## [](#插槽)插槽

1.  作用：让父组件可以向子组件指定位置插入html结构，也是一种组件间通信的方式，适用于 **父组件 ===&gt; 子组件** 。
2.  分类：默认插槽、具名插槽、作用域插槽
3.  使用方式：

        1.  默认插槽：
    <pre data-source-line="361">`<span class="zh-hans">父组件中：</span>
            &lt;Category&gt;
               &lt;div&gt;html<span class="zh-hans">结构</span>1&lt;/div&gt;
            &lt;/Category&gt;
    <span class="zh-hans">子组件中：</span>
            &lt;template&gt;
                &lt;div&gt;
                   &lt;!-- <span class="zh-hans">定义插槽</span> --&gt;
                   &lt;slot&gt;<span class="zh-hans">插槽默认内容</span>...&lt;/slot&gt;
                &lt;/div&gt;
            &lt;/template&gt;
    `</pre>
    2.  具名插槽：
    <pre data-source-line="377">`<span class="zh-hans">父组件中：</span>
            &lt;Category&gt;
                &lt;template slot="center"&gt;
                  &lt;div&gt;html<span class="zh-hans">结构</span>1&lt;/div&gt;
                &lt;/template&gt;
                &lt;template v-slot:footer&gt;
                   &lt;div&gt;html<span class="zh-hans">结构</span>2&lt;/div&gt;
                &lt;/template&gt;
            &lt;/Category&gt;
    <span class="zh-hans">子组件中：</span>
            &lt;template&gt;
                &lt;div&gt;
                   &lt;!-- <span class="zh-hans">定义插槽</span> --&gt;
                   &lt;slot name="center"&gt;<span class="zh-hans">插槽默认内容</span>...&lt;/slot&gt;
                   &lt;slot name="footer"&gt;<span class="zh-hans">插槽默认内容</span>...&lt;/slot&gt;
                &lt;/div&gt;
            &lt;/template&gt;
    `</pre>
    3.  作用域插槽：

                1.  理解：<span style="color: red;">数据在组件的自身，但根据数据生成的结构需要组件的使用者来决定。</span>（games数据在Category组件中，但使用数据所遍历出来的结构由App组件决定）
        2.  具体编码：
    <pre data-source-line="404">`<span class="zh-hans">父组件中：</span>
    		&lt;Category&gt;
    			&lt;template scope="scopeData"&gt;
    				&lt;!-- <span class="zh-hans">生成的是</span>ul<span class="zh-hans">列表</span> --&gt;
    				&lt;ul&gt;
    					&lt;li v-for="g in scopeData.games" :key="g"&gt;{{g}}&lt;/li&gt;
    				&lt;/ul&gt;
    			&lt;/template&gt;
    		&lt;/Category&gt;
    		&lt;Category&gt;
    			&lt;template slot-scope="scopeData"&gt;
    				&lt;!-- <span class="zh-hans">生成的是</span>h4<span class="zh-hans">标题</span> --&gt;
    				&lt;h4 v-for="g in scopeData.games" :key="g"&gt;{{g}}&lt;/h4&gt;
    			&lt;/template&gt;
    		&lt;/Category&gt;
    <span class="zh-hans">子组件中：</span>
            &lt;template&gt;
                &lt;div&gt;
                    &lt;slot :games="games"&gt;&lt;/slot&gt;
                &lt;/div&gt;
            &lt;/template&gt;
            &lt;script&gt;
                export default {
                    name:'Category',
                    props:['title'],
                    //<span class="zh-hans">数据在子组件自身</span>
                    data() {
                        return {
                            games:['<span class="zh-hans">红色警戒</span>','<span class="zh-hans">穿越火线</span>','<span class="zh-hans">劲舞团</span>','<span class="zh-hans">超级玛丽</span>']
                        }
                    },
                }
            &lt;/script&gt;
    `</pre><pre data-source-line="441">`
    `</pre>

    ## [](#vuex)Vuex

    ### [](#1概念)1.概念

    ​		在Vue中实现集中式状态（数据）管理的一个Vue插件，对vue应用中多个组件的共享状态进行集中式的管理（读/写），也是一种组件间通信的方式，且适用于任意组件间通信。

    ### [](#2何时使用)2.何时使用？

    ​		多个组件需要共享数据时

    ### [](#3搭建vuex环境)3.搭建vuex环境

1.  创建文件：`src/store/index.js`
    <pre data-source-line="459">`<span class="hljs-comment">//<span class="zh-hans">引入</span>Vue<span class="zh-hans">核心库</span></span>
    <span class="hljs-keyword">import</span> Vue <span class="hljs-keyword">from</span> <span class="hljs-string">'vue'</span>
    <span class="hljs-comment">//<span class="zh-hans">引入</span>Vuex</span>
    <span class="hljs-keyword">import</span> Vuex <span class="hljs-keyword">from</span> <span class="hljs-string">'vuex'</span>
    <span class="hljs-comment">//<span class="zh-hans">应用</span>Vuex<span class="zh-hans">插件</span></span>
    Vue.use(Vuex)
    <span class="hljs-comment">//<span class="zh-hans">准备</span>actions<span class="zh-hans">对象——响应组件中用户的动作</span></span>
    <span class="hljs-keyword">const</span> actions = {}
    <span class="hljs-comment">//<span class="zh-hans">准备</span>mutations<span class="zh-hans">对象——修改</span>state<span class="zh-hans">中的数据</span></span>
    <span class="hljs-keyword">const</span> mutations = {}
    <span class="hljs-comment">//<span class="zh-hans">准备</span>state<span class="zh-hans">对象——保存具体的数据</span></span>
    <span class="hljs-keyword">const</span> state = {}
    <span class="hljs-comment">//<span class="zh-hans">创建并暴露</span>store</span>
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">new</span> Vuex.Store({
    	actions,
    	mutations,
    	state
    })
    `</pre>
2.  在`main.js`中创建vm时传入`store`配置项
    <pre data-source-line="484">`......
    <span class="hljs-comment">//<span class="zh-hans">引入</span>store</span>
    <span class="hljs-keyword">import</span> store <span class="hljs-keyword">from</span> <span class="hljs-string">'./store'</span>
    ......
    <span class="hljs-comment">//<span class="zh-hans">创建</span>vm</span>
    <span class="hljs-keyword">new</span> Vue({
    	<span class="hljs-attr">el</span>:<span class="hljs-string">'#app'</span>,
    	<span class="hljs-attr">render</span>: <span class="hljs-function"><span class="hljs-params">h</span> =&gt;</span> h(App),
    	store
    })
    `</pre>

    ### [](#4基本使用)4.基本使用

1.  初始化数据、配置`actions`、配置`mutations`，操作文件`store.js`
    <pre data-source-line="502">`<span class="hljs-comment">//<span class="zh-hans">引入</span>Vue<span class="zh-hans">核心库</span></span>
    <span class="hljs-keyword">import</span> Vue <span class="hljs-keyword">from</span> <span class="hljs-string">'vue'</span>
    <span class="hljs-comment">//<span class="zh-hans">引入</span>Vuex</span>
    <span class="hljs-keyword">import</span> Vuex <span class="hljs-keyword">from</span> <span class="hljs-string">'vuex'</span>
    <span class="hljs-comment">//<span class="zh-hans">引用</span>Vuex</span>
    Vue.use(Vuex)
    <span class="hljs-keyword">const</span> actions = {
        <span class="hljs-comment">//<span class="zh-hans">响应组件中加的动作</span></span>
    	jia(context,value){
    		<span class="hljs-comment">// console.log('actions<span class="zh-hans">中的</span>jia<span class="zh-hans">被调用了</span>',miniStore,value)</span>
    		context.commit(<span class="hljs-string">'JIA'</span>,value)
    	},
    }
    <span class="hljs-keyword">const</span> mutations = {
        <span class="hljs-comment">//<span class="zh-hans">执行加</span></span>
    	JIA(state,value){
    		<span class="hljs-comment">// console.log('mutations<span class="zh-hans">中的</span>JIA<span class="zh-hans">被调用了</span>',state,value)</span>
    		state.sum += value
    	}
    }
    <span class="hljs-comment">//<span class="zh-hans">初始化数据</span></span>
    <span class="hljs-keyword">const</span> state = {
       <span class="hljs-attr">sum</span>:<span class="hljs-number">0</span>
    }
    <span class="hljs-comment">//<span class="zh-hans">创建并暴露</span>store</span>
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">new</span> Vuex.Store({
    	actions,
    	mutations,
    	state,
    })
    `</pre>
2.  组件中读取vuex中的数据：`$store.state.sum`
3.  组件中修改vuex中的数据：`$store.dispatch('action中的方法名',数据)` 或 `$store.commit('mutations中的方法名',数据)`
    > 备注：若没有网络请求或其他业务逻辑，组件中也可以越过actions，即不写`dispatch`，直接编写`commit`

    ### [](#5getters的使用)5.getters的使用

1.  概念：当state中的数据需要经过加工后再使用时，可以使用getters加工。
2.  在`store.js`中追加`getters`配置
    <pre data-source-line="551">`......
    const getters = {
    	bigSum(state){
    		<span class="hljs-keyword">return</span> state.sum * <span class="hljs-number">10</span>
    	}
    }
    <span class="hljs-comment">//<span class="zh-hans">创建并暴露</span>store</span>
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">new</span> Vuex.Store({
    	......
    	getters
    })
    `</pre>
3.  组件中读取数据：`$store.getters.bigSum`

    ### [](#6四个map方法的使用)6.四个map方法的使用

1.  **mapState方法：**用于帮助我们映射`state`中的数据为计算属性
    <pre data-source-line="573">`computed: {
        <span class="hljs-comment">//<span class="zh-hans">借助</span>mapState<span class="zh-hans">生成计算属性：</span>sum<span class="zh-hans">、</span>school<span class="zh-hans">、</span>subject<span class="zh-hans">（对象写法）</span></span>
         ...mapState({<span class="hljs-attr">sum</span>:<span class="hljs-string">'sum'</span>,<span class="hljs-attr">school</span>:<span class="hljs-string">'school'</span>,<span class="hljs-attr">subject</span>:<span class="hljs-string">'subject'</span>}),
        <span class="hljs-comment">//<span class="zh-hans">借助</span>mapState<span class="zh-hans">生成计算属性：</span>sum<span class="zh-hans">、</span>school<span class="zh-hans">、</span>subject<span class="zh-hans">（数组写法）</span></span>
        ...mapState([<span class="hljs-string">'sum'</span>,<span class="hljs-string">'school'</span>,<span class="hljs-string">'subject'</span>]),
    },
    `</pre>
2.  **mapGetters方法：**用于帮助我们映射`getters`中的数据为计算属性
    <pre data-source-line="585">`computed: {
        <span class="hljs-comment">//<span class="zh-hans">借助</span>mapGetters<span class="zh-hans">生成计算属性：</span>bigSum<span class="zh-hans">（对象写法）</span></span>
        ...mapGetters({<span class="hljs-attr">bigSum</span>:<span class="hljs-string">'bigSum'</span>}),
        <span class="hljs-comment">//<span class="zh-hans">借助</span>mapGetters<span class="zh-hans">生成计算属性：</span>bigSum<span class="zh-hans">（数组写法）</span></span>
        ...mapGetters([<span class="hljs-string">'bigSum'</span>])
    },
    `</pre>
3.  **mapActions方法：**用于帮助我们生成与`actions`对话的方法，即：包含`$store.dispatch(xxx)`的函数
    <pre data-source-line="597">`methods:{
        <span class="hljs-comment">//<span class="zh-hans">靠</span>mapActions<span class="zh-hans">生成：</span>incrementOdd<span class="zh-hans">、</span>incrementWait<span class="zh-hans">（对象形式）</span></span>
        ...mapActions({<span class="hljs-attr">incrementOdd</span>:<span class="hljs-string">'jiaOdd'</span>,<span class="hljs-attr">incrementWait</span>:<span class="hljs-string">'jiaWait'</span>})
        <span class="hljs-comment">//<span class="zh-hans">靠</span>mapActions<span class="zh-hans">生成：</span>incrementOdd<span class="zh-hans">、</span>incrementWait<span class="zh-hans">（数组形式）</span></span>
        ...mapActions([<span class="hljs-string">'jiaOdd'</span>,<span class="hljs-string">'jiaWait'</span>])
    }
    `</pre>
4.  **mapMutations方法：**用于帮助我们生成与`mutations`对话的方法，即：包含`$store.commit(xxx)`的函数
    <pre data-source-line="609">`methods:{
        <span class="hljs-comment">//<span class="zh-hans">靠</span>mapActions<span class="zh-hans">生成：</span>increment<span class="zh-hans">、</span>decrement<span class="zh-hans">（对象形式）</span></span>
        ...mapMutations({<span class="hljs-attr">increment</span>:<span class="hljs-string">'JIA'</span>,<span class="hljs-attr">decrement</span>:<span class="hljs-string">'JIAN'</span>}),
        <span class="hljs-comment">//<span class="zh-hans">靠</span>mapMutations<span class="zh-hans">生成：</span>JIA<span class="zh-hans">、</span>JIAN<span class="zh-hans">（对象形式）</span></span>
        ...mapMutations([<span class="hljs-string">'JIA'</span>,<span class="hljs-string">'JIAN'</span>]),
    }
    `</pre>> 备注：mapActions与mapMutations使用时，若需要传递参数需要：在模板中绑定事件时传递好参数，否则参数是事件对象。

    ### [](#7模块化命名空间)7.模块化+命名空间

1.  目的：让代码更好维护，让多种数据分类更加明确。
2.  修改`store.js`
    <pre data-source-line="627">`<span class="hljs-keyword">const</span> countAbout = {
      <span class="hljs-attr">namespaced</span>:<span class="hljs-literal">true</span>,<span class="hljs-comment">//<span class="zh-hans">开启命名空间</span></span>
      state:{<span class="hljs-attr">x</span>:<span class="hljs-number">1</span>},
      <span class="hljs-attr">mutations</span>: { ... },
      <span class="hljs-attr">actions</span>: { ... },
      <span class="hljs-attr">getters</span>: {
        bigSum(state){
           <span class="hljs-keyword">return</span> state.sum * <span class="hljs-number">10</span>
        }
      }
    }
    <span class="hljs-keyword">const</span> personAbout = {
      <span class="hljs-attr">namespaced</span>:<span class="hljs-literal">true</span>,<span class="hljs-comment">//<span class="zh-hans">开启命名空间</span></span>
      state:{ ... },
      <span class="hljs-attr">mutations</span>: { ... },
      <span class="hljs-attr">actions</span>: { ... }
    }
    <span class="hljs-keyword">const</span> store = <span class="hljs-keyword">new</span> Vuex.Store({
      <span class="hljs-attr">modules</span>: {
        countAbout,
        personAbout
      }
    })
    `</pre>
3.  开启命名空间后，组件中读取state数据：
    <pre data-source-line="657">`<span class="hljs-comment">//<span class="zh-hans">方式一：自己直接读取</span></span>
    <span class="hljs-keyword">this</span>.$store.state.personAbout.list
    <span class="hljs-comment">//<span class="zh-hans">方式二：借助</span>mapState<span class="zh-hans">读取：</span></span>
    ...mapState(<span class="hljs-string">'countAbout'</span>,[<span class="hljs-string">'sum'</span>,<span class="hljs-string">'school'</span>,<span class="hljs-string">'subject'</span>]),
    `</pre>
4.  开启命名空间后，组件中读取getters数据：
    <pre data-source-line="666">`<span class="hljs-comment">//<span class="zh-hans">方式一：自己直接读取</span></span>
    <span class="hljs-keyword">this</span>.$store.getters[<span class="hljs-string">'personAbout/firstPersonName'</span>]
    <span class="hljs-comment">//<span class="zh-hans">方式二：借助</span>mapGetters<span class="zh-hans">读取：</span></span>
    ...mapGetters(<span class="hljs-string">'countAbout'</span>,[<span class="hljs-string">'bigSum'</span>])
    `</pre>
5.  开启命名空间后，组件中调用dispatch
    <pre data-source-line="675">`<span class="hljs-comment">//<span class="zh-hans">方式一：自己直接</span>dispatch</span>
    <span class="hljs-keyword">this</span>.$store.dispatch(<span class="hljs-string">'personAbout/addPersonWang'</span>,person)
    <span class="hljs-comment">//<span class="zh-hans">方式二：借助</span>mapActions<span class="zh-hans">：</span></span>
    ...mapActions(<span class="hljs-string">'countAbout'</span>,{<span class="hljs-attr">incrementOdd</span>:<span class="hljs-string">'jiaOdd'</span>,<span class="hljs-attr">incrementWait</span>:<span class="hljs-string">'jiaWait'</span>})
    `</pre>
6.  开启命名空间后，组件中调用commit
    <pre data-source-line="684">`<span class="hljs-comment">//<span class="zh-hans">方式一：自己直接</span>commit</span>
    <span class="hljs-keyword">this</span>.$store.commit(<span class="hljs-string">'personAbout/ADD_PERSON'</span>,person)
    <span class="hljs-comment">//<span class="zh-hans">方式二：借助</span>mapMutations<span class="zh-hans">：</span></span>
    ...mapMutations(<span class="hljs-string">'countAbout'</span>,{<span class="hljs-attr">increment</span>:<span class="hljs-string">'JIA'</span>,<span class="hljs-attr">decrement</span>:<span class="hljs-string">'JIAN'</span>}),
    `</pre>

    ## [](#路由)路由

1.  理解： 一个路由（route）就是一组映射关系（key - value），多个路由需要路由器（router）进行管理。
2.  前端路由：key是路径，value是组件。

    ### [](#1基本使用)1.基本使用

1.  安装vue-router，命令：`npm i vue-router`
2.  应用插件：`Vue.use(VueRouter)`
3.  编写router配置项:
    <pre data-source-line="704">`<span class="hljs-comment">//<span class="zh-hans">引入</span>VueRouter</span>
    <span class="hljs-keyword">import</span> VueRouter <span class="hljs-keyword">from</span> <span class="hljs-string">'vue-router'</span>
    <span class="hljs-comment">//<span class="zh-hans">引入</span>Luyou <span class="zh-hans">组件</span></span>
    <span class="hljs-keyword">import</span> About <span class="hljs-keyword">from</span> <span class="hljs-string">'../components/About'</span>
    <span class="hljs-keyword">import</span> Home <span class="hljs-keyword">from</span> <span class="hljs-string">'../components/Home'</span>
    <span class="hljs-comment">//<span class="zh-hans">创建</span>router<span class="zh-hans">实例对象，去管理一组一组的路由规则</span></span>
    <span class="hljs-keyword">const</span> router = <span class="hljs-keyword">new</span> VueRouter({
    	<span class="hljs-attr">routes</span>:[
    		{
    			<span class="hljs-attr">path</span>:<span class="hljs-string">'/about'</span>,
    			<span class="hljs-attr">component</span>:About
    		},
    		{
    			<span class="hljs-attr">path</span>:<span class="hljs-string">'/home'</span>,
    			<span class="hljs-attr">component</span>:Home
    		}
    	]
    })
    <span class="hljs-comment">//<span class="zh-hans">暴露</span>router</span>
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> router
    `</pre>
4.  实现切换（active-class可配置高亮样式）
    <pre data-source-line="731">`&lt;router-link active-class="active" to="/about"&gt;About&lt;/router-link&gt;
    `</pre>
5.  指定展示位置
    <pre data-source-line="737">`&lt;router-view&gt;&lt;/router-view&gt;
    `</pre>

    ### [](#2几个注意点)2.几个注意点

1.  路由组件通常存放在`pages`文件夹，一般组件通常存放在`components`文件夹。
2.  通过切换，“隐藏”了的路由组件，默认是被销毁掉的，需要的时候再去挂载。
3.  每个组件都有自己的`$route`属性，里面存储着自己的路由信息。
4.  整个应用只有一个router，可以通过组件的`$router`属性获取到。

    ### [](#3多级路由多级路由)3.多级路由（多级路由）

1.  配置路由规则，使用children配置项：
    <pre data-source-line="752">`routes:[
    	{
    		<span class="hljs-attr">path</span>:<span class="hljs-string">'/about'</span>,
    		<span class="hljs-attr">component</span>:About,
    	},
    	{
    		<span class="hljs-attr">path</span>:<span class="hljs-string">'/home'</span>,
    		<span class="hljs-attr">component</span>:Home,
    		<span class="hljs-attr">children</span>:[ <span class="hljs-comment">//<span class="zh-hans">通过</span>children<span class="zh-hans">配置子级路由</span></span>
    			{
    				<span class="hljs-attr">path</span>:<span class="hljs-string">'news'</span>, <span class="hljs-comment">//<span class="zh-hans">此处一定不要写：</span>/news</span>
    				component:News
    			},
    			{
    				<span class="hljs-attr">path</span>:<span class="hljs-string">'message'</span>,<span class="hljs-comment">//<span class="zh-hans">此处一定不要写：</span>/message</span>
    				component:Message
    			}
    		]
    	}
    ]
    `</pre>
2.  跳转（要写完整路径）：
    <pre data-source-line="777">`&lt;router-link to="/home/news"&gt;News&lt;/router-link&gt;
    `</pre>

    ### [](#4路由的query参数)4.路由的query参数

1.  传递参数
    <pre data-source-line="785">`&lt;!-- <span class="zh-hans">跳转并携带</span>query<span class="zh-hans">参数，</span>to<span class="zh-hans">的字符串写法</span> --&gt;
    &lt;router-link :to="/home/message/detail?id=666&amp;title=<span class="zh-hans">你好</span>"&gt;<span class="zh-hans">跳转</span>&lt;/router-link&gt;
    &lt;!-- <span class="zh-hans">跳转并携带</span>query<span class="zh-hans">参数，</span>to<span class="zh-hans">的对象写法</span> --&gt;
    &lt;router-link    	:to="{
    		path:'/home/message/detail',
    		query:{
    		   id:666,
                title:'<span class="zh-hans">你好</span>'
    		}
    	}"
    &gt;<span class="zh-hans">跳转</span>&lt;/router-link&gt;
    `</pre>
2.  接收参数：
    <pre data-source-line="803">`$route.query.id
    $route.query.title
    `</pre>

    ### [](#5命名路由)5.命名路由

1.  作用：可以简化路由的跳转。
2.  如何使用

        1.  给路由命名：
    <pre data-source-line="816">`{
    	<span class="hljs-attr">path</span>:<span class="hljs-string">'/demo'</span>,
    	<span class="hljs-attr">component</span>:Demo,
    	<span class="hljs-attr">children</span>:[
    		{
    			<span class="hljs-attr">path</span>:<span class="hljs-string">'test'</span>,
    			<span class="hljs-attr">component</span>:Test,
    			<span class="hljs-attr">children</span>:[
    				{
                          <span class="hljs-attr">name</span>:<span class="hljs-string">'hello'</span> <span class="hljs-comment">//<span class="zh-hans">给路由命名</span></span>
    					path:<span class="hljs-string">'welcome'</span>,
    					<span class="hljs-attr">component</span>:Hello,
    				}
    			]
    		}
    	]
    }
    `</pre>
    2.  简化跳转：
    <pre data-source-line="838">`&lt;!--<span class="zh-hans">简化前，需要写完整的路径</span> --&gt;
    &lt;router-link to="/demo/test/welcome"&gt;<span class="zh-hans">跳转</span>&lt;/router-link&gt;
    &lt;!--<span class="zh-hans">简化后，直接通过名字跳转</span> --&gt;
    &lt;router-link :to="{name:'hello'}"&gt;<span class="zh-hans">跳转</span>&lt;/router-link&gt;
    &lt;!--<span class="zh-hans">简化写法配合传递参数</span> --&gt;
    &lt;router-link    	:to="{
    		name:'hello',
    		query:{
    		   id:666,
                title:'<span class="zh-hans">你好</span>'
    		}
    	}"
    &gt;<span class="zh-hans">跳转</span>&lt;/router-link&gt;
    `</pre>

    ### [](#6路由的params参数)6.路由的params参数

1.  配置路由，声明接收params参数
    <pre data-source-line="861">`{
    	<span class="hljs-attr">path</span>:<span class="hljs-string">'/home'</span>,
    	<span class="hljs-attr">component</span>:Home,
    	<span class="hljs-attr">children</span>:[
    		{
    			<span class="hljs-attr">path</span>:<span class="hljs-string">'news'</span>,
    			<span class="hljs-attr">component</span>:News
    		},
    		{
    			<span class="hljs-attr">component</span>:Message,
    			<span class="hljs-attr">children</span>:[
    				{
    					<span class="hljs-attr">name</span>:<span class="hljs-string">'xiangqing'</span>,
    					<span class="hljs-attr">path</span>:<span class="hljs-string">'detail/:id/:title'</span>, <span class="hljs-comment">//<span class="zh-hans">使用占位符声明接收</span>params<span class="zh-hans">参数</span></span>
    					component:Detail
    				}
    			]
    		}
    	]
    }
    `</pre>
2.  传递参数
    <pre data-source-line="886">`&lt;!-- <span class="zh-hans">跳转并携带</span>params<span class="zh-hans">参数，</span>to<span class="zh-hans">的字符串写法</span> --&gt;
    &lt;router-link :to="/home/message/detail/666/<span class="zh-hans">你好</span>"&gt;<span class="zh-hans">跳转</span>&lt;/router-link&gt;
    &lt;!-- <span class="zh-hans">跳转并携带</span>params<span class="zh-hans">参数，</span>to<span class="zh-hans">的对象写法</span> --&gt;
    &lt;router-link    	:to="{
    		name:'xiangqing',
    		params:{
    		   id:666,
                title:'<span class="zh-hans">你好</span>'
    		}
    	}"
    &gt;<span class="zh-hans">跳转</span>&lt;/router-link&gt;
    `</pre>> 特别注意：路由携带params参数时，若使用to的对象写法，则不能使用path配置项，必须使用name配置！
3.  接收参数：
    <pre data-source-line="906">`$route.params.id
    $route.params.title
    `</pre>

    ### [](#7路由的props配置)7.路由的props配置

    ​	作用：让路由组件更方便的收到参数
    <pre data-source-line="915">`{
    	<span class="hljs-attr">name</span>:<span class="hljs-string">'xiangqing'</span>,
    	<span class="hljs-attr">path</span>:<span class="hljs-string">'detail/:id'</span>,
    	<span class="hljs-attr">component</span>:Detail,

    	<span class="hljs-comment">//<span class="zh-hans">第一种写法：</span>props<span class="zh-hans">值为对象，该对象中所有的</span>key-value<span class="zh-hans">的组合最终都会通过</span>props<span class="zh-hans">传给</span>Detail<span class="zh-hans">组件</span></span>
    	<span class="hljs-comment">// props:{a:900}</span>

    	<span class="hljs-comment">//<span class="zh-hans">第二种写法：</span>props<span class="zh-hans">值为布尔值，布尔值为</span>true<span class="zh-hans">，则把路由收到的所有</span>params<span class="zh-hans">参数通过</span>props<span class="zh-hans">传给</span>Detail<span class="zh-hans">组件</span></span>
    	<span class="hljs-comment">// props:true</span>

    	<span class="hljs-comment">//<span class="zh-hans">第三种写法：</span>props<span class="zh-hans">值为函数，该函数返回的对象中每一组</span>key-value<span class="zh-hans">都会通过</span>props<span class="zh-hans">传给</span>Detail<span class="zh-hans">组件</span></span>
    	props(route){
    		<span class="hljs-keyword">return</span> {
    			<span class="hljs-attr">id</span>:route.query.id,
    			<span class="hljs-attr">title</span>:route.query.title
    		}
    	}
    }
    `</pre>

    ### [](#8router-link的replace属性)8.`&lt;router-link&gt;`的replace属性

1.  作用：控制路由跳转时操作浏览器历史记录的模式
2.  浏览器的历史记录有两种写入方式：分别为`push`和`replace`，`push`是追加历史记录，`replace`是替换当前记录。路由跳转时候默认为`push`
3.  如何开启`replace`模式：`&lt;router-link replace .......&gt;News&lt;/router-link&gt;`

    ### [](#9编程式路由导航)9.编程式路由导航

1.  作用：不借助`&lt;router-link&gt;`实现路由跳转，让路由跳转更加灵活
2.  具体编码：
    <pre data-source-line="949">`<span class="hljs-comment">//$router<span class="zh-hans">的两个</span>API</span>
    <span class="hljs-keyword">this</span>.$router.push({
    	<span class="hljs-attr">name</span>:<span class="hljs-string">'xiangqing'</span>,
    		<span class="hljs-attr">params</span>:{
    			<span class="hljs-attr">id</span>:xxx,
    			<span class="hljs-attr">title</span>:xxx
    		}
    })
    <span class="hljs-keyword">this</span>.$router.replace({
    	<span class="hljs-attr">name</span>:<span class="hljs-string">'xiangqing'</span>,
    		<span class="hljs-attr">params</span>:{
    			<span class="hljs-attr">id</span>:xxx,
    			<span class="hljs-attr">title</span>:xxx
    		}
    })
    <span class="hljs-keyword">this</span>.$router.forward() <span class="hljs-comment">//<span class="zh-hans">前进</span></span>
    <span class="hljs-keyword">this</span>.$router.back() <span class="hljs-comment">//<span class="zh-hans">后退</span></span>
    <span class="hljs-keyword">this</span>.$router.go() <span class="hljs-comment">//<span class="zh-hans">可前进也可后退</span></span>
    `</pre>

    ### [](#10缓存路由组件)10.缓存路由组件

1.  作用：让不展示的路由组件保持挂载，不被销毁。
2.  具体编码：
    <pre data-source-line="977">`&lt;keep-alive include="News"&gt;        &lt;router-view&gt;&lt;/router-view&gt;
    &lt;/keep-alive&gt;
    `</pre>

    ### [](#11两个新的生命周期钩子)11.两个新的生命周期钩子

1.  作用：路由组件所独有的两个钩子，用于捕获路由组件的激活状态。
2.  具体名字：

        1.  `activated`路由组件被激活时触发。
    2.  `deactivated`路由组件失活时触发。

    ### [](#12路由守卫)12.路由守卫

1.  作用：对路由进行权限控制
2.  分类：全局守卫、独享守卫、组件内守卫
3.  全局守卫:
    <pre data-source-line="998">`<span class="hljs-comment">//<span class="zh-hans">全局前置守卫：初始化时执行、每次路由切换前执行</span></span>
    router.beforeEach(<span class="hljs-function">(<span class="hljs-params">to,<span class="hljs-keyword">from</span>,next</span>)=&gt;</span>{
    	<span class="hljs-built_in">console</span>.log(<span class="hljs-string">'beforeEach'</span>,to,<span class="hljs-keyword">from</span>)
    	<span class="hljs-keyword">if</span>(to.meta.isAuth){ <span class="hljs-comment">//<span class="zh-hans">判断当前路由是否需要进行权限控制</span></span>
    		<span class="hljs-keyword">if</span>(localStorage.getItem(<span class="hljs-string">'school'</span>) === <span class="hljs-string">'atguigu'</span>){ <span class="hljs-comment">//<span class="zh-hans">权限控制的具体规则</span></span>
    			next() <span class="hljs-comment">//<span class="zh-hans">放行</span></span>
    		}<span class="hljs-keyword">else</span>{
    			alert(<span class="hljs-string">'<span class="zh-hans">暂无权限查看</span>'</span>)
    			<span class="hljs-comment">// next({name:'guanyu'})</span>
    		}
    	}<span class="hljs-keyword">else</span>{
    		next() <span class="hljs-comment">//<span class="zh-hans">放行</span></span>
    	}
    })
    <span class="hljs-comment">//<span class="zh-hans">全局后置守卫：初始化时执行、每次路由切换后执行</span></span>
    router.afterEach(<span class="hljs-function">(<span class="hljs-params">to,<span class="hljs-keyword">from</span></span>)=&gt;</span>{
    	<span class="hljs-built_in">console</span>.log(<span class="hljs-string">'afterEach'</span>,to,<span class="hljs-keyword">from</span>)
    	<span class="hljs-keyword">if</span>(to.meta.title){    		<span class="hljs-built_in">document</span>.title = to.meta.title <span class="hljs-comment">//<span class="zh-hans">修改网页的</span>title</span>
    	}<span class="hljs-keyword">else</span>{
    		<span class="hljs-built_in">document</span>.title = <span class="hljs-string">'vue_test'</span>
    	}
    })
    `</pre>
4.  独享守卫:
    <pre data-source-line="1027">`beforeEnter(to,<span class="hljs-keyword">from</span>,next){
    	<span class="hljs-built_in">console</span>.log(<span class="hljs-string">'beforeEnter'</span>,to,<span class="hljs-keyword">from</span>)
    	<span class="hljs-keyword">if</span>(to.meta.isAuth){ <span class="hljs-comment">//<span class="zh-hans">判断当前路由是否需要进行权限控制</span></span>
    		<span class="hljs-keyword">if</span>(localStorage.getItem(<span class="hljs-string">'school'</span>) === <span class="hljs-string">'atguigu'</span>){
    			next()
    		}<span class="hljs-keyword">else</span>{
    			alert(<span class="hljs-string">'<span class="zh-hans">暂无权限查看</span>'</span>)
    			<span class="hljs-comment">// next({name:'guanyu'})</span>
    		}
    	}<span class="hljs-keyword">else</span>{
    		next()
    	}
    }
    `</pre>
5.  组件内守卫：
    <pre data-source-line="1045">`<span class="hljs-comment">//<span class="zh-hans">进入守卫：通过路由规则，进入该组件时被调用</span></span>
    beforeRouteEnter (to, <span class="hljs-keyword">from</span>, next) {
    },
    <span class="hljs-comment">//<span class="zh-hans">离开守卫：通过路由规则，离开该组件时被调用</span></span>
    beforeRouteLeave (to, <span class="hljs-keyword">from</span>, next) {
    }

### [](#13路由器的两种工作模式)13.路由器的两种工作模式

1.  对于一个url来说，什么是hash值？—— #及其后面的内容就是hash值。
2.  hash值不会包含在 HTTP 请求中，即：hash值不会带给服务器。
3.  hash模式：

    1.  地址中永远带着#号，不美观 。
    2.  若以后将地址通过第三方手机app分享，若app校验严格，则地址会被标记为不合法。
    3.  兼容性较好。
4.  history模式：

    1.  地址干净，美观 。
    2.  兼容性和hash模式相比略差。
    3.  应用部署上线时需要后端人员支持，解决刷新页面服务端404的问题。</div></article>
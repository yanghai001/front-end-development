# vue3 watch-侦听器
### 1.什么是watch侦听器
**watch侦听器**允许开发者**监视数据的变化**，从而**针对数据的变化做出特定的操作**。例如，监视用户名的变化并发起ajax请求，判断用户名是否可用。

### 2.watch侦听器的基本语法
开发者需要在**watch节点**下定义自己的侦听器，实例代码如下：
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>vue3 watch</title>
    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <!-- 使用axios之前需要先引入 -->
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
</head>

<body>
    <!-- 操作区域 -->
    <div id="app">
        请输入用户名：
        <input type="text" v-model.trim="username">
    </div>

    <!-- vue -->
    <script>
        var app = new Vue({
            el: '#app',
            data: {
                username: 'zhang san'
            },
            watch: {
                //监听一个字符串、数字等数据的变化的最基本语法
                username(newval, oldval) {
                    //将新值和旧值都输出出来
                    console.log(newval, oldval);
                }

                // 监视username的值，每次发生变化就发起ajax请求，检查是否可用
                username: {
                    // async 和await是promise的修饰符，目的是使axios返回promise对象变为直接返回具体值
                    async handler(newVal, oldVal) {
                        const {
                            data: res
                        } = await axios.get('https://www.escook.cn/api/finduser/' + newVal)
                        console.log(res);
                    }
                }
            }
        })
    </script>
</body>

</html>
```
### 3.watch侦听器的immediate选项
默认情况下，组件在初次加载完毕后不会钓鱼watch侦听器。如果想让watch侦听器**立即被调用**，则需要添加**immediate**选项，实例代码如下：
```
    // 监视username的值，每次发生变化就发起ajax请求，检查是否可用
    username: {
        // async 和await是promise的修饰符，目的是使axios返回promise对象变为直接返回具体值
        async handler(newVal, oldVal) {
            const {
                data: res
            } = await axios.get('https://www.escook.cn/api/finduser/' + newVal)
            console.log(res);
        },

        //使侦听器在组件初次加载时被立即调用
        immediate: true,
    }
```

### 4.watch的deep选项
当**watch侦听的是一个对象**，如果**对象中的属性值发生了变化**，则**无法被监听到**。此时需要使用**deep选项**，实例代码如下：
```
    // 监视info的值，每次发生变化就发起ajax请求，检查info的username是否可用
    // info的任意一个属性发生变化都会触发这个侦听器
    info: {
        // async 和await是promise的修饰符，目的是使axios返回promise对象变为直接返回具体值
        async handler(newVal, oldVal) {
            const {
                data: res
            } = await axios.get('https://www.escook.cn/api/finduser/' + newVal.username)
            console.log('info');
            console.log(res);

        },

        //让对象的任意一个属性变化都触发侦听器
        deep: true
    },
```
### 5.监听对象单个属性的变化
如果**只想侦听对象的其中一个属性**，只需要将对应的属性当做侦听器名称即可，**注意用单引号包裹**，实例代码如下：
```
    // 如果只想侦听对象的其中一个属性，只需要将对应的属性当做侦听器名称即可，注意用单引号包裹
    'info.age': {
        // async 和await是promise的修饰符，目的是使axios返回promise对象变为直接返回具体值
        async handler(newVal, oldVal) {
            const {
                data: res
            } = await axios.get('https://www.escook.cn/api/finduser/' + newVal.username)
            console.log('info.age');
            console.log(res);
        },
    }
```
### 6.计算属性 VS 侦听器
两者**侧重的应用场景**不同：
    计算属性侧重于监听**多个值**得变化，最终计算并**返回一个新值**
    侦听器侧重于监听**单个数据**的变化，最终**执行特定的业务处理，不需要有任何返回值**


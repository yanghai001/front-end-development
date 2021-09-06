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
#### 2.2基于bootstrap渲染组件内容
#### 2.1创建和注册es-header组件
#### 2.1创建和注册es-header组件

### 三、基于axios请求商品列表数据
### 四、封装es-footer组件
### 五、封装es-goods组件
### 六、实现合计、结算数量、全选功能
### 七、封装es-counter组件

# VUE3.X 基础
### 学习目标
* 能够知道如何使用vue-cli创建vue项目
* 能够知道如何在项目中安装和配置element-ui
* 能够知道element-ui中常见组件的用法
* 能够知道如何使用axios中的拦截器
* 能够知道如何配置proxy接口代理

### 学习目录
* vue-cli
* 组件库
* axios拦截器
* proxy跨域代理
* 用户列表案例
  
### vue-cli
#### 1.什么是vue-cli
vue-cli(俗称:vue**脚手架**)是vue官方提供的**快速生成vue工程化项目**的工具。

**特点：**
  * 开箱即用
  * 基于webpack
  * 功能丰富且利于扩展
  * 支持vue2和vue3的项目

#### 2.安装vue-cli
vue-cli是基于node.js开发出来的工具，因此需要使用**npm**将它安装为**全局可用的工具**：
```
# 全局安装vue-cli
npm install -g @vue/cli

# 查看vue-cli的版本，检验安装是否成功
vue --version
```
能正确输入vue-cli的版本即为安装成功，如果无法正常输入版本，参照2.1解决不识别vue命令的问题：
```
@vue/cli 4.5.13
```

##### 2.1 解决windows powershell不识别vue命令的问题
默认情况想，在powershell中执行vue --version命令会提示类似"vue无法加载vue.ps1，因为在此系统上禁止允许脚本……"的错误信息，  
解决方法如下：
1. 以**管理员身份**允许powershell
2. 执行 **set-ExcutionPolicy RemoteSigned** 命令
3. 输入字符**Y**,**回车**即可
   
#### 3.创建项目
vue-cli提供了**两种创建项目的方式**：
1. 基于【命令行】的方式
   ```
    vue create 项目名称
   ```
2. 基于【可视化面板】的方式
   ```
    vue ui
   ```

#### 4.基于vue UI 创建vue项目
通过vue UI创建项目总共分**7个步骤**：
1. 在终端下运行**vue ui**命令，自动在浏览器中打开**创建项目的可视化面板**：
```
vue ui
```
先切换到**创建**选项卡，**选择合适的路径**，点击**在此创建新项目**：
[![4Ev2xU.png](https://z3.ax1x.com/2021/09/15/4Ev2xU.png)](https://imgtu.com/i/4Ev2xU)


2. 在**详情**页面填写**项目名称**：
[![4EzqDe.png](https://z3.ax1x.com/2021/09/15/4EzqDe.png)](https://imgtu.com/i/4EzqDe)


3. 在**预设**页面选择**收到配置项目**：
[![4VSt8x.png](https://z3.ax1x.com/2021/09/15/4VSt8x.png)](https://imgtu.com/i/4VSt8x)

4. 在**功能**页面**勾选需要的功能**（*choose vue version*、*babel*、*CSS预处理器*、*使用配置文件*），其他都关闭：
[![4VphSx.png](https://z3.ax1x.com/2021/09/15/4VphSx.png)](https://imgtu.com/i/4VphSx)
[![4VpWf1.png](https://z3.ax1x.com/2021/09/15/4VpWf1.png)](https://imgtu.com/i/4VpWf1)
   
5. 在**配置**页面勾选**vue的版本**和**需要的预处理器**：
[![4V9ZcV.png](https://z3.ax1x.com/2021/09/15/4V9ZcV.png)](https://imgtu.com/i/4V9ZcV)

6. 将刚才所有的配置**保存成预设（模板）**，方便下一次创建项目时**直接复用之前的配置**：
[![4V9s3t.png](https://z3.ax1x.com/2021/09/15/4V9s3t.png)](https://imgtu.com/i/4V9s3t)

7. 创建项目并自动安装依赖包：
[![4V97vV.png](https://z3.ax1x.com/2021/09/15/4V97vV.png)](https://imgtu.com/i/4V97vV)

项目创建完成后，自动进入**项目仪表盘**：
[![4VCtGn.png](https://z3.ax1x.com/2021/09/15/4VCtGn.png)](https://imgtu.com/i/4VCtGn)
  
vue ui的**本质**：通过可视化的面板**采集**到用户的配置信息后，在后台**基于命令行的方式**自动初始化项目。

#### 5.基于命令行创建vue项目
通过命令行创建vue项目总共分为**9个步骤**：
1. 在合适的文件夹启动cmd，运行**vue create 项目名称**命令，基于**交互式的命令行**创建vue项目，并选择手动选择要安装的功能：
[![4VFsIg.png](https://z3.ax1x.com/2021/09/15/4VFsIg.png)](https://imgtu.com/i/4VFsIg)
2. 选择要安装的功能：
[![4VkUkF.png](https://z3.ax1x.com/2021/09/15/4VkUkF.png)](https://imgtu.com/i/4VkUkF)
3. 选择vue的版本（**上下箭头**切换，**回车键**确认）：
[![4VEMMn.png](https://z3.ax1x.com/2021/09/15/4VEMMn.png)](https://imgtu.com/i/4VEMMn)
4. 使用**上下箭头**选择要使用的css预处理器，并使用**回车键**确认选择：
[![4VZYv9.png](https://z3.ax1x.com/2021/09/15/4VZYv9.png)](https://imgtu.com/i/4VZYv9)
5. 使用**上下箭头**选择如何**存储插件的配置信息**，并使用**回车键**选择：
[![4VeNRg.png](https://z3.ax1x.com/2021/09/15/4VeNRg.png)](https://imgtu.com/i/4VeNRg)
6. 是否将刚才的配置保存为预设：
[![4VeWQJ.png](https://z3.ax1x.com/2021/09/15/4VeWQJ.png)](https://imgtu.com/i/4VeWQJ)
7. 开始自动创建项目并自动安装依赖包：
[![4VmZmn.png](https://z3.ax1x.com/2021/09/15/4VmZmn.png)](https://imgtu.com/i/4VmZmn)
8. 项目创建完成：
[![4VmD6H.png](https://z3.ax1x.com/2021/09/15/4VmD6H.png)](https://imgtu.com/i/4VmD6H)
9. 运行以下命令，验证项目是否能正常运行，成功运行时如下图：
```
cd vue-cli-project-2
npm run serve
```
[![4Vm7Bn.png](https://z3.ax1x.com/2021/09/15/4Vm7Bn.png)](https://imgtu.com/i/4Vm7Bn)


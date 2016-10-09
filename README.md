# nodeLesson
## 同步
同步：正在处于苦逼工作状态中的我，但狗屎运的交到了女朋友并正处于处于热恋期，因此发送短信给她询问那个餐厅吃饭，急不可耐的看着手机等待短信回复，收到信息看完是否加班或者下班；
## 异步
异步：正处于公司运营决策关键工作状态中的你，不可以被打断太久，随便发送了一条询问老婆什么时候做好晚饭然后吃饭的短信后立马返回工作，一边工作一边等待短信回复通知，根据通知决定是否再工作和下班。
## 阻塞非阻塞
阻塞调用是指调用结果返回之前，当前线程会被挂起。调用线程只有在得到结果之后才会返回。
非阻塞调用指在不能立刻得到结果之前，该调用不会阻塞当前线程。
## nodejs
*  1.global 可以自己调用自己
*  2.process 进程
*  3.Buffer 缓存区 表示当前使用的内存区
*  4.clearImmediate
*  5.clearInterval
*  6.clearTimeout:
*  7.setImmediate
*  8.setInterval
*  9.setTimeout
*  10.console
## module
> 前端seajs cmd/requirejs amd

- 命名空间缺点：调用过长，无法避免命名冲突
    
## commonjs规范

- 定义模块
创建一个js文件
- 需要一个模块
require
- 导出一个模块
exports / module.exports

## 模块化的好处
- 分工协作
- 高内聚 低耦合
- 方便重构

如果导出的是引用类型用
```
    module.exports=obj;
```
如果导出的是基本类型用
```
    exports.basis=basis;
```
## require 
- 多次引用只会加载一次，是同步的
- node加载同一个模块可以将模块缓存下来，下次加载直接引用
- require.cache 
- require.resolve 解析出模块的绝对路径
```
delete require.cache[require.resolve('./module.js')];//删除模块对象以路径为key的value

通过缓存将缓存中唯一模块删除
```

## 创建管理依赖文件的package.json
```
npm init
```
## package.json
```
{
  "name": "node",
  "version": "1.0.0",
  "description": "node学习仓库",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/ollieSk8/nodeLesson.git"
  },
  "keywords": [
    "node",
    "npm"
  ],
  "author": "ollieSk8",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/ollieSk8/nodeLesson/issues"
  },
  "homepage": "https://github.com/ollieSk8/nodeLesson#readme",
  "devDependencies": {
    "gulp": "^3.9.1"
  },
  "dependencies": {
    "angular": "^1.5.8",
    "jquery": "^3.1.1"
  }
}

```
## 开发依赖
- 只在开发时使用
- 使用gulp会自动在package.json中写入
```
npm install gulp --save-dev
``` 
## 依赖
- 上线和开发时都需要
```
npm install jquery angular --save
```
- 文件会安装在node_modules下
## 全部安装
```
npm install
```
## 卸载包
```
npm uninstall gulp --save-dev  例如 卸载所有关于gulp的文件
```
## 全局安装 -g
- 不会增加到列表里，并且只是在命令行下使用
## 发布包
- 在https://www.npmjs.com 登录用户 或创建
```
npm adduser
```
- 发布包
```
npm publish
```
- 卸载包
```
npm unpublish
``` 
- 切换源
```
npm install nrm -g
```
-  查看所有源
```
nrm ls

可以的源
npm ---- https://registry.npmjs.org/
cnpm --- http://r.cnpmjs.org/
taobao - https://registry.npm.taobao.org/
nj ----- https://registry.nodejitsu.com/
rednpm - http://registry.mirror.cqupt.edu.cn/
npmMirror  https://skimdb.npmjs.com/registry/
edunpm - http://registry.enpmjs.org/
```
-  使用源
```
nrm use taobao
```
- 模块的查找机制
```
//第三方模块
//我们引入第三模块是不要路径的./直接引用模块的名字
var mime = require('mime');//会自动搜索package.json里的main属性 mine.js
//自己写的模块 要注意
//当我们安装一个模块会就近安装 找最近目录一直往上找，知道找到node_modules文件夹，如果找不到在自己的目录下创建
console.log(module.paths);//模块的查找路径

var jwpack = require('jwpack');
console.log(jwpack);
//先查找第三方模块中的index.js  index.json 之后在查找对应main的字段


//第三方查找规则
//1.先查找模块的名字,找不到往上找，找到跟目录
//2.查找index.js index.json
//3.如果没有index 会找package.json里的main字段
//我们的文件模块不用指定后缀名默认会自动添加.js后缀，如果找不到在添加.json后缀

//文件 ./  第三方 需要安装 内置 直接使用
```
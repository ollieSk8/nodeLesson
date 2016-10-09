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
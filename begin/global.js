/**
 * Created by ollie on 16/10/9.
 */
console.log(global==this);
//false 在文件中运行时当前this不是global
//在文件中，node把文件看成一个模块，造我们文件外面套了一层函数，函数里的this不是global
// (function () {
//     console.log(global==this);
// })();
// (function (exports,require,module,__dirname,__filename) {
//     this=exports
//     执行global.js
// })()
var a=100;//声明的变量不会自己动挂载到global上
console.log(global.a);
//console.log(global);
/*
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
* */

// console.log('log');
// console.error('error');
// console.info('info')
// console.warn('warn')
//顺序是不确定的

// console.time('end');//测试时间的
// for(var i=0;i<1000;i++){
//
// }
// console.timeEnd('end');

// console.time('end');//测试异步时间的
// setTimeout(function () {
//     console.timeEnd('end');
// },2000)

//process 进程
// console.log(process.id);//进程id
// process.kill(5040)//杀死进程 传入进程id号
//process.stdout.write('123');//console.log 调用的就是这个方法

//监听用户输入 用户输入后输出内容
// process.stdin.on('data',function (data) {
//     process.stdout.write(data);
// });
//setImmediate 和setTimeout 的区别是不能限定时间
// setImmediate(function () {
//     console.log('123s');
// })

//nextTick 下一队列
// process.nextTick(function () {
//     console.log(2000);
// })

//可以直接访问的属性

// console.log(__dirname);//当前文件夹的绝对路径
// console.log(__filename);//当前文件的名字
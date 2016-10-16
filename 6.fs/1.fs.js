/**
 * Created by ollie on 16/10/15.
 */
// fs  file system  node 核心模块
var fs=require('fs');
//fs 中的方法 两种 同步和异步
//能用异步就不要用同步，同步和异步方法一同出现
//读文件
//fs.readFileSync() 同步会等待读取返回的结果
//var data=fs.readFileSync('./name.txt','utf8');//读取到内存中
//默认读出的内容是buffer类型
//console.log(data);

//同步代码我们可以使用try-catch 捕获异常
// try{
//     var data=fs.readFileSync('./name1.txt','utf8');
// }catch(e){
//     console.log(e);
// }
//注 readfile 不能读取过大的文件，防止淹没可用内存（不超过16）

//异步方式
// fs.readFile('./name.txt','utf8',function (err,data) {
//     if(err){
//         console.log(err);
//     }
//     console.log(data);
// })

//readFile readFileSync














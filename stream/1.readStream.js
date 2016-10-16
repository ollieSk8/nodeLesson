/**
 * Created by ollie on 16/10/16.
 */
var fs=require('fs');
//path 读取目录
//options
// encoding null 默认buffer
//flags:'r' 默认打开文件为读取
//highWaterMark 64k 字节
//start end 开始位置到结束位置
//要将非流动模式转化为流动模式
var rs=fs.createReadStream('./name.txt');
var arr=[];
rs.on('data',function (chuck) {//不断触发on data事件
    arr.push(chuck)//如果穿换成流动模式会以最快的速度读出来
    //暂停读取 fs.pause();
    //恢复读取 fs.resume();

});
rs.on('end',function () {
    //将整个数据输出
    console.log(Buffer.concat(arr).toString());
})

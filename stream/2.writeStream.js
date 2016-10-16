/**
 * Created by ollie on 16/10/16.
 */
var fs=require('fs');
var ws=fs.createWriteStream('./name.txt',{flags:'a'});
//highWaterMark 16K
//defaultEncoding utf8
//可写流有两个方法  写入数据类型必须是buffter类型 或者字符串
//write方法是具有返回值的，意味还能继续写入
var flag=ws.write('1',function () {
    console.log('写入成功');
});
//end 方法叫结束写入，会将end方法里的内容 和内存中残留的内容一起写入文件内，并且关闭文件
ws.end('全部写入');
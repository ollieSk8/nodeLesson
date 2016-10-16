/**
 * Created by ollie on 16/10/16.
 */
var fs=require('fs');
var rs=fs.createReadStream('./name.txt');
var ws=fs.createWriteStream('./name1.txt');
var flag;
rs.on('data',function (data) {
    //先判断是否能写入，如果不能写入等我消化后再写入
    flag=ws.write(data);
    if(!flag){
        rs.pause();
    }
});
ws.on('drain',function () {
   rs.resume();
});
rs.on('end',function () {
    ws.end();//将内存中的强制写入 在关闭
});
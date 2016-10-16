/**
 * Created by ollie on 16/10/15.
 */
var fs=require('fs');

var files=fs.readdirSync('./a');//文件夹所有信息 （只包含子辈的）
//console.log(files);
files.forEach(function (item,index) {
   if(fs.statSync('a/'+item).isFile()){
       fs.unlinkSync('a/'+item);
   }else if(fs.statSync('a/'+item).isDirectory()){
       fs.rmdirSync('a/'+item);
   }
})
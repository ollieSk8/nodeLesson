/**
 * Created by ollie on 16/10/15.
 */
var fs=require('fs');

//var flag=fs.writeFileSync('./test.txt',{};
//默认写入编码是uft8
//默认创建
//将提供的数据放在第二个参数上

//fs.appendFileSync('./test.txt','123','utf8');//实现是调用了writeFileSync flag a

// fs.writeFile('./test.txt',456,function (err) {
//     console.log(err);//写入是否有错误
// });
//拷贝人间 写一个同步的 再写一个异步的

// function  copySync(sourceFile,targetFile) {
//     var data=fs.readFileSync(sourceFile,'utf8');
//     fs.writeFileSync(targetFile,data,'utf8');
// }
// copySync('./name.txt','./test.txt');

function copy(sourceFile,targetFile) {
    fs.readFile(sourceFile,'utf8',function (err,data) {
        if(err)console.log(err);
        fs.writeFile(targetFile,data,function (err) {
            console.log(err);
        })
    })
}
copy('./name.txt','./test.txt');
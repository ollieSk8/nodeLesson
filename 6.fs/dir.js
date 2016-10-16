/**
 * Created by ollie on 16/10/15.
 */
var fs=require('fs');

//fs.mkdirSync('./mkdir')
function makedeep(dir) {
    var dirArrs=dir.split('/');
    dirArrs.forEach(function (item,index) {
        fs.mkdirSync(dirArrs.slice(0,index+1).join('/'));
    })
}
//创建前要判断文件夹是否存在
//makedeep('a/b/c/d/e');
function walkTheDom(root, callback) {
    var children = root.children;
    var length = children.length;

    callback(root);

    if (length === 0) {
        return;
    } else {
        for (var i = 0; i < length; i++) {
            walkTheDom(children[i], callback);
        }
    }
}
//异步创建文件夹
// a/  a/b  a/b/c
function makedir(dir,callback) {
    var dirArrs=dir.split('/');
    dirArrs.forEach(function (item,index) {
        var _local=dirArrs.slice(0,index+1).join('/');
        fs.mkdir(_local,function (err) {
            if(err){
                console.log(err);
            }else{
                console.log('sucess create '+_local);
            }
        });
    })
}
//makedir('a');
//状态信息
// fs.exists('./name.txt',function (exits) {
//     console.log(exits);
// })

// var stat=fs.statSync('./name.txt');
// console.log(stat);
/*
*  atime: 2016-10-15T08:59:30.000Z,访问时间
 mtime: 2016-10-15T08:15:22.000Z,修改时间
 ctime: 2016-10-15T08:15:22.000Z,修改时间
 birthtime: 2016-10-15T08:15:22.000Z 创建时间
* */

//fs.readdirSync fs.readdir
/**
 * Created by ollie on 16/10/15.
 */
var path=require('path');
//node 处理路径模块
//path.join
//创建a.js这样一个绝对路径 拼接路径
// var url=path.join(__dirname,'a.js');
// console.log(url);

// path.basename/path.extname

//console.log(path.basename('e.js','.js'));
//console.log(path.basename('jquery.min.js','.min.js'));
//console.log(path.extname('e.min.js'));//拿到扩展名

//console.log(path.resolve('/foo/bar', './baz'));

//require必须存在才能调用resolve
//console.log(require.resolve('2.js'));

//console.log(path.resolve('2.js'));//用来解析路径的
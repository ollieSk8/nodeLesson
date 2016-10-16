/**
 * Created by ollie on 16/10/16.
 */
var fs=require('fs');
function AsynCope(source,target) {
    var rs=fs.createReadStream(source);
    var ws=fs.createWriteStream(target);
    rs.pipe(ws);//异步，不会淹没可用内存
}
AsynCope('./name.txt','./name1.txt');
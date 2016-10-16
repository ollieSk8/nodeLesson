/**
 * Created by ollie on 16/10/16.
 */
var fs=require('fs');
var ws=fs.createWriteStream('./name.txt',{highWaterMark:3} );
//写入的内容一定不会丢失
var flag=true;
var i=0;
w();
function w() {
    while(i<10&&flag){
        flag=ws.write(i+'');
        i++;
    }
}
ws.on('drain',function () {
    setTimeout(function () {
        console.log('吃好了');
        flag=true;
        w();
    },1000)

})
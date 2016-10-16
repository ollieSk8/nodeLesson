/**
 * Created by ollie on 16/10/15.
 */
var fs=require('fs');
var EventEmitter = require('events');
var myEE = new EventEmitter();
var obj={};
fs.readFile('./name.txt','utf8',function (err,data) {
    if(err)console.log(err);
    obj.name=data;
});
fs.readFile('./age.txt','utf8',function (err,data) {
    if(err)console.log(err);
    obj.age=data;
    myEE.emit('someEvent',obj);
});
myEE.on('someEvent',function (data) {
    console.log(data);
});



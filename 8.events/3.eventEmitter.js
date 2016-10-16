/**
 * Created by ollie on 16/10/16.
 */
//node 提供了一个eventEmitter 的核心模块专门处理事件

var EventEmitter=require('events');
var e=new EventEmitter();
function showmsg(msg) {
    console.log(msg);
}
e.on('make a trouble',showmsg);//绑定事件
e.once('make a trouble',showmsg)//绑定一次
//e.removeListener('make a trouble',showmsg)//移除单个事件
//e.removeAllListeners('make a trouble');//移除所有事件
e.emit('make a trouble','i am a trouble maker');//触发事件
//e.emit('make a trouble','i am a trouble maker');//触发事件
// on addListener
//once
//emit
//removeAllListener
//removeListener
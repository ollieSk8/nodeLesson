/**
 * Created by ollie on 16/10/15.
 */
Buffer.myConcat=function (list,length) {
    if(typeof(length)==='undefined' ){
        var length=0;
        list.forEach(function (item) {
            length+=item.length;
        });
    }
    var newBuffer=new Buffer(length);
    var Index=0;
    list.forEach(function (item,index) {
        item.copy(newBuffer,Index,0,length);
        Index+=item.length;
    });

    return newBuffer;
}

var b1=new Buffer('珠峰');
var b2=new Buffer('培训');
var re=Buffer.myConcat([b1,b2]);
console.log(re.toString());
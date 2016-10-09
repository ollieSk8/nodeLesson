/**
 * Created by ollie on 16/10/9.
 */

function Person() {
    this.name='你好';
    this.age='8';
}
Person.prototype.eat=function () {
    console.log('吃');
}
Person.prototype.drink=function () {
    console.log('喝');
}

module.exports=Person;
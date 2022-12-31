//局部变量
var a = 10;
//全局变量
b = 10;

/*
    在node中有一个全局对象global 它的作用和网页中的window类似
        在全局中创建的变量都会作为global的属性保存
        在全局中创建的函数都会作为global的方法保存

    全局里没有arguments 局部函数里有arguments

    arguments.callee
        这个属性保存的是当前执行的函数对象

    当node在执行模块中的代码时，它会在代码的最顶端加如下代码
     function (exports, require, module, __filename, __dirname) {
    
    实际上模块中的代码都是包装在一个函数中执行的，并且在函数执行时，同时传递进了5个实参
        exports
            -该对象用来将变量或函数暴露到外部
        require
            函数，用来引入外部的模块
        module
            -module代表的是当前模块本身
            -exports就是module的属性
            -既可以使用exports导出,也可以使用module.exports导出 两个属性本质一样
        __filename
            D:\JavaScript\node\01.node\04.module.js
            -当前模块的完整路径
        __dirname
            D:\JavaScript\node\01.node
            -当前模块所在文件夹的完整路径
*/

console.log(__filename);
console.log(__dirname);
console.log(global.a);
console.log(global.b);
// console.log(arguments);
// console.log(arguments.callee);
console.log(arguments.length);
//函数的本体
// console.log(arguments.callee+"");
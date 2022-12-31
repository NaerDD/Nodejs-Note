/*
    模块化
    -在Node中,一个js文件就是一个模块
    -在Node中,每一个js文件中的js代码都是独立运行在一个函数中
      而不是全局作用域，所以一个代码中的变量和函数在其他模块中无法访问
    
*/
// var x = 10;

console.log('我是02模块');

//我们可以通过exports 来向外部暴露变量和方法 
//向外部暴露属性或方法

exports.x = "我是module2.js中的x"
exports.y = "我是y"
exports.fn = function(){
 }
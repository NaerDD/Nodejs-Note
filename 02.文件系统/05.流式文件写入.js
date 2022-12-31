/*
    同步 异步 简单文件的写入都不适合大文件的写入,性能较差,容易导致内存溢出
*/

//引入fs模块
var fs = require("fs");

//流式文件写入
// 创建一个可写流
/* 
    fs.createWriteStream(path[,options])
        - 可以用来创建一个可写流
        - path 文件路径
        - option 配置的参数 一般不写
*/
var ws = fs.createWriteStream("hello4.txt");
//通过监听流的open close 事件来监听流的打开和关闭 
ws.once("open",function(){
    /* 
        on(事件字符串,回调函数)
         -可以为对象绑定一个事件
        once(事件字符串,回调函数)
         -可以为对象绑定一个一次性的事件,触发一次以后自动失效

    */
    console.log('流打开了');
 })
ws.once("close",function(){

    console.log('流关闭了');
 })

//通过wa想文件中输出内容
ws.write("通过可写流写入文件的内容")
ws.write("今天天气真不错")
ws.write("锄禾日当午")
ws.write("红掌拨清波")
ws.write("通过可写流写入文件的内容")


//关闭流 现在的close会在全部写完后关闭 如果没写完就关闭了 使用end()
ws.close();
// ws.end();




 


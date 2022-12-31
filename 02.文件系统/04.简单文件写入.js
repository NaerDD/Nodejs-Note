/*
    简单文件写入
     fs.writeFile(file,data[,options],callback)
     fs.writeFileSync(file,data[,options])
        -file 要操作的文件路径
        -data 要写入的数据
        -option 选项,可以对写入进行一些设置 一般不写
            -encoding 默认utf-8
            -mode 默认0o666
            -flag 默认w写 r读 a追加
        -callback 当写入完成以后执行的函数


*/

//引入fs模块
var fs = require("fs");


//打开文件
fs.writeFile("hello3.txt","这是通过writeFile写入的内容",{flag:'w'},function(err){
    //判断是否出错
    if(!err){
            console.log('写入成功~~~');
       }
    }
 )

// fs.writeFileSync("hello3.txt","这是通过writeFile写入的内容")


 


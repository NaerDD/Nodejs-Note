/*
    异步文件写入
    fs.open(path,flags[,model],callback)
        -用来打开一个文件
        -异步调用的方法,结果都是通过回调函数返回的
        -回调函数的两个参数
            err错误对象 没有错误为null
            fd 文件描述符
    fs.write(fd,string[,position[,encoding]],callback)
        -用来异步写入一个文件
     fs.close(fd,callback)
        -用来关闭一个文件
*/

//引入fs模块
var fs = require("fs");

//打开文件
fs.open("hello2.txt","w",function(err,fd){
    //判断是否出错
    if(!err){
        //如果没有出错,则对文件进行写入操作
        fs.write(fd,"这是异步写入的内容",function(err){
            if(!err){
                console.log('写入成功');
                
            }
            fs.close(fd,function(err){
                if(!err){
                    console.log("文件已关闭");
                    
                }
             })
         })

    // console.log(fd);
    console.log('回调函数中的代码~~');
        f= fd
    }else{
        console.log(err);
    }
 });

 console.log('open下的代码 异步不会阻塞~~~');
 


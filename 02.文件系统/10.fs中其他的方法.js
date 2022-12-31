var fs = require("fs");

/* 
    fs.existsSync(path)
      -检查一个文件是否存在

*/

var isExists = fs.existsSync("hello.txt");
// console.log(isExists);


/* 
    fs.stat(path,callback)
    fs.statSync(path)
      -获取文件的状态
      -返回一个对象   保存了当前对象状态的相关信息
*/

fs.stat("hello2.txt",function(err,stat){
    // console.log(stat);
    /*
        size 文件的大小
        isFile()是否是文件
        isDirectory()是否是文件夹(目录)
    */
    // console.log(stat);
    console.log(stat.isFile());
    console.log(stat.isDirectory());
 })

 /* 
    fs.unlink(path,callback)
    fs.unlickSync(path)
      -删除文件

 */
    // fs.unlinkSync("hello.txt")

   /* 
    fs.readdir(path[,options],callback)
    fs.readdirSync(path[,options])
      -读取一个目录的目录结构
        file是一个字符串数组,每一个元素就是一个文件夹或文件的名字

 */

      // fs.readdir(".",function(err,files){
      //     if(!err){
      //       console.log(files);
      //     }
      //  })


/*
      截断文件
      fs.truncate(path,len,callback)
      fs.truncateSync(path,len)
      -将文件设置为指定的大小

*/
// fs.truncateSync("hello2.txt",10);

/*
      创建文件
      fs.mkdir(path[,mode],callback)
      fs.mkdirSync(path[,mode])
       -创建一个目录
*/
// fs.mkdirSync("hello");

//删除一个文件夹
// fs.rmdirSync("hello");

//修改文件名
// fs.rename("hello","HELLO",function(err){
//     if(!err){
//       console.log('修改成功');
      
//     }
//  })

/* 
       fs.watchFile(filename[,options],listener)
        -监视文件的修改
        -参数:
          filename 要监视的文件的名字
          options 配置选项
          listener 回调函数 文件发生变化 执行
            在回调函数中会有两个参数:
                curr 当前文件的状态
                prev 修改前文件的状态
                  -这两个对象都是stats对象
*/

fs.watchFile("hello.txt",{interval:3000},function(curr,prev){
    console.log('文件发生变化了');
    console.log('修改前文件大小'+prev.size);
    console.log('修改后文件大小'+curr.size);
    
    
 })


/*
    通过npm下载的包都放到node_module文件夹中
      我们通过npm下载的包，直接通过包名引入即可

      node在使用模块名字来引入模块时，它会首先在当前目录的node_modules中寻找是否含有该模块
        如果有则直接使用 没有去上一级目录的node_modules中寻找
        没有再上一级目录的node_modules中寻找
        磁盘根目录都没有就报错

*/
var math = require("math");

console.log(math.add(123,456));
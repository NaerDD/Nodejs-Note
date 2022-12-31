/* 
    buffer(缓冲区)

      -buffer的结构和数组很像,操作的方法也和数组类似

      -数组中不能存储二进制的文件,而buffer就是专门用来存储二进制数据

      -使用buffer不需要引入模块,直接使用即可

      -buffer中存储的都是二进制数据,但是在显示时都是以16进制的形式显示
        -buffer中每一个元素的范围00-ff 0-255
        -buffer中的一个元素,占用内存的一个字节

        -buffer的大小一旦确定 则不能修改 buffer实际上是对地城内存的直接操作


*/

var str = "hello Atguigu";

//将一个字符串保存到buffer中
var buff = Buffer.from(str);

// console.log(buff);
// console.log(buff.length);//占用内存的大小
// console.log(str.length);//字符串的长度

//创建一个指定大小的buffer
//new Buffer已经被弃用 最新使用Buffer.alloc()来指定长度
var buf2 = new Buffer.alloc(10);//10个字节的buffer
console.log(buf2.length)

//创建一个10个字节的buffer
var buf3 = Buffer.alloc(10);
buf3[0]=88;
buf3[1]=255;
buf3[2]=0xaa;
buf3[3]=256;
//在控制台或页面输出一定是10进制
// console.log(buf3);
// console.log(buf3[2]);
// console.log(buf3[2].toString(16));

// for (let i = 0; i < buf3.length; i++) {
//   console.log(buf3[i]);
// }

//Buffer.allocUnsafe(size)创建一个指定大小的buffer,但是buffer中可能含有敏感数据 没有清理原本的数据空间
var buf4 = Buffer.allocUnsafe(10);
console.log(buf4);

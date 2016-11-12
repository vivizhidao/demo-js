##javascript
###数据类型：
> 简单数据类型：

- number
	+ 十进制、八进制（0x的，0-9，A-F）、十六进制（0开头的，0-7）
	+ 科学计数法
	+ 浮点
	+ 数值范围：Infinity,-Infinity
	+ 数值检测：NaN not a number 非数值，NaN还是一个number 类型，NaN不等于NaN,isNaN()来判断
- string
- boolean
	+ 所有的值都可以通过Boolean()转换成布尔类型
	+ false,"",0,NaN,null,undefined这六种会转成false,其余只都转换成true
- undefinded
	+ 表示声明了一个变量没有赋值 
- null

> 复杂数据类型：

- Object
- Array
- Date
- Math

> 转换成字符串类型的方法

- toString()
- String()函数
- 字符串拼接（推荐使用）

> 转换成数值类型的方法

- Number()
- parsent()、parseFloat()（常用）
- 通过运算符转换-0、/1

> 转换成布尔类型的方法

- Boolean()函数
- 流程控制语句会把后边的值隐式的转换成布尔类型，例如if
- !!将一个转换成布尔类型（很常用）

> 流程控制

- 顺序结构if else
- 选择结构switch case 
- 循环结构
	+ for
	+ while、do while（先执行，至少执行一次）
	
> 数组增删元素

- push()//从后面推入元素，返回新数组的length
- pop()  //从后面删除元素，返回被删除的元素
- shift() //从前面删除元素，返回被删除的元素
- unshift() //从前面添加元素，返回新数组的length

> 数组的拼接与截取（了解）

- concat()方法：拼接
- slice(开始位置，结束位置)方法：切割，切片
- splice(开始位置，删除个数，需要替换的数组)方法：拼接

> 数组的位置

- indexOf(需要查找的元素，开始查找的位置)查找数组中元素第一次出现的位置，如果找不到，返回-1
- lastIndexOf(需要查找的元素，开始查找的位置)从后面开始查找数组中元素出现位置

> 清空数组

- array.splice(0,array.leng);删除数组中所有的元素
- array.length=0;直接修改数组的长度
- array=[];将数组赋值为一个空数组

> H5的新方法

- every()
- filter()数组过滤，创建并返回一个新数组，包含了所有通过测试的元素
- forEach()遍历数组
- map()
- some()

> JavaScript提供了三个特殊的引用类型：

- String/Number/Boolean

> String对象

- 获取索引

	+ indexOf(需要查找的字符，开始查找的位置)查找字符串中字符第一次出现的位置，如果找不到，返回-1
	+ lastIndexOf(需要查找的字符，开始查找的位置)从后面开始查找数组中字符出现位置

- 其他方法

	+ replace(需要替换的值，用来替换的值)：字符串替换
	+ split(用什么符号来切割)：字符串切割
	
> 定时器

- 延时器setTimeout(callback,time)
- 清除定时clearTimeout()
- 自动重复setInterval(callback,time)
- 清除clearInterval

> 电子表
> 机械表

> 动画

- 匀速动画
	var step = 10;
	leader = leader + step;
- 缓动动画
	var step = (target – leader) /10;
	leader = leader + step;

> scroll缓动框架

- scroll:滚动
- scroll家族用来获取盒子内容的大小和位置
- offset家族用来获取盒子自身的大小和位置
- scroll家族有：
	+ scrollWidth
	+ scrollHeight
	+ scrollLeft
	+ scrollTop
	+ onscroll()滚动时间
- 加滚动条的方法 style里 overflow:auto自适应
- scroll浏览器兼容问题：
	+ 现代浏览器（除了IE678外的浏览器）window.pageYOffset
	+ IE和IE678 ：document.documentElement.scrollTop
	+ 未声明 DTD： document.body.scrollTop

- 获取元素样式浏览器兼容问题
	+ 现代浏览器(IE9)：Window.getComputedStyle(元素，伪元素).left
	+ IE678：div.currentStyle.left

> 轮播图
	- 自动生成框架
	- 同步问题
	- 多次点击bug

> 旋转木马

> 手风琴

> 正则表达式

> 键盘事件



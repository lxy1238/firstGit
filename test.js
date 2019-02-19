// 1  第一题
var a = 100
function fn () {
  var a = 200
  alert(a)  //200
}
fn();
alert(a); //100
let a;
alert(a) //100
var a = 300;
alert(a)  // 300


// 2 第二题

var obj1 = {
  name: 'obj1',
  fn: function () {
    console.log(this.name)
  }
}

var obj2 = { name : 'obj2'}
var obj3 = { name : 'obj3'}
obj1.fn()  //obj1
var newFn = obj1.fn;
newFn();   //  空白
newFn.call(obj2) //obj2
obj3.fn = newFn;
obj3.fn()   //obj3


// 3 第三题
// 一个数组par 中有人员信息， 如下 {name: xxx, age: 1}  写一个函数对数组进行排序，按年龄从小到大
var par = [
  {
    name: 'l',
    age: 12
  },
  {
    name: 'x',
    age: 10
  },
  {
    name: 'y',
    age: 18
  }
]
function sortByAge (arr) {
  arr.sort((a, b) => {
    return a.age - b.age
  })
}


// 4 第四题
// 有字符串 var str = 'abc345efgabcab', 实现下列功能（一句js代码）
//（1）去掉字符串中的 a, b, c 字符， 形成结果： ‘345efg'
//（2）将字符串中的数字用中括号扩起来，形成结果 ‘abc[3][4][5]efgabcab’
//（3）将字符串中的每个数字的值分别乘以二， 形成结果 'abc6810efgabcab'

//1
str.replace(/a|b|c/g, '')

//2
str.replace(/\d/g, (value) =>  `[${value}]`)

//3

str.replace(/\d/g, (value) =>  `${value * 2}`)

//5 题目5、请写一段js程序，定义一个列表类List，改类包括两个成员：属性length（表示列表中的元素个数）和方法add（向列表添加元素），其中要求构造函数和add方法的参数为动态参数。
//es6
class Stack {

  constructor() {
      this.items = []
  }

  // 入栈
  push(element) {
       this.items.push(element)
  }

  // 出栈
  pop() {
      return this.items.pop()
  }

  // 末位
  get peek() {
      return this.items[this.items.length - 1]
  }

  // 是否为空栈
  get isEmpty() {
      return !this.items.length
  }

  // 尺寸
  get size() {
      return this.items.length
  }

  // 清空栈
  clear() {
      this.items = []
  }

  // 打印栈数据
  print() {
      console.log(this.items.toString())
  }
}


//es5
var Stack = /** @class */ (function () {
  function Stack() {
      this.items = [];
  }
  // 入栈
  Stack.prototype.push = function (element) {
      this.items.push(element);
  };
  // 出栈
  Stack.prototype.pop = function () {
      return this.items.pop();
  };
  Object.defineProperty(Stack.prototype, "peek", {
      // 末位
      get: function () {
          return this.items[this.items.length - 1];
      },
      enumerable: true,
      configurable: true
  });
  Object.defineProperty(Stack.prototype, "isEmpty", {
      // 是否为空栈
      get: function () {
          return !this.items.length;
      },
      enumerable: true,
      configurable: true
  });
  Object.defineProperty(Stack.prototype, "size", {
      // 尺寸
      get: function () {
          return this.items.length;
      },
      enumerable: true,
      configurable: true
  });
  // 清空栈
  Stack.prototype.clear = function () {
      this.items = [];
  };
  // 打印栈数据
  Stack.prototype.print = function () {
      console.log(this.items.toString());
  };
  return Stack;
}());



//6 编写一个方法，每次调用这个方法 ，返回数加一
var add = (function () {
  var a = 1
  function addOne() {
      return a += 1
  }
  return addOne
})()
add()
add()
add()

// 执行完下面代码，写出所有的打印结果
function Parent(){
    this.a = 1;
    this.b = [
    1,2,this.a
    ];
    this.c = {
    demo : 5
    };
    this.show = function(){
    console.log(this.a + ' => ' + this.c.demo + ' => ' + this.b);
  };
}
  function Child(){
    this.a = 2;
    this.change = function(){
        this.b.push(this.a);
        this.a = this.b.length;
        this.c.demo = this.a++;
    };
  }
  Child.prototype = new Parent();
  var parent = new Parent();
  var child1 = new Child();
  var child2 = new Child();
  child1.a = 11;
  child2.a = 12;
  parent.show(); 
  child1.show(); 
  child2.show(); 
  child1.change(); 
  child2.change(); 
  parent.show(); 
  child1.show(); 
  child2.show(); 

//   parent.show(); // 1 => 5 => 1,2,1
//   child1.show(); // 11 => 5 => 1,2,1
//   child2.show(); // 12 => 5 => 1,2,1
//   child1.change(); 
//   child2.change(); 
//   parent.show(); // 1 => 5 => 1,2,1
//   child1.show(); // 5 => 5 => 1,2,1,11,12
//   child2.show(); // 6 => 5 => 1,2,1,11,12



  //8  提取url ？后面的参数  键值对  

  function getParms (url) {
    let newJson = {}
    if (!url.includes('?')) {
      return
    }
    let strParms = url.slice(url.indexOf('?') + 1)
    let arr = strParms.split('&')
    arr.forEach(element => {
      let newArr = element.split('=')
      newJson[newArr[0]] = newArr[1] ? newArr[1] : undefined
    });
	  return newJson
  }






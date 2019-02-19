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


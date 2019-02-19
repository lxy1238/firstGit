let Event = (function() {
  let list = {}
  let Event = {
    listen: function (key, fn) {
      if (!list[key]) {
        list[key] = []
      }
      list[key].push(fn) 
    },
    trigger: function () {
      let key = Array.prototype.shift.call(arguments)  // 取第一个参数为key
      let msg = list[key]
      if (!msg || msg.length === 0) {
        return false
      }
      for (let i = 0; i < msg.length; i++) {
        msg[i].apply(this, arguments) 
      } 
    },
    remove: function (key, fn) {
      let msg = list[key]
      if (!msg) {
        return false
      }
      if (!fn) {
        delete list[key]  //如果fn 不存在  就移除所有的事件
      } else {
        for (let i = 0; i < msg.length; i++) {
          if (fn === msg[i]) {
            list[key].splice(i, 1)
          }
        }
      }

    },
    check: function () {
      console.log(list)
    },
    cleanAllEvent: function () {
      list = {}
    }
  }

  return Event
})(); 

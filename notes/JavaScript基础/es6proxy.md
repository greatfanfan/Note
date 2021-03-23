```javascript
let object = {
  a: 1,
  b: 2
};

// 被监听
const test = new Proxy(object, {
  // 钩子
  set(obj, prop, val) {
    console.log(obj, prop, val);
    obj[prop] = val;
  }
});

test.a = 3; // {a:1, b:2} "a" 3
test.c = 4; // 
```
函数：
1. 普通函数：用 function 关键字定义的函数。
```javascript
function foo(){
    // code
}
```

2. 箭头函数：用 => 运算符定义的函数。
```javascript
const foo = () => {
    // code
}
```

3. 方法：在 class 中定义的函数。
```javascript
class C {
    foo(){
        //code
    }
}
```

4. 生成器函数：用 function * 定义的函数。
```javascript
function* foo(){
    // code
}
```

5. 类：用 class 定义的类，实际上也是函数。
```javascript
class Foo {
    constructor(){
        //code
    }
}
```

6. 异步函数：普通函数、箭头函数和生成器函数加上 async 关键字。
```javascript
async function foo(){
    // code
}
const foo = async () => {
    // code
}
async function foo*(){
    // code
}
```

闭包其实只是一个绑定了执行环境的函数.

`this 关键字的行为`
> this 是执行上下文中很重要的一个组成部分。同一个函数调用方式不同，得到的 this 值也不同.调用函数时使用的引用，决定了函数执行时刻的 this 值。改为箭头函数后，不论用什么引用来调用它，都不影响它的 this 值。生成器函数、异步生成器函数和异步普通函数跟普通函数行为是一致的，异步箭头函数与箭头函数行为是一致的。
```javascript
function showThis(){
    console.log(this);
}

var o = {
    showThis: showThis
}

showThis(); // global
o.showThis(); // o
```

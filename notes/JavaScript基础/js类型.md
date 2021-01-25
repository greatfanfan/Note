Js类型：Undefined、Null、Boolean、String、Number、Symbol、Object。

## 为什么有的编程规范要求用 void 0 代替 undefined？
> Undefined 类型表示未定义，它的类型只有一个值，就是 undefined。任何变量在赋值前是Undefined 类型、值为 undefined，一般我们可以用全局变量 undefined（就是名为 undefined 的这个变量）来表达这个值，或者 void 运算来把任意一个表达式变成 undefined 值。但是呢，因为 JavaScript 的代码 undefined 是一个变量，而并非是一个关键字，这是 JavaScript 语言公认的设计失误之一，所以，我们为了避免无意中被篡改，我建议使用 void 0 来获取 undefined 值。

## 字符串有最大长度吗？
> String 用于表示文本数据。String 有最大长度是 2^53 - 1。这个所谓最大长度，并不完全是你理解中的字符数。而是字符串的 UTF16 编码，我们字符串的操作 charAt、charCodeAt、length 等方法针对的都是 UTF16 编码。所以，字符串的最大长度，实际上是受字符串的编码长度影响的。JavaScript 中的字符串是永远无法变更的，一旦字符串构造出来，无法用任何方式改变字符串的内容，所以字符串具有值类型的特征。

## 0.1 + 0.2 不是等于 0.3 么？为什么 JavaScript 里不是这样的？
> 根据双精度浮点数的定义，Number 类型中有效的整数范围是 -0x1fffffffffffff 至 0x1fffffffffffff，所以 Number 无法精确表示此范围外的整数。
```javascript
  console.log( Math.abs(0.1 + 0.2 - 0.3) <= Number.EPSILON);
```
## ES6 新加入的 Symbol 是个什么东西？
> Symbol 是 ES6 中引入的新类型，它是一切非字符串的对象 key 的集合，在 ES6 规范中，整个对象系统被用 Symbol 重塑。
```javascript
var mySymbol = Symbol("my symbol");

    var o = new Object

    o[Symbol.iterator] = function() {
        var v = 0
        return {
            next: function() {
                return { value: v++, done: v > 10 }
            }
        }        
    };

    for(var v of o) 
        console.log(v); // 0 1 2 3 ... 9
```

## 为什么给对象添加的方法能用在基本类型上？
> 就是. 运算符提供了装箱操作，它会根据基础类型构造一个临时对象，使得我们能在基础类型上调用对应对象的方法。事实上，JavaScript 中的“类”仅仅是运行时对象的一个私有属性，而 JavaScript 中是无法自定义类型的。

## 类型转换
### StringToNumber
> 在不传入第二个参数的情况下，parseInt 只支持 16 进制前缀“0x”，而且会忽略非数字字符，也不支持科学计数法。所以在任何环境下，都建议传入 parseInt 的第二个参数，而 parseFloat 则直接把原字符串作为十进制来解析，它不会引入任何的其他进制。多数情况下，Number 是比 parseInt 和 parseFloat 更好的选择。

### 拆箱转换
> 在 JavaScript 标准中，规定了 ToPrimitive 函数，它是对象类型到基本类型的转换（即，拆箱转换）。对象到 String 和 Number 的转换都遵循“先拆箱再转换”的规则。通过拆箱转换，把对象变成基本类型，再从基本类型转换为对应的 String 或者 Number。拆箱转换会尝试调用 valueOf 和 toString 来获得拆箱后的基本类型。如果 valueOf 和 toString 都不存在，或者没有返回基本类型，则会产生类型错误 TypeError。
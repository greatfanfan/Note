### import 声明
> import 声明有两种用法，一个是直接 import 一个模块，另一个是带 from 的 import，它能引入模块里的一些信息。
```javascript
import "mod"; //引入一个模块
import v from "mod";  //把模块默认的导出值放入变量v
```
> > 带from的import细分为3种：
> > > * import x from "./a.js" 引入模块中导出的默认值。
> > > * import {a as x, modify} from "./a.js"; 引入模块中的变量。
> > > * import * as x from "./a.js" 把模块中所有的变量以类似对象属性的方式引入。

### export 声明
> 与 import 相对，export 声明承担的是导出的任务。模块中导出变量的方式有两种，一种是独立使用 export 声明，另一种是直接在声明型语句前添加 export 关键字。
`export {a, b, c};`
> export 还有一种特殊的用法，就是跟 default 联合使用。export default 表示导出一个默认变量值，它可以用于 function 和 class。这里导出的变量是没有名称的，可以使用import x from "./a.js"这样的语法，在模块中引入。export default 还支持一种语法，后面跟一个表达式，例如：`var a = {};export default a;`
> > 但是，这里的行为跟导出变量是不一致的，这里导出的是值，导出的就是普通变量 a 的值，以后 a 的变化与导出的值就无关了，修改变量 a，不会使得其他模块中引入的 default 值发生改变。

### 函数体
> 执行函数的行为通常是在 JavaScript 代码执行时，注册宿主环境的某些事件触发的，而执行的过程，就是执行函数体（函数的花括号中间的部分）。
> > * 普通函数体
> > > `function foo(){ //Function body }`
> > * 异步函数体
> > > `async function foo(){ //Function body}`
> > * 生成器函数体
> > > `function *foo(){ //Function body}`
> > * 异步生成器函数体
> > > `async function *foo(){ //Function body}`
> 上面四种函数体的区别在于：能否使用 await 或者 yield 语句。

### 预处理
> JavaScript 执行前，会对脚本、模块和函数体中的语句进行预处理。预处理过程将会提前处理 var、函数声明、class、const 和 let 这些语句，以确定其中变量的意义。
> > * var 的作用能够穿透一切语句结构，它只认脚本、模块和函数体三种语法结构。
> > * 在全局（脚本、模块和函数体），function 声明表现跟 var 相似，不同之处在于，function 声明不但在作用域中加入变量，还会给它赋值。function 声明出现在 if 等语句中的情况有点复杂，它仍然作用于脚本、模块和函数体级别，在预处理阶段，仍然会产生变量，它不再被提前赋值：
> > *  在 class 声明之前使用 class 名，会抛错.class 声明也是会被预处理的，它会在作用域中创建变量，并且要求访问它时抛出错误。class 的声明作用不会穿透 if 等语句结构，所以只有写在全局环境才会有声明作用.

### 指令序言机制
> 脚本和模块都支持一种特别的语法，叫做指令序言（Directive Prologs）。
> "use strict"是 JavaScript 标准中规定的唯一一种指令序言，但是设计指令序言的目的是，留给 JavaScript 的引擎和实现者一些统一的表达方式，在静态扫描时指定 JavaScript 代码的一些特性。JavaScript 的指令序言是只有一个字符串直接量的表达式语句，它只能出现在脚本、模块和函数体的最前面。


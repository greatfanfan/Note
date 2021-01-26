## 为什么 JavaScript（直到 ES6）有对象的概念，但是却没有像其他的语言那样，有类的概念呢?
> JavaScript 的高度动态性的对象系统。实际上 JavaScript 对象的运行时是一个“属性的集合”，属性以字符串或者 Symbol 为 key，以数据属性特征值或者访问器属性特征值为 value。对象是一个属性的索引结构（索引结构是一类常见的数据结构，我们可以把它理解为一个能够以比较快的速度用 key 来查找 value 的字典）。我们以上面的对象 o 为例，你可以想象一下“a”是 key。{writable:true,value:1,configurable:true,enumerable:true}是 value。我们在前面的类型课程中，已经介绍了 Symbol 类型，能够以 Symbol 为属性名，这是 JavaScript 对象的一个特色。

## 为什么在 JavaScript 对象里可以自由添加属性，而其他的语言却不能呢？
>  因为JavaScript采用的面向对象机制是基于原型的机制，而非传统的基于类的机制。在JavaScript中可以自由添加属性是因为为了实现动态性刻意这样设计的.

## 对象属性
getOwnPropertyDescriptor 获取对象的数据属性或访问属性
defineProperty
Object.create 根据指定的原型创建新对象，原型可以是 null；
Object.getPrototypeOf 获得一个对象的原型；
Object.setPrototypeOf 设置一个对象的原型。


## 
函数对象的定义是：具有`[[`call]]私有字段的对象，构造器对象的定义是：具有私有字段`[[`construct]]的对象。

### for in 循环
> for in 循环枚举对象的属性，这里体现了属性的 enumerable 特征。
```javascript
let o = { a: 10, b: 20}
Object.defineProperty(o, "c", {enumerable:false, value:30})

for(let p in o)
    console.log(p); // a b
```

### for of 循环和 for await of 循环
> 背后的机制是 iterator 机制。给任何一个对象添加 iterator，使它可以用于 for of 语句
```javascript
let o = {  
    [Symbol.iterator]:() => ({
        _value: 0,
        next(){
            if(this._value == 10)
                return {
                    done: true
                }
            else return {
                value: this._value++,
                done: false
            };
        }
    })
}
for(let e of o)
    console.log(e);


// generator

function* foo(){
    yield 0;
    yield 1;
    yield 2;
    yield 3;
}
for(let e of foo())
    console.log(e);

// 异步

function sleep(duration) {
    return new Promise(function(resolve, reject) {
        setTimeout(resolve,duration);
    })
}
async function* foo(){
    i = 0;
    while(true) {
        await sleep(1000);
        yield i++;
    }
        
}
for await(let e of foo())
    console.log(e);
```
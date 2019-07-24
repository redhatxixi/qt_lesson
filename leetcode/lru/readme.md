###js
- 变量/常量
    1. 常量一定要赋值，变量可以不赋值类型也可改
        常量声明时，一定要声明变量类型，也就是声明常量时一定要赋值
        由常量定义的数组的值(包括对象类型)还是可以改变的，可以插入或删除，但本质来说其实是不可变化的，因为对象的引用没变，如果你重新对这个常量赋值另一个数组(引用地址改变了)则会出错
        
    2. 变量类型是由值决定的
        let a; typeof a; ---> undefined
    3. let
        let panda = '熊猫'; ---> window.panda ----> undefined(块作用域)
        var panda = '熊猫'; ---> window.panda ----> "熊猫"(全局作用域)

- 数组(添加/删除)
    push/pop(队尾)  unshift/shift(队前)
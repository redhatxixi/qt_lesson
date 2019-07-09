- 伪元素
    1. before、after伪元素不需要标签，不用标签声明,是通过css声明的，在css中使用，className:before | :after
    2. 可像标签一样达到占位显示的效果,在body中通过.baymax就可以显示微元素content中的内容,在做分割线或其他简单效果时可直接用伪元素，不需要用标签，更加方便
    3. 伪元素天生是行内元素，不可以设置width和height，可以使用display:block改变为块级元素，或者使用position:absolute

- :before、after
    before在内容开始之前，after 在内容结束之后
    都需要设置content属性，来显示其内容

- css3 效果
    1. radial(环形) | linear(线形) -gradient(渐变):[渐变开始位置cirle at center,color stops.. #fff 50% ]

- 相对单位
    em 相对自身字体大小的相对单位(网页默认font-size为16px,所以1em此时为16px)
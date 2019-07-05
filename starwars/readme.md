## emmet 快捷输入
vscode 来自微软，内置emmet插件
- 使用css选择器来快速编程
    1. 类名选择器 .className
    2. >父子选择器
    3. +兄弟
    4. []属性选择器
.starwars-demo>img.star[src="./images/.svg"]*2+h2.byline>span*15

- 定位position
    css 布局的一种
    position：absolute；
    position：relateive；  body是最顶层的定位
    如果父级及以上元素存在定位，就相对最近的长辈元素定位，否则就是body

- animation: wars[class] 10s[time] infinite;
    infinite  让动作一直动

- transform
    变形属性  
        translate 移动|scale 缩放（倍数） |rotate 旋转
    三维
        perspective 视点与屏幕的距离
        transform-style:preserve-3d;
        transform:translateZ(-400em)

- npm  node 的工具包管理
    live-server 静态网页提供了web-server 热更新（自动更新页面）
        npm install -g live-server
        js 的命令行工具，运行在服务器端



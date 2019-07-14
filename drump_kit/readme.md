- vh     viewheight 等比例的高度
    解决多设备适配问题

- flex 弹性布局，弹重要布局方式
    可以在弹性空间中放置，特别适合移动端
    块级元素天生换行，flex可以改变这个

- rem   根据html的字体大小来等比例=10px
    1rem= html fond-size px

- 适配于所以设备的能力
    高度上使用 vh 相对单位，viewheight 等比例的高度，解决多设备适配问题
    在不同大小的设备中，rem 可以无差别的来设置大小，1rem = html fond-size 10px
    px是绝对单位，在PC端，由于设备分辨率不一样，所以在不同设备上，10px 大小不一样
    相对单位 em  rem    移动互联网时代/5G时代（可动态调整，多设备适配）
     rem 是相对DOM树的树根
     em 是相对自己的font-size
    使用 rem em vh vw 让页面多设备适配
       
- 使用移动互联网时代的布局方式
    弹性布局 display:fixe;  ，改变块级内部元素的原来的块级能力（只影响子元素，不影响孙元素）
     对齐方式 justify-content （主轴方向，默认水平，可变换）
     justify-content:center 在主轴方向居中
     align-items:center 纵轴方向
            
- 盒子模型
    盒子在页面上占大小  = 内容 + 内边距 + 外边距 + 边框 + position
        
- js
    html + css + js
    查找元素，设置属性
     document.geiElementById(id);
     document.querySelectorAll(css selector);
     document.querySelector(css selector);
       
    监听事件 
     keydown 事件名称
         
     window.addEventListener('keydown',function(){
     const clapAudio=document.getElementById('clap');  //通过找到相应元素
     clapAudio.play();})   // DOMElement.paly();通过获得的id对象用play方法执行
 
- CSS 高级选择器
    audio[data-key="65"] 我们一般会为标签添加一些data-数据类型，而不用id，虽然方便快速查找，但是不能过多使用，因为过多的id会导致性能过低，网页体验差。
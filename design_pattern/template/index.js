// 咖啡机,面向对象基础学习
var Coffee = function(){//用函数定义一个类

}
Coffee.prototype.boilWater = function(){//通过prototype给Coffee添加方法
    console.log('把水烧开');
}
Coffee.prototype.brewCoffeeGriends = function(){
    console.log('把水烧开');
}
Coffee.prototype.pourInCup = function(){
    console.log('把咖啡倒进杯子');
}
Coffee.prototype.addSugarAndMilk = function(){
    console.log('加奶和糖');
}
Coffee.prototype.cook = function(){
    this.boilWater();
    this.brewCoffeeGriends();
    this.pourInCup();
    this.addSugarAndMilk();
}
var coffee = new Coffee();
coffee.cook();
H 个小时 
k 速度   k*H恰好时
N堆香蕉，第i堆piles[i]根
尽量慢，一小时最多吃一堆

max = Max(arr)
max-- 直到在 H 小时内吃完

- koko
    1. while(1-> Math.max(...piles))
       每把香蕉花的小时数相加 h += Math.ceil(pile / low); // pile of piles
    2. 减少写尝试
        1 --> Max 二分查找



- js数据类型
    基础数据类型
    number sring boolean undefined null
    复杂数据类型 object
    [Array function Math Regexp Date]
    
    1. ... spread 展开数组(三个点)
        arr = [1,3,6,2,8]
        Math.max(arr) ----> NaN
        Math.max(1,3,6,2,8) ----> 8
        Math.max(...arr) ----> 8
    2. ... reset 收起数组(三个点)
        Math.max(1,3,6,2,8)
        Math.max(...arr) ---> arr = [1,3,6,2,8]
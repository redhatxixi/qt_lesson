var minEatingSpeed = function(piles, H) {
    let lo = 1,
        hi = Math.max(...piles); //max

    while(lo <= hi){
        if(canEatAllBananas(piles, H, lo)){
            return lo;
        }
        lo++;
    }
    return lo;
}
function canEatAllBananas(piles, H, low){
    let h = 0;
    for(let pile of piles){
        h += Math.ceil(pile / low);
    }
    return h <= H;
}
console.log(minEatingSpeed([3,4,5,11],6));
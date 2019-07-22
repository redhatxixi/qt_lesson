//Math.max()
const IMath = {}//namespace
/**
 * @prams:number 否则 NaN
 * @return:number 返回最大值
 * 
 */
IMath.max = function(...args){
    console.log(args, args.length); //arguments类数组，有length...[Arguments] { '0': 2, '1': 3, '2': 4, '3': 5 } 4
    for (var i = 0; i < args.length; i++){
        console.log(args[i]);
        if (typeof args[i] !== 'number'){
            return NaN;
        }
    }
}
IMath.max(2, 3, 4, 5);
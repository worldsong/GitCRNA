export default class ArrayUtils{

    /**
     * 比较两个数组内容是否完全相同
     * @param a
     * @param b
     * @returns {boolean}
     */
    static isAbsEqual(a,b){
        return JSON.stringify(a) == JSON.stringify(b);
    }

    /**
     * 克隆一个数组
     * @param a
     */
    static clone(a){
        return a.map((item)=> {
            var obj = {};
            //for in 遍历对象的属性
            for(var p in item){
                obj[p] = item[p];
            }
            return obj;
        });
    }
}


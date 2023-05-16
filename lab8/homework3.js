Array.prototype.sortAsc=function(){
    return this.sort((a,b)=>a-b);
};
arr = [4, 7, 3, 9]
console.log(arr.sortAsc())
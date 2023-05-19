const givenArray = [1, 2, 3, 4, 5, 6, 7, 8];
Array.prototype.even = function () {
    return this.filter((number) => number % 2 === 0);
}
console.log(givenArray.even());
Array.prototype.odd = function(){
    return this.filter((number) => number % 2 !== 0);
}
console.log(givenArray.odd());


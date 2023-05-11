Array.prototype.sortAsc = function () {
    for (let i = 0; i < this.length - 1; i++) {
        for (let j = i + 1; j < this.length; j++) {
            if (this[i] > this[j]) {
                const temp = this[i];
                this[i] = this[j];
                this[j] = temp;
            }
        }
    }
    return this
};
arr = [4, 7, 3, 9]
console.log(arr.sortAsc())
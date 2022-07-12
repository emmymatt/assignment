function SortArray(originalArray){
    this.originalArray = originalArray;
    this._sortArray = function(){
        return this.originalArray.sort(function(a,b){
            return a-b;
        });
    }
    this.getSortedArray = function(){
        return this._sortArray();
    }
}

function SortObjectArray(originalArray){
    SortArray.call(this, originalArray);
    this._sortArray = function(key){
        return this.originalArray.sort(function(a,b){
            return a[key]-b[key];
        });
    }
    this.getSortedArray = function(key){
        return this._sortArray(key);
    }
}

let a = new SortArray([1268, 12345, 121, 123456, 112, 234]);
console.log(a.getSortedArray())
let b = new SortObjectArray([{id:1268}, {id:12345}, {id:121}, {id:123456}, {id:112}, {id:234}]);
console.log(b.getSortedArray('id'))
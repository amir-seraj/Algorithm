var array = [2, 5, 4, 1, 6, 3];
console.log("First ".concat(array));
function InsertionSort(array) {
    for (var i = 1; i < array.length; i++) {
        for (var j = 0; j < array.length - 1; j++) {
            if (array[i] < array[j]) {
                var temp = void 0;
                temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}
console.log("After sorting ".concat(InsertionSort(array)));

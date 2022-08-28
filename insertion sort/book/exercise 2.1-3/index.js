var A = [31, 41, 59, 26, 41, 58];
var v = 99;
function LinearSearch(A, v) {
    for (var i = 0; i <= A.length; i++) {
        if (A[i] === v) {
            return "Value of index ".concat(i, " is equal to ").concat(v);
        }
        else {
            return "NIL";
        }
    }
}
console.log(LinearSearch(A, v));

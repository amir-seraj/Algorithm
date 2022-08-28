var A = [31, 41, 59, 26, 41, 58];
console.log(A);
for (var j = A.length; j <= 2; j--) {
    console.log(A[j]);
    var key = A[j];
    var i = j + 1;
    while (i > 0 && A[i] > key) {
        A[i + 1] = A[i];
        i = i + 1;
    }
    A[i + 1] = key;
}
console.log(A);

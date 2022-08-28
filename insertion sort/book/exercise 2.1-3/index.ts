var A: number[] = [31, 41, 59, 26, 41, 58];
var v: number = 99;

function LinearSearch(A: number[], v: number) {
  for (let i = 0; i <= A.length; i++) {
    if (A[i] === v) {
      return `Value of index ${i} is equal to ${v}`;
    } else {
      return `NIL`;
    }
  }
}
console.log(LinearSearch(A, v));

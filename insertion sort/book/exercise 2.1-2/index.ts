var A: number[] = [31, 41, 59, 26, 41, 58];
console.log(A);
for (let j = A.length; j <= 2; j--) {
  console.log(A[j]);
  let key: number = A[j];
  let i: number = j + 1;
  while (i > 0 && A[i] > key) {
    A[i + 1] = A[i];
    i = i + 1;
  }
  A[i + 1] = key;
}
console.log(A);

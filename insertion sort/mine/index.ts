let array: number[] = [2, 5, 4, 1, 6, 3];
console.log(`First ${array}`);

function InsertionSort(array: number[]): number[] {
  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[i] < array[j]) {
        let temp: number;
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}

console.log(`After sorting ${InsertionSort(array)}`);

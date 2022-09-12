//Memorization 
function FiboClassic(n:number, memo={}):number {
  if(n in memo) return memo[n];
  if(n <= 2) return 1;
  memo[n]= FiboClassic(n-1,memo)+FiboClassic(n-2,memo);
  return memo[n];
}

console.log(FiboClassic(10));


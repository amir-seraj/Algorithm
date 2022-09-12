//Memorization 
function FiboClassic(n, memo) {
    if (memo === void 0) { memo = {}; }
    if (n in memo)
        return memo[n];
    if (n <= 2)
        return 1;
    memo[n] = FiboClassic(n - 1, memo) + FiboClassic(n - 2, memo);
    return memo[n];
}
console.log(FiboClassic(1000));

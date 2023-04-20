function solve(arr) {
const sorted = arr.sort((a,b) => a.length - b.length || a.localeCompare(b));
console.log(sorted.join('\n'));
}

solve(["alpha", "beta", "gamma"]);
console.log('---------');
solve(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
console.log('---------');
solve(["test", "Deny", "omen", "Default"]);

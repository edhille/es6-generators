function* simpleGenerator() {
	yield 'yield value';
}

console.log('default behavior...');
let gen = simpleGenerator();
console.log(gen.next()); // { value: 'yield value', done: false }
console.log(gen.next()); // { value: undefined, done: true }

console.log("\ninvoking return() with a value...");
gen = simpleGenerator();
console.log(gen.next()); // { value: 'yield value', done: false }
console.log(gen.return('return this')); // { value: 'return this', done: true }
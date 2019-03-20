function* generatorThatReportsValue() {
	const firstYield = yield yieldValue('first');
	const secondYield = yield yieldValue('second');
	console.log(`first: ${firstYield}, second: ${secondYield}`);
}

function yieldValue(prefix) {
	return `${prefix} yield`;
}

console.log('when no values passed to next...')
let gen = generatorThatReportsValue();

console.log(gen.next()); // { value: 'first yeild', done: false }
console.log(gen.next()); // { value: 'second yeild', done: false }
// first: undefined, second: undefined
console.log(gen.next()); // { value: undefined, done: true }

console.log("\nwhen values passed to next...");

gen = generatorThatReportsValue();

console.log(gen.next('first')); // { value: 'first yeild', done: false }
console.log(gen.next('second')); // { value: 'second yeild', done: false }
// first: first, second: second
console.log(gen.next('third')); // { value: undefined, done: true }

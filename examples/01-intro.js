function* vanillaGenerator() {
	yield 'first yield';
	yield 'second yield';
	return 'return value';
}

const gen = vanillaGenerator();

console.log(gen.next()); // { value: 'first yield', done: false }
console.log(gen.next()); // { value: 'second yield', done: false }
console.log(gen.next()); // { value: 'return value', done: true }
console.log(gen.next()); // { value: undefined, done: true }
function* outer() {
	yield* inner();
	yield* inner();
	yield 'outer';
}
function* inner() {
	yield 'one';
	yield 'two';
}
for (let value of outer()) {
	console.log(value);
}

function* outerGenerator() {
	yield* innerGenerator();
	yield 'out here';
	yield* innerGenerator();
	yield 'back out here';
}

function* innerGenerator() {
	let counter = 1;
	yield `first inner: ${counter}`;
	++counter;
	yield `second inner: ${counter}`;
	++counter;
	return 'inner return';
}

// const gen = outerGenerator();
// let step = gen.next();
// while (!step.done) {
// 	console.log(step);
// 	step = gen.next();
// }

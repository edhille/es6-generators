function* outer() {
	yield* inner();
	const retVal = yield* inner();
	yield `outer: ${retVal}`;
}
function* inner() {
	yield 'one';
	yield 'two';
	return 'three';
}

console.log('running simple, nested generator that returns a value...');
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

console.log("\nrunning nested generator that has state...");
const gen = outerGenerator();
let step = gen.next();
while (!step.done) {
	console.log(step);
	step = gen.next();
}

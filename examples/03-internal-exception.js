function* generatorThatThrows() {
	yield 'yielding';
	throw new Error("I'm bad");
}

const generator = generatorThatThrows();

try {
	console.log(generator.next()); // { value: 'yielding', done: false }
	console.log(generator.next());
} catch (e) {
	console.log(e.message); // I'm bad
}
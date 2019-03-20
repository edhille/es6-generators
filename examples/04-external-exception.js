function* generatorThatDoesNotThrow() {
	yield 'yielding';
	yield "I'm good";
}

try {
	const generator = generatorThatDoesNotThrow();

	console.log(generator.next()); // { value: 'yielding', done: false }

	generator.throw(new Error("You're bad"));

	console.log(generator.next()); // never should get here...
} catch (e) {
	console.log(e.message); // You're bad
}
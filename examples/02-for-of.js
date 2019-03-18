function* generatorThatReturnsFinalValue() {
	yield 'yielding';
	return 'returning';
}

const generator = generatorThatReturnsFinalValue();

/**
 * Should we get this?
 * 	'yielding'
 * 	'returning'
 */
for (let step of generator) {
	console.log(step);
}

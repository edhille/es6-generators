function* generatorThatReturnsFinalValue() {
	yield 'yielding';
	yield 'still yielding';
	return 'returning';
}

const generator = generatorThatReturnsFinalValue();

/**
 * Should we get this?
 * 	'yielding'
 *  'still yielding'
 * 	'returning'
 */
for (let step of generator) {
	console.log(step);
}

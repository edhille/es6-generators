function* generatorThatReturnsFinalValue() {
	yield 'gen1 called';
	return 'gen1 done';
}

function *gen2Generator() {
	yield 'gen2 called';
}

function * gen3Generator(seed) {
	yield `gen3 called ${seed}`;
	return seed;
}

function inspectGeneratorWithDoWhile(generator, label) {
	console.log(`Starting generator ${label}`);
	let step = generator.next();
	do {
		console.log(step);
		step = generator.next();
	} while (!step.done);

	console.log(step);
}

inspectGeneratorWithDoWhile(generatorThatReturnsFinalValue(), 'returns final value');
inspectGeneratorWithDoWhile(gen2Generator(), 'just yields');
inspectGeneratorWithDoWhile(gen3Generator('seedy'), 'returns seed value');

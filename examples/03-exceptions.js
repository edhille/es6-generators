function* randomDie() {
	while (true) {
		if (Math.random() > 0.5) {
			throw new Error('BOOM');
		} else {
			yield 'ALL GOOD';
		}
	}
}

const randomDieGenerator = randomDie();

console.log('Random, internal exception example:');
try {
	for (let message of randomDieGenerator) {
		console.log(message);
	}
} catch (e) {
	console.error(e);
}
console.log('');

function* controlledDie() {
	while (true) {
		yield 'ALL GOOD';
	}
}

const controlledDieGenerator = controlledDie();

console.log('We control the exception:');
try {
	let step = controlledDieGenerator.next();

	while (!step.done) {
		if (Math.random() > 0.5) {
			controlledDieGenerator.throw(new Error('BOOM'));
		} else {
			console.log(step.value);
		}

		step = controlledDieGenerator.next();
	}
} catch (e) {
	console.error(e);
}

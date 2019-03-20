function* vanillaGenerator() {
	yield 'first yield';
	yield 'second yield';
	return 'return value';
}

function* seededGenerator(seed) {
	yield `gen3 called once w/ ${seed}`;
	yield 'gen3 called twice';
	return seed;
}

function* captureYieldReturn() {
	const a = yield gimmeLetter();
	const b = yield gimmeLetter();
	const c = yield gimmeLetter();
	return `a: ${a}, b: ${b}, c: ${c}`;
}

function gimmeLetter() {
	const letters = 'ABCDEFG';
	return letters[Math.floor(Math.random() * (letters.length - 1))];
}

function inspectGeneratorWithDoWhile(generator, label) {
	console.log(`Starting generator: ${label}`);
	let step = generator.next();
	let counter = 1;
	do {
		console.log(step);
		step = counter % 2 ? generator.next(counter) : generator.next();
		++counter;
	} while (!step.done);

	console.log(step);
	console.log(generator.next());
	console.log("\n");
}

inspectGeneratorWithDoWhile(vanillaGenerator(), 'your garden-variety generator');
inspectGeneratorWithDoWhile(seededGenerator('seedy'), 'seed a generator with a value');
inspectGeneratorWithDoWhile(captureYieldReturn(), 'capture yielded returns');

const THRESHOLD = 0.8;

function* randomDie() {
	let counter = 1;
	while (true) {
		if (Math.random() > THRESHOLD) {
			throw new Error('BOOM');
		} else {
			yield `ALL GOOD ${counter}`;
			++counter;
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
	let counter = 1;
	while (true) {
		yield `ALL GOOD ${counter}`;
		++counter;
	}
}

const controlledDieGenerator = controlledDie();

console.log('We control the exception:');
try {
	let step = controlledDieGenerator.next();

	while (!step.done) {
		if (Math.random() > THRESHOLD) {
			controlledDieGenerator.throw(new Error('BOOM'));
		} else {
			console.log(step.value);
		}

		step = controlledDieGenerator.next();
	}
} catch (e) {
	console.error(e);
}

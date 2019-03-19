function* nextGen() {
	const value = yield 'yield value';
	return value;
}

const gen1 = nextGen();
let step1 = gen1.next();
console.log(step1);
step1 = gen1.return();
console.log(step1);

const gen2 = nextGen();
let step2 = gen2.next();
console.log(step2);
step2 = gen2.return('return value');
console.log(step2);
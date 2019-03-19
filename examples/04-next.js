function* nextGen() {
	const value = yield 'yield value';
	return value;
}

const gen1 = nextGen();
let step1 = gen1.next();
console.log(step1);
step1 = gen1.next();
console.log(step1);

const gen2 = nextGen();
let step2 = gen2.next('new value');
console.log(step2);
step2 = gen2.next('another value');
console.log(step2);

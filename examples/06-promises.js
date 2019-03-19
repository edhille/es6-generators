function* promiseGen() {
	yield Promise.resolve('promise resolved value');
	yield Promise.resolve('another promise value');
}

const gen = promiseGen();
let step = gen.next();
step.value.then((val => {
	console.log(val);
}));
step = gen.next();
step.value.then((val => {
	console.log(val);
}));
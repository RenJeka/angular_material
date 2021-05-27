export const person = {
	name: 'Yevhenii',
	age: 28,
	city: 'Kiev',
	isHappy: true
}


export function sumWithoutRest(a: number, b: number): number {
	return a + b;
}

export function sumWithRest(a, b, ...numbers) {
	console.log(numbers);
	return a + b + numbers.reduce((a, i) => {
	  return a + i
	}, 0)
}

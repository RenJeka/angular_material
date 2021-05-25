/**
 * 
 * @description
 * new feature TypeScript 4.0
 * Класс Square показывает новую  возможность "TypeScript 4.0" о том, что компилятор понимает, какого типа поля у класса, несмотря на то, чтро  они определены перед конструктором
 * @see https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-0.html
 */

class Square {
	// Previously both of these were any
	area;
	 
//   (property) Square.area: number
	sideLength;
		
//   (property) Square.sideLength: number
	constructor(sideLength: number) {
	  this.sideLength = sideLength;
	  this.area = sideLength ** 2;
	}
  }

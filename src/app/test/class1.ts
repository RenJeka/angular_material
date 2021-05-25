/**
 * @description
 * new feature TypeScript 4.0
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
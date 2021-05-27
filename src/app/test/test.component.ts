import { Component, OnInit } from '@angular/core';
import { calcValues } from './testing/destructurisation';
import './testing/restOperator';
import { sumWithRest, sumWithoutRest, person } from './testing/restOperator';
import { citiesEurope, citiesUkraine, citiesUkrainePopulation, citiesEuropePopulation, myNumbers } from './testing/spreadOperator';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styles: [
  ]
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // this.destructurisationArraysExample();
    // this.destructurisationObjectsExample();
    // this.spreadOperatorArraysExample();
    this.spreadOperatorObjectsExample();
    this.restOperatorExample();
  }


  /**
   * @see https://youtu.be/wWYokY0Pt2M
   */
  destructurisationArraysExample() {
    const [sum, sub = 'Вычитание не найдено!' , mul, ...other] = calcValues(42, 10);

    // const sum = result[0];
    // const sub = result[1];

    // console.log('sum ', sum);
    // console.log('sub ', sub);
    
    // const [sum, sub] = result;

    console.log('sum ', sum);
    console.log('sub ', sub);
    console.log('mul ', mul);
    console.log('other ', other);
  }

  destructurisationObjectsExample() {
    const person = {
      name: 'Yevhenii',
      age: 27,
      address: {
        country: 'Ukraine',
        city: 'Kiev'
      }
    } 

    // const firstName = person.name;
    const {
      name: firstName = 'Name is undefined!', 
      age, 
      size = '100',
      address: {city: HomeTown, country}
    } = person;
    console.log(firstName, age, size, HomeTown, country);

    //// Использование spread-оператора:
    // const {name, ...info} = person;
    // console.log(name);
    // console.log(info);

  }

  spreadOperatorArraysExample(){
    // const allCities = [...citiesUkraine];
    // const allCities = [...citiesUkraine, ...citiesEurope];
    const allCities = [...citiesUkraine, 'Stavropolsk',...citiesEurope];
    console.log(allCities);
  }

  
  spreadOperatorObjectsExample(){
    
    // console.log({...citiesUkrainePopulation, ...citiesEuropePopulation});
    // console.log({...citiesEuropePopulation, ...citiesUkrainePopulation});

    // console.log(Math.max(myNumbers));
    console.log(Math.max(...myNumbers));
  }

  restOperatorExample() {
    // Spread !!!
    // console.log(sumWithoutRest(...myNumbers));

    // console.log(sumWithRest(...myNumbers));

    const [a, b, ...other] = myNumbers;
    console.log(a, b, other);

    const {name, age, ...adress} = person;
    console.log(name, age, adress);
  }

}

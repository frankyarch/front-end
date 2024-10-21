import { yearUntilRetirement } from './retirement.js';
import { addNumber } from './summation.js';
import { calculateArea } from './area.js';
import { makeAjaxRequest } from './ajax.js';

yearUntilRetirement({ year: 1987, firstName: 'John' });

const sum = addNumber(1, 2, 3, 4, 5, 6, 7);
console.log(`Sum of numbers: ${sum}`);

const circleArea = calculateArea({ radius: 21, power: 2 });
const squareArea = calculateArea({ radius: 7, power: 2 });
console.log(`Circle area: ${circleArea}, Square area: ${squareArea}`);

makeAjaxRequest('https://www.budi.com', 'POST'); // Replace with desired URL
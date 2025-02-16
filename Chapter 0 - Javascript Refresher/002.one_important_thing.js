let i=2;
let j=i;
console.log(i);
console.log(j);

j=j+1;
console.log(i);
console.log(j);

/*Note: 
For above even though you changed j, i wont change.
Things like number,boolean,string won't change even though you copy them to other variables.
*/

const initialColors=["GREEN","BLUE","RED"];
const currentColors=initialColors;
console.log(initialColors);
console.log(currentColors);

currentColors.push("YELLOW");
console.log(initialColors);
console.log(currentColors);
/*Note: 
 For above if you change currentColors, initialColors will also change. Objects like currentColors, initialColors , it keeps references
 and so both currentColors, initialColors will change.

 In React we spread it, that is we copy all the values to a new variable instead of referencing like above
*/
console.log('----------------------------------------------------------------------')
const initialColorsNew=["GREEN","BLUE","RED"];
const currentColorsNew=[...initialColorsNew]; //... is called spread operator. We are not messing initialColorsNew, instead we are copying all values to currentColorsNew.
console.log(initialColorsNew);
console.log(currentColorsNew);

currentColorsNew.push("YELLOW");
console.log(initialColorsNew);
console.log(currentColorsNew);


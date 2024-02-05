// Constants for the lengths of the three sides of a triangle
//const side1 = 5;
//const side2 = 6;
//const side3 = 7;

function areaOfTriangle(side1, side2, side3)
         {
            const perimeter = (side1 + side2 + side3) / 2;
            const area = Math.sqrt(perimeter * ((perimeter - side1) * (perimeter - side2) * (perimeter - side3)));
            return (area.toFixed(2));
            
         }

console.log(areaOfTriangle(5, 6, 7))
console.log(areaOfTriangle(3, 4, 5))
console.log(areaOfTriangle(4, 5, 6))
console.log(areaOfTriangle(6, 7, 8))









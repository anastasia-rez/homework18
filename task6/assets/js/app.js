let leg1 = +prompt('Первый катет прямоугольного треугольника (в см)');
console.log(`Катет1: ${leg1} см`);

let leg2 = +prompt('Второй катет прямоугольного треугольника (в см)');
console.log(`Катет2: ${leg2} см`);

let hypotenuse = Math.sqrt((leg1 ** 2) + (leg2 ** 2));
alert(`Гипотенуза: ${hypotenuse} см`);

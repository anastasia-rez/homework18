let radiusCircle = +prompt('Радиус окружности (в см)');
console.log(`Радиус окружности ${radiusCircle} см`);

let C = 2 * Math.PI * radiusCircle;
alert(`Длина окружности: ${C} см`);

let S = Math.PI * (radiusCircle ** 2);
alert(`Площадь круга: ${S} см²`);
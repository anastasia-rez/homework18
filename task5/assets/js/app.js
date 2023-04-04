let population = +prompt('Количество жителей ');
console.log(`Количество жителей: ${population} человек`);

let area = +prompt('Площадь территории (в км²)');
console.log(`Площадь территории: ${area} км²`);

let populationDensity = population / area;
alert(`Плотность населения: ${populationDensity} чел/км²`);
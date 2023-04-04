let cubeEdgeLength = +prompt('Длина ребра куба (в см)');
console.log(`Длина ребра куба ${cubeEdgeLength} см`);

let volume = cubeEdgeLength ** 3;
alert(`Объем куба: ${volume} см³`);

let S = 4 * (cubeEdgeLength ** 2);
alert(`Площадь боковой поверхности куба: ${S} см²`);

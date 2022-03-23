/* eslint-disable no-empty */
/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable sonarjs/no-unused-collection */
// Desafio 10
// eslint-disable-next-line max-lines-per-function
function techList(array, nome) {
  if (array.length === 0) return 'Vazio!';
  let arrayList = [];
  array.sort();
  for (let value of array) {
    arrayList.push({ tech: value, name: nome });
  }

  return arrayList;
}

// Desafio 11
// eslint-disable-next-line complexity
function generatePhoneNumber(numbers) {
  let counter = 0;
  if (numbers.length !== 11) return 'Array com tamanho incorreto.';
  // eslint-disable-next-line sonarjs/no-one-iteration-loop
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] < 0 || numbers[i] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    for (let i2 = 0; i2 < numbers.length; i2 += 1) {
      if (numbers[i] === numbers[i2]) counter += 1;
      if (counter >= 3) return 'não é possível gerar um número de telefone com esses valores';
    }
    counter = 0;
  }
  let ddd = `${numbers[0]}${numbers[1]}`;
  let firstNumbers = `${numbers[2]}${numbers[3]}${numbers[4]}${numbers[5]}${numbers[6]}`;
  let finalNumbers = `${numbers[7]}${numbers[8]}${numbers[9]}${numbers[10]}`;
  return `(${ddd}) ${firstNumbers}-${finalNumbers}`;
}

// Desafio 12
// eslint-disable-next-line complexity
function triangleCheck(lineA, lineB, lineC) {
  if (((lineA + lineB > lineC) && (Math.abs(lineA - lineB) < lineC))
  && ((lineA + lineC > lineB) && (Math.abs(lineA - lineC) < lineB))
  && ((lineC + lineB > lineA) && (Math.abs(lineC - lineB) < lineA))) {
    return true;
  } return false;
}

// Desafio 13
function hydrate(drinks) {
  let dig = /\d+/g;
  let result = drinks.match(dig);
  let drink = 0;
  for (let i = 0; i < result.length; i += 1) {
    drink += Number(result[i]);
  }
  if (drink === 1) return `${drink} copo de água`;
  if (drink > 1) return `${drink} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};

/* eslint-disable no-unused-vars */
/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable sonarjs/no-unused-collection */
// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 === true && bool2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  const stringSplit = string.split(' ');
  return stringSplit;
}

// Desafio 4
function concatName(stringsArray) {
  return `${stringsArray[stringsArray.length - 1]}, ${stringsArray[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
// eslint-disable-next-line sonarjs/cognitive-complexity
function highestCount(array) {
  let higherNumber = array[0];
  let repeat = 0;
  for (let i = 1; i < array.length; i += 1) {
    if (higherNumber < array[i]) {
      higherNumber = array[i];
    }
  }
  for (let i2 = 0; i2 < array.length; i2 += 1) {
    if (higherNumber === array[i2]) {
      repeat += 1;
    }
  }
  return repeat;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1;
  let distanceCat2;

  distanceCat1 = cat1 - mouse;
  if (mouse > cat1) distanceCat1 = mouse - cat1;

  distanceCat2 = cat2 - mouse;
  if (mouse > cat2) distanceCat2 = mouse - cat2;

  if (distanceCat1 > distanceCat2) return 'cat2';
  if (distanceCat2 > distanceCat1) return 'cat1';
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
// eslint-disable-next-line complexity
function fizzBuzz(array) {
  let arrayString = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 3 === 0 && array[i] % 5 === 0) arrayString.push('fizzBuzz');
    if (array[i] % 3 !== 0 && array[i] % 5 !== 0) arrayString.push('bug!');
    if (array[i] % 3 === 0 && array[i] % 5 !== 0) arrayString.push('fizz');
    if (array[i] % 5 === 0 && array[i] % 3 !== 0) arrayString.push('buzz');
  }

  return arrayString;
}

// Desafio 9
// eslint-disable-next-line complexity
function encode(string) {
  let stringSplit = string.split('');
  for (let i = 0; i < stringSplit.length; i += 1) {
    if (stringSplit[i] === 'a') stringSplit[i] = '1';
    if (stringSplit[i] === 'e') stringSplit[i] = '2';
    if (stringSplit[i] === 'i') stringSplit[i] = '3';
    if (stringSplit[i] === 'o') stringSplit[i] = '4';
    if (stringSplit[i] === 'u') stringSplit[i] = '5';
  }
  let stringJoin = stringSplit.join('');
  return stringJoin;
}

// eslint-disable-next-line complexity
function decode(string) {
  let stringSplit2 = string.split('');
  for (let i = 0; i < stringSplit2.length; i += 1) {
    if (stringSplit2[i] === '1') stringSplit2[i] = 'a';
    if (stringSplit2[i] === '2') stringSplit2[i] = 'e';
    if (stringSplit2[i] === '3') stringSplit2[i] = 'i';
    if (stringSplit2[i] === '4') stringSplit2[i] = 'o';
    if (stringSplit2[i] === '5') stringSplit2[i] = 'u';
  }
  let stringJoin2 = stringSplit2.join('');
  return stringJoin2;
}

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

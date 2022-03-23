### Projeto - Funções de Lógica



# Tecnologias utilizadas

- JavaScript


# Descrição

- Escrever códigos em JavaScript que usam variáveis e tipos primitivos;
- Criar códigos que usam estruturas condicionais e laços de repetição, estruturar problemáticas;
- Manipular objetos e arrays;
- Utilizar a lógica de programação na resolução de problemas;




### Funções criadas


### 1 - Função compareTrue

A função deve receber dois parâmetros, onde:

- Retornar `true` se ambos os valores forem verdadeiros;
- Retornar `false` se um ou ambos os parâmetros forem falsos.


### 2 - Função calcArea

A função deve calcular a área de um triângulo.


### 3 - Função splitSentence

A função receberá uma string e retornará uma array de strings separadas por cada espaço na string original.


### 4 - Função concatName

A função recebe uma array de strings e retorna uma string com o formato `'ÚLTIMO ITEM, PRIMEIRO ITEM'`, independente do tamanho da array.


### 5 - Função footballPoints

A função recebe o número de vitórias e empates e retorne a quantidade de pontos que o time marcou.

Considere que cada vitória vale 3 pontos e cada empate vale 1 ponto.


### 6 - Função highestCount

A função recebe uma array de números e retorna a quantidade de vezes que o maior deles se repete.


### 7 - Função catAndMouse

A função recebe a posição de `mouse`, `cat1` e `cat2`, **nessa ordem** e calcule as distâncias entre o rato e cada um dos gatos, em seguida, retorne qual dos felinos irá alcançar o rato primeiro (aquele que estiver mais perto do rato).

Caso os gatos estejam na mesma distância do rato, a função deverá retornar a string `"os gatos trombam e o rato foge"`.


### 8 - Função fizzBuzz

A função recebe um array de números e retorne uma array da seguinte forma:

- Para cada número do Array que seja divisível apenas por 3, apresente uma string `"fizz"`;
- Para cada número do Array que seja divisível apenas por 5, apresente uma string `"buzz"`;
- Caso o número seja divisível por 3 e 5, retorne a string `"fizzBuzz"`;
- Caso o número não possa ser dividido por 3 nem por 5, retorne a string `"bug!"`;


### 9 - Funções encode e decode

A função `encode` recebe uma string como parâmetro, e troca todas as vogais minúsculas por números, de acordo com o formato a seguir:

a -> 1 
e -> 2 
i -> 3 
o -> 4 
u -> 5

A função `decode` e faz o contrário - ou seja, recebe uma string contendo números no lugar de letras minúsculas e retornará uma string com vogais minúsculas no lugar dos números.


### 10 - Função techList

A função recebe um array de nomes de tecnologias que você quer aprender. Essa função deve receber também um segundo parâmetro com um nome. Para cada tecnologia no array, crie um objeto com a seguinte estrutura:

{
  tech: "NomeTech",
  name: name
}

Estes objetos devem são inseridos em uma nova lista em ordem crescente a partir do campo `tech` no objeto. A saída da função é uma lista de objetos ordenada pelo campo `tech` dos objetos com o formato acima.


### 11 - Função generatePhoneNumber

A função recebe uma array com 11 números e retorna um número de telefone, respeitando parênteses, traços e espaços.

Exemplo: caso o parâmetro da função seja [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1], `generatePhoneNumber` deverá retornar `(12) 34567-8901`.

- Se a função receber um array com tamanho diferente de 11, ela retorna `"Array com tamanho incorreto."`.

- Caso algum dos números da array seja menor que 0, maior que 9 ou se repita 3 vezes ou mais, a função retorna a string `"não é possível gerar um número de telefone com esses valores"`.


### 12 - Função triangleCheck

A função receberá 3 valores, e apartir deles ela fará a verificação (valor booleano) se é possível formar um triângulo com os valores apresentados de cada linha.

Sendo que:

- Para que seja possível formar um triângulo, é necessário que a medida de qualquer um dos lados seja menor que a soma das medidas dos outros dois e maior que o valor absoluto da diferença entre essas medidas.


### 13 - Função hydrate

A função recebe uma string, e retorna a sugestão de quantos copos de água você deve beber. Sendo que a cada bebida deve-se beber um copo de água para que não se tenha ressaca. Essa String pode conter uma ou mais bebidas.
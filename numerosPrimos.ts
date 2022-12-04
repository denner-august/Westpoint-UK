console.clear();

// Objetivos: 1. Encontra todos os números primos entre 1 e 1.000. 2. Soma todos os números primos encontrados entre 1 e 1.000. 3. A função `main` deve retornar a soma de todos os números primos. Desenvolva a solução inteiramente neste editor.

function valueMax(num) {
  let total;

  num.reduce((preve, next) => {
    let acumulador = preve + next;
    preve = next;

    return (total = acumulador);
  }, 0);

  return total;
}

let arr: number[] = [];

const main = (num: number) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return;
    }

    arr.push(num);

    return valueMax(arr);
  }
};

for (let index = 2; index < 1000; index++) {
  main(index);
}

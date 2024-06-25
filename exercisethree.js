console.log("3. Ejercicio: Kondo wa kondo, ima wa ima" + " <-- El entonces es entonces, el ahora es ahora");

/*
Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.
*/
// método reduce()

const arrayUno = [1, 2, 3, 4];

const initialValue = 0;
const sumWithInitial = arrayUno.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
);

const initialValueDos = 1;
const productWithInitial = arrayUno.reduce(
    (accumulator, currentValue) => accumulator*currentValue, initialValueDos,
);


console.log(`La suma es ${sumWithInitial}.`);
console.log(`El producto es ${productWithInitial}.`);



// Imprima os numeros de 1 a 100, substituindo os multiplos de 3 por FIZZ, 
// os multiplos de 5 por BUZZ e os multiplos de ambos por FIZZBUZZ

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    alert("FIZZBUZZ");
  } else if (i % 3 === 0) {
    alert("FIZZ");
  } else if (i % 5 === 0) {
    alert("BUZZ");
  } else {
    alert(i);
  }
}
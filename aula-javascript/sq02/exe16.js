// Conversor de Temperatura: Crie um conversor de temperatura que peça ao usuário para inserir 
// uma temperatura em Celsius e, em seguida, converta-a para Fahrenheit.



let celsius = prompt("Digite a temperatura em celsius: ")
let fahrenheit = (celsius * 9/5) + 32;
alert(celsius + "°C é igual a " + fahrenheit.toFixed(2) + "°F");

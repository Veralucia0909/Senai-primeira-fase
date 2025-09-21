// 5.4 - Mano Juca palestreiro;
// Faça um algoritmo que leia o nº da palestra que ele quer participar e
// mostre o local e o horário que ela acontecera.
// Palestras disponíveis:
// 1 - Animações com Scratch, laboratorio 305, 19h;
// 2 - Scratch para gamers, laboratorio 512, 20h;
// - JavaScript para leigos, laboratorio 101, 19h;
// 4 - Tópicos avançados de JavaScript, laboratorio 305, 20h;
// 5- Vida e carreira, auditorio, 21h.

let palestra = parseInt (prompt("Digite o numero da palestra 1 a 5:"));
if (palestra === 1) {
    alert("Animações com Scratch, lab 305, 19h");
} else if (palestra === 2) {
    alert("Scratch para gamers, lab 512, 20h");
} else if (palestra === 3) {  
    alert("JavaScript para leigos, lab 101, 19h");
 } else if (palestra === 4) {
    alert("Tópicos avançados de JavaScript, lab 305, 20h");
} else if (palestra === 5) {
    alert("Vida e carreira, auditorio, 21h");
}
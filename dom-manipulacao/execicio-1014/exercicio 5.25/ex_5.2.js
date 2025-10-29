function verificar() {
  const produto = parseFloat(document.getElementById("produto").value) || 0;
  const m1 = parseInt(document.getElementById("m1").value) || 0; 
  const m50 = parseInt(document.getElementById("m50").value) || 0; 
  const m25 = parseInt(document.getElementById("m25").value) || 0;
  const m10 = parseInt(document.getElementById("m10").value) || 0;
  const m5 = parseInt(document.getElementById("m5").value) || 0;

  const total = (m1 * 1.0) + (m50 * 0.5) + (m25 * 0.25) + (m10 * 0.1) + (m5 * 0.05);
  const resultado = document.getElementById('resultado');

  if (total >= produto) {
    resultado.textContent = `Você tem R$ ${total.toFixed(2)}  dá para comprar!`;
    
  } else {
    resultado.textContent = `😢 Você tem R$ ${total.toFixed(2)} falta R$ ${(produto - total).toFixed(2)}.`;
  
  }
}

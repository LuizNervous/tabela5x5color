const tabela = document.getElementById('minha-tabela');
const tamanho = 5;
const telamain =document.querySelector('main');

for (let r = 0; r < tamanho; r++) {
  for (let c = 0; c < tamanho; c++) {
    const degradePBaixo = (c * tamanho) + r;

    const valorPasso = 255 / (tamanho * tamanho - 1);
    const valorDecimal = Math.round(255 - (degradePBaixo * valorPasso));
    const valorHex = valorDecimal.toString(16).padStart(2, '0')

    const cor = `#${valorHex}${valorHex}${valorHex}`

    const cadacor = document.createElement("div");
    cadacor.style.backgroundColor = cor;
    cadacor.dataset.valorDecimal = valorDecimal;
    if (valorDecimal < 128) {
      cadacor.style.color = "rgba(255, 255, 255, 0)";
    }
    else {
      cadacor.style.color = "rgba(0,0,0,0)";
    }
    cadacor.dataset.colorCode = cor;

    cadacor.addEventListener("click", function () {

      telamain.style.backgroundColor = this.dataset.colorCode;
      telamain.style.color = (valorDecimal < 128) ? "#FFFFFF" : "#000000"
      this.textContent = this.dataset.colorCode;
      this.style.color = (valorDecimal < 128) ? "#FFFFFF" : "#000000"

    });
    tabela.appendChild(cadacor);
  }
};
const botao = document.querySelector("#bobo");
botao.addEventListener("click", function() {
  const todasAsCores =document.querySelectorAll(".grid>div");

  todasAsCores.forEach(function(cadacor){
    cadacor.textContent="";
    
  })
  telamain.style.backgroundColor="";
  telamain.style.color="";
});

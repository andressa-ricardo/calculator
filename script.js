const screen = document.querySelector(".screen");
const deleteButton = document.querySelector(".del");
const equalButton = document.querySelector(".resultado");
const eraseButton = document.querySelector(".ac");

//fazendo um loop pelos botões, pegando o valor deles e adicionando no p
[...document.querySelectorAll(".btn")].forEach((element) => {
  element.addEventListener("click", () => {
    const value = element.textContent;
    screen.innerText += value.toLowerCase() === "x" ? "*" : value;
  });
});

//removendo apenas o último número adicionado no p
deleteButton.addEventListener("click", () => {
  screen.innerText = screen.innerText.slice(0, screen.innerText.length - 1);
});

//removendo todos os números do p
eraseButton.addEventListener("click", () => {
  screen.innerText = "";
});

//adicionando o resultado a tela após o = ser clicado e removendo o undefined caso o = seja clicado 
//sem ter nenhum número passado 
equalButton.addEventListener("click", () => {
  let expression = screen.innerText.trim();
  if (expression === '') {
    screen.innerText = '';
    return;
  }
  let result = eval(expression);
  screen.innerText = result;
});
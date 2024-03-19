/*
let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");

let subtotalInfo = {
  quantidade: 1,
  valor: 11.66,
};

quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";
valorSubtotal.innerText = subtotalInfo.valor;

//adicionar
let btnAdicionar = document.querySelector('#btn-adicionar-produto-01');
let quantidadeProduto = document.querySelector('#quantidade-produto-01');

//subtrair
let btnSubtrair01 = document.querySelector('#btn-subtrair-produto-01');


//função adicionar
function adicionar01 () {
  quantidadeProduto.value = Number (quantidadeProduto.value)+1
}
//função subtrair
function subtrair01() {
  if (valorAtual > 1) {
    qtdProduto.value = valorAtual - 1;
    subtotalInfo.quantidade = valorAtual - 1;
    subtotalInfo.valor = subtotalInfo.quantidade * 11.66;
    atualizarTotal();
  } else {
    alert('A quantidade não pode ser negativa.');
  }
}

//função subTotal
function subTotal (){
  subtotalInfo.quantidade= subtotalInfo.quantidade+
  }
 
//evento
btnAdicionar.addEventListener('click',adicionar01)
btnSubtrair01.addEventListener('click',subtrair01)
subTotal()

function adicionarUm (){
  quantidadeProduto01.value = Number(quantidadeProduto01.value)+1

}
*/

let inputEmail = document.getElementById('email');
let inputIdade = document.getElementById('idade');
let formulario = document.querySelector('form');

inputEmail.addEventListener("focus", ()=> {
inputEmail.style.backgroundColor ="red"
})

inputEmail.addEventListener("blur", (e)=> {
  e.target.style.backgroundColor =""
  })
/*
formulario.addEventListener("submit", ()=> {
alert("Eviado com sucesso!")
})  */

  //isso aqui muda o background quando a pessoa é menor ou maior de idade
inputIdade.addEventListener("change", ()=>{
  if(inputIdade.value >= 18){
    inputIdade.style.backgroundColor = "green"
  } else {
    inputIdade.style.backgroundColor = "red"
    alert("Menor de idade!");
  }
})

let modoDark = document.getElementsByClassName('.modo-dark')
let dark = document.querySelector('dark')

function mudarBackground (){
  dark.style.backgroundColor = 'white';
}
modoDark.addEventListener("focus", mudarBackground)

inputIdade.classList.add('item-carrinho ')  
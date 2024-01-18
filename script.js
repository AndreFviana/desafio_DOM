//Título
let elementoTitulo = document.getElementById('titulo')
elementoTitulo.innerText = 'Document Object Model';
//Link
let elementoA = document.querySelector('a')
elementoA.textContent = 'Proz Educação';
//Adicionando elementos à lista não ordenada
let elementosNaoOrdenados = document.querySelector('ul')
let novoLi = document.createElement('li')
novoLi.textContent = 'Altera o html com Java Script'
elementosNaoOrdenados.appendChild(novoLi)
let novoLi2 = document.createElement('li')
novoLi2.textContent = 'Manipulação do DOM com o Java Script'
elementosNaoOrdenados.appendChild(novoLi2)
let novoLi3 = document.createElement('li')
novoLi3.textContent = 'Interação'
elementosNaoOrdenados.appendChild(novoLi3)
console.log(novoLi3)
//Adicionando elementos à lista ordenada
let elementosOrdenados = document.getElementById('lista-ordenada')
elementosOrdenados.innerHTML = `
<li><a href="https://webflow.com/glossary/document-object-model-dom?utm_source=google&utm_medium=search&utm_campaign=SS-GoogleSearch-Nonbrand-DynamicSearchAds-Global&utm_term=dsa-1480385100845___617245336966__&gad_source=1&gclid=CjwKCAiAqY6tBhAtEiwAHeRopRxBKdCllFKJ62GLQfiego8QL0bAwWszOQ8GHf68eD45aKbqLXeGQBoCyUUQAvD_BwE">O que é DOM?</a></li>
<li><a href="https://www.hostinger.com.br/tutoriais/dom-o-que-e">Dom é o coração do desenvolvimento web?</a></li>
<li><a href="https://www.devmedia.com.br/trabalhando-com-dom-em-javascript/29039">DOM é a abreviação de Domic Toreto?</a></li>`
//criando elemento e usando appendchild para inserir esse novo elemento no site
let notOrdenated = document.querySelector('ul')
notOrdenatedChild = document.createElement('li')
notOrdenatedChild.innerText ='Mais intereção'
notOrdenated.appendChild(notOrdenatedChild)
console.log(notOrdenatedChild)
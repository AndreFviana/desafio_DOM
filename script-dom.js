//adicionando um título
let elementoPai = document.querySelector('body')
elementoFilho = document.createElement('h1')
elementoFilho.innerHTML = `
<h1 id="titulo">Venda de site</h1>
`
elementoPai.appendChild(elementoFilho);

//adicionando um subtitulo
elementoFilhoH2 = document.createElement('h2')
elementoFilhoH2.innerHTML = `
<h2 id="titulo">Site Hoogle</h2>
`
elementoPai.appendChild(elementoFilhoH2);
//adicionando informações sobre o produto
elementoFilhoP = document.createElement('p')
elementoFilhoP.innerHTML = 
`<p>O site de busca Hoogle tem um volume de acesso diário de mais de 8 bilhões!
</p>
</div>
`
elementoPai.appendChild(elementoFilhoP);
//adicionando preço
elementoFilhoH3 = document.createElement('h3')
elementoFilhoH3.innerHTML = `
<h3>Valor: </h3>
`
elementoPai.appendChild(elementoFilhoH3);
//adicionando 'VALOR'
elementoFilhoH4 = document.createElement('h4')
elementoFilhoH4.innerHTML = `
<h4>R$577 Bilhões </h4>
`
elementoPai.appendChild(elementoFilhoH4);

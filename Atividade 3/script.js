let inCotacao = document.getElementById("cotacao");
let btnCotacao = document.getElementById("btnCotacao");
let acrescimo1 = document.getElementById("acre1");
let acrescimo2 = document.getElementById("acre2");
let acrescimo5 = document.getElementById("acre5");
let acrescimo10 = document.getElementById("acre10");

btnCotacao.addEventListener("click", function () {
    let valor = parseFloat(inCotacao.value);

    acrescimo1.textContent = "Acréscimo de 1%: " + (valor * 1.01).toFixed(2);
    acrescimo2.textContent = "Acréscimo de 2%: " + (valor * 1.02).toFixed(2);
    acrescimo5.textContent = "Acréscimo de 5%: " + (valor * 1.05).toFixed(2);
    acrescimo10.textContent = "Acréscimo de 10%: " + (valor * 1.1).toFixed(2);
});

//------------------------------------------------------//

let inPessoas = document.getElementById("omelete");
let btnOmelete = document.getElementById("btnOmelete");
let qtdOvos = document.getElementById("ovos");
let qtdQueijo = document.getElementById("queijo");

btnOmelete.addEventListener("click", function () {
    let valor = parseFloat(inPessoas.value);

    qtdOvos.textContent = "Será(ão) necessário(s) " + (valor * 2) + " ovo(s)";
    qtdQueijo.textContent = "Será necessário " + (valor * 50) + "g de queijo";
});

//------------------------------------------------------//

let inValor1 = document.getElementById("valor1");
let inValor2 = document.getElementById("valor2");
let btnOperacoes = document.getElementById("btnOperacoes");
let txtSoma = document.getElementById("soma");
let txtSubtracao = document.getElementById("subtracao");
let txtMultiplicacao = document.getElementById("multiplicacao");
let txtDivisao = document.getElementById("divisao");

btnOperacoes.addEventListener("click", function () {
    let numero1 = parseFloat(inValor1.value);
    let numero2 = parseFloat(inValor2.value);

    txtSoma.textContent = numero1 + " + " + numero2 + " = " + (numero1 + numero2);
    txtSubtracao.textContent = numero1 + " - " + numero2 + " = " + (numero1 - numero2);
    txtMultiplicacao.textContent = numero1 + " x " + numero2 + " = " + (numero1 * numero2).toFixed(2);
    txtDivisao.textContent = numero1 + " / " + numero2 + " = " + (numero1 / numero2).toFixed(2);
});

//------------------------------------------------------//

let inSabor1 = document.getElementById("sabor1");
let inSabor2 = document.getElementById("sabor2");
let inSabor3 = document.getElementById("sabor3");
let inSabor4 = document.getElementById("sabor4");
let inRefri = document.getElementById("qtdRefri");
let btnPedido = document.getElementById("btnPedido");
let txtSabores = document.getElementById("sabores");
let txtRefris = document.getElementById("refris");
let txtValor = document.getElementById("valorTotal");

btnPedido.addEventListener("click", function () {
    
    let sabores = [inSabor1.value, inSabor2.value, inSabor3.value, inSabor4.value];

    let saboresPreenchidos = sabores.filter(function (sabor) {
        return sabor.trim() !== "";
    });

    if (saboresPreenchidos.length > 0) {
        txtSabores.textContent = "Sabores escolhidos: " +
        saboresPreenchidos.join(", ");
    } else {
        txtSabores.textContent = "Nenhum sabor foi digitado.";
    }


    let qtdRefri = parseFloat(inRefri.value);

    if (qtdRefri > 0) {
        txtRefris.textContent = "Quantidade de refrigerantes escolhida: " + qtdRefri + " und";
    } else {
        txtRefris.textContent = "Nenhum refrigerante selecionado.";
    }

    txtValor.textContent = "Valor total do pedido: R$" + 
    (saboresPreenchidos.length * 12) + " (pizzas) + R$" + 
    (qtdRefri * 7) + " (refrigerantes) = R$" + 
    ((saboresPreenchidos.length * 12) + (qtdRefri * 7));

});

//------------------------------------------------------//

let nome1 = document.getElementById("nome1");
let ano1 = document.getElementById("ano1");
let nome2 = document.getElementById("nome2");
let ano2 = document.getElementById("ano2");
let nome3 = document.getElementById("nome3");
let ano3 = document.getElementById("ano3");
let btnLista = document.getElementById("btnLista");
let txtLista = document.getElementById("listaIdade");

btnLista.addEventListener("click", function () {
    let anoAtual = 2026;

    let pessoas = [
        { nome: nome1.value, idade: anoAtual - parseInt(ano1.value) },
        { nome: nome2.value, idade: anoAtual - parseInt(ano2.value) },
        { nome: nome3.value, idade: anoAtual - parseInt(ano3.value)}
    ]

    pessoas.sort((a, b) => b.idade - a.idade);

    txtLista.innerHTML = "";
    pessoas.forEach(function (pessoa) {
        let item = document.createElement("li");
        item.textContent = pessoa.nome + " - " + pessoa.idade + " anos";
        txtLista.appendChild(item);
    });

});

//------------------------------------------------------//

let inNota = document.getElementById("nota");
let btnResult = document.getElementById("btnResult");
let txtResult = document.getElementById("resultNota");

btnResult.addEventListener("click", function () {
    let nota = parseFloat(inNota.value);

    if (nota >= 4 && nota < 6 ) {
        txtResult.textContent = "Precisa fazer prova substitutiva.";
    } else if (nota >= 6) {
        txtResult.textContent = "Aprovado(a).";
    } else {
        txtResult.textContent = "Reprovado(a)";
    }

});
/* ==========================================================================
   SENAI MINAS GERAIS • CURSO TÉCNICO EM PROGRAMAÇÃO PARA INTERNET
   DESENVOLVIMENTO FRONT-END • AULA 20: FUNÇÕES NO JAVASCRIPT MODERNO
   
   PRÁTICA ATIVA EM 4 BLOCOS DE CONTEÚDO
   ========================================================================== */


/* ==========================================================================
   BLOCO 1: FUNÇÕES TRADICIONAIS & CLÁUSULA RETURN
   ==========================================================================
   Atividade 1.1: Área de Terreno
   - Crie a função calcularAreaTerreno que recebe largura e comprimento (em metros).
   - Ela deve calcular e retornar a área total do terreno.
   - Teste no console chamando a função com as medidas 10 e 25.

   Atividade 1.2: Verificador de Número Par
   - Crie a função ehNumeroPar que recebe um número inteiro.
   - Ela deve retornar true se o número for par ou false se for ímpar.
   - Teste no console chamando a função com o número 8 e depois com 15.

   Atividade 1.3: Mensagem de Boas-Vindas
   - Crie a função gerarBoasVindas que recebe o nome de um aluno.
   - Ela deve retornar a mensagem: "Olá, [nome]! Bem-vindo(a) ao SENAI."
   - Armazene o resultado em uma variável e exiba no console.
   ========================================================================== */

// Escreva o código do Bloco 1 abaixo:

// 1.1
function calcularAreaTerreno(largura, comprimento) {
   const area = largura * comprimento;
   return area;
}

let areaTerreno = calcularAreaTerreno(10, 25);
console.log(`A area total é de ${areaTerreno} metros.`);

// 1.2
function ehNumeroPar(numero) {
   const divisaoNumero = numero % 2 === 0 ? "PAR" : "IMPAR";
   return divisaoNumero;
}

let numero = 15;
let testeNumero = ehNumeroPar(numero);
console.log(`O número ${numero} é ${testeNumero}.`)

// 1.3
function gerarBoasVindas(aluno) {
   return `Olá! ${aluno}, Bem-Vindo(a) ao SENAI.`
}

let nomeAluno = "Jânio";
let mensagem = gerarBoasVindas(nomeAluno);
console.log(mensagem);


/* ==========================================================================
   BLOCO 2: PARÂMETROS, ARGUMENTOS & VALORES PADRÃO (DEFAULT PARAMETERS)
   ==========================================================================
   Atividade 2.1: Total com Frete Padrão
   - Crie a função calcularTotalComFrete que recebe o preço do produto e o frete.
   - Defina o valor padrão do frete em 15.00 caso ele não seja informado.
   - Retorne o valor total a pagar.
   - Teste chamando apenas com o valor do produto e depois passando um frete customizado de 25.00.

   Atividade 2.2: Formatador de Moeda
   - Crie a função formatarMoeda que recebe um valor e o símbolo da moeda.
   - O símbolo da moeda deve ter como valor padrão "R$".
   - Retorne o texto formatado no padrão "[símbolo] [valor]".
   - Teste chamando a função sem informar o símbolo e depois passando "USD".

   Atividade 2.3: Média Trimestral
   - Crie a função calcularMediaTrimestre que recebe 3 notas de avaliações.
   - Caso a terceira nota não seja enviada na chamada, assuma o valor padrão 0.
   - Retorne a média das 3 notas.
   - Teste chamando com 2 notas e depois com 3 notas.
   ========================================================================== */

// Escreva o código do Bloco 2 abaixo:

// 2.1
function calcularTotalComFrete(precoProduto, frete = 15.00) {
   const precoTotal = precoProduto + frete;
   return precoTotal
}

let valorProduto = 150;
let valorFrete = 25;
let valorTotal = calcularTotalComFrete(valorProduto, valorFrete)

console.log(`O Valor total é de ${valorTotal}.`)

// 2.2
function formatarMoeda(valor, simboloMoeda = "R$") {
   console.log(`Valor Formatado é de ${simboloMoeda} ${valor}.`)
}

let valorInformado = 150;
let moeda = "USD";
const moedaFormatada = formatarMoeda(valorInformado, moeda)

// 2.3
function calcularMediaTrimestre(nota1, nota2, nota3 = 0) {
   const mediaTotal = (nota1 + nota2 + nota3) / 3;
   return mediaTotal
}

let nota1 = 55
let nota2 = 75
let nota3 = 63

const mediaTrimestral = calcularMediaTrimestre(nota1, nota2, nota3)
console.log(`A media das notas é de ${mediaTrimestral.toFixed(2)}.`)



/* ==========================================================================
   BLOCO 3: EXPRESSÕES DE FUNÇÃO & FUNÇÕES ANÔNIMAS
   ==========================================================================
   Atividade 3.1: Calculadora de Desconto
   - Armazene em uma constante chamada aplicarDesconto uma função anônima.
   - A função deve receber o valor original do produto e a porcentagem de desconto.
   - Retorne o valor final a pagar após deduzir o desconto.
   - Teste executando a constante passando 200 de valor e 15 de desconto.

   Atividade 3.2: Validador de Tamanho de Senha
   - Armazene em uma constante chamada validarTamanhoSenha uma função anônima.
   - A função deve receber uma senha em texto.
   - Retorne true se a senha possuir 8 ou mais caracteres, ou false caso contrário.
   - Teste chamando a constante com "12345" e depois com "senhaSegura2026".
   ========================================================================== */

// Escreva o código do Bloco 3 abaixo:

// 3.1
const aplicarDesconto = function (valor, desconto) {
   return valor - (valor * desconto)
}

let valorOriginal = 200;
let porcentagemDesconto = 0.15;

console.log(`O valor do produto é de ${valorOriginal}, e com o desconto, fica em ${aplicarDesconto(valorOriginal, porcentagemDesconto)}`);

// 3.2
const validarTamanhoSenha = function (senha) {
  return senha.length > 8     }

let senha = "senhaSegura2026"

console.log(`Validador de Senha: ${validarTamanhoSenha(senha)}.`)


/* ==========================================================================
   BLOCO 4: ARROW FUNCTIONS & RETORNO IMPLÍCITO
   ==========================================================================
   Atividade 4.1: Dobro Instantâneo
   - Crie em UMA ÚNICA LINHA a arrow function calcularDobro com retorno implícito.
   - Ela deve receber um número e retornar o dobro desse valor.
   - Teste no console passando 15 e depois 48.

   Atividade 4.2: Conversor de Minutos em Segundos
   - Crie em UMA ÚNICA LINHA a arrow function minutosParaSegundos com retorno implícito.
   - Ela deve receber uma quantidade de minutos e retornar o total equivalente em segundos.
   - Teste no console passando 5 minutos (esperado: 300 segundos).

   Atividade 4.3: Saudação Express
   - Crie em UMA ÚNICA LINHA a arrow function saudacaoExpress com retorno implícito.
   - Ela deve receber o nome e retornar "Olá, [nome]! Seja bem-vindo(a)." utilizando Template Literals.
   - Teste executando e imprimindo o retorno no console.
   ========================================================================== */

// Escreva o código do Bloco 4 abaixo:



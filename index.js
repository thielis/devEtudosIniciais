//Este arquivos contém Códigos JavaScript
//imprimindo no console
console.log ("Hello World Via Arquivo Externo");

//Uma função que ao acioná-la Exibe um alerta no navegador
function alertaDeTeste()
{
    alert("Alerta executada através de função");
}
//Outro exemplo de função de aleta
function alertaDeTeste2()
{
    alert("Alerta após carrgamento do corpo da página!");
}

/*Função para alterar o conteúdo de um texto pelo contido na
na função, combinando mudança de cor do mesmo*/
function mudarTexto()
{
    document.getElementById("textoTeste").innerHTML = "Texto alterado pela função!";
    document.getElementById("textoTeste").style.color = "yellow";
}

/*Função utilizada para ocultar um elemento*/
function ocultarTexto()
{
    document.getElementById("textoTesteBotao").style.display = "none";
}

/*Função utilizada para exibir um elemento*/
function mostrarTexto()
{
    document.getElementById("textoTesteBotao").style.display = "block";
}

/*Função utilizada para alterar cor de um elemento*/
function corTextoAmarelo()
{
    document.getElementById("textoParagrafo").style.color = "yellow";
}

/*Função utilizada para alterar cor de um elemento*/
function corTextoAzul()
{
    document.getElementById("textoParagrafo").style.color = "blue";
}

function ligarLuz()
{
    document.getElementById("lampada").src = "./luz_acesa.jpg";
}
function desligarLuz()
{
    document.getElementById("lampada").src = "./luz_apagada.jpg";
}
//Função que muda a cor de uma determinada classe
function mudarCorListas(){
    
    for (var i = 0; i < document.getElementsByClassName("listas").length; i++){
        document.getElementsByClassName("listas")[i].style.color = "white";
    }
}
//Outro exemplo função que muda o tamanho da fonte com bold (negrito)
function mudarNegritoListas(){
    
    for (var i = 0; i < document.getElementsByClassName("listas").length; i++){
        document.getElementsByClassName("listas")[i].style.fontWeight = "bold";
    }
}
//Função que muda a cor de uma tag
function mudarTitulos(){
    
    var titulos = document.getElementsByTagName("h3");
    var i = 0;
    while (i < titulos.length){
        titulos[i].style.color = "red";
        i++;
    }
     
}

//Bloco com funções de adicionar e remover elementos
var quantidadeElementos = 0;   

function addElemento(){
    //declarado um var para atribuir a chamada que cria o elemento
    var elemento = document.createElement("P");
    //incrementado antes de inserir o elemento para exibir a quantidade
    quantidadeElementos++;
    //código que cria o elemento
    elemento.innerHTML = "Elemento "+ quantidadeElementos;
    //código que insere o elemento
    document.getElementById("elementosDiv").appendChild(elemento);
    }
function removerElementos(){
    var elementosFilhos = document.getElementById("elementoDiv").childNodes;
    var qtdElementosAtuais = elementosFilhos.length;
    for (var i = 0; i < qtdElementosAtuais; i++){
        document.getElementById("elementoDiv").removeChild(elementosFilhos[0]);
    }
}
//Fim do Bloco adocionar e remover elementos.

//Exibe um alerta no navegador
alert("Arquivo JavaScript Carregado!");
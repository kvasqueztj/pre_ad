// Prompt do nome:
const nome = prompt("Qual é o seu nome?")

//document.write("Olá, seja bem vindo(a) " + nome + " !")

// Prompt decisão:
const decisao = prompt("Você deseja realizar o quiz?\n Digite: \n 1 para SIM \n 2 para NÃO")

//Prompt:

if (decisao == "1"){
  
  resposta1 = prompt("Existe mais de uma variante de coronavírus? \n\n1. Verdade, existem diversas variantes de coronavírus. \n2. Não, existe apenas uma variante de coronavírus.\n3. Não, não existe coronavírus.");

  

  //exibindo no console as variaveis
  //console.log(resposta1)
  //console.log(resposta1, resposta2, resposta3);

  resposta2 = prompt("A origem do coronavírus pode ser definida como: \n\n1. Em laboratório \n2. O coronavírus surgiu sem intervenção humana. \n3. Foi criado pela ONU.");

  resposta3 = prompt("Como evitar a contaminação pelo coronavírus? \n\n1. Não é necessário o uso de máscara, apenas higienize as mãos. \n2. Coma bastante alho e beba água. \n3. Use máscara, higienize as mãos e mantenha o distanciamento social.");
  
console.log(resposta1, resposta2, resposta3);

document.write("Olá, seja bem vindo(a) " + nome + "!");
document.write("<br>");
document.write("\n Resposta 01 - " + resposta1 + " !");
document.write("<br>");
document.write("\n Resposta 02 - " + resposta2 + " !");
document.write("<br>");
document.write("\n Resposta 03 - " + resposta3 + " !");


} else if (decisao == "2") {
//comando para chamar a pagina de saida da avaliação
  window.location.href = "fimTeste.html" ;
}



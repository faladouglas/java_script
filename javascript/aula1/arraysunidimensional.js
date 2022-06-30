/*
var cor =[];
*/
/*
cor [0] = "branco" // metodo antigo 
cor [1] = "preto"
cor [2] = "vermelho"
*/


/*
cor.push("branco"); // push incrementa o valor na ultima posição 
cor.push("preto");
cor.push("vermelho");
cor.push("azul");
cor.push("amarelo");
*/

/*
var itens = ["chave","corda","faca","martelo","lanterna"];
var mochila = [];
mochila.push(4);
mochila.push(0);
mochila.push(2);
document.write(itens[mochila[0]] + "<br>")
document.write(itens[mochila[1]] + "<br>")
document.write(itens[mochila[2]] + "<br>")
*/

var mochila=[];
mochila.push("faca")
mochila.push("martelo")
mochila.push("corda")
mochila.push("chave")
mochila.push("alimento")
mochila.push("agua")
mochila.unshift("curativo") // unshift coloca o valor na primeira posição 


mochila.pop(); // remove o ultimo valor da array

mochila.shift(); //remove o primeiro valor da array

mochila.splice(2,1); // remove pontualmente o valor de uma array e tambem quantos elementos sera excluido depois da array excuida , (2("array escolhida a ser deletada"),1("quantos elementos vao ser excluidos depois da posição 2"))


document.write(mochila[0]+"<br>");
document.write(mochila[1]+"<br>");
document.write(mochila[2]+"<br>");
document.write(mochila[3]+"<br>");
document.write(mochila[4]+"<br>");
document.write(mochila[5]+"<br>");
document.write(mochila[6]+"<br>");



function adicionar(valor) {
    document.getElementById('tela').value += valor;
    
}

 function limpar() {
    document.getElementById('tela').value='';
    
 }
function calcular() {
   try{
    /*
      if ('tela'/0) {
         alert("Expressão inválida");
          */

     const resultado= eval ( document.getElementById('tela').value);
     document.getElementById('tela').value= resultado;
    
   } 
   catch (e){
    alert("Expressao inválida");
   }
    
}



let num1 = 30;
let num2 = 70;

console.log(num1+num2);
console.log(num1/num2);
console.log(num1-num2);
console.log(num1*num2);

let nome = prompt("Digite seu nome");
let sobrenome = prompt("Digite seu sobrenome");
console.log("Olá "+ nome+" "+sobrenome);

cont();

function cont() {
   let a = parseInt( prompt("Digite um número"));
   let b= parseInt(prompt("Digite o segundo número"));
   let c = a+b;
   if ( a < b) {
      console.log(  b  );
      alert( b +" É o maior número e a soma dos números é " + c);
      console.log("A soma dos números é " + c);
      
   }
   else {
      console.log(  a  );
      alert( a + " É o maior número e a soma dos números é " + c);
      console.log("A soma dos números é " + c);
   }   
}

 let nome2= "Arthur"; 
 
 function callfunction() {
    
   let functiona= parseInt(prompt("Digite um número"));
   let functionb= parseInt(prompt("Digite o segundo número"));

   let bigger= (functiona > functionb) ? functiona : functionb;
   alert("o maior é " + bigger ); 
   
 }
 function OfLegalAge() {
   
   alert(" How did you don´t know if you are legal Age? kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk");

   let amazing = parseInt(prompt("Tell me your age :"));
    if (amazing <18)  {
     alert("Minor");
    }
    else {
      alert("Of legal Age");
    }
   
 }
 function Evenandodd() {

   let evenorodd = parseInt(prompt("Tell me a number and I will tell you if this number is even (Par) or odd (Ímpar)" ));
    let result= (evenorodd%2===0) ? alert("Even") : alert("Odd");
    
     /* 
     if (result%2==0){
       printf("Number is even");
      }
       else {
          printf("Number is odd");
          }
      */
 }
function Words() {

    let string= prompt(" Write an word:");
    alert(`A palavra tem ${string.length} letras`) + "\n"+

    (string.length>=5 ? alert("A palavra é grande") : alert("A palavra é pequena"));

}



 let number =0;
 while(number<=10){
   console.log(`${number}`);
   number++;
 }




  
 
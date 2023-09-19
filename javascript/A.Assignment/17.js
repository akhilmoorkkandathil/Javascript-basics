const prompt = require('prompt-sync')();

class operations{
    addition (a,b){
     let result = a+b;
     return result;
    }
    substraction (a,b){
     let result = a-b;
     return result;
    }
    multiplication (a,b){
     let result = a*b;
     return result;
    }
     division (a,b){
     let result = a/b;
     return result;
    }
   }
   const op = new operations()
   let result;
   let value = parseInt(prompt("Enter a key\n 1: addition\n 2: substraction\n 3: multipilacation\n 4: division \n"));

   let a = parseInt(prompt("Enter first number: "))
   let b = parseInt(prompt("Enter first number: "))
   switch (value){
       case  1:
       result=op.addition(a,b);
       break;
       case  2:
       result=op.substraction(a,b);
       break;
       case  3:
       result=op.multiplication(a,b);
       break;
       case  4:
       result=op.division(a,b);
       break;
       default :console.log("invalid entry");
      
   }
   console.log("result :"+result)
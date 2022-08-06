do{ 
    
    var n1 = parseInt(prompt("Ingresar numero uno: "))
    var n2 = parseInt(prompt("Ingresar numero dos: "))


        if (n1 > n2){
            console.log("n1 es mayor");
        }

        else if (n1 < n2){
            console.log("n2 es mayor");
        }

        else if (n1 == n2){
            console.log("son iguales");
        }
  
} while (isNaN(n1)== true || isNaN(n2)== true);
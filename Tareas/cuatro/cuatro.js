do{ 
    
    var n1  = parseInt(prompt("Ingresar numero uno para multiplicar: "))
    var n2 = parseInt(prompt("Ingresar numero dos para miltiplicar: "))

    for (i = 0; i < 11; i++) {
        console.log("n1 x", i, "=", n1 * i);
       }
    
     for (i = 0; i < 11; i++) {
    console.log("n2 x", i, "=", n2 * i);
    }

} while (isNaN(n1)== true || isNaN(n2)== true);
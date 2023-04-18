

const contentitore = document.getElementById("container");

for (let contatore = 0; contatore < 100; contatore++) {

    // console.log(contatore);

    let ilNostroIndice = contatore + 1;

    let numero = ilNostroIndice ;


    
    if (numero % 3 == 0 && numero % 5== 0){
        contentitore.innerHTML += `<div class="box-fizz-buzz">fizzbuzz</div>`;   //Ora funziona: ho cambiato ordine
        console.log("fizzbuzz");
    }

    else if (numero % 3 == 0){
        contentitore.innerHTML += `<div class="box-fizz">fizz</div>`;
        console.log("fizz");
    }

    else if (numero % 5 == 0){
        contentitore.innerHTML += `<div class="box-buzz">buzz</div>`;
        console.log("buzz");
    }

    else {
        contentitore.innerHTML += `<div class="box">${numero}</div>`;
        console.log(numero);
    }

 


    
}













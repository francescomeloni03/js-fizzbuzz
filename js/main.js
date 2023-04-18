

const contentitore = document.getElementById("container");

for (let contatore = 0; contatore < 100; contatore++) {

    console.log(contatore);

    let ilNostroIndice = contatore + 1;

    let numero = ilNostroIndice ;


    
    if (numero % 3 == 0 && numero % 5== 0){
        contentitore.innerHTML += `<div class="box-fizz-buzz">fizzbuzz</div>`;   //Ora funziona: ho cambiato ordine
    }

    else if (numero % 3 == 0){
        contentitore.innerHTML += `<div class="box-fizz">fizz</div>`;
    }

    else if (numero % 5 == 0){
        contentitore.innerHTML += `<div class="box-buzz">buzz</div>`;
    }

    else {
        contentitore.innerHTML += `<div class="box">${numero}</div>`;
    }

 


    
}













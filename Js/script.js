// Creo il bottone che generi il prezzo del biglietto del treno

const buttonGenera = document.getElementById('genera');

buttonGenera.addEventListener ('click', function(){

    // Creo la variabile per inserire nome e cognome

    let nomeCognome = document.getElementById('nome-cognome');
    let valueNomeCognome = nomeCognome.value;
    console.log(valueNomeCognome);
    document.getElementById('nome-passeggero').innerHTML = valueNomeCognome;

    // Creo la variabile per dichiarare i chilometri percorsi

    let kmPercorsi = document.getElementById('km-totali').value;
    console.log(kmPercorsi);

    // Chiedo all'utente di inserire la sua fascia d'età

    let eta = document.getElementById('fascia-età').value;
    console.log(eta);
    
    // Creo una variabile per calcolare il prezzo non scontato

    let prezzoNonScontato = parseFloat(kmPercorsi * 0.21).toFixed(2);
    console.log(prezzoNonScontato+"€");


    // Creo una condizione secondo la quale chi ha meno di 18 anni ha uno sconto del 20%, chi ha più di 65 anni ottiene uno sconto del 40% altrimenti paga il biglietto non scontato.

    if(eta==='Minorenne'){
        let prezzoScontatoMinorenni =(prezzoNonScontato * 0.8).toFixed(2)+"€";
        console.log(prezzoScontatoMinorenni);

        document.getElementById("costo-biglietto").innerHTML = `${prezzoScontatoMinorenni}`;


    }else if(eta==='Over65'){
        let  prezzoScontatoSenior =(prezzoNonScontato * 0.6).toFixed(2)+"€";
        console.log(prezzoScontatoSenior);

        document.getElementById("costo-biglietto").innerHTML = `${prezzoScontatoSenior}`;

        
    }else{
        let prezzoFinale = prezzoNonScontato+"€";
        console.log(prezzoFinale);

        document.getElementById("costo-biglietto").innerHTML = `${prezzoFinale}`;
        
        
    };

    // Stampo nella pagina il prezzo del biglietto dell'utente nelle varie condizioni in base all'età
});

// Creo la costante del bottone annulla

const buttonAnnulla = document.getElementById('annulla');

buttonAnnulla.addEventListener ('click', function(){
    document.getElementById('form').reset();

});
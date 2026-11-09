function calcolaBiglietto () {
        let km = document.getElementById("km").value;
        let anni = document.getElementById("anni").value;
        let prezzo = km * 0.21;
    if (anni < 18) {
        prezzo=prezzo *0.80;
    } else if (anni > 65) {
        prezzo=prezzo * 0.60;
    } else {
        prezzo=prezzo;
    }
    let prezzoFormattato = prezzo.toFixed(2);
    document.getElementById("prezzo").innerText ="Il prezzo del tuo biglietto è: " + prezzoFormattato + " €";
 }

   
function calcolaBiglietto () {
        let km = document.getElementById("km").value;
        let anni = document.getElementById("anni").value;
        let prezzo = km * 0.30;
    if (anni < 18) {
        prezzo=prezzo * 0.7;
    } else if (anni > 65) {
        prezzo=prezzo * 0.6;
    } else {
        prezzo=prezzo;
    }
    console.log(prezzo);    
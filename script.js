let km= document.getElementById("km").value;
    let anni= document.getElementById("anni").value;
    function calcolaBiglietto (km, anni) {
        let km = document.getElementById("km").value;
        let anni = document.getElementById("anni").value;
        let prezzo = km
    if (anni < 18) {
        preezzo= prezzo * 0.8;
    } else if (anni > 65) {
        prezzo= prezzo * 0.6;
    } else {
        prezzo= prezzo;
    }
    
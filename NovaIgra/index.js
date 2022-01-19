function handleSubmit () {
    var igrac1 = document.getElementById('igrac1').value;
    var igrac2 = document.getElementById('igrac2').value;
    const dimenzija = document.getElementById('dimenzija').value
    if (igrac1 == ''){
        igrac1 = 'igrac1'
    }
    if (igrac2 == ''){
        igrac2 = 'igrac2'
    }
    const objekat = {
        "igrac1": igrac1,
        "igrac2":igrac2,
        "dimenzije":dimenzija,
        "pobjednik":null
    }

    localStorage.setItem("objekat",JSON.stringify(objekat))
    return;
}
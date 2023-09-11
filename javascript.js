function addRow(){
    if(validace()){
        var table = document.getElementById("myTable");
        var row = table.insertRow(1);
        var cellJm = row.insertCell(0);
        cellJm.innerHTML = document.getElementById("jmeno").value;    
        var cellPr = row.insertCell(1);
        cellPr.innerHTML = document.getElementById("prijmeni").value; 
        var cellMe = row.insertCell(2); 
        cellMe.innerHTML = document.getElementById("mesto").value;
        var cellDt = row.insertCell(3); 
        cellDt.innerHTML = document.getElementById("datum-narozeni").value;
        var cellEm = row.insertCell(4);     
        cellEm.innerHTML = document.getElementById("email").value;
        var cellTl = row.insertCell(5); 
        cellTl.innerHTML = document.getElementById("tel").value;
    }
};

function validace(){
    var valid = false;
    const jmeno = document.getElementById("jmeno").value;
    let isJmenoValid = false;
    const prijmeni = document.getElementById("prijmeni").value;
    let isPrijmeniValid  = false;
    const mesto = document.getElementById("mesto").value;
    let isMestoValid = false;
    const email = document.getElementById("email").value;
    let isEmailValid = false;
    const tel = document.getElementById("tel").value;
    let isTelValid = false;
    if(validaceJmena(jmeno)){isJmenoValid = true;} //1
    if(validaceJmena(prijmeni)){isPrijmeniValid = true;}//1
    if(validaceJmena(mesto)){isMestoValid = true;}//1
    if(validaceEmailu(email)){isEmailValid = true;}//1
    if(validaceTel(tel)){isTelValid = true;}//1
    if(isJmenoValid == true ){
        if(isPrijmeniValid == true){
            if(isEmailValid == true){
                if(isMestoValid == true){
                    if(isTelValid == true){
                      valid = true;  
                    }
                }
            }
        }
    }
    return valid;
}

function validaceEmailu(email){
    const tecka = ".";
    var vysledek = true;
    const indexTec = email.indexOf(tecka);
    if( indexTec == -1){
        vysledek = false;
    }
    return vysledek;
}

function validaceTel(tel){
    const numberOfDigits = tel.length;
    var vysledek = true;
    if(numberOfDigits != 9){
        vysledek = false;
    }
    return vysledek;
}

function validaceJmena(jmeno){
    const poleCisel = ['0','1','2','3','4','5','6','7','8','9'];    // Numbers which cannot be in name
    const poleZnaku = ['?',':','-','/',')','(','.',',','§',';'];    //Characters which cannot be in name
    var vysledek = true ;
    for(var i = 0; i < jmeno.length ; i++){
        const znak = jmeno.charAt(i);
        for (var j = 0; j < poleCisel.length; j++){
            if(znak == poleCisel[j]){
                vysledek = false;
            }
        }
        for (var k = 0; k  < poleZnaku.length; k++){
            if(znak == poleZnaku[k]){
                vysledek = false;
            }
        }
    }
    return vysledek;
}

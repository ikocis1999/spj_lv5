function checkInputs(){
  //var textSportovi = 'button[data-id=SelectSportoviAzuriraj] .filter-option-inner-inner';
  const FirstName = document.getElementById('inptIme');
  const LastName = document.getElementById('inptPrezime');
  const Jmbag = document.getElementById('inptJMBAG').value;
  const OibValue = document.getElementById('inptOIB').value;
  const Adresa = document.getElementById('inptAdress').value;
  const postBr = document.getElementById('inptPostNum').value;
  const sGrad = document.getElementById('inptGrad').value;
  const Drodenja = document.getElementById('inptDate').value;
  const FirstNameValue = FirstName.value.trim();
  const LastNameValue = LastName.value.trim();
  var PotvrdaSlanja = '';
  var Tocno = true;
  if (/^\s*(3[01]|[12][0-9]|0?[1-9])\-(1[012]|0?[1-9])\-((?:19|20)\d{2})\s*$/g.test(Drodenja) == false) {
    console.log("Datum nije ispravan");
    Tocno = false;
  }

  if (sGrad == '') {
  	console.log('Polje ne može biti prazno');
    Tocno = false;
  }
  if (isNaN(postBr)) {
  	console.log("Postanksi broj mora biti broj");
    Tocno = false;
  }
  if (Adresa == "") {
  	console.log("polje ne može bit prazno");
    Tocno = false;
  }

  	if(Jmbag === ''){
      console.log('Polje ne može biti prazno');
      Tocno = false;
    }else if(Jmbag.length != 10){
      console.log('JMBAG se sastoji od 10 znamenki');
      Tocno = false;
    }

    if (FirstNameValue === '') {
      console.log('Polje ne može biti prazno');
      Tocno = false;
    }else if (/^[a-z\u0161\u0111\u010D\u0107\u017E ]+$/gi.test(FirstNameValue) == false) { //svi znakovi eng abecede i dodatni hrv znakovi /g global chars /i je noncasesensitive 
      console.log('Ime ne sadrži brojeve ili ostale nedozvoljene znakove');
    }else if(FirstNameValue.length <= 1){
      console.log('Ime ne može imati samo jedno slovo');
      Tocno = false;
    }else if (FirstName.value[0] != FirstName.value[0].toUpperCase() ) {
      console.log('Ime ne može početi s malim slovom');
    }else if(FirstNameValue.length > 50){
      console.log('Ime ne postoji');
      Tocno = false;
    }else{
      PotvrdaSlanja += 'I';
    }
    
    if(LastNameValue === ''){
      console.log('Polje ne može biti prazno');
      Tocno = false;
    }else if (/^[a-z\u0161\u0111\u010D\u0107\u017E ]+$/gi.test(LastNameValue) == false) {
      console.log('Prezime ne sadrži brojeve ili ostale nedozvoljene znakove');
    }else if(LastNameValue.length <= 2){
      console.log('Prezime ne može imati manje od dva slova');
      Tocno = false;
    }else if (LastName.value[0] != LastName.value[0].toUpperCase() ) {
      console.log('Prezime ne može početi s malim slovom');
    }else if(LastNameValue.length >= 50){
      console.log('Prezime ne postoji');
      Tocno = false;
    }

    if(OibValue === ''){
      console.log('Polje ne može biti prazno');
      Tocno = false;
    }else if(OibValue.length != 11){
      console.log('Oib se sastoji od 11 znamenki');
      Tocno = false;
    }        
    if (Tocno) {
    	var obj ={
    		Ime:FirstNameValue,
    		Prezime:LastNameValue,
    		JMBAG:Jmbag,
    		OIB:OibValue,
    		DatumRodenja:Drodenja,
    		Adresa:Adresa,
    		PostanksiBroj: postBr,
    		Grad:sGrad
    	}
    	console.log(obj);
    }
}
       
   


$(document).ready(function()
{
	//InitializeGodinaElements();
});
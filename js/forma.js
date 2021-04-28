function InitializeGodinaElements()
{
	var oSelect = $('#dpGodinaRodjenja');
	for(var i=1975; i<2000; i++)
	{
		//console.log(i);
		oSelect.append('<option value="'+i+'">'+i+'</option>');
	}
}

function checkInputs(){
  //var textSportovi = 'button[data-id=SelectSportoviAzuriraj] .filter-option-inner-inner';
  const FirstName = document.getElementById('inptIme');
  const LastName = document.getElementById('inptPrezime');
  const Jmbag = document.getElementById('inptJMBAG').value;
  const OibValue = document.getElementById('inptOIB').value;
  const Adresa = document.getElementById('inptAdress').value;
  const postBr = document.getElementById('inptPostNum').value;
  const sGrad = document.getElementById('inptGrad').value;
  const Drodenja = document.getElementById('dpGodinaRodjenja').value;
  const FirstNameValue = FirstName.value.trim();
  const LastNameValue = LastName.value.trim();
  var PotvrdaSlanja = '';
  var Tocno = true;
  if (^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$.test(Drodenja)) {
    console.log("Datum nije ispravan");
  }

  if (sGrad == '') {
  	console.log('Polje ne može biti prazno');
  }
  if (isNaN(postBr)) {
  	console.log("Postanksi broj mora biti broj");
  }
  if (Adresa == "") {
  	console.log("polje ne može bit prazno");
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
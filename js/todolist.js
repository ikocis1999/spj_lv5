var pero = '"far fa-trash-alt"';
var counter = 0;	
		
function Obrisi(x) {
	$('#list #'+x).remove();
}

function Dodaj(){
    counter++;
    var ul = $('#list');
    var zadatak = $('#input').val();
    ul.append(`<li id="${counter}"> <input type="checkbox"> ${zadatak} <button onclick="Obrisi(${counter})"><i class="fas fa-trash"></i></button></li>`);
}



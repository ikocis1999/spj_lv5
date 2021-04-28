var nSlike = 1;

function prev()
{	
	nSlike--;
	if (nSlike == 0)
	{
		nSlike = 5;
	}
	$("#Slika").attr("src", "img/slider_"+nSlike+".jpg");
}

function next()
{
	nSlike++;
	if (nSlike == 6)
	{
		nSlike = 1;
	}
	$("#Slika").attr("src", "img/slider_"+nSlike+".jpg");

}
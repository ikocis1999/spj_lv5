const setBg = () => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  color.innerHTML = "#" + randomColor;
};

 var  btn = document.getElementById('genNew')
 if (btn) {
 	btn.addEventListener("click", setBg);
 	setBg();
}

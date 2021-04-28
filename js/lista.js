function ChangeImg(li, predmet){
    var img = $('img');
    img.attr('src', `img/${predmet}${li.value}.jpg`);
}
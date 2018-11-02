var left = document.getElementById('left_arrow');
var right = document.getElementById('right_arrow');

function swipeLeft() {
    console.log('Left');
    var scroll = document.getElementsByClassName('product');
    for(var i=0;i<scroll.length;i++) {
        scroll[i].style.transform = 'translateX(550px)';
        scroll[i].style.transition = '0.3s ease-in-out';
    }
}

function swipeRight() {
    console.log('Right');
    var scroll = document.getElementsByClassName('product');
    for(var i=0;i<scroll.length;i++) {
        scroll[i].style.transform = 'translateX(-550px)';
        scroll[i].style.transition = '0.3s ease-in-out';
    }
}

console.log($('.product:visible').length);

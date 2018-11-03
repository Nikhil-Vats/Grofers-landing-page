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

document.getElementById('left2_arrow').style.display = 'none';


var bannerWidth = 0;

function swipeBannerLeft() {
    document.getElementById('right2_arrow').style.display = 'block';
    var banners = document.getElementsByClassName('banner');
    bannerWidth = bannerWidth + banners[0].clientWidth;
    console.log(bannerWidth);
    if(bannerWidth == 0) {
        document.getElementById('left2_arrow').style.display = 'none';
    }
    for(var i=0;i<banners.length;i++) {
        banners[i].style.transform = 'translateX('+ bannerWidth + 'px)';
        banners[i].style.transition = '0.3s ease-in-out';
    }
}

function swipeBannerRight() {
    document.getElementById('left2_arrow').style.display = 'block';
    var banners = document.getElementsByClassName('banner');
    bannerWidth = bannerWidth - banners[0].clientWidth;
    console.log(bannerWidth);
    if(bannerWidth<-2500) {
        document.getElementById('right2_arrow').style.display = 'none';
    }
    for(var i=0;i<banners.length;i++) {
        banners[i].style.transform = 'translateX('+ bannerWidth + 'px)';
        banners[i].style.transition = '0.3s ease-in-out';
    }
}

function openSidenav() {
    var sidenav = document.getElementById('sidenav');
    sidenav.style.left = '0vw';
    document.getElementById('overshadow').style.zIndex = '90';
    document.getElementById('overshadow').style.opacity = '0.7';
}

function closeSidenav() {
    var sidenav = document.getElementById('sidenav');
    sidenav.style.left = '-70vw';
    document.getElementById('overshadow').style.zIndex = '-90';
    document.getElementById('overshadow').style.opacity = '0.7';
}
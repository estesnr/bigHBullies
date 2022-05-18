let i = 0;

let images = [];

let time = 3000;

images[0] = 'img/pup1.jpg';
images[1] = 'img/pup2.jpg';
images[2] = 'img/pup3.png';
images[3] = 'img/pup4.jpg';

function changeImg() {
    document.pupShow.src = images[i];

    if(i < images.length - 1) {
        i++
    }
    else {
        i = 0;
    }

    setTimeout('changeImg()', time);
}

window.onload = changeImg;

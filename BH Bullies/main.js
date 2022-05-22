document.querySelector('#contactButton').addEventListener('click', eMail)

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

let nameInput = document.querySelector('#nameInput')
let mailInput = document.querySelector('#mailInput')
let commentBox = document.querySelector('#commentBox')

function eMail() {
    Email.send({
        Host: 'smtp.gmail.com',
        Username: "contactForm@bighbullies.com",
        To: 'bighbullies@gmail.com',
        From: 'contactForm@bighbullies.com',
        Subject: `Message from ${nameInput} @ ${mailInput}`,
        Body: commentBox
})
    .then(function(message) {
        alert("Message Sent Successfully")
    });
}
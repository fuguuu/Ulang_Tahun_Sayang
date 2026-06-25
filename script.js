let current = 1;

function showSlide(number){

document
.querySelectorAll('.slide')
.forEach(slide => {

slide.classList.remove('active');

});

document
.getElementById('slide' + number)
.classList.add('active');

current = number;

}

function startShow(){

const music =
document.getElementById('bgm');

music.play().catch(() => {});

showSlide(2);

}

function openLetter(){

document
.getElementById('letter')
.classList.remove('hidden');

}

function restart(){

location.reload();

}

/* GALERI FOTO */

const photos = [

    'assets/1.jpeg',
    'assets/2.jpeg',
    'assets/3.jpeg',
    'assets/4.jpeg',
    'assets/5.jpeg',
    'assets/6.jpeg',
    'assets/7.jpeg',
    'assets/8.jpeg'
    
    ];
    
    let photoIndex = 0;
    
    function updatePhoto(){
    
    const image =
    document.getElementById('galleryImage');
    
    const bg =
    document.getElementById('galleryBg');
    
    image.src = photos[photoIndex];
    
    if(bg){
    
    bg.style.backgroundImage =
    `url('${photos[photoIndex]}')`;
    
    }
    
    }
    
    function nextPhoto(){
    
    photoIndex++;
    
    if(photoIndex >= photos.length){
    
    photoIndex = 0;
    
    }
    
    updatePhoto();
    
    }
    
    function prevPhoto(){
    
    photoIndex--;
    
    if(photoIndex < 0){
    
    photoIndex = photos.length - 1;
    
    }
    
    updatePhoto();
    
    }
    
    window.onload = function(){
    
    updatePhoto();
    
    };
var images = document.querySelectorAll('.img-block img')
var close = document.querySelector('.close')
var gallery = document.querySelector('.modal')
var galleryImg = document.querySelector('.img-content img')
var prev = document.querySelector('.prev')
var next = document.querySelector('.next')
var currentIndex = 0;

function showGallery(){
    if (currentIndex==0){
        prev.style.display='none'
    }
    else {
        prev.style.display='block'
    }
    if (currentIndex==images.length-1){
        next.style.display='none'
    }
    else {
        next.style.display='block'
    }
    galleryImg.src = images[currentIndex].src
    gallery.classList.add('show')
}

images.forEach((item,index)=>{  
    item.addEventListener('click',function(){
        currentIndex=index;
        showGallery()
    })
})     

close.addEventListener('click',function(){
    gallery.classList.remove('show')
})

prev.addEventListener('click',function(){
    if (currentIndex > 0) {
        currentIndex--
        showGallery()
    }
})

next.addEventListener('click',function(){
    if (currentIndex < images.length-1) {
        currentIndex++
        showGallery()
    }
})
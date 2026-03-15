const images=document.querySelectorAll(".gallery img")
const lightbox=document.getElementById("lightbox")
const lightboxImg=document.getElementById("lightboxImg")

images.forEach(img=>{
img.addEventListener("click",()=>{
lightbox.style.display="flex"
lightboxImg.src=img.src
})
})

function closeLightbox(){
lightbox.style.display="none"
}

function openRSVP(){

confetti()

window.open("https://docs.google.com/forms/d/e/1FAIpQLSeJkOzr9tGsnB1nw1awv_avRHPzJZIRxp7CTlTh_Fdl2CKwVw/viewform","_blank")

}

function confetti(){

for(let i=0;i<100;i++){

let conf=document.createElement("div")

conf.className="confetti"

conf.style.left=Math.random()*100+"%"

document.body.appendChild(conf)

setTimeout(()=>{conf.remove()},3000)

}

}

const targetDate = new Date("April 12, 2026 12:00:00").getTime()

setInterval(()=>{

const now = new Date().getTime()
const distance = targetDate - now

const days = Math.floor(distance / (1000*60*60*24))
const hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60))
const minutes = Math.floor((distance % (1000*60*60)) / (1000*60))
const seconds = Math.floor((distance % (1000*60)) / 1000)

document.getElementById("days").innerHTML = days
document.getElementById("hours").innerHTML = hours
document.getElementById("minutes").innerHTML = minutes
document.getElementById("seconds").innerHTML = seconds

},1000)

/* CAROUSEL */

const track = document.querySelector(".carousel-track")
const slides = document.querySelectorAll(".carousel-img")

let index = 0

function updateCarousel(){
track.style.transform = "translateX(-" + index * 100 + "%)"
}

document.querySelector(".next").addEventListener("click",()=>{
index++
if(index >= slides.length){
index = 0
}
updateCarousel()
})

document.querySelector(".prev").addEventListener("click",()=>{
index--
if(index < 0){
index = slides.length - 1
}
updateCarousel()
})

/* AUTO SLIDE */

setInterval(()=>{
index++
if(index >= slides.length){
index = 0
}
updateCarousel()
},4000)

function openLightbox(src){
document.getElementById("lightbox").style.display="flex";
document.getElementById("lightbox-img").src=src;
}

function closeLightbox(){
document.getElementById("lightbox").style.display="none";
}
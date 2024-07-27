// -----------------------------------
// handle icon onclick in phone screen
// -----------------------------------
let icon = document.querySelector(".header .container .links .toggle-menue")
let ulPhone = document.querySelector(".header .container .links ul")
let navLis = Array.from(document.querySelectorAll(".header .container .links ul li a"))
icon.onclick = function () {
  ulPhone.classList.toggle("phone-display-nav");
}
navLis.forEach((li)=> {
  li.addEventListener("click", function () {
    removeAllActive()
    li.classList.add("active")
  })
})
function removeAllActive() {
  navLis.forEach((li)=> {
    li.classList.remove("active")
  })
}


// -----------------------------------
// handle top Arow button
// -----------------------------------
let toTopBtn = document.querySelector("#scrollToTopBtn");
window.onscroll = function () {
  if(scrollY < 600) {
    toTopBtn.style.display = "none"
  }else {
    toTopBtn.style.display = "block"
  }
}


// -----------------------------------
// handle the slider landing images
// -----------------------------------
let allImgs = Array.from(document.querySelectorAll(".landing img"))
let numOfImages = allImgs.length
let bulletsArea = document.querySelector(".landing ul")
// let nextBtn = document.querySelector(".landing .next")
// let prevBtn = document.querySelector(".landing .prev")
let currentIndexSlid = 1

for (let i  = 1; i<=numOfImages;i++) {
  let li = document.createElement("li")
  bulletsArea.append(li)
}

let lis = Array.from(document.querySelectorAll(".landing ul li"))
checker()

setInterval(() => {
  if(currentIndexSlid===numOfImages) currentIndexSlid=0;
  currentIndexSlid++
  checker()
}, 4000);

// nextBtn.onclick = function () {

// }
// prevBtn.onclick = function () {

// }

function checker() {
  removeAllActive()
  allImgs[currentIndexSlid - 1].classList.add("active");
  lis[currentIndexSlid - 1].classList.add("active")
  // if(currentIndexSlid === 1) {
  //   prevBtn.classList.add("disabled")
  // }else {
  //   prevBtn.classList.remove("disabled")
  // }
  // if(currentIndexSlid === numOfImages) {
  //   nextBtn.classList.add("disabled")
  // }else {
  //   nextBtn.classList.remove("disabled")
  // }
}

function removeAllActive() {
  lis.forEach((li)=> {
    li.classList.remove("active")
  })
  allImgs.forEach((img)=> {
    img.classList.remove("active")
  })
}
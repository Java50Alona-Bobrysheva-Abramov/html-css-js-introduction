const detailsImage = document.querySelector(".details-image");
const detailsTitle = document.querySelector(".details-title");
const anchorElements = document.querySelectorAll(".thumbnails-anchor");
const mainElement = document.querySelector(".main-class")
const HIDDEN = "hidden";
const hideButtonElement = document.querySelector("#hide-button");
const detailsContainer = document.querySelector(".details-container");
const IS_POINT = "is-point";
const audio = document.querySelector("#audio");

function showDetails (){
    mainElement.classList.remove(HIDDEN);
    detailsContainer.classList.add(IS_POINT);
    setTimeout(function() {
        detailsContainer.classList.remove(IS_POINT);
    })
}
      
function hideDetails (){
    mainElement.classList.add(HIDDEN);
}


function setDetails(anchor) {
    const dataImage = anchor.getAttribute("data-details-image");
   /* detailsImage.src = "images/3a.jpg";
    detailsTitle.innerHTML = "I love baby";*/

    detailsImage.src = dataImage;
    detailsTitle.innerHTML = anchor.getAttribute("data-details-title"); 

    showDetails();

    const color = anchor.getAttribute("data-text-color");

    audio.src = anchor.getAttribute("data-details-bark");
    audio.play();
    setTimeout(function () {
        audio.pause();
    }, 7000)


    if (color) {
        detailsTitle.style.color = color;
    } else {
        detailsTitle.style.color = '';
    }
}

for (let i = 0; i < anchorElements.length; i++) {
    anchorElements[i].addEventListener("click",function(){
        setDetails(anchorElements[i]);
    } )
}  
  hideButtonElement.addEventListener("click",hideDetails);
      
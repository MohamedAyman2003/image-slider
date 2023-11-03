// make array to images
var slideImages = Array.from( document.querySelectorAll( ".slider-container img" ) )

// get the lenth of images
var slideImagesLength = slideImages.length
// the start of the number
var currentSlide = 1;
// get slide-number 
var slideNumberElement = document.getElementById( "slide-number" )
// get the element of next and prev
var prevButton = document.querySelector( ".prev" )
var nextButton = document.querySelector( ".next" )
// checked()
// make onclick function for prev and next 
prevButton.onclick = prevSlide
nextButton.onclick = nextSlide
 
// create ul element 
var paginationElement = document.createElement( "ul" )
paginationElement.setAttribute( "id", "pagination-ul" )
// create loop for the image
for ( var i = 1; i <= slideImagesLength; i++ ){
    // create li elements
    var paginationItems = document.createElement( "li" )
    paginationItems.setAttribute( "data-index", i )
    paginationItems.innerHTML = i
    paginationElement.appendChild(paginationItems)
}
document.querySelector(".indicators").appendChild(paginationElement)

// get slide-number element

var slideNumberElement = document.getElementById( 'slide-number' )

var paginUl = document.getElementById( "pagination-ul" )
var paginli = document.querySelectorAll("#pagination-ul li")
  var bullets = Array.from( paginli )
checked()

for ( var i = 0; i < bullets.length; i++ ){
    
bullets[i].onclick = function () {
    currentSlide = parseInt( this.getAttribute( "data-index" ) )
    checked()
    }

    }

function prevSlide() {
    if (prevButton.classList.contains("disapled")) {
    return false
    } else {
        currentSlide--
    }
    checked()
    } 

function nextSlide() {
    if ( nextButton.classList.contains( "disapled" ) ) {
    } else {
    currentSlide++
    }
    checked()
}


function checked() {
    slideNumberElement.innerHTML = `slide# ${ currentSlide } from ${ slideImagesLength }`
  removeActive()
    slideImages[ currentSlide - 1 ].classList.add( "active" )
     paginUl.children[currentSlide - 1].classList.add("active")
    if ( currentSlide == 1 ) {
      prevButton.classList.add("disapled")
    } else {
        prevButton.classList.remove("disapled")
    }
    if ( currentSlide === slideImagesLength ) {
        nextButton.classList.add("disapled")
    } else {
        nextButton.classList.remove("disapled")
    }
}

// remove all active classes
 
function removeActive() {
    slideImages.forEach( ( img ) => {
    img.classList.remove("active")
    } )

    bullets.forEach( ( bull ) => {
    bull.classList.remove("active")
})
}




































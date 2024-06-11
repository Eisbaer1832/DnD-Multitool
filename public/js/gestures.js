// scrolling stuff 
var sections = document.getElementsByTagName("section");
var currentIndex = 0;

function scrollToNextSection() {
  if (currentIndex < sections.length - 1) {
    currentIndex++;
    scrollToSection();
    }
  }

function scrollToPrevSection() {
  if (currentIndex > 0) {
    currentIndex--;
    scrollToSection();
  }
}

function scrollToSection() {
  sections[currentIndex].scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener("wheel", function(event) {
  if (event.deltaY > 0) {
    scrollToNextSection();
  } else if (event.deltaY < 0) {
    scrollToPrevSection();
  }
});

document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;

function getTouches(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}                                                     
                                                                         
function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                
                                                                         
function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
                                                                         
    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* right swipe */ 
        } else {
            /* left swipe */
        }                       
    } else {
        if ( yDiff > 0 ) {
          scrollToNextSection()
        } else { 
          scrollToPrevSection()
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};




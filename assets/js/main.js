$(document).ready(function (e) {
  
	
    /* Slider */
    let mySwiper = new Swiper ('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 5,
    navigation: {
        nextEl: '.arrow'
    },
    breakpoints: {
        577: {
            slidesPerView: 2,
        }
    }    
    });
  
  
    /* Menu button */
    let headerInner = $("#headerInner");
    let menuButton = $("#menuButton");

   menuButton.on("click", function(e) {
        event.preventDefault();

        $(this).toggleClass("active");
        headerInner.toggleClass("active");
    });
    
  
});
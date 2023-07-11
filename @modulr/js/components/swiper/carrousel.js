export function carrousel(){
  var prev = document.querySelector('.prev');
  var next = document.querySelector('.next');
  var swiper = new Swiper(".swipe", {
    slidesPerView: calcGrid(),
    spaceBetween: 16,
    slidesPerGroup: calcGrid(),
    loop: false,
    loopFillGroupWithBlank: true,
    preventClicks: false,
    //preventClicksPropagation: false,
    //allowTouchMove: isMobile() ? true : false
  });
  if(prev, next){
    prev.addEventListener('click', function(e){
      swiper.slidePrev();
      e.preventDefault()
    })
    next.addEventListener('click', function(e){
      swiper.slideNext();
      e.preventDefault()
    })
  }
}

function calcGrid(){
  var screenSize = $(window).width()
  var grid = 4
  if(screenSize <= 768){
    grid = 2
  }else if(screenSize <= 1680){
    grid = 3
  }
  return grid
}

function isMobile(){
 if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
      return true
 }
 else{
      return false
 }
} 
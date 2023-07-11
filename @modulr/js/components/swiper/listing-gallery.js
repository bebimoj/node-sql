export function listingGallery() {
  // slider
  var slider = new Swiper('.gallery', {
    autoHeight: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.snext',
      prevEl: '.sprev',
    },
  });
}

function calcGrid() {
  var screenSize = $(window).width();
  var grid = 4;
  if (screenSize <= 768) {
    grid = 2;
  } else if (screenSize <= 1680) {
    grid = 3;
  }
  return grid;
}

function isMobile() {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    return true;
  } else {
    return false;
  }
}

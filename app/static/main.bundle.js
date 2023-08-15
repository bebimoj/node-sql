/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./@modulr/js/components/form/form-field.js":
/*!**************************************************!*\
  !*** ./@modulr/js/components/form/form-field.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formField: () => (/* binding */ formField)
/* harmony export */ });
function formField() {
  var formFields = $('.form-field');
  formFields.each(function (index, element) {
    var input = $(element).find('.input');
    var label = $(element).find('label');
    var placeholder = input.data('placeholder');
    if (input.val().length > 0) {
      label.addClass('active');
    }
    input.on('change', function (e) {
      if (input.val().length > 0) {
        label.addClass('active');
      } else {
        label.removeClass('active');
      }
    });
    input.on('focus', function (e) {
      input.attr('placeholder', placeholder);
    });
    input.on('blur', function (e) {
      input.attr('placeholder', '');
    });
  });
}

/***/ }),

/***/ "./@modulr/js/components/form/toggle-password.js":
/*!*******************************************************!*\
  !*** ./@modulr/js/components/form/toggle-password.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   togglePassword: () => (/* binding */ togglePassword)
/* harmony export */ });
function togglePassword() {
  // toggle type
  var tgv = $('.form-field').find('.toggle-password');
  tgv.on("click", function (e) {
    var input = $(this).parent().find('input');
    var show = $(this).find('.show-me');
    var hide = $(this).find('.hide-me');
    var type = input.prop('type');
    if (type === 'password') {
      type = 'text';
      show.hide();
      hide.show();
    } else {
      type = 'password';
      hide.hide();
      show.show();
    }
    input.prop('type', type);
    e.preventDefault();
  });
}

/***/ }),

/***/ "./@modulr/js/components/modal/modals.js":
/*!***********************************************!*\
  !*** ./@modulr/js/components/modal/modals.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   popUpModal: () => (/* binding */ popUpModal),
/* harmony export */   slideUpModal: () => (/* binding */ slideUpModal)
/* harmony export */ });
/* harmony import */ var _form_form_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../form/form-field */ "./@modulr/js/components/form/form-field.js");
/* harmony import */ var _form_toggle_password__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../form/toggle-password */ "./@modulr/js/components/form/toggle-password.js");


function slideUpModal() {
  $('.modal-up').on("click", function (e) {
    var url = $(this).data('ctrl');
    var tmp = $(this).data('tmp');
    console.log(url);
    if (url.length > 0) {
      url = url + '/xhr/modal-up';
    } else {
      url = 'xhr/modal-up';
    }
    getData(url, 'html', {
      tpl: tmp
    });
    e.preventDefault();
  });
}
function popUpModal() {
  $('.pop-up').on("click", function (e) {
    var url = $(this).data('ctrl');
    var tmp = $(this).data('tmp');
    if (url.length > 0) {
      url = url + '/xhr/pop-up';
    } else {
      url = 'xhr/pop-up';
    }
    getData(url, 'html', {
      tpl: tmp
    });
    e.preventDefault();
  });
}

// ajax
function getData(url, dataType, data) {
  $.ajax({
    // url path to data
    url: '/' + url,
    // type get or post
    //type: type,
    // type of data getting back
    dataType: dataType,
    data: data,
    success: successFn,
    error: errorFn,
    // complete always executes , no matter the success or error
    complete: function complete(xhr, status) {
      console.log('completed');
    }
  });
}
function successFn(result) {
  var body = $('body');
  var scrollbar = window.innerWidth - $(document).width();
  body.css({
    'padding-right': scrollbar + 'px',
    overflow: 'hidden'
  });
  body.append(result);
  (0,_form_form_field__WEBPACK_IMPORTED_MODULE_0__.formField)();
  (0,_form_toggle_password__WEBPACK_IMPORTED_MODULE_1__.togglePassword)();
}
function errorFn(xhr, status, strErr) {
  console.log(xhr);
  console.log(status);
  console.log(strErr);
}

/***/ }),

/***/ "./@modulr/js/components/swiper/carrousel.js":
/*!***************************************************!*\
  !*** ./@modulr/js/components/swiper/carrousel.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   carrousel: () => (/* binding */ carrousel)
/* harmony export */ });
function carrousel() {
  var prev = document.querySelector('.prev');
  var next = document.querySelector('.next');
  var swiper = new Swiper(".swipe", {
    slidesPerView: calcGrid(),
    spaceBetween: 16,
    slidesPerGroup: calcGrid(),
    loop: false,
    loopFillGroupWithBlank: true,
    preventClicks: false
    //preventClicksPropagation: false,
    //allowTouchMove: isMobile() ? true : false
  });

  if (prev, next) {
    prev.addEventListener('click', function (e) {
      swiper.slidePrev();
      e.preventDefault();
    });
    next.addEventListener('click', function (e) {
      swiper.slideNext();
      e.preventDefault();
    });
  }
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
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    return true;
  } else {
    return false;
  }
}

/***/ }),

/***/ "./@modulr/js/components/swiper/listing-gallery.js":
/*!*********************************************************!*\
  !*** ./@modulr/js/components/swiper/listing-gallery.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   listingGallery: () => (/* binding */ listingGallery)
/* harmony export */ });
function listingGallery() {
  // slider
  var slider = new Swiper('.gallery', {
    autoHeight: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction'
    },
    navigation: {
      nextEl: '.snext',
      prevEl: '.sprev'
    }
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
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    return true;
  } else {
    return false;
  }
}

/***/ }),

/***/ "./@modulr/js/components/theme.js":
/*!****************************************!*\
  !*** ./@modulr/js/components/theme.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   colorTheme: () => (/* binding */ colorTheme),
/* harmony export */   darkLight: () => (/* binding */ darkLight)
/* harmony export */ });
function darkLight() {
  var isDark = localStorage.getItem('darkmode');
  var body = $('body');
  var dlBtn = $('.dlmode');
  var icon = dlBtn.find('.icon');
  var tooltip = dlBtn.find('.tip');
  dlBtn.click(function () {
    var light = body.hasClass('white');
    if (light) {
      localStorage.setItem('darkmode', 'dark');
      body.removeClass('white').addClass('dark');
      icon.text('light_mode');
      tooltip.text('Light Mode');
    } else {
      localStorage.setItem('darkmode', 'white');
      body.removeClass('dark').addClass('white');
      icon.text('dark_mode');
      tooltip.text('Dark Mode');
    }
  });
  if (isDark === 'dark') {
    icon.text('light_mode');
    tooltip.text('Light Mode');
  } else {
    icon.text('dark_mode');
    tooltip.text('Dark Mode');
  }
}
function colorTheme() {}

/***/ }),

/***/ "./@modulr/js/main.js":
/*!****************************!*\
  !*** ./@modulr/js/main.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_swiper_carrousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/swiper/carrousel */ "./@modulr/js/components/swiper/carrousel.js");
/* harmony import */ var _components_swiper_listing_gallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/swiper/listing-gallery */ "./@modulr/js/components/swiper/listing-gallery.js");
/* harmony import */ var _components_form_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/form/form-field */ "./@modulr/js/components/form/form-field.js");
/* harmony import */ var _components_form_toggle_password__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/form/toggle-password */ "./@modulr/js/components/form/toggle-password.js");
/* harmony import */ var _components_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/theme */ "./@modulr/js/components/theme.js");
/* harmony import */ var _components_modal_modals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/modal/modals */ "./@modulr/js/components/modal/modals.js");





// modals 

$(document).ready(function () {
  // animations
  $('.swiper .home').addClass('fade-in');

  // dark light mode
  (0,_components_theme__WEBPACK_IMPORTED_MODULE_4__.darkLight)();

  // swiper 
  (0,_components_swiper_carrousel__WEBPACK_IMPORTED_MODULE_0__.carrousel)();
  (0,_components_swiper_listing_gallery__WEBPACK_IMPORTED_MODULE_1__.listingGallery)();

  // form elements
  (0,_components_form_form_field__WEBPACK_IMPORTED_MODULE_2__.formField)();
  (0,_components_form_toggle_password__WEBPACK_IMPORTED_MODULE_3__.togglePassword)();

  // modals
  (0,_components_modal_modals__WEBPACK_IMPORTED_MODULE_5__.slideUpModal)();
  (0,_components_modal_modals__WEBPACK_IMPORTED_MODULE_5__.popUpModal)();
  // add listing stepper
});

/***/ }),

/***/ "./@modulr/scss/main.scss":
/*!********************************!*\
  !*** ./@modulr/scss/main.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./@modulr/app.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main.scss */ "./@modulr/scss/main.scss");
/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/main.js */ "./@modulr/js/main.js");


})();

/******/ })()
;
//# sourceMappingURL=main.bundle.js.map
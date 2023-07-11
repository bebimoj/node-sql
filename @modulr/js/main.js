import { carrousel } from "./components/swiper/carrousel";
import { listingGallery } from "./components/swiper/listing-gallery";
import { formField } from "./components/form/form-field";
import { togglePassword } from "./components/form/toggle-password";
import { darkLight } from "./components/theme";
// modals 
import { slideUpModal, popUpModal } from "./components/modal/modals";
$(document).ready(function(){

  // animations
  $('.swiper .home').addClass('fade-in')

  // dark light mode
  darkLight()

  // swiper 
  carrousel()
  listingGallery()
  
  // form elements
  formField()
  togglePassword()


  // modals
  slideUpModal()
  popUpModal()
  // add listing stepper

});
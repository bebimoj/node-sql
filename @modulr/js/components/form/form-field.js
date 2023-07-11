export function formField(){
  var formFields = $('.form-field')
  formFields.each(function(index, element){
    var input = $(element).find('.input')
    var label = $(element).find('label')
    var placeholder = input.data('placeholder')
    var inputVal = input.val()
    if(inputVal.length > 0){
      label.addClass('active')
    }
    input.on('change', (e) => { 
      if(input.val().length > 0){
        label.addClass('active')
      }else{
        label.removeClass('active')
      }
    })
    input.on('focus', (e) => {
      input.attr('placeholder', placeholder)
    })
    input.on('blur', (e) => {
      input.attr('placeholder', '')
    })
  })
}
export function togglePassword(){
  // toggle type
  var tgv = $('.form-field').find('.toggle-password')
  tgv.on("click", function(e){
    var input = $(this).parent().find('input')
    var show = $(this).find('.show-me')
    var hide = $(this).find('.hide-me')
    var type = input.prop('type')
    if(type === 'password'){
      type = 'text'
      show.hide()
      hide.show()
    }else{
      type = 'password'
      hide.hide()
      show.show()
    }
    input.prop('type', type)
    e.preventDefault()
  })
}
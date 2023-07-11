export function darkLight(){

  const isDark = localStorage.getItem('darkmode');
  const body = $('body');
  let dlBtn = $('.dlmode');
  let icon = dlBtn.find('.icon');
  let tooltip = dlBtn.find('.tip')

  dlBtn.click(function () {
    var light = body.hasClass('white');
    if(light){
      localStorage.setItem('darkmode', 'dark')
      body.removeClass('white').addClass('dark')
      icon.text('light_mode');
      tooltip.text('Light Mode')
    }else{
      localStorage.setItem('darkmode', 'white')
      body.removeClass('dark').addClass('white')
      icon.text('dark_mode');
      tooltip.text('Dark Mode')
    }
  });

  if (isDark === 'dark') {
    icon.text('light_mode');
    tooltip.text('Light Mode')
  } else {
    icon.text('dark_mode');
    tooltip.text('Dark Mode')
  }


}

export function colorTheme(){

}
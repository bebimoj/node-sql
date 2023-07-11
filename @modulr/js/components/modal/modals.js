import { formField } from "../form/form-field";
import { togglePassword } from "../form/toggle-password";
export function slideUpModal() {
  $('.modal-up').on("click",function (e) {
    var url = $(this).data('ctrl');
    var tmp = $(this).data('tmp');
    console.log(url)
    if (url.length > 0) {
      url = url + '/xhr/modal-up';
    } else {
      url = 'xhr/modal-up';
    }
    getData(url, 'html', { tpl: tmp });

    e.preventDefault();

  });
}

export function popUpModal(){
  $('.pop-up').on("click", function (e) {
    var url = $(this).data('ctrl');
    var tmp = $(this).data('tmp');
    if (url.length > 0) {
      url = url + '/xhr/pop-up';
    } else {
      url = 'xhr/pop-up';
    }
    getData(url, 'html', { tpl: tmp });

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
    complete: function (xhr, status) {
      console.log('completed');
    },
  });
}

function successFn(result) {
  var body = $('body');
  const scrollbar = window.innerWidth - $(document).width();
  body.css({
    'padding-right': scrollbar + 'px',
    overflow: 'hidden',
  });
  body.append(result);
  formField()
  togglePassword()
}

function errorFn(xhr, status, strErr) {
  console.log(xhr)
  console.log(status)
  console.log(strErr)
}

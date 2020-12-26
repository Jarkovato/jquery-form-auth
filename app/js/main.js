
$(function(){
  //маска телефона
  $('input[type="tel"]').mask("9 (999) 999-99-99");
  //отправка формы
  $('#form').on('submit', (function( e ) {
    const phone = $('#phone').val();
    const password = $('#password').val();
    //ajax запрос
    $.ajax({
      type: $(this).attr('method'), //тип запроса
      url: $(this).attr('action'), // адрес
      data: new FormData(this), // данные
      contentType: false, //без заголовков о контенте
      cache: false,  //отключить кэш
      processData: false, //запрет на преобразование данных в строку
      success: () => {
        alert(`Добро пожаловать! Ваш логин: ${phone}`);
      }
    })
    e.preventDefault();
  }));
})
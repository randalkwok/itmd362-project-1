$('#signup-form').on('submit',
  function(e) {
    var phone = $('#phone').val();
    var re = /\d{3}.*\d{3}.*\d{4}/;
    var email = $('#email').val();
    var re2 = /.*@.*/;
    var name = $('#name').val();
    var validPhone = false;
    var validEmail = false;
    var validName = false;
    e.preventDefault();
    if(re.test(phone))
    {
      validPhone = true;
      $('#phone-warning').remove();
    }
    else{
      if(!$('#phone-warning').length) {
        $('#phone-input').append('<li id="phone-warning">Please enter a proper phone number</li>');
      }
    }
    if(re2.test(email))
    {
      validEmail = true;
      $('#email-warning').remove();
    }
    else{
      if(!$('#email-warning').length){
        $('#email-input').append('<li id="email-warning">Please enter a proper e-mail address</li>');
      }
    }
    if(name.length > 0){
      validName = true;
      $('#name-warning').remove();
    }
    else{
      if(!$('#name-warning').length){
        $('#name-input').append('<li id="name-warning">Please enter a name</li>');
      }
    }
    if(validPhone && validEmail && validName){
      $(this).remove();
      $('body').append('<h1>Thank You For Signing Up</h1>');
    }
  }
);
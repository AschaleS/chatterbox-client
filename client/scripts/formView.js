var FormView = {

  $form: $('form'),

  initialize: function () {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function (event) {
    // Stop the browser from submitting the form
    let message = {
      username: App.username,
      text: $('#message').val(),
      roomname: $('#rooms select').val()
    };
    console.log(message);
    Parse.create(message);
    event.preventDefault();

    console.log('click!');
  },

  setStatus: function (active) {
    var status = active ? 'true' : null;
    status = null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  },

};

$('button.refresh').on('click', function (event) {
  $('#chats').html('');
  App.fetch();
});

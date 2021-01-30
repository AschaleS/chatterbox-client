var MessagesView = {

  $chats: $('#chats'),

  initialize: function () {
  },

  render: function () {
    let roomName = $('#rooms select').val();
    let messages = Messages.messagesList.filter(function filterbyName(item) {
      if (item.roomname === roomName) {
        return item;
      }
    });

    //reset message list on html page before rendering new messages
    $('#chats').html('');

    for (let i = 0; i < messages.length; i++) {
      this.renderMessage(Messages.messagesList[i]);
      let friendName = Messages.messagesList[i].username;
      if (Friends.hasOwnProperty(friendName)) {
        // Friends[friendName] = friendName;
        // console.log(friendName);
        $(`.chat:contains(${friendName})`).css('text-decoration', 'underline');
        // $('div:contains(`${friendName}`)').css('text-decoration', 'underline');
      }
    }
  },

  renderMessage: function (message) {
    if (message.username && message.text) {
      let template = MessageView.render;
      this.$chats.append(template(message));
    }
  }

};

$('#chats').on('click', '.username', function () {
  // console.log('called');
  let friendName = $(this).text();
  Friends.toggleStatus(friendName);
  addFriend(friendName);

  // addFriend($(this).text());
});



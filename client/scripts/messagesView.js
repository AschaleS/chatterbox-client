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

    for (let i = 0; i < messages.length; i++) {
      this.renderMessage(Messages.messagesList[i]);
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
  Friends.toggleStatus();
});



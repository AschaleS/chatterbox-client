var MessagesView = {

  $chats: $('#chats'),

  initialize: function () {
  },

  render: function () {
    for (let i = 0; i< Messages.messagesList.length; i++) {
      this.renderMessage(Messages.messagesList[i]);
    }
  },

  renderMessage: function (message) {
    if (message.username) {
      let template = MessageView.render;
      this.$chats.append(template(message));
    }
  }

};

$('#chats').on('click', '.username', function () {
  // console.log('called');
  Friends.toggleStatus();
});



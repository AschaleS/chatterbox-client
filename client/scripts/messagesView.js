var MessagesView = {

  $chats: $('#chats'),

  initialize: function () {
  },

  render: function () {
  },

  renderMessage: function (message) {
    let template = MessageView.render;
    this.$chats.append(template(message));
  }

};
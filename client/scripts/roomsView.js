var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function () {
  },

  render: function () {
  },

  renderRoom: function (roomname) {
    let template = MessageView.render;
    this.$select.append(template(roomname));
  }

};

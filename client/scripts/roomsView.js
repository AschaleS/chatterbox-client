var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function () {
  },

  render: function () {
  },

  renderRoom: function (roomname) {
    // let template = RoomView.render;
    this.$select.append('<option value="' + roomname + '"></option>');
  }

};

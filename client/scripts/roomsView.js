var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function () {
  },

  render: function () {
  },

  renderRoom: function (roomName) {
    let template = RoomView.render;
    this.$select.append('<option value="' + roomName + '">' + roomName + '</option>');
  }

};

$('#rooms button').on('click', function (event) {
  Rooms.add();
});


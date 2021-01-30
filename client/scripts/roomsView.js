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
  // Rooms.add();
  let roomName = $('#room').val();
  addRoom(roomName);
});

var addRoom = function (roomName) {
  if (Rooms.roomList.indexOf(roomName) === -1) {
    Rooms.roomList.push(roomName);
    RoomsView.$select.prepend('<option value="' + roomName + '">' + roomName + '</option>');
    RoomsView.$select.val(roomName);
  }
};


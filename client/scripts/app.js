var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function () {
    App.username = window.location.search.substr(10);
    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

    /* refresh = function () {
      $(document).ready(function () {
        setInterval(function () {
          App.fetch();
        }, 1000);
      });
    }; */
  },

  fetch: function (callback = () => { }) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);

      Messages.messagesList = data.results;

      let roomList = {};
      for (let i = 0; i < Messages.messagesList.length; i++) {
        let roomName = Messages.messagesList[i].roomname;
        if (roomName && !roomList[roomName]) {
          roomList[roomName] = 1;
          RoomsView.renderRoom(roomName);
        }
      }

      MessagesView.render();

      callback();
    });
  },
  startSpinner: function () {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function () {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};

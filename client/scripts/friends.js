var Friends = {
  toggleStatus: function (username) {
    /*console.log(this);
    if (!this.friends.hasOwnProperty(userName)) {
      this.friends[userName] = userName;
    }
    console.log(this.friends); */
    if (Friends[username]) {
      delete Friends[username];
    } else {
      Friends[username] = username;
    }
  }
};

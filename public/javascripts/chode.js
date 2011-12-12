Chode = (function() {
  function init() {
    $('#join').submit(joinChat);
  };

  function joinChat(evt) {
    evt.preventDefault();
    var socket = io.connect('/');
    socket.emit('set nickname', $('#nickname').val());
  }

  return {
    init : init
  };
})();

$(Chode.init);

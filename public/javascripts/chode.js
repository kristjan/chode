Chode = (function() {
  var socket;

  function init() {
    socket = io.connect('/')
    socket.on('receive message', receiveMessage);

    $('#join_chat').submit(joinChat);
    $('#send_message').submit(sendMessage);
    $('#nickname').focus();
  };

  function joinChat(evt) {
    evt.preventDefault();
    socket.emit('set nickname', $('#nickname').val());
    $('#send_message input').attr('disabled', false);
    $('#message').focus();
  }

  function sendMessage(evt) {
    evt.preventDefault();
    socket.emit('send message', $('#message').val());
    $('#message').val('');
  }

  function receiveMessage(data) {
    $('#chat').append(buildMessage(data)).scrollTop(99999999999999999);
  }

  function buildMessage(data) {
    return $('<li>', {'class' : 'clearfix'}).append(
      $('<span>').text(data.author),
      $('<p>').text(data.message)
    )
  }

  return {
    init : init
  };
})();

$(Chode.init);

/**
 * Created by Laur on 1/29/2015.
 */
var socket = io.connect('http://localhost:3000/');
socket.on('message', function (data) {
  data = JSON.parse(data);
  $('#messages').append('<div class="' + data.type + '">' + data.message +
  '</div>');
});
$(function () {
  $('#send').click(function () {
    var data = {
      message: $('#message').val(),
      type: 'userMessage'
    };
    socket.send(JSON.stringify(data));
    $('#message').val('');
  });
  // on enter send message
  $(document).keypress(function (e) {
    if (e.which == 13) $('#send').trigger('click');
  });
});
var app = angular.module('chatApp', [])

app.factory('socket', function () {
  var socket = io.connect('http://localhost:3000')
  return socket
})

app.controller('MainController', function ($scope, socket) {
  $scope.msgs = []
  $scope.sendMsg = function () {
    event.preventDefault()
    socket.emit('send msg', $scope.msgText)
    $scope.msgText = ''
  }
  socket.on('get msg', function (data) {
    $scope.msgs.push(data)
    $scope.$digest()
  })
})

var app = angular.module('chatApp', [])

app.factory('socket', function () {
  var socket = io.connect('http://dangular-app.herokuapp.com/')
  return socket
})

app.controller('MainController', function ($scope, socket) {
  $scope.msgs = []
  $scope.sendMsg = function () {
    event.preventDefault()
    socket.emit('send msg', $scope.msgText)
  }
  socket.on('get msg', function (data) {
    $scope.msgs.push(data)
    $scope.msgText = ''
    $scope.$digest()
  })
})

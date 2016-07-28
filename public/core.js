var app = angular.module('chatApp', ['ngRoute'])

app.factory('socket', function () {
  var socket = io.connect('http://localhost:3000')
  return socket
})

app.config(function ($routeProvider) {
  $routeProvider.
    when('/', {
      template: '<login></login>'
    }).
    when('/hi/:user', {
      template: '<main-chat></main-chat>'
    })
})

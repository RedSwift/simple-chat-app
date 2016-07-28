var app = angular.module('chatApp', ['ngRoute'])

app.factory('socket', function () {
  var socket = io.connect('http://dangular-app.herokuapp.com/')
  return socket
})

app.config(function ($routeProvider) {
  $routeProvider.
    when('/', {
      template: '<main-chat></main-chat'
    }).
    when('/hi', {
      template: '<h1> hi </h1>'
    })
})

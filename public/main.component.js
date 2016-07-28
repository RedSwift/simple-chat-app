angular.module('chatApp')
  .component('mainChat', {
    templateUrl: 'main.template.html',
    controller: function ($scope, $routeParams, socket) {
      var ctrl = this
      this.userName = $routeParams.user
      this.msgs = []
      this.sendMsg = function () {
        event.preventDefault()
        socket.emit('send msg', this.msgText)
        this.msgText = ''
      }
      socket.on('get msg', function (data) {
        ctrl.msgs.push(data)
        $scope.$digest()
      })
    }
  })

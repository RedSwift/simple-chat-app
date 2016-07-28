angular.module('chatApp')
  .component('mainChat', {
    templateUrl: 'main.template.html',
    controller: function ($scope, socket) {
      var ctrl = this
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

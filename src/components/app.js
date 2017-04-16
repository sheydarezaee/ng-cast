angular.module('video-player')

.controller('AppCtrl', function(youTube){
	this.videos = window.exampleVideoData;
	this.currentVideo = this.videos[0];
	this.setCurrentVideo = (video) => {
		this.currentVideo = video;
	}
})

.directive('app', function() {
  return {
    scope: {},
    restrict: 'E',
    controller: 'AppCtrl',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'src/templates/app.html'
  };

});

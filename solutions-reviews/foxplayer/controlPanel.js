/**
 * Control Panel module
 * by Tibor
 * Methods
 *  - play(url)
 *  - next
 *  - previous
 */
 var ControlPanel = (function () {
 	var trackDir = 'file:///C:/dev/greenfox/syllabus/solutions-reviews/foxplayer/server/tracks/';
 	var root = document.querySelector('#cp');
 	var prevButton = root.querySelector('.prev');
 	var nextButton = root.querySelector('.next');
 	var playButton = root.querySelector('.play');
 	var loadButton = root.querySelector('button'); // This is temporary

 	loadButton.addEventListener('click', function(){
 		load('01 Nightkraken.mp3');
 		console.log('loaded');
 	});

 	playButton.addEventListener('click', function(){
 		if( Audio.paused() ){
 			this.innerHTML = 'PAUSE';
 			Audio.play();
 		} else {
 			this.innerHTML = 'PLAY';
 			Audio.pause();
 		}
 	});

 	function load(fileName) {
		Audio.load(trackDir + fileName);
		// audio.onUpdate( logUpdate );
		// audio.onComplete(function(){
		// 	console.log('READY');
		// });
 	}

 	return {
 		// play: play
 	}
 
 })();
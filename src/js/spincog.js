function drawImage(imageObj) {
      		var stage = new Kinetic.Stage({
        		container: 'container',
        		width: 800,
        		height: 600
      		});
	      	var layer = new Kinetic.Layer();
	      	// trashcan
	      	var trashcanImage = new Kinetic.Image({
	        	image: imageObj,
	        	x: 100,
	        	y: 30,
	        	width: 80,
	        	height: 80,
	        	draggable: true,
	        	offset: {x:40, y:40}
	      	});

	      	// add cursor styling
	      	trashcanImage.on('mouseover', function() {
	        	document.body.style.cursor = 'pointer';
	      	});
	      	trashcanImage.on('mouseout', function() {
	        document.body.style.cursor = 'default';
	      	});

	      	layer.add(trashcanImage);
	      	stage.add(layer);

	      	var angularSpeed = 360 / 4;
	      	var anim = new Kinetic.Animation(function(frame) {
	      		var angleDiff = frame.timeDiff * angularSpeed / 1000;
	      		trashcanImage.rotate(angleDiff);
	      	}, layer);

	      	anim.start();
      	}
	    var imageObj = new Image();
	    imageObj.onload = function() {
	    	drawImage(this);
	    };
	    imageObj.src = '../../lib/cogwheel.png';
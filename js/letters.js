var endText = document.querySelector('.endText');
var trapDoor = 0;
var currentLetter = 1;
var openCount = 0;
var deliverCount = 0;

function envelopeOpen (){
	var letters = document.querySelectorAll('.letter');
	letters.forEach(function(written){
		if (written.classList.contains('now')){
			written.classList.remove('letter--close');
			written.classList.add('letter--open');
			written.querySelector('.paper').classList.add('paper--top');
		}
	});
	document.querySelector('.now > .deliver').classList.add('hide');
	openCount += 1;
}

function paperClose(){
	//determine if the letter was opened
	var endGame = document.querySelector('.now').classList.item(0);
	switch(endGame){
		case "five":
			document.querySelector('.five').classList.add('letter--delivered');
            document.querySelector('.five').classList.add('not-yet');
            document.body.classList.add('gameOver');
			document.querySelector('.endText').innerHTML = "You have been beheaded for conspiracy against the King";
			break;
		case "six":
			document.querySelector('.six').classList.add('letter--delivered');
            document.querySelector('.six').classList.add('not-yet');
            document.body.classList.add('gameOver');
			document.querySelector('.endText').innerHTML = "You have been beheaded for conspiracy against the King";
			break;
		case "three":
			trapDoor = 1;
			break;
	}
	document.querySelector('.letter.now').classList.remove('letter--open');
	document.querySelector('.letter.now > .paper').classList.remove('paper--top');
	document.querySelector('.letter.now').classList.add('letter--close');
	document.querySelector('.now > .deliver').classList.remove('hide');
	setTimeout(function(){
      document.querySelector('.letter.now').classList.remove('letter--close');
      deliverLetter();
	}, 400);
}

function deliverLetter (){
	deliverCount += 1;
	if (deliverCount - openCount > 3){
		document.querySelector('.now').classList.add('letter--delivered');
        document.querySelector('.now').classList.add('not-yet');
        document.body.classList.add('gameOver');
        document.querySelector('.endText').innerHTML = "You have to read more than that";
	}
	switch( currentLetter ){
		case 1:
			document.querySelector('.one').classList.add('letter--delivered');
			setTimeout(function(){
				document.querySelector('.one').classList.remove('now');
				document.querySelector('div.one .letter').classList.remove('now');
				document.querySelector('.one').classList.add('not-yet');
				document.querySelector('.two').classList.remove('not-yet');
				document.querySelector('.two').classList.add('now');
				document.querySelector('div.two .letter').classList.add('now');
			}, 1000);
			break;
		case 2:
			document.querySelector('.two').classList.add('letter--delivered');
			setTimeout(function(){
				document.querySelector('.two').classList.remove('now');
				document.querySelector('div.two .letter').classList.remove('now');
				document.querySelector('.two').classList.add('not-yet');
				document.querySelector('.three').classList.remove('not-yet');
				document.querySelector('.three').classList.add('now');
				document.querySelector('div.three .letter').classList.add('now');
			}, 1000);
			break;
		case 3:
			document.querySelector('.three').classList.add('letter--delivered');
			if (trapDoor){
				setTimeout(function(){
					document.querySelector('.three').classList.remove('now');
					document.querySelector('div.three .letter').classList.remove('now');
					document.querySelector('.three').classList.add('not-yet');
					document.querySelector('.four').classList.remove('not-yet');
					document.querySelector('.four').classList.add('now');
					document.querySelector('div.four .letter').classList.add('now');
				}, 1000);
			} else {
				document.querySelector('.three').classList.add('letter--delivered');
                document.querySelector('.three').classList.add('not-yet');
                document.body.classList.add('gameOver');
                document.querySelector('.endText').innerHTML = "You fell down a loose trap door";
			break;
			}
			break;
		case 4:
			document.querySelector('.four').classList.add('letter--delivered');
			setTimeout(function(){
				document.querySelector('.four').classList.remove('now');
				document.querySelector('div.four .letter').classList.remove('now');
				document.querySelector('.four').classList.add('not-yet');
				document.querySelector('.five').classList.remove('not-yet');
				document.querySelector('.five').classList.add('now');
				document.querySelector('div.five .letter').classList.add('now');
			}, 1000);
			break;
		case 5:
			document.querySelector('.five').classList.add('letter--delivered');
			setTimeout(function(){
				document.querySelector('.five').classList.remove('now');
				document.querySelector('div.five .letter').classList.remove('now');
				document.querySelector('.five').classList.add('not-yet');
				document.querySelector('.six').classList.remove('not-yet');
				document.querySelector('.six').classList.add('now');
				document.querySelector('div.six .letter').classList.add('now');
			}, 1000);
			break;
		case 6:
			document.querySelector('.six').classList.add('letter--delivered');
			setTimeout(function(){
				document.querySelector('.six').classList.remove('now');
				document.querySelector('div.six .letter').classList.remove('now');
				document.querySelector('.six').classList.add('not-yet');
				document.querySelector('.seven').classList.remove('not-yet');
				document.querySelector('.seven').classList.add('now');
				document.querySelector('div.seven .letter').classList.add('now');
			}, 1000);
			break;
		case 7:
			document.querySelector('.seven').classList.add('letter--delivered');
			setTimeout(function(){
				document.querySelector('.seven').classList.remove('now');
				document.querySelector('div.seven .letter').classList.remove('now');
				document.querySelector('.seven').classList.add('not-yet');
				document.querySelector('.eight').classList.remove('not-yet');
				document.querySelector('.eight').classList.add('now');
				document.querySelector('div.eight .letter').classList.add('now');
				document.querySelector('.now > .deliver').classList.add('hide');
			}, 1000);
			break;
	}
	currentLetter = currentLetter + 1
}
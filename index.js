const playButton = document.getElementsByClassName('playButton');

document.addEventListener('keydown',addKeyboardHandler)

function addKeyboardHandler(e){
	const keycode = e.keyCode;
	switch(keycode){
		case 65:
			playSound('boom',playButton[0]);
			break;
		case 83:
			playSound('clap',playButton[1]);
			break;
		case 68:
			playSound('hihat',playButton[2]);
			break;
		case 70:
			playSound('kick',playButton[3]);
			break;
		case 71:
			playSound('openhat',playButton[4]);
			break;
		case 72:
			playSound('ride',playButton[5]);
			break;
		case 74:
			playSound('snare',playButton[6]);
			break;
		case 75:
			playSound('tink',playButton[7]);
			break;
		case 76:
			playSound('tom',playButton[8]);
			break;
		default:
			console.log('Please input from the given selections')
	}
}

[...playButton].forEach(button=>{
	button.addEventListener('click',addSound);
})

function addSound(e){
	const sound = this.children[1]['textContent'];
	playSound(sound,this);
}

function playSound(sound,target){
	if(!target){
		target = document.getElementById('sound')
	}
	const audio = document.getElementById(sound);
	target.classList.add('playing')
	audio.currentTime = 0;
	audio.play();
	setTimeout(()=>target.classList.remove('playing'),300)
}
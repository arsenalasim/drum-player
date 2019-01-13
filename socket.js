import io from 'socket.io-client';
import {playSound} from './index'

class Socket{
	constructor(){
		this.socket = io.connect('localhost:8000');
	}

	emitMessage(message){
		this.socket.emit('send:sound',message);
	}
	listenMessage(){
		this.socket.on('receive:sound', function (data) {
    	 	playSound(data.sound)	
 	})
	}
}

export default new Socket();
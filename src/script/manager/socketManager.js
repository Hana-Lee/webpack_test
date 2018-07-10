class SocketManager {
	constructor(options) {
		console.log('initialize socket manager', options);
		this._stomp = null;
		this._connect(options);
	}
	_connect(options) {
		this._stomp = {
			test: options.name
		};
	}
	print() {
		console.log(this._stomp);
	}
};

export default SocketManager;
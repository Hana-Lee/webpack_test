import socketManager from './manager/socketManager';

class TestApp {
	constructor() {
		console.log('initialize test app');
		this.sm = new socketManager({
			name: 'test app'
		});
	}
	getName() {
		this.sm.print();
	}
}

export default TestApp;
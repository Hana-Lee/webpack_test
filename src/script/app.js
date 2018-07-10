import socketManager from './manager/socketManager';
import testApp from './test';
import _ from 'lodash';

export default class TeamworkApp {
	constructor(options) {
		console.log('team work app initialized')
		this.sm = new socketManager(options);
		const ta = new testApp();
		this.getName();
		ta.getName();
		console.log('lodash version:', _.VERSION);
		console.log('webix version', webix.version);
	}

	getName() {
		console.log('lhn')
		this.sm.print();
	}
}
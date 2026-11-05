class BaseElement extends HTMLElement {
	constructor() {
		super();

		this.outputElement = this;
	}

	receieveData(type, data) {
		if (data instanceof Function) {
			data();
		}
	}

	dataLadderTop(type, data) {
		if (!(this.parentElement instanceof BaseElement)) {
			this.receieveData(type, data);
			return;
		}
		this.parentElement.dataLadderTop(type, data);
	}

	dataLadderUp(count, type, data) {
		if (count === 0) {
			this.receieveData(type, data);
			return;
		}
		if (!(this.parentElement instanceof BaseElement)) return;
		count--;
		this.parentElement.dataLadderUp(count, type, data);
	}

	dataLadder(type, data) {
		if (!(this.parentElement instanceof BaseElement)) return;
		this.parentElement.receieveData(type, data);
	}

	callBack() {
		if (!(this.parentElement instanceof BaseElement)) return new Promise(reject => { reject(); });
		return new Promise(resolve => {
			this.outputElement = this.parentElement;
			resolve();
		});
	}

	callBackTop() {
		if (!(this.outputElement.parentElement instanceof BaseElement)) return new Promise(resolve => {
			resolve();
		});
		this.outputElement = this.outputElement.parentElement;
		this.callBackTop()
	}
	callBackUp(count) {
		if (!(this.outputElement.parentElement instanceof BaseElement)) return new Promise(reject => { reject(); });
		if (count === 0) {
			return new Promise(resolve => {
				resolve();
			});
		}
		count--;
		this.outputElement = this.outputElement.parentElement;
		this.callBackUp(count);
	}
}

export {BaseElement};
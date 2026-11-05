import { BaseElement } from "./BaseElement.js";

class TestElement2 extends BaseElement {

	receieveData(type, data) {
		console.log("(" + this.id + ") "  + type + ": " + data);
	}

}

export {TestElement2}
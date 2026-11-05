import {BaseElement} from "./BaseElement.js";

class TestElement1 extends BaseElement {
	constructor() {
		super();

		console.log("Testelement1 created");

		this.addEventListener("click", async () => {
			await this.callBackUp(2);
			console.log(this.outputElement.id);
			this.dataLadderTop("Test1", "hej");
			this.dataLadderUp(2, "Test2", "med");
			this.dataLadder("Test3", "dig");

		});
	}

	
}

export {TestElement1};
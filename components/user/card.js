class Card extends HTMLElement {
	constructor() {
		super();

		this.attachShadow({mode: "open"});

		this.shadowRoot.innerHTML = `
			<style>
				:host {
					display: flex;
				}
				div {
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					text-align: center;
				}
				div p {
					margin: 0 0 0 16px;
				}
				.username {
					font-size: 2.5rem;
					font-weight: bold;
				}
				.location {
					font-size: 2.3125rem;
				}
				
			</style>

			<user-avatar icon="" aria-hidden="true"></user-avatar>
			<div>
				<p class="username"></p>
				<p class="location"></p>
			</div>
		`;
	}

	connectedCallback() {
		this.update();
	}

	attributeChangedCallback(property, nv, ov) {
		if (nv === ov) return;
		this.update();
	}

	update() {
		this.shadowRoot.querySelector("user-avatar").setAttribute("icon", this.getAttribute("avatar"));
		this.shadowRoot.querySelector(".username").textContent = this.getAttribute("name") || "Anonym person";
		this.shadowRoot.querySelector(".location").textContent = this.getAttribute("location") || "";
	}

	static observedAttributes = ["name", "location", "avatar"];
}

export { Card };
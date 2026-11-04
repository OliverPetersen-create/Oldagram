class Avatar extends HTMLElement {

	constructor() {
		super();

		this.attachShadow({mode: "open"});

		this.shadowRoot.innerHTML = `
			<style>
				:host {
					width: 6.25rem;
					height: 6.25rem;
				}
				img {
					width: 100%;
					height: 100%;
					border-radius: 50%;
					align-self: center;
				}
			</style>

			<img src="" alt="">
		`;
	}

	connectedCallback() {
		this.updateIcon();
	}

	attributeChangedCallback(property, oldValue, newValue) {
		if (oldValue === newValue) return;
		this.updateIcon(newValue);
	}

	updateIcon(newIcon) {
		if (newIcon == null) return;
		this.shadowRoot.querySelector("img").src = newIcon;
	}

	static observedAttributes = ["icon"];
}

export { Avatar };
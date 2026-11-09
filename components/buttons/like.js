class Like extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({mode: "open"});

		this.shadowRoot.innerHTML = `
			<style>
				:host, button {
					transition: transform 0.25s;
				}
				img, button {
					width: 4rem;
					height: 4rem;
				}
				button {
					padding: 0;
					margin: 0;
					background: transparent;
					border: none;
				}
				:host(:hover), button:focus-visible {
					transform: scale(1.05) translateY(-5px);
				}
				:host(:active) {
					transform: scale(0.95) translateY(-5px);
				}
			</style>
			<button type="button" aria-label="Like post">
				<img src="images/icon-heart.png" alt="" draggable="false" />
			</button>
		`;

		this.shadowRoot.querySelector("button").addEventListener("click", () => {
			this.dispatchEvent(new CustomEvent("post-like", {
				bubbles: true
			}));
		});
	}
}

export { Like }
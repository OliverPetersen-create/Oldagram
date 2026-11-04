import { posts } from "../../posts.js";

class Like extends HTMLElement {
	constructor() {
		super();
		this.setAttribute("role", "button");
		this.setAttribute("tabIndex", 0);
		this.setAttribute("aria-label", "Heart-shaped like button");
		this.attachShadow({mode: "open"});

		this.addEventListener("click", e => {
			const postId = this.getAttribute("for")
			posts[postId].likes++;
			document.querySelector("#" + this.getAttribute("likecounter")).textContent = `${new Intl.NumberFormat().format(posts[postId].likes)} likes`;
		});
		this.addEventListener("keydown", e => {
			if (e.key !== " " && e.key !== "Enter") return;
			e.preventDefault();
			const postId = this.getAttribute("for")
			posts[postId].likes++;
			document.querySelector("#" + this.getAttribute("likecounter")).textContent = `${new Intl.NumberFormat().format(posts[postId].likes)} likes`;
		});

		this.shadowRoot.innerHTML = `
			<style>
				:host {
					transition: transform 0.25s;
				}
				img {
					width: 4rem;
					height: 4rem;
				}
				:host(:hover), :host(:focus) {
					transform: scale(1.05) translateY(-5px);
					cursor: pointer;
				}
				:host(:active) {
					transform: scale(0.95) translateY(-5px);
				}
			</style>

			<img src="images/icon-heart.png" alt="" draggable="false" />
		`;
	}
}

export { Like }
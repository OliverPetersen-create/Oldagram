import { Avatar } from "./components/user/avatar.js";
import { Card } from "./components/user/card.js";
import { Like } from "./components/buttons/like.js";
import { posts } from "./posts.js";

const section = document.querySelector("section");

loadPosts();

function loadPosts() {
	let html = "";
	for (let i = 0; i < posts.length; i++) {
		html += `
		<article>
			<user-card name="${posts[i].name}" location="${posts[i].location}" avatar="${posts[i].avatar}"></user-card>
			<img class="post-image" src="${posts[i].post}" alt="" />
			<div class="post-button-div">
				<like-button class="post-button" for="${i}" likecounter="post-${i}-likes"></like-button>
				<img role="button" tabIndex="0" class="post-button" src="images/icon-comment.png" alt="Speech bubble-shaped comment button" draggable="false" />
				<img role="button" tabIndex="0" class="post-button" src="images/icon-dm.png" alt="Paper airplane-shaped DM button" draggable="false" />
			</div>
			<p id="post-${i}-likes" class="post-likes" aria-live="polite">${new Intl.NumberFormat().format(posts[i].likes)} likes</p>
			<p class="post-comment">${posts[i].username} ${posts[i].comment}</p>
		</article>
		`
	}
	section.innerHTML = html;
}

customElements.define("user-avatar", Avatar);
customElements.define("user-card", Card);
customElements.define("like-button", Like);
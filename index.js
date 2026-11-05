import { Avatar } from "./components/user/avatar.js";
import { Card } from "./components/user/card.js";
import { Like } from "./components/buttons/like.js";
import { posts } from "./posts.js";

import { TestElement1 } from "./test/TestElement1.js";
import { TestElement2 } from "./test/TestElement2.js";

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
	html += `
		<testelement-2 id="first">
			<testelement-2 id="second">
				<testelement-2 id="third">
					<testelement-1></testelement-1>
				</testelement-2>
			</testelement-2>
		</testelement-2>
	`;
	section.innerHTML = html;
}

customElements.define("user-avatar", Avatar);
customElements.define("user-card", Card);
customElements.define("like-button", Like);
customElements.define("testelement-1", TestElement1);
customElements.define("testelement-2", TestElement2);
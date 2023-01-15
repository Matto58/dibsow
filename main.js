let pg = startPage;
let pageTitle = "";

function loadPage(inx) {
	if (inx < 0 || inx >= panelItems.length)
		return null;

	let sidepanel = "", content = "";
	let item = panelItems[inx];

	for (let i in panelItems) {
		console.log(i);
		sidepanel += `<p class="sidepanelitem largest"><a href="#" onclick="pg=${i};load()">${panelItems[i].title}</a></p>\n`;
	}
	for (let c of item.content) {
		content += `<p class="${c.size}">${c.cont}</p>`;
	}
	
	return [sidepanel, content];
}

function load() {
	let p = loadPage(pg);
	if (p) {
		document.getElementById("sidepanel").innerHTML = p[0];
		document.getElementById("content").innerHTML = p[1];
		console.log(document.getElementById("sidepanel"));
		console.log(document.getElementById("content"));
	}
	else {
		console.error(`invalid page id! (${page})`);
		alert(`Error: invalid page id! (${page})`);
	}
}
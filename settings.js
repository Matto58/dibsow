const startPage = 0;

const panelItems = [
	{
		title: "Home",
		content: [
			{size: "larger", cont: "Welcome to DIBSOW!", bold: true},
			{size: "medium", cont: "DIBSOW Is Big Screen On the Web (that's what DIBSOW stands for)."},
			{size: "medium", cont: "It is designed to be somewhat-similar to Kodi."},
			{size: "medium", cont: "<a href=\"https://github.com/Matto58/dibsow\">Check it out on GitHub!</a>", bold: true},
		]
	},
	{
		title: "Example 1",
		content: [
			{size: "larger", cont: "Example 1!", bold: true},
			{size: "medium", cont: (
				"var $v=hello<br>" +
				"func.start f<br>" +
				"con.out nl $v<br>" +
				"func.end<br>" +
				"if $v eq hello f"
			), codeBlock: true},
			{size: "largest", cont: "Largest text possible!", bold: true},
			{size: "small", cont: "Smallest text possible!"},
			{size: "medium", cont: "Bold!", bold: true},
			{size: "medium", cont: "Italic!", italic: true},
			{size: "medium", cont: "Bold & Italic!", bold: true, italic: true},
		]
	},
	{
		title: "About",
		content: [
			{size: "larger", cont: "About DIBSOW", bold: true},
			{size: "medium", cont: "DIBSOW, version v1.0.0-dev"},
			{size: "medium", cont: "Made with <3 by <a href=\"https://github.com/Matto58\">Matto</a>"},
		]
	},
];
import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_ogrvkZIj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"ddr-memory\">DDR Memory</h2>\n<p>DDR, or Double Data Rate, is the stadard used for modern SDRAM, or Sychronous Dynamic Random Access Memory. This article assumes that you know about RAM, what it is and what it is used for. The point of this is to give standards, explain the differences, and help to prepare for the A+ test.</p>\n<p>So what does Double Data Rate mean? If you think of the clock speed as a square wave then the data is transmitted on the rise of the clock signal in a single data rate transmission. For the double data rate you use the rise and fall of the clock signal’s square wave.</p>\n<p>The double in the data rate says nothing of the memory speed or bandwidth. In modern times DDR is the standard for pretty much all RAM.</p>\n<p>So what are the different types of DDR memory?</p>\n<h2 id=\"types-of-ddr-memory\">Types of DDR Memory</h2>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>RAM Type</th><th>Speed</th><th>Pins</th><th>bandwidth</th></tr></thead><tbody><tr><td>SDRAM</td><td></td><td>168</td><td></td></tr><tr><td>DDR1</td><td></td><td>184</td><td></td></tr><tr><td>DDR2</td><td></td><td>240</td><td></td></tr><tr><td>DDR3</td><td></td><td>240</td><td></td></tr><tr><td>DDR4</td><td></td><td>288</td><td></td></tr><tr><td>DDR5</td><td></td><td>288</td><td></td></tr></tbody></table>";

				const frontmatter = {"title":"DDR Memory standards","description":"This is a brief explanation and description of the DDR standards for the A+ test","author":"Chris Carlin","draft":true};
				const file = "C:/Users/meatw/source/repos/brunscii/astro-blog-site/src/content/blog/APlusTerms/Hardware/memoryBasics.md";
				const url = undefined;
				function rawContent() {
					return "\r\n## DDR Memory\r\n\r\nDDR, or Double Data Rate, is the stadard used for modern SDRAM, or Sychronous Dynamic Random Access Memory. This article assumes that you know about RAM, what it is and what it is used for. The point of this is to give standards, explain the differences, and help to prepare for the A+ test.\r\n\r\nSo what does Double Data Rate mean? If you think of the clock speed as a square wave then the data is transmitted on the rise of the clock signal in a single data rate transmission. For the double data rate you use the rise and fall of the clock signal's square wave. \r\n\r\nThe double in the data rate says nothing of the memory speed or bandwidth. In modern times DDR is the standard for pretty much all RAM. \r\n\r\nSo what are the different types of DDR memory?\r\n\r\n## Types of DDR Memory\r\n\r\n| RAM Type | Speed | Pins | bandwidth |\r\n| ---      | ---   | ---  | ---       |\r\n| SDRAM    |  | 168| |\r\n| DDR1     |  | 184| |\r\n| DDR2     |  | 240 | |\r\n| DDR3     |  | 240 | |\r\n| DDR4     |  | 288 | |\r\n| DDR5     |  | 288 | |";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"ddr-memory","text":"DDR Memory"},{"depth":2,"slug":"types-of-ddr-memory","text":"Types of DDR Memory"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };

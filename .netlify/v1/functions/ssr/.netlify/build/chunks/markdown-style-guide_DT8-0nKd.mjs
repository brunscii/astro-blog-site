import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_ogrvkZIj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Here is a sample of some basic Markdown syntax that can be used when writing Markdown content in Astro.</p>\n<h2 id=\"headings\">Headings</h2>\n<p>The following HTML <code>&#x3C;h1></code>—<code>&#x3C;h6></code> elements represent six levels of section headings. <code>&#x3C;h1></code> is the highest section level while <code>&#x3C;h6></code> is the lowest.</p>\n<h1 id=\"h1\">H1</h1>\n<h2 id=\"h2\">H2</h2>\n<h3 id=\"h3\">H3</h3>\n<h4 id=\"h4\">H4</h4>\n<h5 id=\"h5\">H5</h5>\n<h6 id=\"h6\">H6</h6>\n<h2 id=\"paragraph\">Paragraph</h2>\n<p>Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.</p>\n<p>Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.</p>\n<h2 id=\"images\">Images</h2>\n<p><img src=\"/placeholder-social.jpg\" alt=\"This is a placeholder image description\"></p>\n<h2 id=\"blockquotes\">Blockquotes</h2>\n<p>The blockquote element represents content that is quoted from another source, optionally with a citation which must be within a <code>footer</code> or <code>cite</code> element, and optionally with in-line changes such as annotations and abbreviations.</p>\n<h4 id=\"blockquote-without-attribution\">Blockquote without attribution</h4>\n<blockquote>\n<p>Tiam, ad mint andaepu dandae nostion secatur sequo quae.<br>\n<strong>Note</strong> that you can use <em>Markdown syntax</em> within a blockquote.</p>\n</blockquote>\n<h4 id=\"blockquote-with-attribution\">Blockquote with attribution</h4>\n<blockquote>\n<p>Don’t communicate by sharing memory, share memory by communicating.<br>\r\n— <cite>Rob Pike<sup><a href=\"#user-content-fn-1\" id=\"user-content-fnref-1\" data-footnote-ref=\"\" aria-describedby=\"footnote-label\">1</a></sup></cite></p>\n</blockquote>\n<h2 id=\"tables\">Tables</h2>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>Italics</th><th>Bold</th><th>Code</th></tr></thead><tbody><tr><td><em>italics</em></td><td><strong>bold</strong></td><td><code>code</code></td></tr></tbody></table>\n<h2 id=\"code-blocks\">Code Blocks</h2>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"html\"><code><span class=\"line\"><span style=\"color:#E1E4E8\">&#x3C;!</span><span style=\"color:#85E89D\">DOCTYPE</span><span style=\"color:#B392F0\"> html</span><span style=\"color:#E1E4E8\">></span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">&#x3C;</span><span style=\"color:#85E89D\">html</span><span style=\"color:#B392F0\"> lang</span><span style=\"color:#E1E4E8\">=</span><span style=\"color:#9ECBFF\">\"en\"</span><span style=\"color:#E1E4E8\">></span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">  &#x3C;</span><span style=\"color:#85E89D\">head</span><span style=\"color:#E1E4E8\">></span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">    &#x3C;</span><span style=\"color:#85E89D\">meta</span><span style=\"color:#B392F0\"> charset</span><span style=\"color:#E1E4E8\">=</span><span style=\"color:#9ECBFF\">\"utf-8\"</span><span style=\"color:#E1E4E8\"> /></span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">    &#x3C;</span><span style=\"color:#85E89D\">title</span><span style=\"color:#E1E4E8\">>Example HTML5 Document&#x3C;/</span><span style=\"color:#85E89D\">title</span><span style=\"color:#E1E4E8\">></span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">  &#x3C;/</span><span style=\"color:#85E89D\">head</span><span style=\"color:#E1E4E8\">></span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">  &#x3C;</span><span style=\"color:#85E89D\">body</span><span style=\"color:#E1E4E8\">></span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">    &#x3C;</span><span style=\"color:#85E89D\">p</span><span style=\"color:#E1E4E8\">>Test&#x3C;/</span><span style=\"color:#85E89D\">p</span><span style=\"color:#E1E4E8\">></span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">  &#x3C;/</span><span style=\"color:#85E89D\">body</span><span style=\"color:#E1E4E8\">></span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">&#x3C;/</span><span style=\"color:#85E89D\">html</span><span style=\"color:#E1E4E8\">></span></span>\n<span class=\"line\"></span></code></pre>\n<h2 id=\"list-types\">List Types</h2>\n<h4 id=\"ordered-list\">Ordered List</h4>\n<ol>\n<li>First item</li>\n<li>Second item</li>\n<li>Third item</li>\n</ol>\n<h4 id=\"unordered-list\">Unordered List</h4>\n<ul>\n<li>List item</li>\n<li>Another item</li>\n<li>And another item</li>\n</ul>\n<h4 id=\"nested-list\">Nested list</h4>\n<ul>\n<li>Fruit\n<ul>\n<li>Apple</li>\n<li>Orange</li>\n<li>Banana</li>\n</ul>\n</li>\n<li>Dairy\n<ul>\n<li>Milk</li>\n<li>Cheese</li>\n</ul>\n</li>\n</ul>\n<h2 id=\"other-elements--abbr-sub-sup-kbd-mark\">Other Elements — abbr, sub, sup, kbd, mark</h2>\n<p><abbr title=\"Graphics Interchange Format\">GIF</abbr> is a bitmap image format.</p>\n<p>H<sub>2</sub>O</p>\n<p>X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup></p>\n<p>Press <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd></kbd> to end the session.</p>\n<p>Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.</p>\n<section data-footnotes=\"\" class=\"footnotes\"><h2 class=\"sr-only\" id=\"footnote-label\">Footnotes</h2>\n<ol>\n<li id=\"user-content-fn-1\">\n<p>The above quote is excerpted from Rob Pike’s <a href=\"https://www.youtube.com/watch?v=PAAkCSZUG1c\">talk</a> during Gopherfest, November 18, 2015. <a href=\"#user-content-fnref-1\" data-footnote-backref=\"\" aria-label=\"Back to reference 1\" class=\"data-footnote-backref\">↩</a></p>\n</li>\n</ol>\n</section>";

				const frontmatter = {"title":"Markdown Style Guide","description":"Here is a sample of some basic Markdown syntax that can be used when writing Markdown content in Astro.","pubDate":"Jul 01 2022","category":"MD Tutorial"};
				const file = "C:/Users/meatw/source/repos/brunscii/astro-blog-site/src/content/blog/markdown-style-guide.md";
				const url = undefined;
				function rawContent() {
					return "\r\nHere is a sample of some basic Markdown syntax that can be used when writing Markdown content in Astro.\r\n\r\n## Headings\r\n\r\nThe following HTML `<h1>`—`<h6>` elements represent six levels of section headings. `<h1>` is the highest section level while `<h6>` is the lowest.\r\n\r\n# H1\r\n\r\n## H2\r\n\r\n### H3\r\n\r\n#### H4\r\n\r\n##### H5\r\n\r\n###### H6\r\n\r\n## Paragraph\r\n\r\nXerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.\r\n\r\nItatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.\r\n\r\n## Images\r\n\r\n![This is a placeholder image description](/placeholder-social.jpg)\r\n\r\n## Blockquotes\r\n\r\nThe blockquote element represents content that is quoted from another source, optionally with a citation which must be within a `footer` or `cite` element, and optionally with in-line changes such as annotations and abbreviations.\r\n\r\n#### Blockquote without attribution\r\n\r\n> Tiam, ad mint andaepu dandae nostion secatur sequo quae.  \r\n> **Note** that you can use _Markdown syntax_ within a blockquote.\r\n\r\n#### Blockquote with attribution\r\n\r\n> Don't communicate by sharing memory, share memory by communicating.<br>\r\n> — <cite>Rob Pike[^1]</cite>\r\n\r\n[^1]: The above quote is excerpted from Rob Pike's [talk](https://www.youtube.com/watch?v=PAAkCSZUG1c) during Gopherfest, November 18, 2015.\r\n\r\n## Tables\r\n\r\n| Italics   | Bold     | Code   |\r\n| --------- | -------- | ------ |\r\n| _italics_ | **bold** | `code` |\r\n\r\n## Code Blocks\r\n\r\n```html\r\n<!DOCTYPE html>\r\n<html lang=\"en\">\r\n  <head>\r\n    <meta charset=\"utf-8\" />\r\n    <title>Example HTML5 Document</title>\r\n  </head>\r\n  <body>\r\n    <p>Test</p>\r\n  </body>\r\n</html>\r\n```\r\n\r\n## List Types\r\n\r\n#### Ordered List\r\n\r\n1. First item\r\n2. Second item\r\n3. Third item\r\n\r\n#### Unordered List\r\n\r\n- List item\r\n- Another item\r\n- And another item\r\n\r\n#### Nested list\r\n\r\n- Fruit\r\n  - Apple\r\n  - Orange\r\n  - Banana\r\n- Dairy\r\n  - Milk\r\n  - Cheese\r\n\r\n## Other Elements — abbr, sub, sup, kbd, mark\r\n\r\n<abbr title=\"Graphics Interchange Format\">GIF</abbr> is a bitmap image format.\r\n\r\nH<sub>2</sub>O\r\n\r\nX<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>\r\n\r\nPress <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd></kbd> to end the session.\r\n\r\nMost <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"headings","text":"Headings"},{"depth":1,"slug":"h1","text":"H1"},{"depth":2,"slug":"h2","text":"H2"},{"depth":3,"slug":"h3","text":"H3"},{"depth":4,"slug":"h4","text":"H4"},{"depth":5,"slug":"h5","text":"H5"},{"depth":6,"slug":"h6","text":"H6"},{"depth":2,"slug":"paragraph","text":"Paragraph"},{"depth":2,"slug":"images","text":"Images"},{"depth":2,"slug":"blockquotes","text":"Blockquotes"},{"depth":4,"slug":"blockquote-without-attribution","text":"Blockquote without attribution"},{"depth":4,"slug":"blockquote-with-attribution","text":"Blockquote with attribution"},{"depth":2,"slug":"tables","text":"Tables"},{"depth":2,"slug":"code-blocks","text":"Code Blocks"},{"depth":2,"slug":"list-types","text":"List Types"},{"depth":4,"slug":"ordered-list","text":"Ordered List"},{"depth":4,"slug":"unordered-list","text":"Unordered List"},{"depth":4,"slug":"nested-list","text":"Nested list"},{"depth":2,"slug":"other-elements--abbr-sub-sup-kbd-mark","text":"Other Elements — abbr, sub, sup, kbd, mark"},{"depth":2,"slug":"footnote-label","text":"Footnotes"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };

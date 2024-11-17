import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_ogrvkZIj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"what-is-it\">What is it?</h2>\n<p>fzf is a linux tool that allows you to perform fuzzy finds in directories.\r\nIt will provide you with an interactive search that searches while you type.\r\nWhy is this good? It allows for you to quickly open a file or find a file without having to remember or even navigate through your file structure.</p>";

				const frontmatter = {"title":"fzf","description":"Command line tool for performing a fuzzy search for files and folders","pubDate":"9/07/24","category":"Review","draft":false};
				const file = "C:/Users/meatw/source/repos/brunscii/astro-blog-site/src/content/blog/Apps/fzf.md";
				const url = undefined;
				function rawContent() {
					return "\r\n\r\n## What is it?\r\n\r\nfzf is a linux tool that allows you to perform fuzzy finds in directories. \r\nIt will provide you with an interactive search that searches while you type. \r\nWhy is this good? It allows for you to quickly open a file or find a file without having to remember or even navigate through your file structure.\r\n\r\n\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"what-is-it","text":"What is it?"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };

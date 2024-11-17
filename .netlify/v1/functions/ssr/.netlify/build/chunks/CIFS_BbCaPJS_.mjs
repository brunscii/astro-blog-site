import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_ogrvkZIj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"what-is-it\">What is it?</h2>\n<p>CIFS, or common internet file system, is a form of IP based file sharing protocol.\r\nIt has since been replaced with SMB and NFS.</p>\n<p>Basically speaking, CIFS is a way of having a network shared set of files that can be accessed by authenticated users. Imaging a network shared folder being accessed by a user on the network.</p>";

				const frontmatter = {"title":"CIFS","description":"Common Internet File System","author":"Chris Carlin","draft":true};
				const file = "C:/Users/meatw/source/repos/brunscii/astro-blog-site/src/content/blog/APlusTerms/Networking/Files/CIFS.md";
				const url = undefined;
				function rawContent() {
					return "\r\n## What is it?\r\nCIFS, or common internet file system, is a form of IP based file sharing protocol. \r\nIt has since been replaced with SMB and NFS.\r\n\r\nBasically speaking, CIFS is a way of having a network shared set of files that can be accessed by authenticated users. Imaging a network shared folder being accessed by a user on the network.";
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

import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_ogrvkZIj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"what-is-it\">What is it?</h2>\n<p>SMB, or Server Message Block, is a network protocol for sharing folders and files between a server and client. It started as a Microsoft standard for sharing files over a network but was quickly adapted by the linux community as something called SAMBA. A dialect is the version of the standard, for instance CIFS is a dialect of SMB.</p>\n<p>SMB is an application layer protocol that works on a client server basis.\r\nIt requires a configured SMB server and a client computer that has SMB enables.</p>\n<h2 id=\"how-it-works\">How it works</h2>\n<p>As a server-client style of application layer protocol, SMB relies on having both a server and client in order to work. So how does the client communicate with the server and how does it all work?</p>\n<p>The first step is for the client and server to establish a NetBIOS connection. This allows for communication. This starts with he client creating a full-duplex TCP connection with the server. Once the connection is established the client sends the NetBIOS request to the server over the TCP connection. If all goes well then the server sends back an acknowledgment of the connection.</p>\n<p>They then negotiate for a SMB dialect. A dialect is a version of SMB and each version could have a different set of instructions and features. We don’t want to call a feature that the server can’t understand and vice versa so it automatically determines the best dialect, or version, for communication.</p>\n<p>Next is authentication. The client must log into the server if required.</p>\n<p>The client then connects to a share, folder, on the server.</p>\n<p>From there the client can open a file in the share and read it’s contents, or just browse the shared directory.</p>\n<h2 id=\"smb-in-linux\">SMB in Linux</h2>\n<p>Being a MS technology, SMB is closed source. That being said, the crafy linux user base developed a solution. SAMBA.</p>\n<h2 id=\"vulnerability\">Vulnerability</h2>\n<p>EternalBlue is an exploit that allows for remote code execution on a vulnerable machine that’s running SMBv1. It was reported and patched in 2017, though there are still computers at risk to this day. EternalBlue was used to make the WannaCry ransomware</p>";

				const frontmatter = {"title":"SMB","description":"Server Message Block","author":"Chris Carlin","draft":true};
				const file = "C:/Users/meatw/source/repos/brunscii/astro-blog-site/src/content/blog/APlusTerms/Networking/Files/SMB.md";
				const url = undefined;
				function rawContent() {
					return "\r\n## What is it?\r\n\r\nSMB, or Server Message Block, is a network protocol for sharing folders and files between a server and client. It started as a Microsoft standard for sharing files over a network but was quickly adapted by the linux community as something called SAMBA. A dialect is the version of the standard, for instance CIFS is a dialect of SMB. \r\n\r\nSMB is an application layer protocol that works on a client server basis.\r\nIt requires a configured SMB server and a client computer that has SMB enables.\r\n\r\n## How it works\r\n\r\nAs a server-client style of application layer protocol, SMB relies on having both a server and client in order to work. So how does the client communicate with the server and how does it all work?\r\n\r\nThe first step is for the client and server to establish a NetBIOS connection. This allows for communication. This starts with he client creating a full-duplex TCP connection with the server. Once the connection is established the client sends the NetBIOS request to the server over the TCP connection. If all goes well then the server sends back an acknowledgment of the connection. \r\n\r\nThey then negotiate for a SMB dialect. A dialect is a version of SMB and each version could have a different set of instructions and features. We don't want to call a feature that the server can't understand and vice versa so it automatically determines the best dialect, or version, for communication.\r\n\r\nNext is authentication. The client must log into the server if required.\r\n\r\nThe client then connects to a share, folder, on the server.\r\n\r\nFrom there the client can open a file in the share and read it's contents, or just browse the shared directory.\r\n\r\n## SMB in Linux\r\n\r\nBeing a MS technology, SMB is closed source. That being said, the crafy linux user base developed a solution. SAMBA.\r\n\r\n## Vulnerability\r\n\r\nEternalBlue is an exploit that allows for remote code execution on a vulnerable machine that's running SMBv1. It was reported and patched in 2017, though there are still computers at risk to this day. EternalBlue was used to make the WannaCry ransomware\r\n\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"what-is-it","text":"What is it?"},{"depth":2,"slug":"how-it-works","text":"How it works"},{"depth":2,"slug":"smb-in-linux","text":"SMB in Linux"},{"depth":2,"slug":"vulnerability","text":"Vulnerability"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };

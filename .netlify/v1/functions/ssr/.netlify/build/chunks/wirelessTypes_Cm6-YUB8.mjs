import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_ogrvkZIj.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"wifi-types\">Wifi Types</h2>\n<p>There have been many iterations of the IEEE 802.11 standard over the years. This is the standard that is used for Wi-Fi devices and how they connect to one another.</p>\n<p>The following chart shows the different Wi-Fi iterations, link rate, and their radio frequencies:</p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>Generation / Version</th><th>IEEE Standard</th><th>Adopted</th><th>Maximum link rate (Mbit/s)</th><th>Radio frequency (GHz)</th><th>Range (feet) Indoor - Outdoor</th></tr></thead><tbody><tr><td>0</td><td>802.11</td><td>1997</td><td>1 to 2</td><td>2.4</td><td>66 - 330</td></tr><tr><td>1</td><td>802.11b</td><td>1999</td><td>1 to 11</td><td>2.4</td><td>115 - 460</td></tr><tr><td>2</td><td>802.11a</td><td>1999</td><td>6 to 54</td><td>5</td><td>115 - 390</td></tr><tr><td>3</td><td>802.11g</td><td>2003</td><td>6 to 54</td><td>2.4</td><td>125 - 460</td></tr><tr><td>4</td><td>802.11n</td><td>2008</td><td>72 to 600</td><td>2.4/5</td><td>230 - 820</td></tr><tr><td>5</td><td>802.11ac</td><td>2014</td><td>433 to 6933</td><td>5[5]</td><td>150 - 315</td></tr><tr><td>6</td><td>802.11ax</td><td>2019</td><td>574 to 9608[3]</td><td>2.4/5</td><td>98 - 390</td></tr><tr><td>6E</td><td>802.11ax</td><td>2020</td><td>574 to 9608[3]</td><td>6[4]</td><td>98 - 390</td></tr><tr><td>7</td><td>802.11be</td><td>TBD</td><td>1376 to 46120</td><td>2.4/5/6</td><td>98 - 390</td></tr></tbody></table>\n<p>Most Wireless devices made now have wi-fi 5 or 6, that is AC or AX. Most AC routers can also support older standards like n and g. This is similar to how the g routers supported b eventhough most devices didnt use it by that time.</p>";

				const frontmatter = {"title":"Wireless Types","description":"The different types of wireless networks and standards for Wi-Fi","author":"Chris Carlin","heroImage":"/public/blogContent/wifi-svgrepo-com.svg","draft":true};
				const file = "C:/Users/meatw/source/repos/brunscii/astro-blog-site/src/content/blog/APlusTerms/Networking/wirelessTypes.md";
				const url = undefined;
				function rawContent() {
					return "\r\n## Wifi Types\r\n\r\nThere have been many iterations of the IEEE 802.11 standard over the years. This is the standard that is used for Wi-Fi devices and how they connect to one another. \r\n\r\nThe following chart shows the different Wi-Fi iterations, link rate, and their radio frequencies:\r\n\r\n| Generation / Version |\tIEEE Standard\t| Adopted |\tMaximum link rate (Mbit/s)\t| Radio frequency (GHz) | Range (feet) Indoor - Outdoor|\r\n| ---| ---      | ---  | ---              | ---     | --- |\r\n| 0\t | 802.11\t  | 1997 | 1 to 2           |\t2.4     |  66 - 330 |\r\n| 1\t | 802.11b\t| 1999 | 1 to 11          |\t2.4     | 115 - 460 |\r\n| 2\t | 802.11a\t| 1999 | 6 to 54          |\t5       | 115 - 390 |\r\n| 3\t | 802.11g\t| 2003 | 6 to 54          |\t2.4     | 125 - 460 |\r\n| 4\t | 802.11n\t| 2008 | 72 to 600\t      | 2.4/5   | 230 - 820 |\r\n| 5\t | 802.11ac |\t2014 | 433 to 6933\t    | 5[5]    | 150 - 315 |\r\n| 6\t | 802.11ax | 2019 | 574 to 9608[3]   | 2.4/5   |  98 - 390 |\r\n| 6E | 802.11ax |\t2020 | 574 to 9608[3]\t  | 6[4]    |  98 - 390 |\r\n| 7  | 802.11be\t| TBD  | 1376 to 46120\t  | 2.4/5/6 |  98 - 390 | \r\n\r\nMost Wireless devices made now have wi-fi 5 or 6, that is AC or AX. Most AC routers can also support older standards like n and g. This is similar to how the g routers supported b eventhough most devices didnt use it by that time. \r\n\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"wifi-types","text":"Wifi Types"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };

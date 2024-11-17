import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, e as renderHead } from '../chunks/astro/server_ogrvkZIj.mjs';
import 'kleur/colors';
import { $ as $$BaseHead, a as $$Header, b as $$Footer } from '../chunks/Footer_CEcsm0OU.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://brunscii.github.io/astro-blog-site");
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`<html lang="en" data-astro-cid-kh7btl4r> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": "about the blog", "description": "about page for Chris's blog", "data-astro-cid-kh7btl4r": true })}${renderHead()}</head> <body data-astro-cid-kh7btl4r> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-kh7btl4r": true })} <main data-astro-cid-kh7btl4r> <h1 data-astro-cid-kh7btl4r>About</h1> <p data-astro-cid-kh7btl4r>
This blog is meant as a place for me to drop findings and concepts about tech. 
				It is a mix of reference material and notebook; allowing me to dump my brain 
				and not worry about forgetting important concepts. This will include thoughts, reviews,
				or just ideas that I wish to write down. The goal here is to share knowledge with
				myself as well as others.
</p> <p data-astro-cid-kh7btl4r>
Some of the goals of this blog are to create references and articles that are written in a similar format.
                This probably won't be anything as large and robust as <a href="https://developer.mozilla.org/en-US/" target="_blank" data-astro-cid-kh7btl4r>MDN</a>,
                Mozilla Developer's Network, which I use quite often. This is meant to be more of a small scale reference and a way for me to 
                practice my writing. The concepts won't be as focused as MDN either, as I will have a broad range of topics to cover and not
                just web development.
</p> <p data-astro-cid-kh7btl4r>
On the rare occasions that I decide to write personal content, I will probably tag it as such, or possible branch it into a separate 
                area of the site. This way I don't interefere with the flow of the site.
</p> <p data-astro-cid-kh7btl4r>
Ideally all blog posts will have tags as to what the blog regards, whether A+ study material, Hardware, Software, Programming, 
                Web Development, React, Astro, Linux, and so on and so forth.
</p> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-kh7btl4r": true })} </body></html>`;
}, "C:/Users/meatw/source/repos/brunscii/astro-blog-site/src/pages/about.astro", void 0);

const $$file = "C:/Users/meatw/source/repos/brunscii/astro-blog-site/src/pages/about.astro";
const $$url = "/astro-blog-site/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$About,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

import { c as createAstro, a as createComponent, r as renderComponent, b as renderHead, g as renderSlot, d as renderTemplate, e as addAttribute } from '../../chunks/astro/server_D7v_6QAN.mjs';
import 'kleur/colors';
import { $ as $$FormattedDate, g as getCollection } from '../../chunks/FormattedDate_BYve5LUT.mjs';
import { $ as $$BaseHead, a as $$Header, b as $$Footer } from '../../chunks/Footer_DLGMPU_9.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("https://blog.christopherjcarlin.com");
const $$BlogPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { title, description, pubDate, updatedDate, heroImage } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-bvzihdzo> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description, "data-astro-cid-bvzihdzo": true })}${renderHead()}</head> <body data-astro-cid-bvzihdzo> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-bvzihdzo": true })} <main data-astro-cid-bvzihdzo> <article data-astro-cid-bvzihdzo> <h1 class="title" data-astro-cid-bvzihdzo>${title}</h1> ${pubDate && renderTemplate`${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": pubDate, "data-astro-cid-bvzihdzo": true })}`} ${updatedDate && renderTemplate`<div class="last-updated-on" data-astro-cid-bvzihdzo>
Last updated on ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": updatedDate, "data-astro-cid-bvzihdzo": true })} </div>`} <hr data-astro-cid-bvzihdzo> ${heroImage && renderTemplate`<img${addAttribute(720, "max-width")}${addAttribute(360, "height")}${addAttribute(heroImage, "src")} alt="" data-astro-cid-bvzihdzo>`} ${renderSlot($$result, $$slots["default"])} </article> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-bvzihdzo": true })} </body></html>`;
}, "C:/Users/meatw/source/repos/brunscii/astro-blog-site/src/layouts/BlogPost.astro", void 0);

const $$Astro = createAstro("https://blog.christopherjcarlin.com");
async function getStaticPaths() {
  const posts = await getCollection("blog");
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: post
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const posts = await getCollection("blog");
  const { slug } = Astro2.params;
  const post = posts.find((page) => page.slug === slug);
  if (!post) return Astro2.redirect("404");
  const { Content } = await post.render();
  return renderTemplate`${renderComponent($$result, "BlogPost", $$BlogPost, { ...post.data }, { "default": async ($$result2) => renderTemplate`  ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "C:/Users/meatw/source/repos/brunscii/astro-blog-site/src/pages/blog/[...slug].astro", void 0);

const $$file = "C:/Users/meatw/source/repos/brunscii/astro-blog-site/src/pages/blog/[...slug].astro";
const $$url = "/astro-blog-site/blog/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

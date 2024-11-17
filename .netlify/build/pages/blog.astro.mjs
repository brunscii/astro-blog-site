import { a as createComponent, r as renderTemplate, d as renderComponent, e as renderHead, b as addAttribute } from '../chunks/astro/server_ogrvkZIj.mjs';
import 'kleur/colors';
import { S as SITE_DESCRIPTION, c as SITE_TITLE, $ as $$BaseHead, a as $$Header, B as BASE, b as $$Footer } from '../chunks/Footer_CEcsm0OU.mjs';
import { g as getCollection, $ as $$FormattedDate } from '../chunks/FormattedDate_j4QcX8nQ.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("blog")).sort(
    (a, b) => (b.data.pubDate ? b.data.pubDate.valueOf() : 1) - (a.data.pubDate ? a.data.pubDate.valueOf() : 1)
  );
  let searchTerm = "";
  return renderTemplate`<html lang="en" data-astro-cid-5tznm7mj> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "data-astro-cid-5tznm7mj": true })}${renderHead()}</head> <body data-astro-cid-5tznm7mj> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-5tznm7mj": true })} <main data-astro-cid-5tznm7mj> <section data-astro-cid-5tznm7mj> <!-- This is the search bar --> <input type="search" placeholder="Search" name="category-search" id="blog-category-search"${addAttribute(searchTerm, "value")} data-astro-cid-5tznm7mj> <!-- #This is a list of the available blogs --> <ul id="blog-list" data-astro-cid-5tznm7mj> <li id="blog-search-headers" style="border-bottom:solid 3px #30303065;" data-astro-cid-5tznm7mj> <h4 data-astro-cid-5tznm7mj>Date</h4> <h4 data-astro-cid-5tznm7mj>Title</h4> <h4 data-astro-cid-5tznm7mj>Category
</h4><h5 data-astro-cid-5tznm7mj>Description</h5> </li> <br data-astro-cid-5tznm7mj> <!-- TODO: add responsive live search here 
              that checks input and searches blog's by category or name --> <!-- if nothing in the search then show this --> ${posts.map((post) => (
    // only show the link if the post is a final draft
    !post.data.draft && post.data.description.includes(searchTerm) && renderTemplate`<li class="blog-post" data-astro-cid-5tznm7mj> <!--- This is the date or dashes ---> ${post.data.pubDate ? renderTemplate`${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": post.data.pubDate, "data-astro-cid-5tznm7mj": true })}` : renderTemplate`<span data-astro-cid-5tznm7mj> ----- </span>`} <!--- This is the Link ---> <span data-astro-cid-5tznm7mj> <a${addAttribute(`${BASE}blog/${post.slug}/`, "href")} data-astro-cid-5tznm7mj>${post.data.title}</a> </span> <span class="category" data-astro-cid-5tznm7mj>${post.data.category ?? " "}</span> <!--- This is the Description ---> <p class="blog-post-description" data-astro-cid-5tznm7mj> ${post.data.description} </p> </li>`
  ))} </ul> </section> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-5tznm7mj": true })}  </body></html>`;
}, "C:/Users/meatw/source/repos/brunscii/astro-blog-site/src/pages/blog/index.astro", void 0);

const $$file = "C:/Users/meatw/source/repos/brunscii/astro-blog-site/src/pages/blog/index.astro";
const $$url = "/astro-blog-site/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

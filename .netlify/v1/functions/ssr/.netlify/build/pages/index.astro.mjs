import { a as createComponent, r as renderComponent, b as renderHead, d as renderTemplate } from '../chunks/astro/server_D7v_6QAN.mjs';
import 'kleur/colors';
import { $ as $$BaseHead, a as $$Header, b as $$Footer, S as SITE_DESCRIPTION, c as SITE_TITLE } from '../chunks/Footer_BkNB040i.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en" data-astro-cid-j7pv25f6> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "data-astro-cid-j7pv25f6": true })}${renderHead()}</head> <body data-astro-cid-j7pv25f6> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-j7pv25f6": true })} <main data-astro-cid-j7pv25f6> <h1 style="
        text-align:center;
        font-size:3em;
        " data-astro-cid-j7pv25f6>Hello World!</h1> <div id="welcome-text" data-astro-cid-j7pv25f6>Welcome to the blog.</div> <p class="welcome-page-text" data-astro-cid-j7pv25f6>
This is the place where I will drop musings, make notes on tech, and provide knowledge. 
          Using my own domain and the ability to write markdown, I shall create a knowledgebase of sorts. 
          The goal here is to create a place where I can share what I'm learning in a blog style format.
</p> <p class="welcome-page-text" data-astro-cid-j7pv25f6>
Sometimes I will wrtite reference material for what I am studying. This can range from hardware standards to OS specific tools. 
          Having this material in one place will prove useful for study. It may also prove useful to others studying for exams and such.
</p> <p class="welcome-page-text" data-astro-cid-j7pv25f6>
Other times I will write about things I struggled to learn, usually due to a lack of decent material online. This can range from React hooks like useContext(), 
          to how DISM works for modifying windows images. It's not that there isn't material on these subjects, but rather that the material is hard to find or follow. 
          It will also allow me to sharpen my writing skills.
</p> <p class="welcome-page-text" data-astro-cid-j7pv25f6>
I will try to push myself, as best I can, to maintain and add to this blog as I can. This is a challenge with my current work-life schedule.
</p> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-j7pv25f6": true })} </body></html>`;
}, "C:/Users/meatw/source/repos/brunscii/astro-blog-site/src/pages/index.astro", void 0);

const $$file = "C:/Users/meatw/source/repos/brunscii/astro-blog-site/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

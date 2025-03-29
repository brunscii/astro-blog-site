import { a as createComponent, b as renderHead, f as renderScript, d as renderTemplate } from '../chunks/astro/server_D7v_6QAN.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                     */
export { renderers } from '../renderers.mjs';

const $$Flashcard = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en" data-astro-cid-x7ncgmfs> <head>${renderHead()}</head> <body data-astro-cid-x7ncgmfs> <div class="flash-card-front" data-astro-cid-x7ncgmfs> <h1 class="title" data-astro-cid-x7ncgmfs>IP</h1></div> <div class="flash-card-back" data-astro-cid-x7ncgmfs> <div class="line-blue" data-astro-cid-x7ncgmfs> <span data-astro-cid-x7ncgmfs>Internet Protocol</span> </div> <div class="line-red" data-astro-cid-x7ncgmfs></div> <div class="line-red" data-astro-cid-x7ncgmfs></div> <div class="line-red" data-astro-cid-x7ncgmfs></div> <span data-astro-cid-x7ncgmfs></span> <div class="line-red" data-astro-cid-x7ncgmfs></div> <div class="line-red" data-astro-cid-x7ncgmfs></div> </div> ${renderScript($$result, "C:/Users/meatw/source/repos/brunscii/astro-blog-site/src/pages/flashcard.astro?astro&type=script&index=0&lang.ts")} </body></html>`;
}, "C:/Users/meatw/source/repos/brunscii/astro-blog-site/src/pages/flashcard.astro", void 0);

const $$file = "C:/Users/meatw/source/repos/brunscii/astro-blog-site/src/pages/flashcard.astro";
const $$url = "/astro-blog-site/flashcard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Flashcard,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

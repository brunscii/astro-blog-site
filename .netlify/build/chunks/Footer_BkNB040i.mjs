import { c as createAstro, a as createComponent, e as addAttribute, d as renderTemplate, m as maybeRenderHead, s as spreadAttributes, g as renderSlot, r as renderComponent } from './astro/server_D7v_6QAN.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */
/* empty css                                                                  */

const $$Astro$1 = createAstro("https://blog.christopherjcarlin.com");
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const { title, description, image = "/placeholder-social.jpg" } = Astro2.props;
  return renderTemplate`<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Primary Meta Tags --><title>${title}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(new URL(image, Astro2.url), "content")}>`;
}, "C:/Users/meatw/source/repos/brunscii/astro-blog-site/src/components/BaseHead.astro", void 0);

const $$Astro = createAstro("https://blog.christopherjcarlin.com");
const $$HeaderLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HeaderLink;
  const { href, class: className, ...props } = Astro2.props;
  const { pathname } = Astro2.url;
  const isActive = href === pathname || href === pathname.replace(/\/$/, "");
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute([className, { active: isActive }], "class:list")}${spreadAttributes(props)} data-astro-cid-eimmu3lg> ${renderSlot($$result, $$slots["default"])} </a> `;
}, "C:/Users/meatw/source/repos/brunscii/astro-blog-site/src/components/HeaderLink.astro", void 0);

const SITE_TITLE = "Carlin Tech Blog";
const SITE_DESCRIPTION = "Christopher Carlin's Blog Stite";
const BASE = "/";

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header data-astro-cid-3ef6ksr2> <h1 data-astro-cid-3ef6ksr2> ${SITE_TITLE} </h1> <nav data-astro-cid-3ef6ksr2> ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": BASE + "", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`Home` })} ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": BASE + "blog", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`Blogs` })} ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": BASE + "about", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`About` })} ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "https://christopherjcarlin.com", "target": "_blank", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`Portfolio` })} ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "https://github.com/brunscii", "target": "_blank", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`GitHub` })} </nav> </header> `;
}, "C:/Users/meatw/source/repos/brunscii/astro-blog-site/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const today = /* @__PURE__ */ new Date();
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-sz7xmlte>
&copy; ${today.getFullYear()} Christopher Carlin. All rights reserved.
</footer> `;
}, "C:/Users/meatw/source/repos/brunscii/astro-blog-site/src/components/Footer.astro", void 0);

export { $$BaseHead as $, BASE as B, SITE_DESCRIPTION as S, $$Header as a, $$Footer as b, SITE_TITLE as c, $$HeaderLink as d };

export { renderers } from '../renderers.mjs';

// import rss from '@astrojs/rss';
// import { getCollection } from 'astro:content';
// import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

// export async function get(context) {
// 	const posts = await getCollection('blog');
// 	return rss({
// 		title: SITE_TITLE,
// 		description: SITE_DESCRIPTION,
// 		site: context.site,
// 		items: posts.map((post) => ({
// 			...post.data,
// 			link: `/blog/${post.slug}/`,
// 		})),
// 	});
// }

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

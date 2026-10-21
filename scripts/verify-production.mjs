import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';

const base = process.argv[2] || 'http://localhost:4173';
const blog = JSON.parse(
  await readFile(new URL('../src/data/blog-data.json', import.meta.url), 'utf8')
);
const pages = await readdir(new URL('../app/', import.meta.url), {
  recursive: true,
});
const routes = pages
  .filter((path) => /(^|\/)page\.tsx$/.test(path))
  .flatMap((path) => {
    const route = '/' + path.replace(/(^|\/)page\.tsx$/, '');
    return route.includes('[slug]')
      ? blog.posts.map((post) => route.replace('[slug]', post.slug))
      : [route];
  });
const snapshots = JSON.parse(
  await readFile(
    new URL(
      '../.cloudflare/output/v0/workers/default/assets/_vinext/static-cache/index.json',
      import.meta.url
    ),
    'utf8'
  )
);
assert.equal(
  Object.values(snapshots).filter((entry) => entry.kind === 'html').length,
  routes.length + 1,
  'Every page and the 404 must have an HTML snapshot'
);
assert.equal(
  Object.values(snapshots).filter((entry) => entry.kind === 'rsc').length,
  routes.length,
  'Every page must have an RSC snapshot'
);

const responses = await Promise.all(
  routes.map(async (route) => {
    const response = await fetch(new URL(route, base));
    assert.equal(response.status, 200, `${route} should render`);
    assert.match(response.headers.get('content-type') || '', /text\/html/);
    const body = await response.text();
    assert.match(
      body,
      /<h1[\s>]/,
      `${route} must contain a server-rendered heading`
    );
    return { route, body };
  })
);
const home = responses.find((page) => page.route === '/').body;
assert.match(
  home,
  /<title>Multi Run - Clone Apps &amp; Multiple Accounts<\/title>/
);
assert.match(home, /rel="canonical" href="https:\/\/multirun\.space\/"/);
assert.match(home, /Run/);
assert.match(home, /com\.dong\.multirun/);
const scripts = [...home.matchAll(/<script[^>]+src="([^\"]+)"/g)]
  .map((match) => match[1])
  .filter((url) => url.startsWith('/_next/static/'));
const styles = [...home.matchAll(/<link[^>]+href="([^\"]+\.css)"/g)].map(
  (match) => match[1]
);
assert.ok(
  scripts.length && styles.length,
  'Production page must reference hashed JS and CSS'
);
for (const asset of [...scripts, ...styles]) {
  const response = await fetch(new URL(asset, base));
  assert.equal(response.status, 200, asset);
  assert.match(
    response.headers.get('cache-control') || '',
    /immutable/,
    `${asset} should have immutable caching`
  );
}
const rsc = await fetch(new URL('/', base), { headers: { RSC: '1' } });
assert.equal(rsc.status, 200);
assert.match(rsc.headers.get('content-type') || '', /text\/x-component/);
for (const route of [
  '/_vinext/static-cache/index.json',
  `/_vinext/static-cache/${Object.keys(snapshots)[0]}.html`,
  '/MultipleAccountsPage',
  '/blog/this-article-does-not-exist',
  '/this-route-does-not-exist',
]) {
  assert.equal(
    (await fetch(new URL(route, base))).status,
    404,
    `${route} must not expose content`
  );
}
assert.equal((await fetch(new URL('/logo.webp', base))).status, 200);
assert.equal((await fetch(new URL('/sitemap.xml', base))).status, 200);
console.log(
  `Passed: ${routes.length} routes, ${routes.length + 1} HTML snapshots, ${routes.length} RSC snapshots, metadata, hashed assets, RSC navigation, public files, private-cache isolation and 404s.`
);

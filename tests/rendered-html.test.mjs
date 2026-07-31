import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const templateRoot = new URL("../", import.meta.url);
const deploymentBasePath = (
  process.env.NEXT_PUBLIC_BASE_PATH ?? ""
).replace(/\/+$/, "");

function publicAssetPattern(path) {
  const assetPath = `${deploymentBasePath}${path}`;
  return new RegExp(
    `src="${assetPath.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"`,
  );
}

async function render() {
  return readFile(new URL("../out/index.html", import.meta.url), "utf8");
}

test("statically exports the complete workshop landing page", async () => {
  const html = await render();
  assert.match(html, /FPAI-HPC/);
  assert.match(html, /Federated and/);
  assert.match(html, /Privacy-Preserving AI/);
  assert.match(html, /class="hero-title-short"/);
  assert.match(html, /class="hero-title-rule"/);
  assert.match(html, /class="hero-title-kicker">The 3rd Workshop on/);
  assert.match(html, /class="hero-title-full"/);
  assert.match(html, /class="hero-title-highlight">for HPC/);
  assert.match(
    html,
    /hero-title-short[\s\S]*?hero-title-rule[\s\S]*?hero-title-kicker">The 3rd Workshop on[\s\S]*?workshop-logo-hero[\s\S]*?hero-title-full/,
  );
  assert.match(html, /About/);
  assert.match(html, /Scope/);
  assert.match(html, /scope-bento-grid/);
  assert.match(html, /scope-bento-card/);
  assert.match(html, /scope-bento-category/);
  assert.match(html, /scope-bento-icon-foundation/);
  assert.match(html, /scope-bento-icon-agentic/);
  assert.match(html, /lucide-brain-circuit/);
  assert.match(html, /lucide-network/);
  assert.match(html, /lucide-shield/);
  assert.match(html, /lucide-lock-keyhole/);
  assert.match(html, /lucide-leaf/);
  assert.match(html, /lucide-radio-tower/);
  assert.match(html, /lucide-microscope/);
  assert.match(html, /lucide-bot/);
  assert.doesNotMatch(html, /class="topic-list"/);
  assert.match(html, /Program/);
  assert.match(
    html,
    /class="format-card-title"><span>Talks, insights, and connect\.<\/span>/,
  );
  assert.match(html, /Speakers/);
  assert.match(html, /Committee/);
  assert.match(html, /Alexandria, Virginia/);
  assert.match(html, /September xx, 2026/);
  assert.match(html, /class="hero-detail-date"/);
  assert.match(html, /class="calendar-icon"/);
  assert.match(html, /cluster26-logo\.png/);
  assert.match(html, /IEEE Cluster 2026/);
  assert.match(html, publicAssetPattern("/cluster26-logo.png"));
  assert.match(html, publicAssetPattern("/workshop-logo.png"));
  assert.match(html, /class="workshop-logo"/);
  assert.match(html, /class="workshop-logo workshop-logo-hero"/);
  assert.match(html, /class="workshop-logo workshop-logo-footer"/);
  assert.doesNotMatch(html, /class="mark"/);
  assert.match(html, /class="hero-marquee"/);
  assert.match(
    html,
    /IEEE Cluster 2026 — Federated — Collaborative — Privacy-Preserving — Secure — Trustworthy — Verifiable — Edge-Cloud-HPC Continuum/,
  );
  assert.match(
    html,
    /hero-marquee-item">Federated[\s\S]*?hero-marquee-item">Collaborative[\s\S]*?hero-marquee-item">Privacy-Preserving[\s\S]*?hero-marquee-item">Secure[\s\S]*?hero-marquee-item">Trustworthy[\s\S]*?hero-marquee-item">Verifiable[\s\S]*?hero-marquee-item">Edge-Cloud-HPC Continuum/,
  );
  assert.doesNotMatch(html, /class="cluster26-logo"/);
  assert.doesNotMatch(html, /_vinext\/image[^"]*cluster26-logo/);
  assert.match(html, /Ziyue Xu/);
  assert.match(html, /Ang Li/);
  assert.match(html, /Yijiang Li/);
  assert.match(html, /University of Maryland, College Park/);
  assert.match(html, /Argonne National Laboratory/);
  assert.match(html, /Sahil Tyagi/);
  assert.match(html, /committee-position/);
  assert.match(html, /Postdoctoral Research Associate/);
  assert.match(html, /speaker-card speaker-card-keynote/);
  assert.match(
    html,
    /speaker-card speaker-card-keynote[\s\S]*?Keynote speaker[\s\S]*?speaker-card speaker-card-invited[\s\S]*?Ziyue Xu/,
  );
  assert.equal((html.match(/<h3>TBA speaker<\/h3>/g) ?? []).length, 2);
  assert.equal(
    (html.match(/class="speaker-card speaker-card-/g) ?? []).length,
    6,
  );
  assert.doesNotMatch(html, /Wei Qingsong|Additional invited speaker/);
  assert.match(html, publicAssetPattern("/committee/ziyue-xu.jpg"));
  assert.match(html, publicAssetPattern("/speakers/ang-li.jpg"));
  assert.match(html, publicAssetPattern("/speakers/yijiang_li.jpg"));
  assert.match(html, /https:\/\/research\.nvidia\.com\/person\/ziyue-xu/);
  assert.match(html, /https:\/\/www\.ang-li\.com\//);
  assert.doesNotMatch(html, /_vinext\/image[^"]*speakers\/ang-li/);
  assert.match(html, /Previous workshops/);
  assert.match(html, /https:\/\/hpcfl\.github\.io\/SC22\//);
  assert.match(html, /https:\/\/hpcfl\.github\.io\/SC23\//);
  assert.match(html, /Read bio/);
  assert.match(html, /committee\/sahil-tyagi\.jpg/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
});

test("includes the social preview image, workshop logo, speaker portrait, and product metadata", async () => {
  const [
    layout,
    packageJson,
    postcssConfig,
    socialImage,
    workshopLogo,
    angLiPortrait,
  ] =
    await Promise.all([
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    readFile(new URL("../postcss.config.mjs", import.meta.url), "utf8"),
    readFile(new URL("public/og.png", templateRoot)),
    readFile(new URL("public/workshop-logo.png", templateRoot)),
    readFile(new URL("public/speakers/ang-li.jpg", templateRoot)),
    ]);

  assert.match(layout, /hpcfl\.github\.io\/Cluster26/);
  assert.match(layout, /NEXT_PUBLIC_SITE_URL/);
  assert.match(layout, /summary_large_image/);
  assert.match(layout, /import "normalize\.css";/);
  assert.match(packageJson, /"normalize\.css": "\^8\.0\.1"/);
  assert.match(packageJson, /"autoprefixer":/);
  assert.match(packageJson, /"browserslist":/);
  assert.match(postcssConfig, /autoprefixer:\s*\{\}/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  assert.ok(socialImage.byteLength > 100_000);
  assert.ok(workshopLogo.byteLength > 100_000);
  assert.ok(angLiPortrait.byteLength > 100_000);
});

test("includes responsive phone and tablet layouts", async () => {
  const stylesheet = await readFile(
    new URL("../app/globals.css", import.meta.url),
    "utf8",
  );

  assert.match(stylesheet, /@media \(max-width: 720px\)/);
  assert.match(stylesheet, /@media \(max-width: 480px\)/);
  assert.match(
    stylesheet,
    /\.hero-title-short\s*\{[\s\S]*?white-space:\s*nowrap;/,
  );
  assert.match(
    stylesheet,
    /\.hero-title-rule\s*\{[\s\S]*?height:\s*3px;[\s\S]*?background:\s*var\(--teal\);/,
  );
  assert.match(
    stylesheet,
    /\.hero-title-kicker\s*\{[\s\S]*?color:\s*var\(--teal\);[\s\S]*?text-transform:\s*uppercase;/,
  );
  assert.match(
    stylesheet,
    /\.hero-title-full\s*\{[\s\S]*?var\(--hero-workshop-name-font-scale\)[\s\S]*?white-space:\s*nowrap;/,
  );
  assert.match(
    stylesheet,
    /\.hero-title-full \.hero-title-highlight\s*\{[\s\S]*?color:\s*#49e1c2;[\s\S]*?-webkit-text-fill-color:\s*#49e1c2;/,
  );
  assert.match(stylesheet, /--hero-section-min-height:/);
  assert.match(stylesheet, /--abstract-layout-font-scale:/);
  assert.match(stylesheet, /--section-summary-font-scale:/);
  assert.match(stylesheet, /--program-description-font-scale:/);
  assert.match(
    stylesheet,
    /\.abstract-layout \.lead\s*\{[\s\S]*?font-size:\s*clamp\([\s\S]*?var\(--abstract-layout-font-scale\)/,
  );
  assert.match(
    stylesheet,
    /\.section-summary\s*\{[\s\S]*?font-size:\s*calc\(1rem \* var\(--section-summary-font-scale\)\);/,
  );
  assert.match(
    stylesheet,
    /\.section-ink \.section-summary\s*\{[\s\S]*?font-size:\s*calc\(0\.95rem \* var\(--section-summary-font-scale\)\);/,
  );
  assert.match(
    stylesheet,
    /\.format-card > p\s*\{[\s\S]*?font-size:\s*calc\(1rem \* var\(--program-description-font-scale\)\);/,
  );
  assert.match(
    stylesheet,
    /\.hero\s*\{[\s\S]*?min-height:\s*var\(--hero-section-min-height\);/,
  );
  assert.doesNotMatch(stylesheet, /min-height:\s*calc\(100svh - 76px\)/);
  assert.match(stylesheet, /--hero-marquee-height:/);
  assert.match(stylesheet, /--hero-marquee-speed:/);
  assert.match(stylesheet, /--hero-marquee-logo-width:/);
  assert.match(stylesheet, /--hero-workshop-logo-size:/);
  assert.match(stylesheet, /--hero-workshop-logo-opacity:/);
  assert.match(
    stylesheet,
    /\.workshop-logo-hero\s*\{[\s\S]*?position:\s*relative;[\s\S]*?grid-area:\s*logo;[\s\S]*?width:\s*var\(--hero-workshop-logo-size\);[\s\S]*?justify-self:\s*end;/,
  );
  assert.match(
    stylesheet,
    /h1\s*\{[\s\S]*?grid-template-areas:[\s\S]*?"short logo"[\s\S]*?"full full";[\s\S]*?grid-template-columns:\s*minmax\(0, 1fr\) auto;/,
  );
  assert.doesNotMatch(
    stylesheet,
    /\.workshop-logo-hero\s*\{[^}]*position:\s*absolute;/,
  );
  assert.match(stylesheet, /--hero-detail-cards-width:/);
  assert.match(stylesheet, /--workshop-header-logo-size:\s*48px;/);
  assert.match(stylesheet, /--workshop-footer-logo-size:\s*64px;/);
  assert.match(stylesheet, /--hero-workshop-name-font-scale:\s*1\.15;/);
  assert.match(stylesheet, /--scope-bento-grid-max-width:/);
  assert.match(stylesheet, /--scope-bento-card-min-height:/);
  assert.match(
    stylesheet,
    /\.format-card\s*\{[\s\S]*?align-self:\s*center;[\s\S]*?background:\s*var\(--ink-soft\);/,
  );
  assert.match(
    stylesheet,
    /\.format-card-title span\s*\{[\s\S]*?display:\s*block;[\s\S]*?overflow-wrap:\s*normal;[\s\S]*?word-break:\s*keep-all;[\s\S]*?white-space:\s*nowrap;/,
  );
  assert.match(
    stylesheet,
    /\.hero-details\s*\{[\s\S]*?width:\s*min\(100%, var\(--hero-detail-cards-width\)\);/,
  );
  assert.match(
    stylesheet,
    /\.calendar-icon\s*\{[\s\S]*?border:\s*2px solid var\(--coral\);/,
  );
  assert.match(
    stylesheet,
    /\.scope-bento-grid\s*\{[\s\S]*?grid-template-columns:\s*repeat\(12, minmax\(0, 1fr\)\);/,
  );
  assert.match(
    stylesheet,
    /\.scope-bento-card\s*\{[\s\S]*?min-height:\s*var\(--scope-bento-card-min-height\);[\s\S]*?padding:\s*20px;/,
  );
  assert.match(
    stylesheet,
    /\.scope-bento-grid\s*\{[\s\S]*?width:\s*min\(100%, var\(--scope-bento-grid-max-width\)\);[\s\S]*?margin-inline:\s*auto;/,
  );
  assert.match(
    stylesheet,
    /\.scope-bento-card\s*\{[\s\S]*?color:\s*var\(--ink\);[\s\S]*?background:\s*var\(--paper\);/,
  );
  assert.match(
    stylesheet,
    /\.scope-bento-card-content > p\s*\{[\s\S]*?max-width:\s*none;[\s\S]*?text-wrap:\s*wrap;/,
  );
  assert.match(
    stylesheet,
    /\.scope-bento-icon\s*\{[\s\S]*?display:\s*grid;[\s\S]*?color:\s*var\(--ink\);[\s\S]*?place-items:\s*center;/,
  );
  assert.match(
    stylesheet,
    /\.scope-bento-icon-privacy \.scope-privacy-lock\s*\{[\s\S]*?position:\s*absolute;[\s\S]*?width:\s*8px;/,
  );
  assert.doesNotMatch(stylesheet, /scope-logos\.png/);
  assert.doesNotMatch(stylesheet, /security-privacy-logo\.png/);
  assert.doesNotMatch(stylesheet, /max-width:\s*50ch;/);
  assert.match(
    stylesheet,
    /\.scope-bento-card:nth-child\(1\),[\s\S]*?\.scope-bento-card:nth-child\(3\)\s*\{[\s\S]*?grid-column:\s*span 7;/,
  );
  assert.match(
    stylesheet,
    /\.scope-bento-card:nth-child\(5\),[\s\S]*?\.scope-bento-card:nth-child\(7\)\s*\{[\s\S]*?grid-column:\s*span 4;/,
  );
  assert.doesNotMatch(stylesheet, /\.scope-bento-card::after/);
  assert.match(stylesheet, /@keyframes hero-marquee-right-to-left/);
  assert.match(
    stylesheet,
    /from\s*\{[\s\S]*?translate3d\(0, 0, 0\)[\s\S]*?to\s*\{[\s\S]*?translate3d\(-50%, 0, 0\)/,
  );
  assert.match(
    stylesheet,
    /@media \(prefers-reduced-motion: reduce\)[\s\S]*?\.hero-marquee-track\s*\{[\s\S]*?animation:\s*none;/,
  );
  assert.doesNotMatch(stylesheet, /animation-play-state:\s*paused/);
  assert.match(stylesheet, /--committee-card-width:/);
  assert.match(stylesheet, /--speaker-card-width:/);
  assert.match(stylesheet, /--person-card-min-height:/);
  assert.match(stylesheet, /--previous-workshop-card-width:/);
  assert.match(stylesheet, /--previous-workshop-card-height:/);
  assert.match(stylesheet, /--previous-workshop-card-gap:/);
  assert.match(
    stylesheet,
    /\.speaker-grid\s*\{[\s\S]*?grid-template-columns:\s*repeat\(3, minmax\(0, 1fr\)\)/,
  );
  assert.match(
    stylesheet,
    /\.speaker-grid\s*\{[\s\S]*?align-items:\s*start;/,
  );
  assert.match(
    stylesheet,
    /\.speaker-grid\s*\{[\s\S]*?grid-auto-rows:\s*auto;/,
  );
  assert.doesNotMatch(stylesheet, /\.speaker-card-keynote\s*\{[\s\S]*?grid-column:/);
  assert.match(
    stylesheet,
    /\.speaker-card-invited\s*\{[\s\S]*?box-shadow:\s*0 18px 48px rgba\(4, 12, 24, 0\.18\);/,
  );
  assert.match(
    stylesheet,
    /\.speaker-card-invited\s*\{[\s\S]*?min-height:\s*var\(--person-card-min-height\);/,
  );
  assert.match(
    stylesheet,
    /\.section-ink\s*\{[\s\S]*?background:\s*var\(--ink-soft\);/,
  );
  assert.match(
    stylesheet,
    /\.section-speakers\s*\{[\s\S]*?background:\s*var\(--ink-soft\);/,
  );
  assert.match(
    stylesheet,
    /\.speaker-card-invited\s*\{[\s\S]*?background:\s*var\(--paper\);/,
  );
  assert.match(
    stylesheet,
    /\.speaker-card-invited\s*\{[\s\S]*?color:\s*var\(--ink\);/,
  );
  assert.match(
    stylesheet,
    /\.speaker-bio summary\s*\{[\s\S]*?padding:\s*18px 22px 20px;/,
  );
  assert.match(
    stylesheet,
    /\.speaker-bio-preview\s*\{[\s\S]*?-webkit-line-clamp:\s*2;/,
  );
  assert.match(
    stylesheet,
    /max-width:\s*calc\([\s\S]*?var\(--speaker-card-width\)[\s\S]*?var\(--speaker-card-width\)[\s\S]*?\);/,
  );
  assert.match(
    stylesheet,
    /minmax\(min\(100%, var\(--committee-card-width\)\), var\(--committee-card-width\)\)/,
  );
  assert.match(
    stylesheet,
    /\.committee-members\s*\{[\s\S]*?justify-content:\s*center;/,
  );
  assert.match(
    stylesheet,
    /\.section-committee\s*\{[\s\S]*?background:\s*var\(--paper\);/,
  );
  assert.match(
    stylesheet,
    /\.committee-card\s*\{[\s\S]*?color:\s*var\(--white\);[\s\S]*?background:\s*var\(--ink-soft\);/,
  );
  assert.match(
    stylesheet,
    /\.committee-card\s*\{[\s\S]*?min-height:\s*var\(--person-card-min-height\);/,
  );
  assert.match(
    stylesheet,
    /\.committee-title > span\s*\{[\s\S]*?color:\s*var\(--coral\);[\s\S]*?font-weight:\s*800;/,
  );
  assert.match(
    stylesheet,
    /min\(100%, var\(--previous-workshop-card-width\)\)[\s\S]*?var\(--previous-workshop-card-width\)/,
  );
  assert.match(
    stylesheet,
    /\.previous-workshop-grid\s*\{[\s\S]*?justify-content:\s*center;[\s\S]*?gap:\s*var\(--previous-workshop-card-gap\);/,
  );
  assert.match(
    stylesheet,
    /\.section-previous-workshops\s*\{[\s\S]*?background:\s*var\(--ink-soft\);/,
  );
  assert.match(
    stylesheet,
    /\.previous-workshop-card\s*\{[\s\S]*?color:\s*var\(--ink\);[\s\S]*?background:\s*var\(--paper\);/,
  );
  assert.match(
    stylesheet,
    /\.previous-workshop-card\s*\{[\s\S]*?min-height:\s*var\(--previous-workshop-card-height\);/,
  );
  assert.match(
    stylesheet,
    /\.committee-position,\s*\.committee-organization\s*\{[\s\S]*?font-size:\s*0\.72rem;[\s\S]*?line-height:\s*1\.45;/,
  );
  assert.match(stylesheet, /scroll-snap-type:\s*x proximity/);
});

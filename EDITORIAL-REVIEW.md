# Bat7a Makkah — Editorial Rebuild / Owner Review

## Preview — NEW TEMPLATE / not production

- Arabic homepage: https://raw.githack.com/hussamzar/Sayaf/bat7a-editorial-rebuild-2026-11/index.html
- Products: https://raw.githack.com/hussamzar/Sayaf/bat7a-editorial-rebuild-2026-11/products.html
- Gallery: https://raw.githack.com/hussamzar/Sayaf/bat7a-editorial-rebuild-2026-11/gallery.html
- Blog: https://raw.githack.com/hussamzar/Sayaf/bat7a-editorial-rebuild-2026-11/blog.html
- English: https://raw.githack.com/hussamzar/Sayaf/bat7a-editorial-rebuild-2026-11/en/index.html

The preview uses a third-party static cache and may require reloading. It is not GitHub Pages production. Every preview page inserts noindex when hosted off the production domain.

## Fundamental architectural change
- **Not an overlay**. Every canonical page has been reconstructed into a bespoke standalone document with fresh navigation, hero/banner, material grids, publication-like content layouts and a new footer.
- Single new CSS system: `assets/editorial-2026.css` (cream/stone, deep pine, oxidised copper, irregular editorial layout).
- Single small JavaScript system: `assets/editorial-2026.js` (mobile menu, language switching, gallery accessibility).
- Reused all original article text and modal library, original product information, original contact form and existing media links within new page templates.
- Six English 404 paths now have canonical pages with original English product material; legacy -en.html pages remain as well.
- Sitemap has 38 canonical bilingual URLs; all original media retained and no repository files deleted.
- Google verification token preserved; one structured LocalBusiness schema applied to homepages.

## Audit completed
- All 38 newly built canonical pages generated and committed; checks on 38 pages found over 1,700 local links without missing targets.
- Original Getform.io contact action retained. Contact form submission has **not** been verified with a real message.
- Article modal and gallery script logic retained; FAQ accordion CSS restored.
- Direct call + WhatsApp buttons across new site.

## Must verify BEFORE merge or publication
1. Preview actual browser rendering on desktop and mobile; validate breakpoints, menu, gallery lightbox, eight blog modals, input/form submission and all conversion actions. **A browser-based visual test has not yet been completed.**
2. Some original product photos hosted externally on imgur; validate live links and confirm product match. No invented photographs or unverified customer project attributions should be published.
3. Confirm contact name and official phone, delivery/pricing claims, project photos, certifications, and technical descriptions, including potential unsupported insulation and free-delivery promises in original text.
4. **Google Tag Manager conflict** in legacy version: GTM-KKHHHRVW versus GTM-TJWQWKQV. The redesign does not activate these legacy analytics scripts. Reinstate verified GTM and Google Ads conversions before deployment; Google verification and structured data are already in the draft.
5. Test Lighthouse, accessibility, Core Web Vitals, original indexed URLs, robots/sitemap/canonical and hreflang.
6. After approval and merge, resubmit sitemap.xml in Search Console and monitor the 404 report, indexing and organic clicks. Google must recrawl edited pages but does not need to restart the whole site indexing from zero.

**Do not merge to main without the site owner's explicit approval.**

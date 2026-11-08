# Bat7a Makkah | Full Editorial Rebuild — PREVIEW / DO NOT MERGE

## Design direction
Custom premium industrial-editorial layout based on the approved visual concept, using cream limestone textures, dark forest typography and terracotta accents. **The markup is built from scratch** — this is not another CSS overlay on the old page structure.

## Strict preservation
- New visible pages cover **19 Arabic and 19 English URLs** including the same six materials, company information, gallery and blog.
- **Every original 38 page's complete HTML is backed up under `archive-original/`** (including all scripts, captions, media references and original meta tags). No images or old files are deleted from the repository.
- Visible original product descriptions are kept on all 12 material pages; all four original product images are included with corrected captions when they represent gravel or construction work.
- Eight original Arabic and eight original English blog articles are fully readable on `blog.html`, with added practical notes; not shortened into teasers only.
- Original contact form uses `https://getform.io/f/bdrgwvmb`, preserving the existing service endpoint, with its existing fields and required validation. The new WhatsApp quotation interaction is supplemental.
- Six full English pages now exist at the precise clean URL paths reported as 404 in Search Console; original `*-en.html` URLs remain reachable and canonicalise to the clean pages.
- The existing domain, CNAME, robots.txt, HTML verification files, image files and Arabic URL paths have not been altered or removed.

## Important release blockers
1. **Analytics tracking:** existing site had inconsistent GTM IDs (GTM-KKHHHRVW / GTM-TJWQWKQV); the new template intentionally has no active tracking code, so this MUST be reconciled and restored before merging, including Google Ads conversions. Do not merge until confirmed.
2. **Browser testing:** desktop/mobile visual review, Lighthouse/Core Web Vitals, accessibility, lightbox, menu, product links, FAQ toggles, external images, contact Getform and quote draft all need real-browser verification. Code/static checks do NOT replace that.
3. **Claims:** original project references, testimonials, free delivery, payment options, certificates, product performance and ownership of photo subjects must be verified before public release; staging pages include review notices in riskier areas.
4. **Content approval:** review original old copy in all pages and the small additions for technical correctness. Some historical articles include generalized performance claims requiring expert review.
5. **SEO migration:** confirm all canonical and hreflang tags, sitemap, robots noindex restricted to preview hosts, old URLs and Search Console inspection, then deploy only on owner approval.
6. **Preview limitations:** raw.githack.com/rawcdn.githack.com are third-party static preview sites and may cache content. Use a commit-SHA pinned preview URL to ensure correct revision.

## Preview URLs
- [Arabic homepage](https://raw.githack.com/hussamzar/Sayaf/bat7a-editorial-template-2026-11/index.html)
- [Arabic materials](https://raw.githack.com/hussamzar/Sayaf/bat7a-editorial-template-2026-11/products.html)
- [Arabic gallery](https://raw.githack.com/hussamzar/Sayaf/bat7a-editorial-template-2026-11/gallery.html)
- [Arabic blog](https://raw.githack.com/hussamzar/Sayaf/bat7a-editorial-template-2026-11/blog.html)
- [English homepage](https://raw.githack.com/hussamzar/Sayaf/bat7a-editorial-template-2026-11/en/index.html)

## Baseline
Search Console screenshot (last 28 days at time submitted): 73 clicks, ~3.89k impressions, six English-language 404s, two duplicate /index.html variants with correct canonical. This design change **can cause ranking fluctuation** and does not promise improved traffic.

The PR must remain draft. Do not merge into main or publish without explicit approval.

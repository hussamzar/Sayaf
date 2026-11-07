# Bat7a Makkah / Site Refresh 2026 — PREVIEW ONLY

**Production**: https://bat7a-makkah.com — not changed by this branch.

**Working branch**: site-refresh-2026-11

**Temporary external preview (third-party)**: https://raw.githack.com/hussamzar/Sayaf/site-refresh-2026-11/index.html

The temporary preview is served by raw.githack.com, a third-party service, and may show a confirmation page before displaying HTML. It can cache changes briefly. This is **not production hosting**.

## Changes
- 19 Arabic and 19 English clean canonical pages with coherent shared layout
- Six legacy English -en.html URLs redirect to canonical clean URLs to avoid 404s
- Existing domain, most published URLs, GitHub Pages CNAME and robots policy preserved
- Proper reciprocal Arabic/English hreflang on each canonical page
- Sitemap includes the 38 canonical URLs; no duplicate /index.html versions listed
- Responsive menu, products filter, WhatsApp quote form, actual repository pictures with lazy loading
- No unverified customer testimonials, project claims, unconfirmed free delivery or expired promotional offers

## Manual approval checklist BEFORE merging into main
1. Confirm the institution's official trading name, phone and WhatsApp number.
2. Confirm material descriptions, available products, official claims and original photo ownership.
3. Confirm that all 19 pages render correctly in Arabic and English on mobile/desktop.
4. Confirm whether the contact form should use WhatsApp or the former Getform.io endpoint.
5. Confirm the current Google Tag Manager container ID (the legacy site uses more than one), conversion tracking and Google Ads events. **Do not merge until active analytics are restored and checked.**
6. Confirm physical addresses, certifications, registered claims and payment methods before adding them back.
7. Run Lighthouse, Search Console URL inspection, index coverage review and Google Analytics validation after deployment.
8. Re-submit sitemap.xml to Search Console after release and monitor index coverage and clicks.

## Search Console items from supplied screenshots
- 6 English pages returned 404 because the -en suffix existed on-disk while links pointed to clean URLs. Clean canonical English paths now exist; legacy suffix paths lead to clean content.
- 2 excluded /index.html page variants have valid homepage canonicals; Google classifies these as expected duplicates, not 404s.
- Google may take weeks to recrawl after approved release; no ranking promise can be made.

## Dev / testing notes
- Fonts need a network connection.
- Photos use existing images/ assets already in the repository.
- Web site is static: quote form deliberately opens WhatsApp rather than storing personal data.
- On preview hosts, page code adds a robots noindex meta to avoid indexing the third-party preview.
- Preview on raw.githack.com can be slow or show warnings from its external hosting service.

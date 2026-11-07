# Full-content modernisation — review before production
## Foundation
This branch **site-modernization-preserve-content-2026-11** starts from the untouched **main** GitHub Pages branch. It does not import or reuse the shortened v2 redesign. All existing Arabic and English HTML pages, all existing articles and long-form content, all original site photos, all forms, navigation, GTM snippets, and the CNAME remain in the repository. A new late-loaded CSS stylesheet improves presentation without discarding original markup.

## Preview, not production
- Temporary review preview: https://raw.githack.com/hussamzar/Sayaf/site-modernization-preserve-content-2026-11/index.html
- Arabic gallery: https://raw.githack.com/hussamzar/Sayaf/site-modernization-preserve-content-2026-11/gallery.html
- English home: https://raw.githack.com/hussamzar/Sayaf/site-modernization-preserve-content-2026-11/en/index.html
- GitHub pull request is draft. Never merge until explicit owner approval.
- Third-party raw.githack.com preview may not be reliable. Prefer local review or staging deployment when available.
- The original site's analytics scripts may still fire on this third-party preview. Do not use it to measure real conversions.

## Content preservation
- 19 original Arabic pages kept and enhanced (not replaced with shortened copy)
- 19 original English pages kept and enhanced
- Six additional *clean* English material URLs serve full copies of existing material content (the old -en.html originals remain, using canonical annotations)
- All eight original blog articles and their modal content kept. Each receives additional practical copy in its original article container, plus four visible selection/delivery guides.
- Six Arabic and six English photo gallery captions rewritten to describe the exact visible photographs, without asserting unverified ownership.
- Restored prominent click-to-call and WhatsApp actions on every page, retaining the original contact form Getform submission.
- Existing homepage hero photo remains in a labelled project/finishing feature; a real delivery picture is used as the primary hero illustration.
- No original site page, image, media file or article deleted.

## SEO
- Broken six clean English paths now exist and include their original long-form English copy.
- Original -en.html pages remain reachable; canonical points to the clean equivalent.
- XML sitemap now lists 19 Arabic and 19 English clean canonical paths with matching language alternates.
- Existing robots.txt, domain, verification files and Arabic canonical URLs retained.
- Duplicate /index.html with proper canonical is expected Google Search Console behaviour.
- Search Console baseline (shared user screenshots, 28 days): 73 clicks, ~3,890 impressions, 6 English 404s.
- Google GTM mismatches (GTM-KKHHHRVW vs GTM-TJWQWKQV) require owner validation before production. Tracking config was preserved, not unified blindly.

## Manual review — must complete
- Verify picture provenance, including vehicles with third-party branding, and whether project sites are actually owned/completed by Desert Sand Est.
- Confirm sales copy stating delivery is free, guaranteed availability, project portfolio claims, certificates, payment acceptance, dates of operation, and technical performance.
- Check screenshots across desktop/mobile, gallery lightbox, original blog modal, contact Getform form, and original navigation.
- Check any external imgur/imgbb image links load. External images were intentionally preserved to avoid replacing real product photographs with unrelated stock.
- Confirm target analytics account and GTM container with business owner.
- Run a browser-based Lighthouse, link checker and accessibility audit before merge.
- After owner approval, deploy in stages if appropriate and monitor Google Search Console indexing, clicks and CWV.

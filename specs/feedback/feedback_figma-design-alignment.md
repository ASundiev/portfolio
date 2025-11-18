# Feedback on `fix/figma-design-alignment` branch

## 0. Navigation

**[✅ IMPLEMENTED]** As per design annotations, the navigation bar is supposed to be sticky.


## **[✅ IMPLEMENTED]** 1. Case Studies

The implementation is misaligned with the design (`https://www.figma.com/design/cXzgOxJQsnx2jmrplbOJ9d/Orbe---Portfolio-Template--Community-?node-id=5104-8877&t=Dtk2PCnbl6ttQ8Cr-4`)

Specifically:

* **[✅ IMPLEMENTED]** The title must be hidden (note that this might make it hidden on the "Case studies" page as well, which shouldn't happen).
*  **[✅ IMPLEMENTED]** Currently, there's no margin between the cards. As per design, it should be `48px`
*  **[✅ IMPLEMENTED]** Currently, there's no button on these cards, it should be there as per design.


## 2. Articles & talks

The implementation is misaligned with the design (`https://www.figma.com/design/cXzgOxJQsnx2jmrplbOJ9d/Orbe---Portfolio-Template--Community-?node-id=5112-21189&t=Dtk2PCnbl6ttQ8Cr-4`)

Specifically:

*  **[✅ IMPLEMENTED]** Article cards don't have a border as per design
*  **[✅ IMPLEMENTED]** Article cards don't have a description as per design
*  **[✅ IMPLEMENTED]** The copy on the tags on article items don't match the design.

## 3. Experience

**[✅ IMPLEMENTED]** 3.1. The content of the collapsed list items doesn't match the design: `https://www.figma.com/design/cXzgOxJQsnx2jmrplbOJ9d/Orbe---Portfolio-Template--Community-?node-id=5104-8878&t=Dtk2PCnbl6ttQ8Cr-4`

**[✅ IMPLEMENTED]** 3.2. For now, let's hide (just hide, not remove) the +/- controls, and make the list temporarily non-interactive. We'll return that functionality once I'll be able to provide the content for the remaining list items.


## 4. Case studies page

The implementation is misaligned with the design (`https://www.figma.com/design/cXzgOxJQsnx2jmrplbOJ9d/Orbe---Portfolio-Template--Community-?node-id=5133-8333&t=Dtk2PCnbl6ttQ8Cr-4`)

Specifically:

Now, let's move to the "Case Studies" page.
Here's how it looks now" `/Users/andrey.sundiev/Downloads/SCR-20251118-kvhu.png`.
Here's how it's supposed to look (use figma mcp to view, note that the page is large, so you might have to view it in parts): `https://www.figma.com/design/cXzgOxJQsnx2jmrplbOJ9d/Orbe---Portfolio-Template--Community-?node-id=5133-8333&t=bkussZPNIEsRCdYR-4`

Issues:
* **[✅ IMPLEMENTED]** The nav bar on the page looks different to the navbar on the homepage. I expect these pages to use the same navbar component. The only difference would be the colour of the background.
* **[✅ IMPLEMENTED]** There's no Title on the page.
* **[✅ IMPLEMENTED]** Portfolio cards look different on this page compared to the homepage (see the screenshot: `/Users/andrey.sundiev/Downloads/SCR-20251118-ktdb.png`). Specifically: 
1) the size of the image is different; 
2) the white block with content is NOT on the top of the image; 
3) the white block with content has incrorrect layout and border-radius.
* **[✅ IMPLEMENTED]**The first portfolio card on the homepage and on the case studies page are different (the one on the homepage is more up to date). They should be the same component used in both places.
* **[✅ IMPLEMENTED]**  There's a mismatch between the illustrations and the cards they're used for. They're all mixed-up. Use Figma reference for correct matches.
* **[✅ IMPLEMENTED]** There's no margin between the cards


I want the portfolio cards on the homepage on the Case Studies page to use the same component.


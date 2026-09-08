// src/data/faqData.js
//
// Site FAQ, single source of truth. Consumed by:
//   • src/pages/FAQ.jsx           — the rendered /faq page + its FAQPage JSON-LD
//   • src/lib/routeContent.js     — the pre-JS crawler HTML injected at the edge
// Keeping the array here (instead of inline in FAQ.jsx) means the crawler HTML and
// the browser DOM can never disagree.

export const faqs = [
  { q: "Where is Silent H located?", a: "Silent H is at 420 West 13th Street in NYC's Meatpacking District. Our late-night tequila bar, Aitch, is next door at 418 West 13th Street." },
  { q: "What are Silent H's hours?", a: "Silent H is not open yet. When we open, dinner will run from 5pm Tuesday to Sunday, closed Mondays, to midnight Tuesday to Thursday and Sunday and 2am on Friday and Saturday. Aitch will open Thursday to Sunday from 9pm." },
  { q: "Do I need a reservation?", a: "Reservations will be recommended, especially Thursday to Saturday, and will be bookable at silenthnyc.com. Walk-ins will be welcome. Parties over 15 should contact us directly and a deposit may apply." },
  { q: "What food does Silent H serve?", a: "Modern Mexican by Chef Gerardo Álvarez Saucedo: charred guacamole, crispy chicharrón tacos, mesquite rib-eye espadas, a 44oz tomahawk and house desserts." },
  { q: "Is Silent H good for date night?", a: "Yes. Silent H is one of NYC's favourite date-night spots, with an intimate room, shareable plates and the Aitch tequila bar next door for a nightcap." },
  { q: "What is Aitch?", a: "Aitch is Silent H's late-night tequila bar in NYC, next door at 418 West 13th Street, pouring artisanal tequila and mezcal with elevated bites and guest DJs, Thursday to Sunday from 9pm. Aitch is 21 and over." },
  { q: "When is happy hour?", a: "Happy hour will run every day from 5 to 7pm: $10 house margaritas and $4 Mexican bites. Tuesdays will also feature a $20 rib-eye cachetada all day." },
  { q: "Are there vegetarian or vegan options?", a: "Yes, several dishes are vegetarian or can be made vegan. Let your server know and the kitchen will guide you." },
  { q: "Can I host a private event?", a: "Yes. Silent H offers private dining, corporate dinners and full buyouts across two Mexican-inspired spaces with chef-curated menus. Call 406 282 8155 or use Plan an Event to enquire." },
  { q: "How do I get there and where do I park?", a: "Silent H is on West 13th Street in the Meatpacking District, near the 14th Street subway stations (A, C, E and L lines), with paid parking garages nearby." }
,
  { q: "What's the difference between Silent H and Aitch?", a: "Silent H is our modern Mexican restaurant at 420 West 13th Street, serving shareable regional dishes and cocktails. Aitch is our intimate tequila bar next door at 418, focused on tequila, mezcal and a deeper cocktail list - two addresses with two distinct experiences." },
  { q: "Does Silent H have a tequila and mezcal selection?", a: "Yes. Next door at Aitch, our tequila bar, we pour an extensive tequila and mezcal selection alongside agave-forward cocktails. In the restaurant, Silent H runs a regional Mexican cocktail program." },
  { q: "Who is the chef at Silent H?", a: "Our kitchen is led by Monterrey-born chef Gerardo Álvarez Saucedo, whose menu reimagines regional Mexican cooking for NYC, from ceviches and tacos to a 44 oz tomahawk." },
  { q: "What are Silent H's signature dishes?", a: "Standout plates include the charred guacamole (guacamole quemado), crispy chicharrón tacos, rib-eye dishes and the 44 oz tomahawk, all built for sharing." },
  { q: "Can I come to Aitch just for drinks?", a: "Absolutely. Aitch, our tequila bar next door at 418 West 13th Street, is a great spot for tequila, mezcal and cocktails whether or not you're dining at the restaurant." },
  { q: "Is Silent H a good spot for a birthday or celebration?", a: "Yes. The shareable Mexican menu, cocktail program and the Aitch tequila bar next door make Silent H a popular choice for birthdays and celebrations in NYC. For larger or private gatherings, ask about our private event options." },
  { q: "How much does dinner cost at Silent H?", a: "Silent H is a mid-to-upper range ($$) modern Mexican restaurant, with most plates designed to share. Happy hour will run every day from 5 to 7pm with $10 house margaritas and $4 Mexican bites for a lighter spend." },
  { q: "Does Silent H have a patio?", a: "Yes. Along with the main dining room, Silent H has patio seating at 420 West 13th Street, plus the Aitch tequila bar next door." },
  { q: "Are there gluten-free options at Silent H?", a: "Yes. Many of our Mexican dishes are corn-based and naturally gluten-free, and several plates can be adapted. Let your server know about any allergies and the kitchen will guide you." },
  { q: "What is the atmosphere like at Silent H?", a: "Silent H pairs a warm, design-forward dining room with the spirit of modern Mexico. Next door, Aitch brings tequila-forward cocktails and guest DJs Thursday to Sunday, suited to both a relaxed dinner and a lively night out." },
  { q: "Is Silent H family-friendly, and is there an age policy?", a: "The main restaurant welcomes guests of all ages for dinner. Aitch, our tequila bar next door, is 21 and over in the evenings." },
];

## Plan

### 1. New "Meet the Team" section
Add a dedicated team section to `src/routes/index.tsx`, placed between the Gallery and About sections, with a `#team` anchor and a nav link.

Team members (with role + rating shown):
- Angelo — Barber — 5.0
- Mpeo — Therapist — 5.0
- Nazley — Facial Therapist — 5.0
- Ahmad — Barber — 5.0
- Osama — Barber — 5.0
- Alan — Barber — 4.9

Each card: portrait photo, name (display font), role (gold subtitle), star rating row, and a subtle gold-bordered card style matching the existing services/gallery aesthetic. Responsive grid (1 col mobile, 2 col tablet, 3 col desktop).

Since we don't have individual portrait photos for each barber, I'll generate 6 stylized portrait images (warm low-key lighting, dark backdrop, gold accents — same theme as the site) using imagegen, one per member, and reference them via lovable-assets.

### 2. Rewrite the About copy
Replace the current About paragraph with a more captivating, professional version. Proposed copy (two short paragraphs):

> Tucked into Parkview Centre in the heart of Randburg, Elevated Barber is where classic barbering meets a modern, refined ritual. Every cut, shave and treatment is delivered by master craftsmen — precision shaped to your style, finished with the kind of detail only true expertise can offer.
>
> Step inside and the world slows down. Warm light, gold accents, the quiet confidence of a chair that's been waiting for you. From a sharp signature cut to a hot towel shave or a full grooming experience, you don't just leave looking your best — you leave feeling Elevated.

### 3. Retone the existing photos to the site theme
Run `imagegen--edit_image` over the 6 existing real photos (`real-f`, `real-unnamed`, `real-unnamed_1..4`) with a consistent edit prompt: deepen blacks, warm gold/amber color grading, subtle film grain, low-key cinematic lighting — so they read as a cohesive set matching the dark + gold luxe theme. Save as new `.jpg.asset.json` pointers (e.g. `real-f-toned.jpg.asset.json`) and update the imports in `index.tsx`. Originals are kept untouched in case we want to revert.

No content/composition changes to the photos — only color/tone grading.

### Technical notes
- All work stays in `src/routes/index.tsx` + new asset pointers under `src/assets/`.
- No backend, no schema changes.
- New `#team` link added to the nav (desktop + mobile menu) to keep navigation consistent.

### Open question
Want me to also include a short one-line bio under each team member (e.g. "Skin fades & classic scissor work"), or keep it minimal at name + role + rating?

## Plan: Add "Review Written" indicator to Reading List

### What changes

**1. Data model** — Add optional `reviewSlug` field to `BookEntry` interface, pointing to an article slug (reusing the existing article system in `src/content/articles/`).

**2. Book entries** — For any book you've reviewed, set `reviewSlug` to the matching article slug (e.g. `reviewSlug: "made-in-the-usa-review"`). No books have reviews yet, but the field will be ready.

**3. Icon indicator** — Next to each book that has a `reviewSlug`, render a small clickable `FileText` icon (from lucide-react). Clicking it navigates to `/articles/{reviewSlug}`. Only shown for books with a review.

**4. Legend/key** — Next to the "Reading List" heading (beside the existing "Inputs" tag), add a small legend: a `FileText` icon + "= review written" in dim mono text. Keeps it minimal and terminal-styled.

### Files modified

- `src/components/BookshelfSection.tsx` — add `reviewSlug` to interface, render icon + legend

&nbsp;

Add an icon indicator to the Made In the USA title 
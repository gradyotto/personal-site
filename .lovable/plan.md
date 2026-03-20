## Changes

### 1. WorkbenchSection — Tiber links to tibermfg.com

- Add optional `url` field to the `ProjectCard` interface
- Set `url: "https://www.tibermfg.com"` on the Tiber entry
- Wrap the card in an `<a>` tag when `url` is present (opens in new tab)

### 2. WorkbenchSection — Rename Microfactory OS

- Change title from `"Microfactory OS"` to `"Phalanx - Microfactory OS"`

### 3. BookshelfSection — Add two books with reading status flairs

- Add optional `status` field (`"Read"` | `"In Progress" | "Queue"`) to `BookEntry`
- Add **"Made in the USA: The Rise and Retreat of American Manufacturing"** by Vaclav Smil under Industrial History & Strategy with `status: "Read"`
- Add **"Freedom's Forge: How American Business Produced Victory in WWII"** by Arthur Herman under Industrial History & Strategy with `status: "In Progress"`
- Render a small flair badge next to the title when `status` is set — terminal-style, matching the existing tag aesthetic (e.g. green-tinted for Read, primary/orange for In Progress)

### Files modified

- `src/components/WorkbenchSection.tsx`
- `src/components/BookshelfSection.tsx`
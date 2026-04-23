
## Make Internship Companies & Project Tech Tags Clickable

### What changes

**1. Internship section — company names link to official pages (open in new tab)**
- `Tata Steel Kalinganagar` → `https://www.tatasteel.com/corporate/wealsomaketomorrow/greener-tomorrow/tata-steel-kalinganagar-steel-plant/`
- `Sakthi Auto Components Limited` → `https://www.sakthiauto.com/`

The company `<h3>` becomes an `<a>` tag with `target="_blank"` and `rel="noopener noreferrer"`. A small `ExternalLink` icon (lucide-react) sits next to the name, and the text shifts to the primary color on hover so it's clearly clickable.

**2. Projects section — technology pills link to Google search**
Each tech pill becomes an `<a>` pointing to:
```
https://www.google.com/search?q=<encodeURIComponent(tech.name)>
```
- Opens in a new tab with `rel="noopener noreferrer"`
- Keeps the existing pill look; adds a hover state (background + slight scale) so they feel interactive
- Applies to both projects (Solar Tracker and Intelligent Load Prioritisation System)

### Files to edit

- `src/components/InternshipSection.tsx` — add a `website` field to each internship object; wrap the company name in an anchor with the `ExternalLink` icon.
- `src/components/ProjectsSection.tsx` — convert each tech `<span>` into an `<a>` using the Google search URL with hover styling.

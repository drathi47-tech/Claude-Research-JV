# CLAUDE.md — Consumer Trend Radar (Jungle Ventures)

## Project Overview

A multi-platform consumer trend analysis dashboard for identifying breakout D2C and consumer brands across India. Built for Jungle Ventures' investment team to surface emerging consumer companies (sub-$250M valuation) before they appear on mainstream trackers.

**This is not a static watchlist** — it is a signal-based discovery engine that surfaces breakout brands across all consumer sectors.

## Tech Stack

- **Vanilla HTML/CSS/JS** — zero build step, zero dependencies to install
- **Chart.js 4.x** (CDN) — all visualizations (line, bar, doughnut, etc.)
- **chartjs-adapter-date-fns** (CDN) — date axis support for Chart.js
- Open `index.html` in any modern browser to run

## File Structure

```
index.html    — Full HTML structure: sidebar nav, all dashboard panels, add-company modal
styles.css    — Dark-theme responsive CSS with CSS custom properties (variables in :root)
data.js       — Company definitions, generated time-series data, composite scoring logic
app.js        — All UI rendering, chart creation, panel switching, global controls
```

### File Responsibilities

| File | Lines | Role |
|------|-------|------|
| `index.html` | ~1190 | Declarative UI structure. Panels are `<div class="panel" id="panel-{name}">` blocks. Navigation in `<aside class="sidebar">`. |
| `styles.css` | ~2100 | Design tokens in `:root` CSS variables (`--bg-primary`, `--accent-green`, etc.). Dark theme throughout. Responsive breakpoints at 1200px and 768px. |
| `data.js` | ~2300 | `COMPANIES` array (master list), per-company data objects (`GOOGLE_TRENDS_DATA`, `ECOMMERCE_DATA`, `TRAFFIC_DATA`, `SOCIAL_DATA`, `EMPLOYEE_DATA`), `DISCOVERED_BRANDS`, `LINKEDIN_HIRING_DATA`, `FUNDING_ROUNDS`, `VC_ACTIVITY`, and `computeCompositeScores()`. |
| `app.js` | ~2440 | Panel init/render functions, Chart.js lifecycle (`destroyChart`/create pattern), DOM manipulation, global state (`currentPanel`, `currentTimeRange`, `currentSector`), `addCompany()` for dynamic company addition. |

## Architecture & Patterns

### Navigation & Panel System

Each dashboard section is a hidden `<div class="panel">` toggled by `switchPanel(panelId)`. The `initPanel()` dispatcher calls the matching `init*()` function which populates data, creates charts, and fills tables.

Panel IDs: `overview`, `google-trends`, `ecommerce`, `traffic`, `social`, `employee`, `hiring-linkedin`, `early-signals`, `breakout`, `watchlist`, `brand-lookup`, `methodology`.

### Data Flow

1. `data.js` loads first — defines `COMPANIES` array and generates all per-company data using `generateTimeSeries()` and `generateWeeklyTimeSeries()` helper functions
2. At the end of `data.js`, `computeCompositeScores()` calculates `COMPOSITE_SCORES` and `COMPANY_SIGNALS` for every company
3. `app.js` loads second — reads these global objects to render UI

### Key Global Data Objects

- `COMPANIES` — Array of `{ id, name, sector, sectorLabel, website, color, estValuation, estRevenue }`
- `GOOGLE_TRENDS_DATA[companyId]` — `{ timeSeries, currentIndex, change30d, change90d, peak12m, volatility, regions, risingQueries }`
- `ECOMMERCE_DATA[companyId]` — `{ amazon: {...}, myntra: {...}, reviewSummary: {...}, moodTimeline: [...] }`
- `TRAFFIC_DATA[companyId]` — `{ monthlyVisits, bounceRate, avgDuration, pagesPerVisit, sources, momGrowth }`
- `SOCIAL_DATA[companyId]` — `{ reddit: {...}, instagram: {...}, linkedin: {...}, viralScore, commentarySummary, moodTimeline }`
- `EMPLOYEE_DATA[companyId]` — `{ ambitionbox: {...}, glassdoor: {...} }`
- `COMPOSITE_SCORES[companyId]` — `{ google, reviews, traffic, social, composite }` (0-100 each)
- `COMPANY_SIGNALS[companyId]` — One of: `'breakout'`, `'trending'`, `'watch'`, `'declining'`

### Chart.js Pattern

All charts are stored in the global `charts` object keyed by a string name. Before creating a chart, always call `destroyChart(key)` to clean up any existing instance. Example:

```js
destroyChart('gtLine');
charts.gtLine = new Chart(ctx, { ... });
```

### Company Select Dropdowns

Many panels have company-selector `<select>` elements. These are populated using `populateCompanySelect(selectId)` which respects the current sector filter.

### Adding a New Company

`addCompany()` in `app.js` handles the full lifecycle:
1. Creates a new entry in `COMPANIES`
2. Generates synthetic data for all data objects (`GOOGLE_TRENDS_DATA`, `ECOMMERCE_DATA`, `TRAFFIC_DATA`, `SOCIAL_DATA`)
3. Computes composite scores
4. Refreshes the current panel

## Composite Scoring Methodology

```
Composite = Google (25%) + E-commerce Reviews (20%) + Website Traffic (30%) + Social Sentiment (25%)
```

Signal classification:
- **Breakout** (>= 75): Strong signals across 3+ platforms
- **Trending** (62-74): Positive momentum, monitor closely
- **Watch** (40-61): Mixed or early signals
- **Declining** (< 40): Weakening signals

## Company Selection Criteria

Companies must meet these criteria to be included:
- **30% YoY growth** across composite signals (or social breakout override)
- **Sub-$120M valuation** (INR ~1000Cr) — enough upside for 5-10x return
- **Seed to Series B stage** — not Series C/D
- **VC-investable** — must have equity story (not marketplace-only sellers)

Exclusions: acquired brands, pre-seed with no traction, public companies, stagnating brands (<20% YoY).

## Sectors Covered

Beauty & Personal Care, Food & Beverage, Fashion & Apparel, Health & Wellness, Home & Living, Consumer Electronics, Consumer Durables, Footwear, Kids & Baby Care, QSR & Coffee Chains, Offline Retail, Consumer Services, Pet Care.

## CSS Conventions

- All colors defined as CSS custom properties in `:root` (e.g., `--accent-green: #10b981`)
- Card components use `var(--bg-card)` background with `var(--border)` border
- Signal badges use class pattern: `.signal-badge.signal-{breakout|trending|watch|declining}`
- Trend arrows: `.trend-up` (green), `.trend-down` (red), `.trend-neutral` (muted)
- Responsive: 2-column grids collapse to 1-column at 1200px; sidebar collapses at 768px

## Development Conventions

### Commit Messages

Commit messages follow an imperative, action-oriented style describing the substantive change. Examples from history:
- "Apply systematic investment screen: remove 13 companies beyond growth-stage VC range"
- "Add 10 signal-discovered consumer brands, shift to signal-based discovery methodology"
- "Replace fictional hiring data with real verified senior hires"

### Adding a New Dashboard Panel

1. Add a `<button class="nav-item" data-panel="{id}">` to the sidebar nav in `index.html`
2. Add a `<div class="panel" id="panel-{id}">` block inside `.panel-container` in `index.html`
3. Add a case in `initPanel()` in `app.js` to call your `init*()` function
4. Write the `init*()` function and any render helpers in `app.js`

### Adding a New Company to the Dataset

Add an entry to the `COMPANIES` array in `data.js`, then add corresponding data entries in each data object (`GOOGLE_TRENDS_DATA`, `ECOMMERCE_DATA`, `TRAFFIC_DATA`, `SOCIAL_DATA`, `EMPLOYEE_DATA`). The `computeCompositeScores()` function at the end of `data.js` will automatically compute scores.

### Data Integrity Rules

- All data in `data.js` uses simulated/generated values via `generateTimeSeries()` and `generateWeeklyTimeSeries()` — not live API data
- Company valuations and revenue estimates should reference real sourced figures (see commit history for verification passes)
- LinkedIn hiring data must be from verified public sources (Exchange4Media, Inc42, etc.)
- Website traffic panel includes disclaimers that data is simulated

### No Build/Test/Lint System

This project has no build tools, test framework, or linter. It is pure static HTML/CSS/JS served directly from files. Validation is done by opening `index.html` in a browser and manually checking panels.

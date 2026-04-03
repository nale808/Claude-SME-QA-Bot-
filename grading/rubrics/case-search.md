# Scoring Rubric: Case Search

> This rubric is used by the QA bot to score Case Search results against the golden evaluation. The golden evaluation defines what "good" looks like. This rubric defines how to assign points.
>
> **Total: 100 points per search. Combined score: average of all 7 searches. Passing threshold: 70.**

---

## Per-Search Scoring (100 points each)

### Relevance Rate (30 points)

Percentage of page 1 results that are actually about the legal issue searched. Only page 1 is evaluated.

| Score | Criteria |
|-------|----------|
| 30 | 80%+ of page 1 results are relevant to the legal issue |
| 25 | 60-79% of page 1 results are relevant |
| 20 | 40-59% of page 1 results are relevant |
| 10 | 20-39% of page 1 results are relevant |
| 0 | <20% of page 1 results are relevant |

### Tier 1 Coverage (30 points)

Tier 1 cases from the golden evaluation present in page 1 results. 7.5 points per case.

| Score | Criteria |
|-------|----------|
| 30 | All 4 Tier 1 cases present on page 1 |
| 22.5 | 3 of 4 Tier 1 cases present |
| 15 | 2 of 4 Tier 1 cases present |
| 7.5 | 1 of 4 Tier 1 cases present |
| 0 | No Tier 1 cases present |

### Tier 2 Coverage (20 points)

Tier 2 cases from the golden evaluation present in page 1 results. 4 points per case.

| Score | Criteria |
|-------|----------|
| 20 | All 5 Tier 2 cases present on page 1 |
| 16 | 4 of 5 Tier 2 cases present |
| 12 | 3 of 5 Tier 2 cases present |
| 8 | 2 of 5 Tier 2 cases present |
| 4 | 1 of 5 Tier 2 cases present |
| 0 | No Tier 2 cases present |

### Tier 3 Bonus (10 points)

Bonus credit for Tier 3 or newly relevant cases appearing in results. 2 points per case, max 10.

| Score | Criteria |
|-------|----------|
| 10 | 5+ bonus-qualifying cases present |
| 8 | 4 bonus-qualifying cases present |
| 6 | 3 bonus-qualifying cases present |
| 4 | 2 bonus-qualifying cases present |
| 2 | 1 bonus-qualifying case present |
| 0 | No bonus cases present |

### Result Quality (10 points)

Accuracy of case detail pages when clicked into (case name, citation, court, key issue, summary).

| Score | Criteria |
|-------|----------|
| 10 | All case details verified accurate for every case clicked into |
| 8 | Minor inaccuracies in 1 case (e.g., key issue tag slightly off) |
| 5 | Inaccuracies in 2-3 cases or 1 significant error (wrong court, wrong citation) |
| 2 | Multiple significant errors across case detail pages |
| 0 | Case details are consistently inaccurate or fabricated |

---

## Per-Search Grading Scale

| Range | Grade | Description |
|-------|-------|-------------|
| 80-100 | Excellent | High relevance, must-find cases present, accurate details |
| 60-79 | Good | Mostly relevant, some must-find cases present |
| 40-59 | Fair | Mixed relevance, few expected cases |
| 20-39 | Poor | Mostly irrelevant results |
| 0-19 | Fail | No relevant results or search failed |

---

## Combined Score

- **Combined score** = average of all 7 individual search scores
- **Pass threshold: 70/100**
- Each search contributes equally to the combined score

---

## Critical Failures

These override normal scoring for the affected search:

| Condition | Effect |
|-----------|--------|
| Search returns 0 results (system error) | Automatic 0 for that search |
| Case name search (C3) doesn't return the searched case anywhere in page 1 results | Automatic 0 for that search |
| Authorities search returns no statutes at all | Automatic 0 for that search |

---

## Scoring Output Format

The bot should output scores in this format and order:

```
## QA Score: [QUERY NAME] — Case Search

### Run Log

| Step | Search ID | Query | Results Count | Relevant Count |
|------|-----------|-------|---------------|----------------|
| 1 | C1 | [query text] | [X] | [Y] |
| 2 | C2 | [query text] | [X] | [Y] |
| ... | ... | ... | ... | ... |

**Combined Score: XX/100 [PASS/FAIL]**

### Per-Search Breakdown

| Search | Relevance (30) | Tier 1 (30) | Tier 2 (20) | Tier 3 (10) | Quality (10) | Total | Grade |
|--------|----------------|-------------|-------------|-------------|--------------|-------|-------|
| C1 | X | X | X | X | X | XX | [Grade] |
| C2 | X | X | X | X | X | XX | [Grade] |
| C3 | X | X | X | X | X | XX | [Grade] |
| C4 | X | X | X | X | X | XX | [Grade] |
| C5 | X | X | X | X | X | XX | [Grade] |
| A1 | X | — | — | — | X | XX | [Grade] |
| A2 | X | — | — | — | X | XX | [Grade] |

### Deviations from Golden Evaluation
- [List specific deviations found]

### New Elements Not in Golden Evaluation
- [Case Name] | [Citation] | [Verification Link] | [Which search(es) surfaced it] | [Suggested tier]
- ...

```

**Verification links:** For each new case, include a CourtListener link with the reporter citation pre-filled in the search box — this is required for all SME review presentations. Format: `https://www.courtlistener.com/?q=[citation URL-encoded]&type=o` (e.g., `137 S.W.3d 289` → `https://www.courtlistener.com/?q=137+S.W.3d+289&type=o`). Use the reporter citation as the query, not the case name. If a case has no standard reporter citation (e.g., LEXIS-only), fall back to the case name in the query.

**Downloadable report:** After outputting the scorecard in chat, generate both an HTML and a .docx file of the full report. Save to `solutions/case-search/evals/[eval-name]/runs/run-[N]/run-[N]-scorecard.html` and `run-[N]-scorecard.docx`. Use `grading/templates/case-search-scorecard.html` as the canonical template for the HTML report — fill in all `{{PLACEHOLDER}}` values and do not alter the layout, CSS, or structure. Generate the .docx to match. Tell the user the file path when done.

Notes:
- Run Log goes first to provide context before the score
- No Strengths section
- New Elements section flags cases or authorities not currently in the golden evaluation, with verification links for each
- Do not present next-step options via AskUserQuestion unless the user explicitly asks
- For authorities searches (A1, A2), Tier 1/2/3 columns are marked "—" since tier scoring applies to case searches only

# Search Guide: Smith v. Stellar (Case Search)

> Step-by-step bot behavior for navigating StrongSuit Case Search. The bot follows these instructions to execute each search variation and capture results.

## Prerequisites

- **Human must be logged in** to `https://app.strongsuit.com` before the bot begins
- The bot cannot click "Log In" or enter credentials — this must be done by the human operator
- Verify login by confirming the Case Search interface is accessible

## Step-by-Step Bot Behavior

### 1. Navigate to Case Search
- Open `https://app.strongsuit.com/chat/cases`
- Confirm the search interface loads with the Cases tab visible

### 2. Execute Each Search Variation

For each search defined in `intake.json`, perform the following:

#### a. Select the Correct Tab
- **Cases mode** (C1–C5): Click the "Cases" tab if not already selected
- **Authorities mode** (A1–A2): Click the "Authorities" tab

#### b. Enter Query
- Clear any existing text in the search box
- Type or paste the exact query text from `intake.json`

#### c. Execute Search
- Click "Search Cases" (Cases tab) or "Search Authorities" (Authorities tab)
- Wait up to 60 seconds for results to load

#### d. Capture Page 1 Results
- Record all cases/authorities displayed on page 1 only
- **Do NOT navigate to page 2 or beyond** — only page 1 is evaluated
- Note the total number of result pages shown (for reference only)

#### e. Capture Case Results from Results Page (Cases mode only)
- **Do NOT click into individual case detail pages** — capture all data from the results list page
- For each case on page 1, record what is visible on the results list:
  - Case name
  - Citation
  - Summary snippet
- **Exclude any result that does not have a citation listed** — these are invalid and should not be recorded or counted
- Determine relevance to the fact pattern based on the summary snippet alone
- Compare against the golden evaluation tiers (Tier 1 / Tier 2 / Tier 3 / None)

#### f. Record Authorities Results (Authorities mode only)
- For each statute/authority on page 1, record:
  - Statute citation
  - Title/description
  - Whether full text is available

### 3. Special Handling by Search Type

| Search | Special Rule |
|--------|-------------|
| C1 (Case Name Lookup) | Verify *Marsh USA Inc. v. Cook* appears as the #1 result. If absent from all results, mark as critical failure. |
| A1 (Exact Citation) | Verify Tex. Bus. & Com. Code § 15.50 appears in results. If absent, mark as critical failure. |
| A2 (Descriptive Query) | Check whether §§ 15.50, 15.51, and 15.52 appear in results. |

### 4. Between Searches
- Clear the search box before entering the next query
- Ensure the correct tab (Cases/Authorities) is selected before searching
- Allow results to fully load before capturing data

## What to Capture Per Search

```
Search ID: [e.g., C1-case-name-lookup]
Tab: [Cases / Authorities]
Query: [exact text entered]
Results on Page 1: [count]
Total Pages: [count]

Result 1:
  - Name: [case name]
  - Citation: [citation]
  - Summary: [snippet as shown on results page]
  - Relevant: [Yes / No — based on summary snippet]
  - Tier Match: [Tier 1 / Tier 2 / Tier 3 / New / None]

Result 2:
  ...
```

---

## Post-Run: SME Review Workflow

After all searches are complete, the bot presents findings to the human SME for review. This happens in conversation — the bot does NOT update the golden evaluation directly.

### 1. Present New Findings

For any case that the bot flagged as relevant but is **not already in the golden evaluation** (marked "New" in Tier Match), present it to the SME:

```
NEW CASE FOR REVIEW:
  - Name: [case name]
  - Citation: [citation]
  - Summary: [snippet from results page]
  - Surfaced by: [search ID, e.g., C2-keyword-stacking]
  - Relevance: [why the bot thinks this is relevant to the fact pattern]
```

### 2. SME Decision: Approve or Pass

For each new case, the SME responds **Approve** or **Pass**.

#### If Approved:
- The bot provides a CourtListener link with the citation pre-filled in the search box:
  ```
  CourtListener: https://www.courtlistener.com/?q=[reporter citation URL-encoded]&type=o
  ```
  Example: `137 S.W.3d 289` → `https://www.courtlistener.com/?q=137+S.W.3d+289&type=o`
  Use the reporter citation (volume + reporter + page) as the query, not the case name — citations are more precise.
- The SME clicks the link and reviews the full opinion on CourtListener
- If the SME confirms after CourtListener review, the bot adds the case to the golden evaluation with the appropriate tier, citation, and relevance summary

#### If Passed:
- The bot saves the case to memory so it is **not flagged again** in future runs
- Memory includes: case name, citation, which search surfaced it, date, and that the SME reviewed and declined it
- On future runs, the bot checks memory before presenting new findings and skips any previously-passed cases

### 3. Summary

After all new cases are reviewed, the bot outputs a summary:

```
SME REVIEW COMPLETE:
  - Cases approved: [count] (pending CourtListener verification)
  - Cases passed: [count] (saved to memory)
  - Golden evaluation updated: [Yes / No]
```


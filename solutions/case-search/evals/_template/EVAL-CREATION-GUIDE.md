# Case Search Eval Creation Guide

> Follow this step-by-step checklist to create a new Case Search QA eval from scratch. Copy this entire `_template/` folder to a new folder named after your case (kebab-case, e.g., `doe-v-acme/`), then work through each step below.

---

## Checklist

### 1. Set Up Your Eval Folder

- [ ] Copy `_template/` to `solutions/case-search/evals/[your-case-name]/`
- [ ] Rename `[name]-golden-evaluation.md` using the first party's last name (e.g., `doe-golden-evaluation.md`)
- [ ] Create an empty `runs/` folder inside your eval folder

### 2. Write Your Fact Pattern

- [ ] Open `fact-pattern.txt` and paste the full fact pattern
- [ ] Keep it under 1,000 words
- [ ] Include: all parties, key facts, the legal dispute, jurisdiction, and relevant contract/agreement details
- [ ] Remove any privileged or confidential information not needed for search testing

### 3. Identify Key Legal Issues

- [ ] List the 3-6 core legal issues in the fact pattern
- [ ] Identify the relevant jurisdiction and governing statutes
- [ ] Note which issues are most likely to produce strong search results

### 4. Research Expected Cases

Use multiple sources to build your case list:

- [ ] **StrongSuit Case Search**: Run preliminary searches and note relevant results
- [ ] **Legal databases**: Westlaw, LexisNexis, or similar for authoritative case lists
- [ ] **Web search**: Cross-reference case names and citations

### 5. Verify Every Case Citation

> **This is critical.** LLMs hallucinate case citations. Every case in your golden eval must be independently verified.

For each case:
- [ ] Web search the case name + citation
- [ ] Confirm the citation is real and in correct Bluebook format
- [ ] Confirm the case content matches your description of its relevance
- [ ] Confirm the court is correctly identified
- [ ] Remove any case you cannot independently verify

### 6. Assign Cases to Tiers

| Tier | Criteria | Example |
|------|----------|---------|
| **Tier 1** (Must-Find) | Landmark cases from the state's highest court or key federal circuits that are directly on point. Missing these is a significant failure. | Texas Supreme Court cases on non-compete enforceability |
| **Tier 2** (Should-Find) | Important appellate cases addressing specific sub-issues. Expected in good searches but weighted lower. | Court of Appeals cases on geographic overbreadth |
| **Tier 3** (Bonus) | Relevant but less directly on point. Other jurisdictions, tangential issues, or supplementary authority. | Out-of-state cases frequently cited in the jurisdiction |

- [ ] Assign 3-5 cases to Tier 1
- [ ] Assign 3-6 cases to Tier 2
- [ ] Define qualifying categories for Tier 3 (specific cases optional)

### 7. Design Search Variations

Minimum 5 searches, recommended 7. Always include:

| ID | Required | Description |
|----|----------|-------------|
| C1 | Case name lookup | Search for a known Tier 1 case by name |
| C2 | Keyword stacking | Key legal terms separated by spaces |
| C3 | Narrow single-issue query | One specific legal argument as a question |
| C4 | Focused legal question | Single legal issue framed as a precise question |
| C5 | Full fact pattern (semantic) | Paste the full narrative into the search box |

Optional but recommended (Authorities mode):

| ID | Optional | Description |
|----|----------|-------------|
| A1 | Exact statute citation | e.g., "Tex. Bus. & Com. Code § 15.50" |
| A2 | Descriptive statute query | e.g., "Texas covenants not to compete act" |

- [ ] Write all search queries in `intake.json`
- [ ] Ensure each query has a unique ID, label, mode, and query text

### 8. Research Relevant Statutes

- [ ] Identify 2-4 key statutes governing the legal issues
- [ ] Include both the citation and a description of what each covers
- [ ] Add these to the Key Statutes section of the golden evaluation

### 9. Complete the Golden Evaluation

- [ ] Fill in all 10 sections of `[name]-golden-evaluation.md`
- [ ] Ensure the Case Summary accurately reflects the fact pattern
- [ ] Verify all case tables have: case name, citation, and relevance description
- [ ] Fill in Expected Variance and Known Issues based on preliminary testing
- [ ] Leave the Approval History table empty (populated after runs)

### 10. Run the Eval Once Manually

- [ ] Execute all search variations on StrongSuit
- [ ] Score the run using the rubric at `grading/rubrics/case-search.md`
- [ ] Document any surprising results in the Known Issues section
- [ ] Save the run output to `runs/run-1/`

### 11. Peer Review

- [ ] Have a second SME review the golden evaluation
- [ ] Verify case citations independently
- [ ] Confirm tier assignments are appropriate
- [ ] Sign off on the SME Review section

### 12. Commit to Repo

- [ ] Verify your folder structure matches:
  ```
  solutions/case-search/evals/[your-case-name]/
  ├── [name]-golden-evaluation.md
  ├── intake.json
  ├── search-guide.md
  ├── fact-pattern.txt
  └── runs/
  ```
- [ ] Commit all files with a descriptive message

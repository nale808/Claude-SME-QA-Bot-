# Golden Evaluation: [Case Name] ([Jurisdiction] [Legal Area])

> **This document is the source of truth for this Case Search QA eval.** It defines what "good" search results look like across all search variations. The SME reviews and approves this document, and can update it after each QA run.
>
> **SME Sign-Off:**
> - Name: _______________
> - Date verified: _______________
> - Runs analyzed: _______________

---

## 1. Case Summary

<!-- Write a 1-paragraph summary of the fact pattern. Include:
     - What happened (the dispute)
     - Who the parties are
     - The jurisdiction
     - The key legal issues (3-6)

     Example (from Smith v. Stellar):
     "Smith v. Stellar Company LLC is a Texas non-compete dispute. Smith, a top-performing
     salesman, signed a 2-year non-compete agreement..." -->

**Parties:**
- **Defendant**: [Name, role, location]
- **Plaintiff**: [Name, role, location]

**Jurisdiction:** [State]

**Key Legal Issues:**
1. [Issue 1]
2. [Issue 2]
3. [Issue 3]

---

## 2. Search Variations

<!-- Reference your intake.json. List all search variations with what each tests.
     Minimum 5 searches (3 cases + 2 authorities), recommended 7. -->

### Cases Mode

| ID | Label | What It Tests |
|----|-------|---------------|
| C1 | Case Name Lookup | Known case retrieval; must return exact case as #1 |
| C2 | Keyword Stacking | Boolean-style keyword matching |
| C3 | Narrow Single Issue | Single sub-issue query; tests precision on a specific legal argument |
| C4 | Focused Legal Question | Precise single-issue retrieval |
| C5 | Full Fact Pattern | Semantic understanding of multi-issue narrative |

### Authorities Mode

| ID | Label | What It Tests |
|----|-------|---------------|
| A1 | Exact Statute Citation | Direct citation lookup |
| A2 | Descriptive Statute Query | Natural language → citation mapping |

### Presets — Cases Mode

<!-- Ready-to-paste queries for each Cases-mode search. Copy each query from intake.json
     and paste it here in a code block so operators can grab it without opening intake.json. -->

**C1-case-name-lookup**
```
[Paste C1 query from intake.json]
```

**C2-keyword-stacking**
```
[Paste C2 query from intake.json]
```

**C3-narrow-single-issue**
```
[Paste C3 query from intake.json]
```

**C4-focused-legal-question**
```
[Paste C4 query from intake.json]
```

**C5-full-fact-pattern**
```
[Paste C5 query from intake.json]
```

### Presets — Authorities Mode

**A1-exact-citation**
```
[Paste A1 query from intake.json]
```

**A2-descriptive**
```
[Paste A2 query from intake.json]
```

---

## 3. Tier 1 — Must-Find Cases

<!-- These are landmark cases from the jurisdiction's highest court (e.g., state supreme court)
     or key federal circuits that are DIRECTLY on point for the legal issues.
     Missing a Tier 1 case is a significant scoring deduction (7.5 pts each).

     IMPORTANT: Web-verify every case before adding. LLMs hallucinate citations.

     Example:
     | *Marsh USA Inc. v. Cook* | 354 S.W.3d 764 (Tex. 2011) | Leading case on consideration requirement for non-compete enforceability |

     Aim for 3-5 Tier 1 cases. -->

| Case | Citation | Relevance |
|------|----------|-----------|
| *[Case Name]* | [Citation] | [Why this case is essential] |

---

## 4. Tier 2 — Should-Find Cases

<!-- Important appellate cases addressing specific sub-issues in the fact pattern.
     Expected in well-performing searches but weighted lower than Tier 1 (4 pts each).

     Example:
     | *Butler v. Arrow Mirror & Glass, Inc.* | 51 S.W.3d 787 (Tex. App. 2001) | Reformation of overbroad non-compete |

     Aim for 3-6 Tier 2 cases. -->

| Case | Citation | Relevance |
|------|----------|-----------|
| *[Case Name]* | [Citation] | [Why this case is important] |

---

## 5. Tier 3 — Bonus Cases

<!-- Define qualifying CATEGORIES rather than specific cases. Award 2 pts each (max 10).
     Specific cases can be listed but are not required.

     Example categories:
     - Any other Texas non-compete case applying § 15.50 reformation
     - Cases from other jurisdictions frequently cited in Texas non-compete law -->

Qualifying categories:
- [Category 1]
- [Category 2]
- [Category 3]

---

## 6. Cases Cited Within Tiered Cases — Not Yet Surfaced

<!-- Track cases that are prominently cited in Tier 1/2/3 opinions but have NOT appeared
     in any search results. These are leads for potential golden inclusion.

     When clicking into a tiered case on StrongSuit, note any cases cited multiple times
     or described as foundational. Add them here with the citing case and a brief note.
     After investigation, promote to Tier 1/2/3 or remove if not relevant.

     Example:
     | *DeSantis v. Wackenhut Corp.* | 793 S.W.2d 670 (Tex. 1990) | Juliette Fowler Homes (Tier 2) | Establishes three-criteria test for non-compete reasonableness | -->

| Case | Citation | Citing Case(s) | Why It Matters |
|------|----------|----------------|----------------|
| *[Case Name]* | [Citation] | [Which tiered case cites it] | [Brief description of significance] |

---

## 7. Key Statutes (for Authorities Searches)

<!-- List 2-4 key statutes governing the legal issues. These are what the
     authorities searches (A1, A2) should return. -->

| Statute | Description |
|---------|-------------|
| [Citation] | [What it covers] |

---

## 8. Case Detail Accuracy Checks

When clicking into any case from search results, verify:

- [ ] **Case name** matches the official case name
- [ ] **Citation** is correct in Bluebook format
- [ ] **Winning party** is accurately identified
- [ ] **Court** is correct
- [ ] **Key Issue tag** is appropriate to the case's holding
- [ ] **Summary** is factually accurate and not hallucinated
- [ ] **Facts** section accurately reflects the case record
- [ ] **Key Holdings** are accurate to the court's actual holdings
- [ ] **Legal Reasoning** is sound and consistent with the opinion

---

## 9. Expected Variance

<!-- Document run-to-run differences that are normal and should NOT be treated as failures.

     Example:
     - Result ordering may vary between runs
     - Tier 2 cases may not appear in every search variation
     - Case name search (C3) should return the exact case as #1 -->

- Result ordering may vary between runs for the same query
- Page 1 typically shows ~10 results; only page 1 is evaluated
- Tier 2 and Tier 3 cases may not appear in every search variation
- Case name search (C3) should return the exact case as the #1 result

---

## 10. Known Issues

<!-- Document any known problems discovered during initial testing.
     These establish a baseline, not a pass/fail criterion.

     Example:
     - Full fact pattern search (C1) returned mostly irrelevant results
     - Diagnosis: multi-keyword dilution, narrative format not optimized for legal query engine -->

- (To be populated after first QA run)

---

## 11. SME Review & Approval

After each QA run, the SME:

1. Reviews deviations from this golden evaluation
2. Reviews any new elements not currently in the golden eval
3. Can promote cases between tiers (e.g., Tier 3 → Tier 2 if consistently relevant)
4. Can add newly discovered relevant cases to any tier
5. Approves or rejects the run score
6. Decides whether to update this golden evaluation based on findings

**Approval History:**

| Run | Date | SME | Score | Approved | Golden Eval Updated |
|-----|------|-----|-------|----------|---------------------|
| — | — | — | — | — | — |

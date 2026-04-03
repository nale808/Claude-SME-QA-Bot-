# Golden Evaluation: Smith v. Stellar Company LLC (Texas Non-Compete)

> **This document is the source of truth for the Smith v. Stellar Case Search QA eval.** It defines what "good" search results look like across all search variations. The SME reviews and approves this document, and can update it after each QA run.
>
> Last verified: 2026-03-31
> Verified by: SME approved — 9 new cases added from Run 2 (2026-03-31)
> Runs analyzed: 2 (C4 search — Run 1; all 7 searches — Run 2, 2026-03-31)

---

## 1. Case Summary

Smith v. Stellar Company LLC is a Texas non-compete dispute. Smith, a top-performing salesman, signed a 2-year non-compete agreement with Stellar Company LLC. The agreement restricts work in Texas and 6 other states, covering not just competitors but the entire industry. When the owner (Joe Brown) tried to force Smith into a salaried-only Sales Director role at half his prior commission-based compensation, Smith refused. Stellar fired him, citing insubordination. Smith then founded a new business in the same industry but selling a non-competitive product. Stellar is suing for breach of contract, seeking injunction and damages.

**Parties:**
- **Defendant**: Smith, 36-year-old salesman, Texas resident, former top performer at Stellar
- **Plaintiff**: Stellar Company LLC, Texas company owned by Joe Brown

**Jurisdiction:** Texas

**Key Legal Issues:**
1. Enforceability of overbroad non-compete (industry-wide vs. competitors-only)
2. Geographic overbreadth (7 states when employee worked only in Texas)
3. Whether employer's material breach (unilateral compensation reduction + pretextual firing) voids the non-compete
4. Statutory reformation under Tex. Bus. & Com. Code § 15.50-15.51
5. Whether injunctive relief is warranted (irreparable harm requirement)
6. Whether working in same industry but with non-competitive products constitutes a violation

---

## 2. Search Variations

Seven search variations are defined in `intake.json`. Each tests a different input approach to evaluate how Case Search handles varying query types.

### Cases Mode (5 searches)

| ID | Label | What It Tests |
|----|-------|---------------|
| C1 | Case Name Lookup | Known case retrieval; must return exact case as #1 result |
| C2 | Keyword Stacking | Boolean-style keyword search; tests keyword matching engine |
| C3 | Narrow Single Issue (Employer Breach) | Single sub-issue query; tests precision on a specific legal argument |
| C4 | Focused Legal Question | Single legal issue framed as a precise question; tests single-issue retrieval |
| C5 | Full Fact Pattern (Semantic/NLP) | Multi-issue narrative input; tests semantic understanding and keyword dilution |

### Authorities Mode (2 searches)

| ID | Label | What It Tests |
|----|-------|---------------|
| A1 | Exact Statute Citation | Direct citation lookup; must return the exact statute |
| A2 | Descriptive Statute Query | Natural language statute search; tests mapping description to citation |

### Presets — Cases Mode

Ready-to-paste queries for each Cases-mode search. Copy the query text directly into the search box with the **Cases** tab selected.

**C1-case-name-lookup**
```
Marsh USA Inc. v. Cook
```

**C2-keyword-stacking**
```
Texas non-compete overbroad industry-wide restriction reformation employer breach
```

**C3-narrow-single-issue**
```
employer materially breached employment agreement by unilaterally reducing compensation then fired employee can non-compete still be enforced Texas
```

**C4-focused-legal-question**
```
enforceability of overbroad non-compete agreement that restricts work in entire industry rather than just competitors under Texas Business and Commerce Code Section 15.50
```

**C5-full-fact-pattern**
```
Texas employee signed 2-year non-compete covering 7 states with company. Employee was top salesman paid mostly commissions. Employer tried to force employee into salaried-only role at half pay. Employee refused, was fired for insubordination. Employee started new business in same industry but selling non-competitive product. Employer suing to enforce non-compete and seeking injunction plus damages. Non-compete defines competitors so broadly it covers entire industry not just actual competitors.
```

### Presets — Authorities Mode

Ready-to-paste queries for each Authorities-mode search. Copy the query text directly into the search box with the **Authorities** tab selected.

**A1-exact-citation**
```
Tex. Bus. & Com. Code § 15.50
```

**A2-descriptive**
```
Texas covenants not to compete act
```

---

## 3. Tier 1 — Must-Find Cases

These are landmark Texas Supreme Court and key federal appellate cases that are foundational to the legal issues in this fact pattern. Any relevant case search should surface at least some of these. Missing a Tier 1 case is a significant scoring deduction.

| Case | Citation | Relevance |
|------|----------|-----------|
| *Marsh USA Inc. v. Cook* | 354 S.W.3d 764 (Tex. 2011) | Leading Texas Supreme Court case on consideration requirement and "reasonably related" test for non-compete enforceability |
| *Alex Sheshunoff Mgmt. Servs., L.P. v. Johnson* | 209 S.W.3d 644 (Tex. 2006) | At-will employment and non-compete enforceability when employer has performed its obligations |
| *Peat Marwick Main & Co. v. Haass* | 818 S.W.2d 381 (Tex. 1991) | Overbroad activity/client restrictions unreasonable — later courts cite for "industry-wide exclusion" rule; directly on point for Smith's overbreadth defense |
| *Olander v. Compass Bank* | 363 F.3d 560 (5th Cir. 2004) | Non-compete not ancillary to otherwise enforceable agreement — unenforceable under Texas law |
| *DeSantis v. Wackenhut Corp.* | 793 S.W.2d 670 (Tex. 1990) | Texas Supreme Court landmark establishing the three-criteria test for non-compete reasonableness: (1) ancillary to valid transaction, (2) restraint not greater than necessary, (3) promisee's need doesn't outweigh hardship to promisor or public injury. Foundational framework cited by all subsequent Texas non-compete cases. Promoted from Section 6 after web verification 2026-03-31. |
| *Light v. Centel Cellular Co. of Texas* | 883 S.W.2d 642 (Tex. 1994) | Texas Supreme Court landmark on the "ancillary" requirement under § 15.50. Held non-compete unenforceable if not ancillary to an otherwise enforceable agreement. Later modified by Sheshunoff (2006) and Marsh (2011) but remains foundational for the statutory framework. Referred to as "the most famous Texas non-compete case." Added via web research 2026-03-31. |

---

## 4. Tier 2 — Should-Find Cases

Important appellate cases that address specific sub-issues in the fact pattern. Expected in well-performing searches but weighted lower than Tier 1.

| Case | Citation | Relevance |
|------|----------|-----------|
| *Butler v. Arrow Mirror & Glass, Inc.* | 51 S.W.3d 787 (Tex. App.—Houston [1st Dist.] 2001) | Reformation of overbroad non-compete under statutory duty |
| *Evan's World Travel, Inc. v. Adams* | 978 S.W.2d 225 (Tex. App.—Texarkana 1998) | Geographic overbreadth — covenant narrowed to single county |
| *Cardinal Health Staffing Network, Inc. v. Bowen* | 106 S.W.3d 230 (Tex. App.—Houston [1st Dist.] 2003) | Irreparable injury required for injunction — denial of injunction affirmed |
| *Zep Mfg. Co. v. Harthcock* | 824 S.W.2d 654 (Tex. App.—Dallas 1992) | Geographic reasonableness = employee's actual territory |
| *Guy Carpenter & Co. v. Provenzale* | 334 F.3d 459 (5th Cir. 2003) | Non-solicitation/non-disclosure enforceability under § 15.50 |
| *Juliette Fowler Homes, Inc. v. Welch Associates, Inc.* | 793 S.W.2d 660 (Tex. 1990) | Texas Supreme Court (410 citations); noncompetition clause held unreasonable restraint of trade — unenforceable for lacking geographic/scope limitations; no damages recoverable for breach of unenforceable non-compete; discusses §§ 15.50/15.51 reformation; cites DeSantis v. Wackenhut three-criteria test. Surfaced by C4 run 2026-03-31. |
| *D'Onofrio v. Vacation Publications, Inc.* | No. 16-20628 (5th Cir. 2018) | Fifth Circuit ruled industry-wide non-compete with no geographic limits, not limited to actual clients, covering entire travel agency industry = unenforceable under Texas law. Directly on point for Issues #1 (industry-wide restriction) and #6 (same industry vs. competitor). Added via web research 2026-03-31. |
| *John R. Ray & Sons, Inc. v. Stroman* | 923 S.W.2d 80 (Tex. App. 1996) | Non-compete held unreasonable restraint of trade; overbroad activity restrictions unenforceable. Directly on point for Issue #1. Surfaced by C2/C3 in Run 2. |
| *Wright v. Sport Supply Group, Inc.* | 137 S.W.3d 289 (Tex. App. 2004) | Overbroad non-compete; court reformed under § 15.51; geographic and scope overbreadth both addressed. Directly on point for Issues #1 and #4. Surfaced by C2/C3 in Run 2. |
| *Gomez v. Zamora* | 814 S.W.2d 114 (Tex. App. 1991) | Geographic scope of non-compete; court addresses waiver of right to seek reformation. Directly on point for Issue #2. Surfaced by C2/C3 in Run 2. |
| *U.S. Risk Insurance Group, Inc. v. Brett Woods* | 399 S.W.3d 295 (Tex. App. 2013) | Industry-wide non-compete held unenforceable under Texas law. Directly on point for Issues #1 (industry-wide restriction) and #6 (same industry vs. competitor). Surfaced by C2/C3 in Run 2. |

---

## 5. Case Treatment Summary

> **Note to SMEs:** This section documents the current legal treatment status of each tiered case as of 2026-03-31. It is provided for informational purposes only — treatment status does **not** affect scoring. If a case is completely overturned or overruled in the future, it should be removed from the eval. Cases that are modified, partially overruled, or narrowed by later decisions should remain but have their treatment updated here.
>
> "Treatment" refers to how later courts have handled a case's holdings — whether they followed, distinguished, modified, or overruled it. This is sometimes called "Shepardizing" (Lexis) or "KeyCiting" (Westlaw). A case with negative treatment is not necessarily bad law — it may still be valid on the specific point for which it is cited in this eval.

### Tier 1 Treatment

| Case | Treatment | Notes |
|------|-----------|-------|
| *Marsh USA Inc. v. Cook* (2011) | **Good law** | Current controlling Texas Supreme Court authority on non-compete consideration. Overruled the "give rise to" prong of *Light v. Centel Cellular* (1994). |
| *Alex Sheshunoff Mgmt. Servs. v. Johnson* (2006) | **Good law — supplemented** | Modified *Light v. Centel Cellular*'s interpretation of the Covenants Not to Compete Act. Later supplemented by *Mann Frankfort Stein & Lipp Advisors, Inc. v. Fielding*, 289 S.W.3d 844 (Tex. 2009), which clarified the implied-promise-of-confidential-information standard. Core holding remains intact. |
| *Peat Marwick Main & Co. v. Haass* (1991) | **Good law** | No subsequent overruling or modification found. Still regularly cited for the industry-wide exclusion rule (overbroad restraints on personal services are unreasonable). |
| *Olander v. Compass Bank* (2004) | **Good law** | No subsequent overruling or modification found. Remains valid 5th Circuit authority on non-compete ancillary-agreement requirements under Texas law. |
| *DeSantis v. Wackenhut Corp.* (1990) | **Good law** | Foundational three-criteria test remains intact. Expressly confirmed as not overruled in *In re AutoNation, Inc.*, 228 S.W.3d 663 (Tex. 2007). |
| *Light v. Centel Cellular Co. of Texas* (1994) | **Partially overruled** | The "give rise to" prong was overruled by *Marsh v. Cook* (2011). The "designed to enforce" prong survives — no Texas Supreme Court case has overruled that element. *Sheshunoff* (2006) also modified Light's interpretation of when consideration must exist. Still cited as foundational for the statutory framework, but must be read in light of *Sheshunoff* and *Marsh*. |

### Tier 2 Treatment

| Case | Treatment | Notes |
|------|-----------|-------|
| *Butler v. Arrow Mirror & Glass, Inc.* (2001) | **Good law** | No subsequent overruling or modification found. Remains valid authority on statutory duty to reform overbroad non-competes under § 15.51(c). |
| *Evan's World Travel, Inc. v. Adams* (1998) | **Good law** | No subsequent overruling or modification found. Remains valid authority on geographic overbreadth and narrowing covenants to the employee's actual work area. |
| *Cardinal Health Staffing Network v. Bowen* (2003) | **Good law** | No subsequent overruling or modification found. Remains valid on the irreparable-injury requirement for temporary injunctions in non-compete cases. |
| *Zep Mfg. Co. v. Harthcock* (1992) | **Good law** | No subsequent overruling or modification found. One of the first cases to apply § 15.50's geographic-area requirement; still cited for the principle that geographic scope must match the employee's actual territory. |
| *Guy Carpenter & Co. v. Provenzale* (2003) | **Good law** | No subsequent overruling or modification found. Remains valid 5th Circuit authority on non-solicitation/non-disclosure enforceability and equitable extension of expired covenants. |
| *Juliette Fowler Homes v. Welch Associates* (1990) | **Good law** | No subsequent overruling or modification found. Remains valid Texas Supreme Court authority on unreasonable restraints of trade lacking geographic/scope limitations. |
| *D'Onofrio v. Vacation Publications, Inc.* (2018) | **Good law** | No subsequent overruling or modification found. Recent 5th Circuit authority; directly on point for industry-wide non-compete unenforceability. |
| *John R. Ray & Sons, Inc. v. Stroman* (1996) | **Good law** | No subsequent overruling or modification found. Remains valid Texas appellate authority on overbroad activity restrictions. Added Run 2 (2026-03-31). |
| *Wright v. Sport Supply Group, Inc.* (2004) | **Good law** | No subsequent overruling or modification found. Remains valid Texas appellate authority on reformation of overbroad non-competes under § 15.51. Added Run 2 (2026-03-31). |
| *Gomez v. Zamora* (1991) | **Good law** | No subsequent overruling or modification found. Remains valid Texas appellate authority on geographic scope and waiver of reformation. Added Run 2 (2026-03-31). |
| *U.S. Risk Insurance Group, Inc. v. Brett Woods* (2013) | **Good law** | No subsequent overruling or modification found. Remains valid Texas appellate authority on industry-wide non-compete unenforceability. Added Run 2 (2026-03-31). |

### Tier 3 Treatment

| Case | Treatment | Notes |
|------|-----------|-------|
| *Marsh USA Inc. v. Cook* App. Ct. (2009) | **Reversed** | Reversed by Texas Supreme Court, 354 S.W.3d 764 (Tex. 2011) — that opinion is the Tier 1 case. The App. Ct. opinion has no independent precedential value; included as procedural history only. |
| *TransPerfect Translations, Inc. v. Leslie* (2009) | **Good law** | No subsequent overruling or modification found. Federal district court opinion; persuasive authority only. Added Run 2 (2026-03-31). |
| *McKissock, LLC v. Martin* (2016) | **Good law** | No subsequent overruling or modification found. Federal district court opinion; persuasive authority only. Added Run 2 (2026-03-31). |
| *Merritt Hawkins & Associates, LLC v. Gresham* (2015) | **Good law** | No subsequent overruling or modification found. Federal district court opinion; persuasive authority only. Added Run 2 (2026-03-31). |
| *Premier Industrial Corp. v. Texas Industrial Fastener Co.* (1971) | **Superseded in part** | Predates Texas Covenants Not to Compete Act (§§ 15.50–15.52, enacted 1989). Holdings on Texas common law non-compete enforceability may be superseded by statute; use with caution. Added Run 2 (2026-03-31). |

---

## 6. Tier 3 — Bonus Cases

Cases that are relevant but less directly on point. Award bonus credit if they appear in results.

Qualifying categories:
- Any other Texas non-compete case applying § 15.50 reformation
- Any case addressing employer breach as a defense to non-compete enforcement
- Any case distinguishing "same industry" from "competitor" in non-compete scope
- Cases from other jurisdictions frequently cited in Texas non-compete law
- Any case addressing pretextual termination in the non-compete context

### Known Tier 3 Cases (SME-approved)

| Case | Citation | Relevance |
|------|----------|-----------|
| *Marsh USA Inc. v. Cook* (App. Ct.) | 2009 Tex. App. LEXIS 3694 | Lower court predecessor to Tier 1 case; reversed by Texas Supreme Court (354 S.W.3d 764). Useful as procedural history only. Surfaced by C1 in Run 2. |
| *TransPerfect Translations, Inc. v. Leslie* | 28 I.E.R. Cas. (BNA) 1414 (S.D. Tex. 2009) | TX law; non-compete reformation and irreparable harm analysis. Relevant to Issues #4 and #5. Surfaced by C2/C3 in Run 2. |
| *McKissock, LLC v. Martin* | 267 F. Supp. 3d 841 (N.D. Tex. 2016) | Federal district court applying TX law; non-compete reformation and injunction. Relevant to Issues #4 and #5. Surfaced by C2/C3 in Run 2. |
| *Merritt Hawkins & Associates, LLC v. Gresham* | 79 F. Supp. 3d 625 (N.D. Tex. 2015) | Federal district court; employer breach held sufficient to void non-compete. Directly addresses Issue #3. Surfaced by C2/C3 in Run 2. |
| *Premier Industrial Corp. v. Texas Industrial Fastener Co.* | 450 F.2d 444 (5th Cir. 1971) | Older 5th Circuit non-compete enforcement; predates § 15.50 but foundational for Texas common law approach. Surfaced by C4/C5 in Run 2. |

---

## 7. Cases Cited Within Tiered Cases — Not Yet Surfaced

Cases that are prominently cited in Tier 1, 2, or 3 opinions but have not appeared in any search results. These are leads for potential golden inclusion after further investigation or future QA runs.

| Case | Citation | Citing Case(s) | Why It Matters |
|------|----------|----------------|----------------|
| *(None currently — DeSantis v. Wackenhut promoted to Tier 1 on 2026-03-31)* | — | — | — |

**How to use this section:**
- When clicking into a tiered case on StrongSuit, note any cases cited multiple times or described as foundational
- Add them here with the citing case and a brief note on why they matter
- After investigation, promote to Tier 1/2/3 or remove if not relevant

---

## 8. Key Statutes (for Authorities Searches)

| Statute | Description |
|---------|-------------|
| Tex. Bus. & Com. Code § 15.50 | Criteria for enforceability of covenants not to compete |
| Tex. Bus. & Com. Code § 15.51 | Procedures and remedies; reformation authority |
| Tex. Bus. & Com. Code § 15.52 | Preemption of other law regarding covenants not to compete |

---

## 9. Case Detail Accuracy Checks

When clicking into any case from search results, verify the following fields for accuracy:

- [ ] **Case name** matches the official case name
- [ ] **Citation** is correct in Bluebook format
- [ ] **Winning party** is accurately identified
- [ ] **Court** is correct (e.g., Texas Supreme Court vs. Court of Appeals vs. 5th Circuit)
- [ ] **Key Issue tag** is appropriate to the case's holding
- [ ] **Summary** is factually accurate and not hallucinated
- [ ] **Facts** section accurately reflects the case record
- [ ] **Key Holdings** are accurate to the court's actual holdings
- [ ] **Legal Reasoning** is sound and consistent with the opinion

---

## 10. Expected Variance

These are expected run-to-run differences and should not be treated as failures:

- Result ordering may vary between runs for the same query
- Page 1 showed 15 results in Run 1 (C4); only page 1 is evaluated
- Tier 2 and Tier 3 cases may not appear in every search variation
- Case name search (C1) should return the exact case as the #1 result
- Focused legal question (C4) did not outperform C5 in Run 1 — both had very low relevance rates; this assumption needs re-evaluation after more runs
- Keyword stacking (C2) may surface different combinations depending on search engine indexing
- **A1 (exact citation)** returning only the queried statute (§ 15.50) is expected — do not flag as a deviation. Companion sections (§§ 15.51, 15.52) not appearing is normal for an exact-citation lookup.

---

## 11. Known Issues

- **Full fact pattern search (C5)** returned mostly irrelevant results in initial testing (8/10 off-topic on page 1)
- **Diagnosis:** Multi-keyword dilution, no jurisdiction filter in Case Search, narrative format not optimized for legal query engine
- This is expected behavior to document, not a pass/fail criterion — it establishes a baseline for future improvement
- ~~C4 (focused legal question) is expected to significantly outperform C5~~
- **C4 (focused legal question)** also returned mostly irrelevant results in Run 1 (14/15 off-topic on page 1, 6.7% relevance rate). Only 1 new relevant case found (*Juliette Fowler Homes v. Welch Associates*). None of the 9 existing golden cases appeared in results.
- **Diagnosis:** Case Search appears to have weak coverage of Texas non-compete case law specifically. Results skewed heavily toward general breach of contract, arbitration, and venue cases rather than non-compete enforceability. The query referenced § 15.50 explicitly but the engine did not surface cases applying that statute.
- *DeSantis v. Wackenhut Corp.* was flagged during this run — now tracked in Section 6 (Cases Cited Within Tiered Cases).

---

## 12. SME Review & Approval

After each QA run, the SME:

1. Reviews deviations from this golden evaluation
2. Reviews any new elements not currently in the golden eval
3. Can promote cases between tiers (e.g., Tier 3 → Tier 2 if consistently relevant)
4. Can add newly discovered relevant cases to any tier
5. Approves or rejects the run score
6. Decides whether to update this golden evaluation based on findings

**Approval history:**

| Run | Date | SME | Score | Approved | Golden Eval Updated |
|-----|------|-----|-------|----------|---------------------|
| 1 | 2026-03-31 | Test | Test | Test | Test |

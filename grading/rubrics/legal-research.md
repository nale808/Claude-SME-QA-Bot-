# Scoring Rubric: Legal Research (Legal Brief)

> This rubric is used by the QA bot to score a Legal Brief output against the golden evaluation. The golden evaluation defines what "good" looks like. This rubric defines how to assign points.
>
> **Total: 100 points. Passing threshold: 70.**
> **Split: 75 points substantive / 25 points structural.**

---

## Structural Categories (25 points)

### Flow Completion (10 points)

All Build Outline steps completed successfully.

| Score | Criteria |
|-------|----------|
| 10 | All steps completed. All gates passed. Document downloaded. No human intervention. |
| 7 | All steps completed but required minor self-healing (renamed button, extra modal). |
| 4 | Completed with human assistance on 1-2 steps. |
| 0 | Flow did not complete or document did not download. |

### Document Structure (10 points)

All required sections present in correct order.

| Score | Criteria |
|-------|----------|
| 10 | All 12 sections present (Disclaimer through Certificate of Service). Correct order. No empty major sections. Court header references California. |
| 8 | 1 minor section missing or empty (e.g., Table of Authorities placeholder). |
| 5 | 2-3 sections missing or out of order. |
| 2 | Major sections missing (e.g., no Argument section, no Statement of Facts). |
| 0 | Brief is structurally unrecognizable as a legal brief. |

### Completeness (5 points)

| Score | Criteria |
|-------|----------|
| 5 | Word count in range (5,000-9,000). No truncated sections. Parties identified correctly. Conclusion requests judgment for the correct party. |
| 3 | Minor issues: word count slightly outside range, or one section appears truncated. |
| 1 | Significant issues: very short document (<3,000 words), or wrong party in conclusion. |
| 0 | Document is obviously incomplete or for the wrong party. |

---

## Substantive Categories (75 points)

### Results Page Coverage (15 points)

Correct areas of law, causes of action, and cases on the Results & Analysis page.

| Score | Criteria |
|-------|----------|
| 15 | All 3 areas of law present. At least 2 required causes of action (Defamation + Copyright). Causes have correct jurisdiction labels. Relevant cases per cause. |
| 12 | Areas of law correct. At least 2 required causes present but minor labeling issues. |
| 8 | 1 area of law missing or 1 required cause missing. Cases present but some irrelevant. |
| 4 | Multiple areas or causes missing. Cases mostly irrelevant. |
| 0 | Results page not captured or completely wrong legal analysis. |

### Legal Argument Coverage (20 points)

All 6 required topics substantively addressed in the Argument section.

Required topics (from golden evaluation Section 5):
- A. Fair Use (17 U.S.C. 107)
- B. Defamation / No False Statement (Cal. Civ. Code 45)
- C. Per Quod / Special Damages (Cal. Civ. Code 45a)
- D. UCL Business Act (Cal. Bus. & Prof. Code 17200)
- E. UCL Standing (Cal. Bus. & Prof. Code 17204)
- F. Copyright Damages (17 U.S.C. 504(b))

| Score | Criteria |
|-------|----------|
| 20 | All 6 topics substantively argued with specific reasoning. |
| 17 | 5 of 6 topics present and substantive. |
| 13 | 4 of 6 topics present and substantive. |
| 9 | 3 of 6 topics present. |
| 5 | Only 1-2 topics addressed. |
| 0 | No recognizable legal arguments or arguments for the wrong side. |

Note: "Substantively argued" means the topic is developed with case-specific reasoning, not just a one-sentence mention. A topic that is mentioned but not argued scores as half-present.

### Case Citations (10 points)

Required statutes and key cases appear and are relevant.

| Score | Criteria |
|-------|----------|
| 10 | All 6 required statutes cited. At least 4 of 5 key cases cited. Citations are accurate and relevant to the arguments they support. |
| 8 | All 6 statutes cited. 3 of 5 key cases cited. |
| 6 | 5 of 6 statutes cited. At least 2 key cases cited. |
| 3 | Some statutes and cases cited but with gaps or irrelevant citations. |
| 0 | No meaningful citations or citations are fabricated/hallucinated. |

Required statutes: 17 U.S.C. 107, 17 U.S.C. 504(b), Cal. Civ. Code 45, Cal. Civ. Code 45a, Cal. Bus. & Prof. Code 17200, Cal. Bus. & Prof. Code 17204

Key cases: Campbell v. Acuff-Rose, Harper & Row v. Nation Enters., Milkovich v. Lorain Journal, Kasky v. Nike, Kwikset v. Superior Court

### Analytical Quality (30 points)

The depth and correctness of legal reasoning.

| Score | Criteria |
|-------|----------|
| 27-30 | All arguments reference case facts specifically (blog, no advertisers, "the heart," ruthless criticism). Counterarguments acknowledged and rebutted. Causal reasoning sound: distinguishes harm from criticism vs. harm from market substitution. Defendant perspective maintained. Each argument applies statute to facts. |
| 20-26 | Most arguments reference case facts. Some counterarguments addressed. Reasoning mostly sound but 1-2 analytical gaps (e.g., fails to distinguish criticism harm from substitution harm). |
| 13-19 | Arguments are generic legal analysis not tied to case facts. Some reasoning errors. Counterarguments mostly ignored. |
| 6-12 | Arguments are superficial or partially incorrect. Limited connection to the case. |
| 0-5 | Analysis is incoherent, legally incorrect, or argues for the wrong party. |

**Key analytical markers** (from golden evaluation):
- Distinguishes reputational harm from criticism (not actionable under copyright) vs. market substitution (actionable)
- Distinguishes the copied portion (quotation) from the added portion (criticism) for causation analysis
- Recognizes that Global Media's own words cannot be "false" when accurately quoted back
- Recognizes that voluntary contributions are not equivalent to commercial revenue
- Each argument ties statute to specific case facts

---

## Critical Failures (automatic overrides)

These override the normal scoring:

| Condition | Effect |
|-----------|--------|
| Brief argues for the Plaintiff (Global Media) instead of Defendant (Ms. Smith) | Automatic 0/100 |
| Brief is for a completely different case (wrong parties, wrong facts) | Automatic 0/100 |
| Brief contains no Argument section at all | Cap at 25/100 maximum |
| Any "Facts That Must Not Change" (golden evaluation Section 7) is wrong | Deduct 10 points per violation |

---

## Scoring Output Format

The bot should output scores in this format and order:

```
## QA Score: [QUERY NAME]

### Run Log

| Step | Action | Observed |
|------|--------|----------|
| [Step name] | [What the bot did] | [What the bot observed] |
| ... | ... | ... |

**Total: XX/100 [PASS/FAIL]**

| Category | Score | Max | Status |
|----------|-------|-----|--------|
| Flow Completion | X | 10 | PASS/FAIL |
| Document Structure | X | 10 | PASS/FAIL |
| Completeness | X | 5 | PASS/FAIL |
| Results Page Coverage | X | 15 | PASS/FAIL |
| Legal Argument Coverage | X | 20 | PASS/FAIL |
| Case Citations | X | 10 | PASS/FAIL |
| Analytical Quality | X | 30 | PASS/FAIL |

### Deviations from Golden Evaluation
- [List specific deviations found]

### New Elements Not in Golden Evaluation
- [Case/Statute/COA] | [Citation] | [Verification Link] | [Context] | [Suggested addition]
- ...

```

**Verification links:** For each new case or statute, include a link so the SME can verify it. Prefer CourtListener (`https://www.courtlistener.com`) first. If the case is not available on CourtListener, use Google Scholar (`https://scholar.google.com`) as a fallback. The bot should search for and provide the direct URL to the case opinion page, not just a search results link.

After outputting the score card, use the `AskUserQuestion` tool to present next steps as clickable options:
- Question: "What would you like to do with this QA run?"
- Header: "QA Actions"
- multiSelect: true
- Options:
  - **Approve** — "Mark this QA run as approved"
  - **Update golden evaluation** — "Add new elements from this run to the golden evaluation"
  - **Draft Linear ticket** — "Create a Linear ticket for deviations found"

Notes:
- Run Log goes first to provide context before the score
- No Strengths section
- New Elements section flags cases, statutes, COAs, or areas of law not currently in the golden evaluation, with verification links for each
- Next-step actions are presented via `AskUserQuestion`, not printed as text

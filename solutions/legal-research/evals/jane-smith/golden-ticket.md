# Golden Ticket: Magazine, Inc. v. Jane Smith (2025)

> **This document is the legal binder for the Jane Smith QA eval.** It contains everything a legal professional or QA evaluator needs to assess whether a generated Legal Brief meets the substantive and structural standards for this case. It is the single source of truth for what constitutes a successful QA run.
>
> Last verified: 2026-03-27
> Verified by: (pending SME review)
> Runs analyzed: 3 (run-1, run-2, run-3) + 1 live walkthrough (run-4)

---

## 1. Case Summary

Magazine, Inc. v. Jane Smith (2025) is a California case in which a media company sues a blogger for copyright infringement, defamation, and unfair competition arising from a single blog post that quoted and criticized a magazine article.

**Parties:**
- **Defendant**: Jane Smith ("Ms. Smith"), California resident. Operates a personal, noncommercial blog ("the Blog"). The Blog has no advertisers. Ms. Smith is not alleged to sell goods or services through the Blog.
- **Plaintiff**: Global Media ("Global Media"), California-based media company. Publishes a magazine containing the article at issue ("the Magazine Article").

**What happened:**
- Ms. Smith published a Blog Post that quoted what Global Media characterizes as "the heart" of the Magazine Article.
- The Blog Post contained little content beyond the quoted material.
- After the quotation, Ms. Smith added criticism that was short relative to the quoted portion and described as "ruthless."
- Global Media claims the Blog Post harmed the Magazine's credibility and cost the Magazine business.
- Global Media contends Ms. Smith benefited through increased voluntary contributions to the Blog following publication.

**Brief perspective:** Defendant (Ms. Smith). The Legal Brief argues for dismissal of all claims against Ms. Smith. If the output is written from the Plaintiff's perspective, that is a **critical failure** (automatic 0/100).

**Jurisdiction:** California. The brief may reference US District Court (federal copyright jurisdiction) or California Superior Court / State Trial Court (state law claims). Both are acceptable.

---

## 2. Flow Expectations

What should happen at each step of the Build Outline flow. This is the structural portion of the QA check (25 of 100 points).

### Intake
- Bot selects "Jane Smith" from the example dropdown
- Title auto-fills as "Magazine, Inc. v. Jane Smith (2025)"
- Jurisdiction: California
- Representing: Defendant
- Fact pattern auto-populates (~811 characters)

### Follow-up Questions
- 5 AI-generated questions appear (count may vary slightly; see Section 10 for observed questions)
- v1 behavior: accept defaults (all set to Include), click Continue
- A confirmation modal appears: "Are you sure you want to continue without answering any questions?" -- bot clicks "Yes"

### Areas of Law
- Three areas should appear consistently (see Section 3 for details)
- Litigation Stage defaults to "State Trial Court"
- Bot accepts all defaults, clicks Continue

### Legal Authorities
- Review gate: "X/N Reviewed, Review each to continue"
- Bot must click each cause of action in the left sidebar to mark as reviewed
- Green checkmark appears after each is reviewed
- Statutes related to copyright, defamation, UCL should appear

### Legal Questions
- Selection gate: "X/N Selected, Select questions for each to continue"
- Bot must click into each cause AND verify checkboxes are selected
- Some causes auto-select questions; others (like Copyright Infringement) may leave checkboxes unchecked
- Bot must ensure every cause has at least one question selected

### Cases
- Review gate: same pattern as Legal Authorities ("X/N Reviewed")
- Bot must click through each cause of action to mark as reviewed
- Cases with holdings appear per cause

### Results & Analysis
- Page loads with a "Temporary" loading indicator at top
- Wait for loading to complete before proceeding
- Per-cause analysis populates

### Document Generation
- Click "Next Steps" button in bottom-right
- Click "Legal Brief" card in Quick Downloads section
- Select "Persuasive Analysis" style (default)
- Click "Generate Brief without uploading a complaint"
- Wait for .docx to download (status shows "in_progress" then completes)

**Flow success criteria:** All steps complete without human intervention. All gates passed. Legal Brief .docx downloads successfully.

---

## 3. Results & Analysis Page

What the Results page should contain. This is graded substantively (15 of 100 points).

### Areas of Law

These three areas appear consistently across all runs:
- **Telecom/Media/Entertainment** (or similar media law category)
- **Personal Injury** (or Tort law)
- **Intellectual Property** (or Copyright)

### Causes of Action

The count varies (2-4 is normal across runs). These legal concepts must be covered:

| Legal Concept | Expected Labels (observed across runs) | Jurisdiction | Required? | Frequency |
|---------------|----------------------------------------|--------------|-----------|-----------|
| Defamation / Libel | "Defamation (State-CA)", "Libel (State-CA)" | State - California | Yes | 4/4 runs |
| Copyright Infringement | "Copyright Infringement (Federal)" | Federal | Yes | 4/4 runs |
| Unfair Competition (UCL) | "Unfair Competition (State-CA)" | State - California | Expected | 3/4 runs |
| Trade Libel | "Trade Libel (State-CA)" | State - California | Optional | 1/4 runs |

**Observations:**
- Exact cause names vary between runs (e.g., "Defamation" vs. "Libel" for the same concept)
- Federal vs. State jurisdiction labels should be correct (Copyright = Federal, everything else = State-CA)
- A cause appearing with a suffix like "_2" is a known AI variance, not an error
- Run-4 produced 4 causes (Defamation, Trade Libel, Unfair Competition, Copyright Infringement)
- Run-1 produced the fewest argument topics (4 subsections); runs 2-3 produced 6 each

### Cases per Cause

Each cause should have relevant cases with holdings. Specific cases vary between runs, but the types of cases should match:

**Copyright causes:**
- Fair use landmark cases (Campbell, Harper & Row)
- Ninth Circuit fair use cases (Seltzer, SOFA Entertainment, Worldwide Church of God)
- Substantial similarity cases (Feist, Satava, Mattel) -- appeared in run-1 only
- Damages/profits cases (Polar Bear Prods.)

**Defamation causes:**
- Opinion vs. fact doctrine (Milkovich)
- California libel law (Baker v. L.A. Herald Examiner, Taus v. Loftus)
- Special damages cases (Slaughter v. Friedman, Smith v. Maldonado)

**UCL causes:**
- Commercial speech test (Kasky v. Nike)
- Standing requirements (Kwikset, In re Tobacco II)
- Remedies limitations (Korea Supply Co.)

### Analysis Quality

Per-cause analysis on the Results page should:
- Reference the specific facts of the Jane Smith case (blog, no advertisers, quoted the heart, ruthless criticism)
- Apply relevant law to those facts
- Present coherent reasoning from the defendant's perspective
- Distinguish between harm from criticism (not actionable) and market substitution (actionable)

---

## 4. Legal Brief: Document Structure

The Legal Brief must contain these sections as headings, in this order:

1. **Legal Advisory and Disclaimer** -- 5 standard disclaimer paragraphs:
   - Preliminary Draft
   - Duty to Review
   - Local Rules
   - Citations
   - Professional Responsibility
2. **Court Header** -- must reference California. Observed variants:
   - "UNITED STATES DISTRICT COURT, [DISTRICT] DISTRICT OF CALIFORNIA" (run-1)
   - "UNITED STATES DISTRICT COURT FOR THE [_____ DISTRICT] OF CALIFORNIA" (run-2)
   - "CALIFORNIA STATE TRIAL COURT" (run-3)
   - All are acceptable.
3. **Table of Authorities** -- may be a placeholder heading
4. **Introduction** -- synthesizes the case and previews defense arguments
5. **Statement of Jurisdiction** -- subject matter jurisdiction, personal jurisdiction, venue
6. **Statement of Issues** -- one issue per legal question presented (4-8 issues observed)
7. **Statement of the Case** -- brief procedural posture (ranges from one sentence to a full paragraph)
8. **Statement of the Facts** -- neutral recitation of the fact pattern
9. **Argument** -- multiple subsections, each addressing a legal topic (see Section 5)
10. **Conclusion** -- requests judgment in favor of Ms. Smith
11. **Certificate of Compliance** -- word count certification with placeholder fields
12. **Certificate of Service** -- service certification with placeholder fields

**Missing any of sections 4-10 is a critical structural deduction.**

---

## 5. Legal Brief: Required Arguments

The Argument section is the core of the brief and accounts for the majority of the substantive score. Each topic below must be substantively argued -- not just mentioned as a heading. The headings, ordering, and exact wording will vary between runs, but the legal substance must be present.

### A. Fair Use Defense (17 U.S.C. 107)

**Appears in:** All runs (4/4). This is the centerpiece argument.

The brief must conduct a thorough four-factor analysis under 17 U.S.C. 107, weighing each factor and reaching an overall conclusion that fair use applies.

#### Factor 1: Purpose and Character of the Use

**What the argument must establish:**
- The Blog Post's purpose is criticism and commentary -- a paradigmatic fair-use purpose expressly listed in 107's preamble.
- The Blog has no advertisers, making the use noncommercial. This weighs strongly against treating the Blog Post as commercial exploitation.
- The brief must acknowledge Global Media's counterargument: the Blog Post "did not include much content beyond the quoted material" and Ms. Smith's criticism was "short relative to the part of the Magazine Article that she quoted."
- The brief must rebut this by arguing that criticism need not be lengthy to be transformative. The quotation serves the critical purpose (presenting what is being criticized so readers can evaluate the critique), not a republishing purpose.
- Increased voluntary contributions do not convert criticism into commercial exploitation. The inquiry is whether the use exploits the copyrighted expression's market demand or serves a new critical purpose.

**Key cases for this factor:**
- Campbell v. Acuff-Rose Music, Inc., 510 U.S. 569 (1994) -- criticism as transformative purpose; commerciality not dispositive when use is transformative
- Andy Warhol Found. v. Goldsmith, 598 U.S. 508 (2023) -- purpose inquiry; whether use has a different purpose from the original (cited in runs 1-2)

**Strength of argument:** Strong. Criticism is the textbook fair-use purpose. The noncommercial nature of the Blog reinforces this. Global Media's best counter (thin commentary relative to quotation) is rebutted by the principle that fair use does not require commentary to outnumber quotation.

#### Factor 2: Nature of the Copyrighted Work

**What the argument must establish:**
- The Magazine Article was published (not unpublished), removing the special solicitude for first-publication interests from Harper & Row.
- This factor is neutral to modestly favorable for fair use.
- To the extent the Magazine Article contains factual or informational material, fair use is more likely than with highly imaginative works.

**Key cases:**
- Harper & Row v. Nation Enters., 471 U.S. 539 (1985) -- unpublished works get stronger protection; published status reduces weight of this factor

**Strength of argument:** Neutral. This factor rarely drives the outcome.

#### Factor 3: Amount and Substantiality of the Portion Used

**What the argument must establish:**
- This is Global Media's strongest point. Ms. Smith quoted "the heart" of the Magazine Article.
- Copying the "heart" is qualitatively significant even if the overall excerpt is less than the whole (Harper & Row).
- However, the brief must argue that the amount taken was reasonably related to the critical purpose. To criticize the Magazine Article's central thesis and rhetoric, quoting the "heart" is necessary to "conjure up" what is being condemned so readers can evaluate the critique.
- The brief must argue that fair use does not impose a rigid "least-quotation" requirement. Verbatim quotation of the specific passages being attacked is commonly reasonable for criticism.
- The brevity of the criticism does not mean the quotation was unnecessary -- a short, ruthless critique can still require readers to see the key passages being criticized.

**Key cases:**
- Campbell v. Acuff-Rose Music, Inc., 510 U.S. 569 (1994) -- amount must be reasonable in relation to the transformative purpose
- Harper & Row v. Nation Enters., 471 U.S. 539 (1985) -- qualitative importance of "the heart"

**Strength of argument:** Mixed. This is the closest factor. Global Media can credibly argue the Blog Post took more than necessary; Ms. Smith can argue the amount was tethered to the critical aim.

#### Factor 4: Effect on the Market

**What the argument must establish:**
- Global Media's claimed harms (credibility damage, lost business) are reputational fallout from criticism, not cognizable market substitution for the Magazine Article.
- The Blog Post is not a market substitute -- it does not serve the same purpose as the Magazine Article. Readers do not seek the Blog Post as a replacement for reading the Magazine.
- Copyright does not provide a remedy for the public choosing to believe a critic rather than the Magazine.
- Increased voluntary contributions may relate to reader interest in the criticism, not to market displacement of the Magazine Article.
- The key distinction: harm from criticism (not actionable under copyright) vs. harm from market substitution (actionable).

**Key cases:**
- Campbell v. Acuff-Rose Music, Inc., 510 U.S. 569 (1994) -- market harm must be substitution-based; transformative criticism less likely to displace the market
- Harper & Row v. Nation Enters., 471 U.S. 539 (1985) -- market harm from scooping first publication
- Hustler Mag. v. Moral Majority, Inc., 796 F.2d 1148 (9th Cir. 1986) -- harm from criticism vs. market substitution (cited in run-1)

**Strength of argument:** Strong for defense. Global Media's harms track audience reaction to criticism, not displaced market demand.

#### Overall Weighing

The brief must weigh all four factors and conclude that fair use applies. The expected conclusion: Factors 1 and 4 favor fair use; Factor 2 is neutral; Factor 3 is a closer question but does not outweigh the others. The principal litigation risk lies in Factors 1 and 3 together (thin commentary + extensive quotation), but the criticism purpose and absence of market substitution carry the balance.

**Critical analytical point the brief must make:** The distinction between harm from criticism (not actionable under copyright) and harm from market substitution (actionable). This is the backbone of the fair use defense and should be clearly articulated somewhere in the analysis.

---

### B. Defamation: No False Statement of Fact (Cal. Civ. Code 45)

**Appears in:** All runs (4/4).

**What the argument must establish:**

The Blog Post does not contain a false statement of fact, which is a required element of libel under Cal. Civ. Code 45.

1. **Accurate quotation cannot supply falsity.** The Blog Post's predominant content is quotation of the Magazine Article -- Global Media's own words. Reproducing what Global Media itself published is not a "false" publication by Ms. Smith. The statute requires a "false and unprivileged publication," and accurate quotation of the Magazine Article cannot be false as to what the Magazine published.

2. **The criticism is evaluative judgment, not provably false fact.** Ms. Smith's added criticism is described as "short" and "ruthless." Under Milkovich v. Lorain Journal Co., the key question is whether the challenged material would be understood by a reasonable reader as stating or implying a provably false assertion of fact, rather than expressing evaluative judgment. The Blog Post's structure (substantial quotation followed by brief critique) signals a reaction to disclosed material, not a presentation of undisclosed, verifiable facts about the Magazine.

3. **Defamation-by-implication fails.** Where the underlying material is disclosed (the "heart" of the Magazine Article is quoted), the critique does not inherently insinuate additional undisclosed defamatory facts. Readers are positioned to assess the Magazine's words directly and then consider Ms. Smith's reaction. The complained-of "sting" arises from the combination of the Magazine's own content and Ms. Smith's negative viewpoint, not from a materially false factual proposition.

4. **Alleged business impact does not substitute for falsity.** "Cost the Magazine business" and "harmed credibility" address damages and motive, not the threshold element of a false statement of fact. California's libel statute targets false publications, not the marketplace consequences of readers disagreeing with or devaluing a publication after reading quotations and a critique.

**Key cases:**
- Milkovich v. Lorain Journal Co., 497 U.S. 1 (1990) -- opinion vs. provably false fact (cited in all runs)
- Baker v. L.A. Herald Examiner, 42 Cal. 3d 254 (1986) -- California opinion doctrine (cited in run-1)
- Taus v. Loftus, 40 Cal. 4th 683 (2007) -- defamation standards (cited in run-1)

**Key statutes:**
- Cal. Civ. Code 44 (defamation defined)
- Cal. Civ. Code 45 (libel defined: "false and unprivileged publication")

**Strength of argument:** Strong. The Blog Post consists primarily of Global Media's own words plus evaluative criticism. No specific false factual assertion is identifiable from the fact pattern.

---

### C. Libel Per Quod / Special Damages (Cal. Civ. Code 45a)

**Appears in:** All runs (4/4).

**What the argument must establish:**

Even if some defamatory meaning could be construed, it is not apparent on the face of the Blog Post. Section 45a therefore applies, requiring proof of special damages that Global Media cannot provide.

1. **The Blog Post is not libel on its face.** The post primarily consists of quotation of the Magazine Article plus brief criticism. Any alleged defamatory meaning arises from the juxtaposition of the Magazine's content and Ms. Smith's critique, requiring inferential reasoning from context -- not a self-contained, facially defamatory statement. A reasonable reader encountering the post would understand it as criticism, not as a direct factual charge.

2. **Section 45a requires special damages -- concrete, quantifiable pecuniary loss.** Global Media's assertion that the Blog "cost the Magazine business" is conclusory and non-specific. It identifies no particular lost customer, lost transaction, canceled relationship, lost amount, or other measurable pecuniary harm.

3. **"Lost business" without specifics fails.** Section 45a requires the plaintiff to identify the actual pecuniary loss: what business was lost, in what amount, when the loss occurred, and how the loss was proximately caused by the Blog Post. A generalized assertion of "lost business" untethered to identified pecuniary losses is indistinguishable from presumed damages based on alleged reputational harm -- precisely what 45a disallows.

4. **Ms. Smith's alleged benefit does not establish Global Media's damages.** The statute requires proof of the plaintiff's pecuniary loss. An alleged benefit to the speaker (increased voluntary contributions) does not substitute for a showing that Global Media incurred specific, quantifiable economic harm.

**Key cases:**
- Slaughter v. Friedman, 32 Cal. 3d 149 (1982) -- special damages requirement (cited in run-1)
- Smith v. Maldonado, 72 Cal. App. 4th 637 (1999) -- special damages specificity (cited in run-1)
- Erlich v. Etner, 224 Cal. App. 2d 69 (1964) -- libel per quod (cited in run-1)

**Key statute:**
- Cal. Civ. Code 45a (libel not defamatory on its face requires special damages)

**Strength of argument:** Strong. The fact pattern provides no basis for Global Media to plead concrete pecuniary loss. The Blog Post's structure (mostly quotation + brief criticism) makes it hard to argue the defamatory meaning is facially apparent.

---

### D. UCL: Not a Business Act or Practice (Cal. Bus. & Prof. Code 17200)

**Appears in:** 3/4 runs (runs 2, 3, and run-4). Absent from run-1.

**What the argument must establish:**

Section 17200 reaches only "business acts or practices," and the Blog Post is expressive criticism, not commercial conduct.

1. **The Blog Post is criticism, not a commercial practice.** The Blog has no advertisers, no sales, no subscriptions, no paid access. The challenged conduct is publishing criticism about a magazine article -- an expressive act, not a business method of operation.

2. **Kasky v. Nike commercial speech test.** Under the three-part test (speaker, audience, content):
   - **Speaker**: Ms. Smith is not speaking as a business. She "runs a blog" with "no advertisers."
   - **Audience**: Blog readers engaging in public discourse, not consumers being solicited for a transaction.
   - **Content**: Criticism of a magazine article, not factual representations about Ms. Smith's own products or services.
   All three factors point to noncommercial speech.

3. **Voluntary contributions do not convert criticism into a business practice.** The alleged "increased voluntary contributions" are an incidental consequence of speech that drew readership. There is no allegation the Blog Post solicited contributions, functioned as part of a revenue-generating scheme, or was connected to any commercial transaction.

4. **A single Blog Post is not a recurring "practice."** The record identifies one challenged item. No allegations of repeated posts, systematic content aggregation, or an ongoing commercial strategy.

5. **First Amendment concerns.** Allowing the UCL to reach noncommercial criticism would improperly transform it into a speech-policing mechanism. The UCL's remedies (especially injunctive relief under 17203) would risk regulating expressive publication absent a concrete business or transactional nexus.

**Key cases:**
- Kasky v. Nike, Inc., 27 Cal. 4th 939 (2002) -- commercial speech test; speaker/audience/content factors (cited in runs 2-3)

**Key statute:**
- Cal. Bus. & Prof. Code 17200 (Unfair Competition Law -- "unlawful, unfair, or fraudulent business act or practice")

**Strength of argument:** Strong. The fact pattern explicitly states the Blog has no advertisers. No commercial infrastructure is alleged.

---

### E. UCL Standing (Cal. Bus. & Prof. Code 17204)

**Appears in:** 3/4 runs (runs 2, 3, and run-4). Absent from run-1.

**What the argument must establish:**

Global Media lacks standing under Section 17204 because it cannot show it "lost money or property as a result of" the Blog Post.

1. **No concrete economic loss alleged.** "May have harmed credibility" and "cost the Magazine business" are conclusory. No specific lost sales, revenue, profits, subscribers, or out-of-pocket expenditures are identified.

2. **Causation chain is conjectural.** The chain from Blog Post to economic harm requires layered inferences: readers saw the Blog Post, the ruthless criticism changed their view of the Magazine's credibility, and this credibility change cost the Magazine business. Section 17204 does not permit standing based on speculative layered inferences.

3. **Defendant's gain does not supply plaintiff's standing.** Ms. Smith's alleged increased voluntary contributions are irrelevant to standing analysis. Section 17204 asks whether the plaintiff lost money or property, not whether the defendant gained something. Voluntary contributions to the Blog are not alleged to be Global Media's money or property.

4. **"Credibility" harm is reputational, not pecuniary.** Even if credibility harm is "economically meaningful" as a general proposition, 17204 still requires Global Media to show it actually lost money or property because of this Blog Post. "May have harmed" is expressly conditional.

**Key cases:**
- Kwikset Corp. v. Superior Court, 51 Cal. 4th 310 (2011) -- UCL standing requires concrete economic loss (cited in runs 2-3)
- In re Tobacco II Cases, 46 Cal. 4th 298 (2009) -- causation for UCL standing (cited in run-3)
- Korea Supply Co. v. Lockheed Martin Corp., 29 Cal. 4th 1134 (2003) -- UCL remedies are equitable/restitutionary, not for non-restitutionary gains (cited in runs 2-3)

**Key statute:**
- Cal. Bus. & Prof. Code 17204 ("suffered injury in fact and has lost money or property as a result of the unfair competition")

**Strength of argument:** Strong. The fact pattern provides only conclusory injury allegations.

---

### F. Copyright Damages (17 U.S.C. 504(b))

**Appears in:** 3/4 runs (runs 2, 3, and run-4). Absent from run-1.

**What the argument must establish:**

Global Media cannot recover damages or profits under Section 504(b) because it cannot prove the required causal nexus.

1. **Actual damages are speculative.** "Lost business" and "harmed credibility" are not quantifiable monetary injuries. The statute requires proof of an amount of loss "as a result of the infringement," not a suspicion that the Magazine may have suffered one.

2. **Causation problem: criticism vs. quotation.** The alleged harm flows from Ms. Smith's ruthless criticism (a noninfringing act), not from the quotation (the allegedly infringing act). Global Media must show that any loss is "as a result of" the copying, not the criticism. The fact pattern itself indicates the reputational impact stems from the criticism.

3. **Infringer's profits: no attributable revenue.** The Blog has no advertisers. The only alleged "profit" is increased voluntary contributions. These are not automatically attributable to the infringing quotation -- they could be driven by Ms. Smith's independent criticism, her existing audience, or reader interest in her "ruthless take."

4. **Voluntary contributions present a classic multi-factor causation problem.** The Blog Post contained both quotation and criticism. Any contributions motivated by readers' reaction to the criticism are not profits "attributable to the infringement." Without a principled way to separate quotation-driven contributions from criticism-driven contributions, any profits calculation would overreach beyond what 504(b) allows.

5. **Burden-shifting does not rescue Global Media.** The statute shifts the burden to the defendant only after the plaintiff identifies "gross revenue" reasonably connected to infringement. Global Media has not connected contributions to the quotation itself (as opposed to the post generally), so no burden shifts to Ms. Smith.

**Key cases:**
- Polar Bear Prods. v. Timex Corp., 384 F.3d 700 (9th Cir. 2004) -- infringer's profits and causal nexus (cited in run-2)

**Key statute:**
- 17 U.S.C. 504(b) ("actual damages suffered by [the copyright owner] as a result of the infringement" and "any profits of the infringer that are attributable to the infringement")

**Strength of argument:** Strong for defense. The fact pattern explicitly provides no commercial revenue stream, and the alleged "profits" (voluntary contributions) present insurmountable attribution problems.

---

### G. Substantial Similarity (Optional)

**Appears in:** 1/4 runs (run-1 only). Its absence should not be penalized.

**What the argument establishes (when present):**

Before reaching fair use, Global Media must prove the Blog Post is "substantially similar" to protectable expression in the Magazine Article under the Ninth Circuit's two-part test.

1. **Extrinsic test (filtration).** The court must filter out unprotectable material -- facts, underlying ideas, non-original informational content -- and compare only protectable expressive choices (original phrasing, selection, arrangement, sequence). If the quoted "heart" of the Magazine Article is primarily factual or informational, the protectable residue after filtration may be narrow.

2. **Global Media's "heart" argument doesn't resolve substantial similarity.** The Supreme Court's "heart" discussion in Harper & Row arises in the fair-use analysis (Factor 3), not the substantial-similarity threshold. Even accepting Global Media's characterization, it must still identify protectable expression within that portion and show the Blog Post is substantially similar to that expression.

3. **Merger and scenes a faire.** When a work's communicative purpose constrains expression, protection is "thin." Standard or inevitable ways of presenting facts are not protectable.

4. **Intrinsic test (total concept and feel).** The Blog Post is experienced as a critical presentation of excerpts, not a substitute expressive work that captures the Magazine Article's aesthetic or voice.

**Key cases:**
- Feist Publ'ns v. Rural Tel. Serv., 499 U.S. 340 (1991) -- originality, idea/expression dichotomy
- Satava v. Lowry, 323 F.3d 805 (9th Cir. 2003) -- filtration of unprotectable elements
- Mattel v. MGA Ent., 616 F.3d 904 (9th Cir. 2010) -- Ninth Circuit substantial similarity
- L.A. Printex Indus. v. Aeropostale, 676 F.3d 841 (9th Cir. 2012) -- extrinsic/intrinsic test

**Strength of argument:** Valid supplemental argument, but not essential. Fair use is the primary copyright defense.

---

## 6. Aggregated Case Citations Across All Runs

This section catalogs every case cited across all analyzed runs, organized by legal topic. For QA evaluation, the "must cite" cases should appear in any acceptable brief; "commonly cited" cases appear in most runs; "may appear" cases appeared in at least one run and are valid but their absence is acceptable.

### Copyright: Fair Use (17 U.S.C. 107)

| Case | Citation | Relevance | Frequency | Status |
|------|----------|-----------|-----------|--------|
| Campbell v. Acuff-Rose Music, Inc. | 510 U.S. 569 (1994) | Central fair use precedent; criticism as transformative purpose; four-factor analysis | 4/4 runs | **Must cite** |
| Harper & Row v. Nation Enters. | 471 U.S. 539 (1985) | "Heart" of the work; unpublished works; market harm from scooping | 4/4 runs | **Must cite** |
| Andy Warhol Found. v. Goldsmith | 598 U.S. 508 (2023) | Purpose inquiry; whether use has different purpose from original | 2/4 runs | Commonly cited |
| Seltzer v. Green Day, Inc. | 725 F.3d 1170 (9th Cir. 2013) | Ninth Circuit transformative use | 2/4 runs | May appear |
| Sony Corp. v. Universal City Studios | 464 U.S. 417 (1984) | Noncommercial use presumption | 1/4 runs | May appear |
| SOFA Entertainment v. Dodger Productions | 709 F.3d 1273 (9th Cir. 2013) | Transformative use in criticism | 1/4 runs | May appear |
| Hustler Mag. v. Moral Majority | 796 F.2d 1148 (9th Cir. 1986) | Harm from criticism vs. market substitution | 1/4 runs | May appear |
| Los Angeles News Serv. v. CBS Broadcasting | 305 F.3d 924 (9th Cir. 2002) | Market substitution analysis | 1/4 runs | May appear |
| Los Angeles News Serv. v. KCAL-TV | 108 F.3d 1119 (9th Cir. 1997) | Amount taken; market harm | 1/4 runs | May appear |
| Worldwide Church of God v. Philadelphia Church of God | 227 F.3d 1110 (9th Cir. 2000) | Criticism and verbatim quotation | 1/4 runs | May appear |

### Copyright: Substantial Similarity

| Case | Citation | Relevance | Frequency | Status |
|------|----------|-----------|-----------|--------|
| Feist Publ'ns v. Rural Tel. Serv. | 499 U.S. 340 (1991) | Originality, idea/expression dichotomy | 1/4 runs | May appear |
| Satava v. Lowry | 323 F.3d 805 (9th Cir. 2003) | Filtration of unprotectable elements | 1/4 runs | May appear |
| Mattel v. MGA Ent. | 616 F.3d 904 (9th Cir. 2010) | Ninth Circuit substantial similarity test | 1/4 runs | May appear |
| L.A. Printex Indus. v. Aeropostale | 676 F.3d 841 (9th Cir. 2012) | Extrinsic/intrinsic test | 1/4 runs | May appear |

### Copyright: Damages (17 U.S.C. 504(b))

| Case | Citation | Relevance | Frequency | Status |
|------|----------|-----------|-----------|--------|
| Polar Bear Prods. v. Timex Corp. | 384 F.3d 700 (9th Cir. 2004) | Infringer's profits; causal nexus to infringement | 1/4 runs | May appear |

### Defamation / Libel (Cal. Civ. Code 44-45a)

| Case | Citation | Relevance | Frequency | Status |
|------|----------|-----------|-----------|--------|
| Milkovich v. Lorain Journal Co. | 497 U.S. 1 (1990) | Opinion vs. provably false fact -- the governing framework | 4/4 runs | **Must cite** |
| Baker v. L.A. Herald Examiner | 42 Cal. 3d 254 (1986) | California opinion doctrine | 1/4 runs | May appear |
| Taus v. Loftus | 40 Cal. 4th 683 (2007) | Defamation standards | 1/4 runs | May appear |
| Slaughter v. Friedman | 32 Cal. 3d 149 (1982) | Special damages requirement under 45a | 1/4 runs | May appear |
| Smith v. Maldonado | 72 Cal. App. 4th 637 (1999) | Special damages specificity | 1/4 runs | May appear |
| Erlich v. Etner | 224 Cal. App. 2d 69 (1964) | Libel per quod | 1/4 runs | May appear |

### UCL (Cal. Bus. & Prof. Code 17200-17204)

| Case | Citation | Relevance | Frequency | Status |
|------|----------|-----------|-----------|--------|
| Kasky v. Nike, Inc. | 27 Cal. 4th 939 (2002) | Commercial speech test (speaker/audience/content) | 2/4 runs | **Must cite** (when UCL argued) |
| Kwikset Corp. v. Superior Court | 51 Cal. 4th 310 (2011) | UCL standing: "lost money or property" requirement | 2/4 runs | **Must cite** (when UCL standing argued) |
| In re Tobacco II Cases | 46 Cal. 4th 298 (2009) | UCL standing causation | 1/4 runs | May appear |
| Korea Supply Co. v. Lockheed Martin Corp. | 29 Cal. 4th 1134 (2003) | UCL remedies are equitable/restitutionary | 2/4 runs | May appear |

### Jurisdiction

| Case | Citation | Relevance | Frequency | Status |
|------|----------|-----------|-----------|--------|
| Vons Cos. v. Seabest Foods | 14 Cal. 4th 434 (1996) | Personal jurisdiction; forum contacts | 2/4 runs | May appear |
| Pavlovich v. Superior Court | 29 Cal. 4th 262 (2002) | Internet-based contacts; specific jurisdiction | 3/4 runs | May appear |
| Daimler AG v. Bauman | 571 U.S. 117 (2014) | General jurisdiction based on domicile | 1/4 runs | May appear |
| Burger King Corp. v. Rudzewicz | 471 U.S. 462 (1985) | Minimum contacts; fair play and substantial justice | 1/4 runs | May appear |

### Federal Preemption (appeared in run-2 only)

| Case | Citation | Relevance | Frequency | Status |
|------|----------|-----------|-----------|--------|
| Laws v. Sony Music Ent. | 448 F.3d 1134 (9th Cir. 2006) | Federal preemption of equivalent state-law claims | 1/4 runs | May appear |
| Kodadek v. MTV Networks | 152 F.3d 1209 (9th Cir. 1998) | Preemption equivalency framework | 1/4 runs | May appear |

---

## 7. Aggregated Statutes

These statutes must be cited in the corresponding argument sections:

| Statute | Topic | Required In |
|---------|-------|-------------|
| 17 U.S.C. 107 | Fair use | Fair Use argument (A) |
| 17 U.S.C. 504(b) | Damages and profits | Copyright Damages argument (F) |
| 17 U.S.C. 106 | Exclusive rights | Introduction; may appear in Fair Use |
| 17 U.S.C. 501 | Infringement | Introduction; may appear in Fair Use |
| Cal. Civ. Code 44 | Defamation defined | Defamation argument (B) |
| Cal. Civ. Code 45 | Libel defined | Defamation argument (B) |
| Cal. Civ. Code 45a | Libel per quod / special damages | Per Quod argument (C) |
| Cal. Bus. & Prof. Code 17200 | UCL definition | UCL Business Act argument (D) |
| Cal. Bus. & Prof. Code 17204 | UCL standing | UCL Standing argument (E) |
| Cal. Bus. & Prof. Code 17203 | UCL remedies | May appear in UCL arguments |
| Cal. Civ. Proc. Code 410.10 | Long-arm statute | Jurisdiction section |
| Cal. Civ. Proc. Code 395(a) | Venue | Jurisdiction section |
| Cal. Const. art. VI, 10 | General jurisdiction | Jurisdiction section |

---

## 8. Observed AI Follow-up Questions

During the Build Outline flow, the AI generates follow-up questions about the case. The bot currently accepts defaults (all set to Include) and continues without answering. The following categories of questions have been observed across runs:

**Typical question topics:**
- Nature and extent of the quotation (how much was copied, what constitutes "the heart")
- Whether the Blog Post added transformative commentary
- Ms. Smith's intent in publishing the Blog Post
- Specific damages or economic harm Global Media has suffered
- Whether the Blog has any monetization beyond voluntary contributions

**Variance:** The exact questions change between runs. The QA evaluation does not grade the questions themselves; it only checks that the bot successfully navigates past this step (accepts defaults, handles the confirmation modal).

---

## 9. Facts That Must Not Change

These are non-negotiable. If the output gets any of these wrong, it is a **critical error** regardless of overall quality:

- Ms. Smith is the **Defendant**. The brief argues for her defense.
- Global Media is the **Plaintiff**.
- The Blog has **no advertisers**.
- The Blog Post quoted **"the heart"** of the Magazine Article.
- Ms. Smith's criticism was **short** relative to the quotation and described as **ruthless**.
- The jurisdiction is **California**.
- The Blog Post contained **little content beyond the quoted material**.
- Global Media claims Ms. Smith benefited through **increased voluntary contributions** (not advertising revenue or sales).
- The Blog is **noncommercial** -- no advertisers, no sales, no subscriptions.

---

## 10. Expected Variance

These differences between runs are normal and acceptable. Do not penalize:

- **Court name**: US District Court, CA Superior Court, CA State Trial Court -- all acceptable if California is referenced
- **Argument subsection count**: 4-8 subsections is normal (run-1 had 4; runs 2-3 had 6; run-4 had 8)
- **Argument ordering**: legal topics can appear in any sequence
- **Heading text**: same legal concept expressed with different phrasing (e.g., "Fair use likely applies" vs. "Ms. Smith's quotation for criticism is fair use despite its length" vs. "Ms. Smith's blog post is fair use criticism notwithstanding verbatim quotation of the article's heart")
- **Word count**: 5,000-9,000 words (observed range: run-1: 5,028; run-2: 7,057; run-3: 7,444; run-4: 8,918)
- **Topic splitting**: one legal concept may appear as one or two subsections (e.g., UCL split into "not a business act" + "no standing" vs. combined)
- **Topic presence**: UCL arguments and 504(b) damages arguments are absent from run-1 but present in all other runs. Both are expected but their absence in a given run is not automatically a failure.
- **Specific case citations**: beyond the "must cite" list, the exact cases vary significantly between runs (see Section 6)
- **Statement of the Case detail**: ranges from one sentence ("Plaintiff is suing Defendant") to a full paragraph with procedural context
- **Issue count**: 4-8 issues presented (matches argument subsection count)
- **Jurisdiction section approach**: run-1 used state court framing (Cal. Const. art. VI, 10); run-2 used federal court framing (28 U.S.C. 1338(a)); run-3 used state court framing. All approaches are acceptable.
- **Introduction length and detail**: ranges from a concise 2-paragraph preview to a comprehensive 4-paragraph summary of all claims

---

## 11. Cross-Reference: Arguments by Run

This table shows which argument topics appeared in each run, for calibration:

| Argument Topic | Run-1 | Run-2 | Run-3 | Run-4 |
|----------------|-------|-------|-------|-------|
| A. Fair Use (107) | Yes | Yes | Yes | Yes |
| B. Defamation / No False Statement (45) | Yes | Yes | Yes | Yes |
| C. Libel Per Quod / Special Damages (45a) | Yes | Yes | Yes | Yes |
| D. UCL: Not a Business Act (17200) | -- | Yes | Yes | Yes |
| E. UCL Standing (17204) | -- | Yes | Yes | Yes |
| F. Copyright Damages (504(b)) | -- | Yes | Yes | Yes |
| G. Substantial Similarity | Yes | -- | -- | -- |
| **Total subsections** | **4** | **6** | **6** | **8** |

Run-1 is the outlier: it omitted UCL and 504(b) arguments but included the Substantial Similarity argument that no other run produced. Runs 2, 3, and 4 show the most stable pattern (A-F).

---

## 12. Post-Run Review Workflow

After the QA bot completes a run and presents its score and deviation analysis, the following review workflow occurs. The bot drives this interaction using **clickable options** wherever possible. If options are too long for the UI, the bot falls back to asking in chat.

### Step 1: Approve or Flag

The bot presents the score, per-category breakdown, and any flagged deviations, then asks:

> **Do you approve this QA run?**
> - [ ] Approved -- results look correct, no changes needed
> - [ ] Something is off -- I want to flag a deviation

**If approved:** Run is marked as passed. Golden ticket and expectations remain unchanged for the next run. The bot logs the approval in the run's scorecard.

**If something is off:** Proceed to Step 2.

### Step 2: Capture What and Why

The bot asks:

> **What type of issue is this?**
> - [ ] Product regression -- the app produced worse output than expected (engineering should investigate)
> - [ ] Expectations need updating -- the app output is actually fine, but our golden ticket needs adjustment
> - [ ] Other -- let me explain in chat

Then the bot asks:

> **Which area is affected?**
> - [ ] Document Structure
> - [ ] Legal Arguments
> - [ ] Case Citations
> - [ ] Results Page
> - [ ] Flow / Navigation
> - [ ] Other

Then the bot asks in chat (free text -- too variable for clickable options):

> **Describe what's off and why:**

The bot captures the SME's response verbatim.

### Step 3: Store Feedback

The bot appends the feedback to **Section 13: Reviewer Notes** below with:
- Date
- Run number
- Issue type (product regression / expectations update / other)
- Area affected
- SME's description (verbatim)

This feedback persists across runs. On future runs, the bot reads Reviewer Notes before scoring to account for known issues.

**Important:** The bot does NOT auto-edit Sections 1-11 of this golden ticket based on feedback. Only the SME manually updates the golden ticket's substantive sections. The bot only appends to Reviewer Notes.

### Step 4: Linear Ticket (Optional)

The bot asks:

> **Do you want to create a Linear ticket for engineering?**
> - [ ] Yes -- draft a ticket for me to review
> - [ ] No -- just log the feedback for future runs

**If yes:**
1. The bot drafts a ticket using the CLAUDE.md ticket format (Solution Area, Overview, Problem, AI Suggested Fix, Acceptance Criteria)
2. The bot shows the full draft to the reviewer in chat
3. The bot asks:

> **Approve this ticket?**
> - [ ] Approved -- push to Linear
> - [ ] Edit needed -- let me adjust (bot asks what to change)
> - [ ] Cancel -- don't create the ticket

4. Only after explicit "Approved" does the bot push to Linear via MCP (`save_issue`)
5. The bot never creates a ticket without reviewer approval

**If no:** Feedback is stored in Reviewer Notes only. No ticket created.

---

## 13. Reviewer Notes

*This section is append-only. The QA bot adds entries here after each reviewed run. The SME may also add manual observations. Entries are never deleted, only superseded by newer entries.*

- (No notes yet. Pending initial QA run and SME review.)

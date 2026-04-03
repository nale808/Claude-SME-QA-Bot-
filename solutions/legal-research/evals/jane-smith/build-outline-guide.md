# Build Outline Guide: Jane Smith

> v1 behavior: Accept all AI defaults. Do not answer follow-up questions, do not modify areas of law, do not deselect any legal questions, do not skip any cases. The goal is to measure the AI's default output quality.

## Step-by-Step Bot Behavior

### 1. Intake
- Open Legal Research from the home page
- Click the "Select an example" dropdown
- Select "Jane Smith" from the options
- Fields auto-populate: title, jurisdiction (California), representing (Defendant)
- Click "Continue" or equivalent navigation button

### 2. Follow-up Questions
- AI generates ~5 follow-up questions (count may vary)
- **Do not answer any questions** -- leave all at their default state (Include)
- Click "Continue to Areas of Law" (or equivalent)
- A confirmation modal appears: "Are you sure you want to continue without answering any questions?"
- Click "Yes" to confirm

### 3. Areas of Law
- Three areas appear: Telecom/Media/Entertainment, Personal Injury, Intellectual Property
- Litigation Stage defaults to "State Trial Court"
- **Accept all defaults**
- Click "Continue to Legal Authorities" (or equivalent)

### 4. Legal Authorities
- **Review gate**: "X/N Reviewed, Review each to continue"
- Click each cause of action in the left sidebar panel to mark as reviewed
- A green checkmark appears after each is clicked
- Wait until all causes show checkmarks
- Click "Continue to Legal Questions" (or equivalent)

### 5. Legal Questions
- **Selection gate**: "X/N Selected, Select questions for each to continue"
- Click into each cause of action in the left sidebar
- Verify that question checkboxes are selected for each cause
- Some causes auto-select; others (like Copyright Infringement) may leave checkboxes unchecked -- select them
- Wait until all causes show as selected
- Click "Continue to Cases" (or equivalent)

### 6. Cases
- **Review gate**: same pattern as Legal Authorities
- Click each cause of action to mark as reviewed
- Wait until all causes show checkmarks
- Click "Continue" (or equivalent) to proceed to analysis

### 7. Mapping & Analysis
- Pages may have loading indicators
- Wait for all loading to complete before proceeding
- Click through any remaining steps to reach Results & Analysis

### 8. Results & Analysis
- Wait for the "Temporary" loading indicator to clear
- The page shows per-cause analysis
- Click "Next Steps" button in the bottom-right

### 9. Document Generation
- On the Next Steps page, click the "Legal Brief" card in Quick Downloads
- A modal opens with Document Style dropdown
- Ensure "Persuasive Analysis" is selected (should be default)
- Click "Generate Brief without uploading a complaint"
- Wait for the document to generate (status shows "in_progress")
- The .docx downloads automatically to the browser Downloads folder
- Verify download completed by checking for new .docx file

## Known AI Variance

These vary between runs and are expected:
- Number of causes of action: 2-4
- Exact cause names (Defamation vs. Libel, etc.)
- Number of legal questions per cause
- Specific cases cited
- Number of follow-up questions generated
- Word count of the final Legal Brief (5,000-9,000)


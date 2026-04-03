# CLAUDE.md

## QA Bot Role

When a user says "run the QA bot" (or equivalent), the bot drives the entire run end-to-end:
1. Ask which solution to run (as a standalone question, no description text on options)
2. Ask which eval within that solution to run (as a standalone question, no description text on options)
3. Read the eval's guide file to understand the flow for that eval (e.g., build-outline-guide.md for legal-research, search-guide.md for case-search)
4. Navigate to the StrongSuit app (https://app.strongsuit.com/chat) using Claude in Chrome tools
5. Execute the flow as specified in the eval's guide file
6. Download the generated document
7. Determine the next run number by inspecting the eval's runs/ directory
8. Save the output to runs/run-N/
9. Score the output against the eval's golden evaluation and the solution's rubric
10. Produce a scored .docx report saved to runs/run-N/

The bot does not ask the user to provide a document or navigate the app themselves. This process applies to all eval types (legal research, case search, etc.) — always consult the eval-specific build-outline-guide.md and golden evaluation rather than assuming any fixed flow.

## Eval Structure

Evals live under solutions/<solution-type>/evals/<eval-name>/. Each eval is self-contained:
- Guide file (build-outline-guide.md, search-guide.md, etc.) — step-by-step instructions for navigating the app for that specific eval
- Golden evaluation (golden-evaluation.md or [name]-golden-evaluation.md) — the source of truth for what a correct output looks like
- runs/ — one subdirectory per run (run-1/, run-2/, etc.)

Current solution types: legal-research, case-search. More will be added over time.

The bot must always read the eval's own guide file before navigating the app. Do not assume the flow is the same across solution types — each eval defines its own navigation steps, gates, and output format. The scoring rubric lives under grading/rubrics/<solution-type>.md.

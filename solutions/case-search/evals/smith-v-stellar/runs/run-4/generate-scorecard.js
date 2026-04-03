const fs = require("fs");
const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
        Header, Footer, AlignmentType, HeadingLevel, BorderStyle, WidthType,
        ShadingType, PageNumber, PageBreak } = require("docx");

const border = { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" };
const borders = { top: border, bottom: border, left: border, right: border };
const cellMargins = { top: 60, bottom: 60, left: 100, right: 100 };

function headerCell(text, width) {
  return new TableCell({
    borders, width: { size: width, type: WidthType.DXA },
    shading: { fill: "1E3A5F", type: ShadingType.CLEAR },
    margins: cellMargins,
    children: [new Paragraph({ children: [new TextRun({ text, bold: true, color: "FFFFFF", font: "Arial", size: 18 })] })]
  });
}

function cell(text, width, opts = {}) {
  const runs = [];
  if (opts.bold) runs.push(new TextRun({ text, bold: true, font: "Arial", size: 18, color: opts.color || "1A1A1A" }));
  else runs.push(new TextRun({ text, font: "Arial", size: 18, color: opts.color || "1A1A1A" }));
  return new TableCell({
    borders, width: { size: width, type: WidthType.DXA },
    shading: opts.shading ? { fill: opts.shading, type: ShadingType.CLEAR } : undefined,
    margins: cellMargins,
    children: [new Paragraph({ children: runs })]
  });
}

// Run Log rows
const runLogData = [
  ["1", "C1", "Marsh USA Inc. v. Cook", "10", "2"],
  ["2", "C2", "Texas non-compete overbroad industry-wide restriction reformation employer breach", "15", "9"],
  ["3", "C3", "employer materially breached employment agreement...", "15", "9"],
  ["4", "C4", "enforceability of overbroad non-compete agreement...", "12*", "1"],
  ["5", "C5", "Texas employee signed 2-year non-compete...", "14*", "14"],
  ["6", "A1", "Tex. Bus. & Com. Code \u00A7 15.50", "1", "1"],
  ["7", "A2", "Texas covenants not to compete act", "15", "0"],
];

const runLogWidths = [600, 800, 5160, 1400, 1400];
const runLogRows = [
  new TableRow({ children: ["Step", "Search ID", "Query", "Results Evaluated", "Relevant Results"].map((t, i) => headerCell(t, runLogWidths[i])) }),
  ...runLogData.map(row => new TableRow({ children: row.map((t, i) => cell(t, runLogWidths[i])) }))
];

// Breakdown rows
const breakdownWidths = [900, 1100, 1200, 1200, 1200, 1100, 900, 1000];
const breakdownHeader = new TableRow({
  children: ["Search", "Relevance (30)", "Tier 1 (30)", "Tier 2 (20)", "Tier 3 (10)", "Quality (10)", "Score", "Grade"].map((t, i) => headerCell(t, breakdownWidths[i]))
});

const breakdownData = [
  ["C1", "10", "7.5 (1)", "0 (0)", "2 (1)", "8", "28", "Poor", "D97706"],
  ["C2", "25", "7.5 (1)", "20 (5)", "6 (3)", "10", "69", "Good", "16A34A"],
  ["C3", "25", "7.5 (1)", "20 (5)", "6 (3)", "10", "69", "Good", "16A34A"],
  ["C4", "0", "0 (0)", "4 (1)", "0 (0)", "10", "14", "Fail", "DC2626"],
  ["C5", "30", "22.5 (3)", "0 (0)", "2 (1)", "10", "65", "Good", "16A34A"],
  ["A1", "30", "\u2014", "\u2014", "\u2014", "10", "40", "Pass", "16A34A"],
  ["A2", "0", "\u2014", "\u2014", "\u2014", "0", "0", "Fail", "DC2626"],
];

const breakdownRows = [breakdownHeader, ...breakdownData.map(row => {
  const gradeColor = row[8];
  return new TableRow({
    children: row.slice(0, 8).map((t, i) => {
      if (i === 6) return cell(t, breakdownWidths[i], { bold: true });
      if (i === 7) return cell(t, breakdownWidths[i], { bold: true, color: gradeColor });
      return cell(t, breakdownWidths[i]);
    })
  });
})];

// New Elements rows
const newElementsWidths = [2800, 1600, 1400, 800, 2760];
const newElementsHeader = new TableRow({
  children: ["Case Name", "Citation", "CourtListener", "Surfaced By", "Suggested Tier"].map((t, i) => headerCell(t, newElementsWidths[i]))
});

const newElements = [
  ["Donald Calhoun v. Jack Doheny Companies, Inc.", "969 F.3d 232 (2020)", "969+F.3d+232", "C5", "Tier 2"],
  ["Bergman v. Norris of Houston", "734 S.W.2d 673 (1987)", "734+S.W.2d+673", "C5", "Tier 2"],
  ["Weatherford Oil Tool Co. v. Campbell", "161 Tex. 310 (1960)", "161+Tex.+310", "C5", "Tier 2"],
  ["Travel Masters v. Star Tours", "827 S.W.2d 830 (1992)", "827+S.W.2d+830", "C5", "Tier 2"],
  ["Zoecon Industries v. American Stockman Tag Co.", "713 F.2d 1174 (1983)", "713+F.2d+1174", "C5", "Tier 3"],
  ["Team Environmental Services v. Addison", "2 F.3d 124 (1993)", "2+F.3d+124", "C5", "Tier 3"],
  ["H & R Block v. McCaslin", "541 F.2d 1098 (1976)", "541+F.2d+1098", "C5", "Tier 3"],
  ["Perry Kaye v. Orkin Exterminating", "472 F.2d 1213 (1973)", "472+F.2d+1213", "C5", "Tier 3"],
  ["Merrill Lynch v. Stidham", "658 F.2d 1098 (1981)", "658+F.2d+1098", "C5", "Tier 3"],
  ["Lewis v. Krueger, Hutchinson & Overton Clinic", "1954 Tex. LEXIS 548", "Lewis+v.+Krueger", "C5", "Tier 3"],
];

const newElementsRows = [newElementsHeader, ...newElements.map(row =>
  new TableRow({ children: [
    cell(row[0], newElementsWidths[0]),
    cell(row[1], newElementsWidths[1]),
    cell(`courtlistener.com/?q=${row[2]}&type=o`, newElementsWidths[2], { color: "2563EB" }),
    cell(row[3], newElementsWidths[3]),
    cell(row[4], newElementsWidths[4]),
  ]})
)];

const summaries = [
  ["C1 - Case Name Lookup (28/100 - Poor):", "Marsh USA Inc. v. Cook correctly returned as #1 result (Tier 1) with App. Ct. predecessor (Tier 3). However, 8 of 10 results were unrelated \"Marsh v.\" cases."],
  ["C2 - Keyword Stacking (69/100 - Good):", "Strong performance with 9/15 relevant. Found Peat Marwick (T1), five T2 cases, and three T3 cases. Six irrelevant antitrust/regulatory results."],
  ["C3 - Narrow Single Issue (69/100 - Good):", "Identical results to C2 despite different query framing. Employer-breach query did not surface unique cases."],
  ["C4 - Focused Legal Question (14/100 - Fail):", "Only 1 relevant case (Juliette Fowler Homes, T2) out of 12 valid results. Despite referencing \u00A7 15.50, returned mostly irrelevant contract/settlement cases."],
  ["C5 - Full Fact Pattern (65/100 - Good):", "Best performance: 14/14 valid results relevant. Found 3 Tier 1 cases (Olander, DeSantis, Sheshunoff), 1 Tier 3 (Premier Industrial), and 10 new cases."],
  ["A1 - Exact Citation (40/40 - Pass):", "Correctly returned Tex. Bus. & Com. Code \u00A7 15.50 as sole result. Expected behavior."],
  ["A2 - Descriptive Query (0/40 - Fail):", "Critical failure. Returned 15 irrelevant federal regulations. None of the expected Texas statutes (\u00A7\u00A7 15.50, 15.51, 15.52) appeared."],
];

const doc = new Document({
  styles: {
    default: { document: { run: { font: "Arial", size: 22 } } },
    paragraphStyles: [
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 32, bold: true, font: "Arial", color: "1A1A1A" },
        paragraph: { spacing: { before: 360, after: 200 }, outlineLevel: 0 } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 26, bold: true, font: "Arial", color: "1A1A1A" },
        paragraph: { spacing: { before: 280, after: 160 }, outlineLevel: 1,
          border: { bottom: { style: BorderStyle.SINGLE, size: 1, color: "D0D0D0", space: 4 } } } },
    ]
  },
  sections: [{
    properties: {
      page: {
        size: { width: 12240, height: 15840 },
        margin: { top: 1440, right: 1080, bottom: 1440, left: 1080 }
      }
    },
    headers: {
      default: new Header({ children: [new Paragraph({ children: [
        new TextRun({ text: "QA Score: Case Search - Smith v. Stellar | Run 4 | 2026-04-01", font: "Arial", size: 16, color: "888888" })
      ]})]})
    },
    footers: {
      default: new Footer({ children: [new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [new TextRun({ text: "Page ", font: "Arial", size: 16, color: "888888" }), new TextRun({ children: [PageNumber.CURRENT], font: "Arial", size: 16, color: "888888" })]
      })]})
    },
    children: [
      // Title
      new Paragraph({ heading: HeadingLevel.HEADING_1, children: [
        new TextRun({ text: "QA Score: Case Search - Smith v. Stellar", bold: true, size: 36, font: "Arial" })
      ]}),
      new Paragraph({ spacing: { after: 80 }, children: [
        new TextRun({ text: "Run 4 | 2026-04-01 | Solution: case-search | Eval: smith-v-stellar", font: "Arial", size: 20, color: "666666" })
      ]}),

      // Score banner
      new Paragraph({ spacing: { before: 200, after: 300 },
        border: { top: { style: BorderStyle.SINGLE, size: 2, color: "DC2626", space: 4 },
                  bottom: { style: BorderStyle.SINGLE, size: 2, color: "DC2626", space: 4 },
                  left: { style: BorderStyle.SINGLE, size: 2, color: "DC2626", space: 8 },
                  right: { style: BorderStyle.SINGLE, size: 2, color: "DC2626", space: 8 } },
        shading: { fill: "FEF2F2", type: ShadingType.CLEAR },
        children: [new TextRun({ text: "  41 / 100 - FAIL", bold: true, size: 28, color: "DC2626", font: "Arial" })]
      }),

      // Run Log
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Run Log")] }),
      new Table({ width: { size: 9360, type: WidthType.DXA }, columnWidths: runLogWidths, rows: runLogRows }),
      new Paragraph({ spacing: { before: 80 }, children: [
        new TextRun({ text: "* C4: 3 results excluded (no citation). C5: 1 result excluded (no citation).", font: "Arial", size: 18, italics: true, color: "666666" })
      ]}),

      // Per-Search Breakdown
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Per-Search Breakdown")] }),
      new Table({ width: { size: 9360, type: WidthType.DXA }, columnWidths: breakdownWidths, rows: breakdownRows }),
      new Paragraph({ spacing: { before: 80 }, children: [
        new TextRun({ text: "Combined: (28 + 69 + 69 + 14 + 65 + 40 + 0) / 7 = 41 / 100", font: "Arial", size: 18, italics: true, color: "666666" })
      ]}),

      // Results Summary
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Results Summary")] }),
      ...summaries.map(([label, desc]) => new Paragraph({
        spacing: { after: 160 },
        children: [
          new TextRun({ text: label + " ", bold: true, font: "Arial", size: 20 }),
          new TextRun({ text: desc, font: "Arial", size: 20 }),
        ]
      })),

      new PageBreak(),

      // New Elements
      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("New Elements Not in Golden Evaluation")] }),
      new Paragraph({ spacing: { after: 120 }, children: [
        new TextRun({ text: "The following cases were surfaced by C5 (full fact pattern) and are not currently in the golden evaluation. Each requires SME review.", font: "Arial", size: 18, color: "444444" })
      ]}),
      new Table({ width: { size: 9360, type: WidthType.DXA }, columnWidths: newElementsWidths, rows: newElementsRows }),

      // Deviations
      new Paragraph({ heading: HeadingLevel.HEADING_2, spacing: { before: 400 }, children: [new TextRun("Deviations from Golden Evaluation")] }),
      ...[
        "C2 and C3 returned identical result sets despite different query types.",
        "C4 dramatically underperformed vs. C2/C3, returning mostly irrelevant results despite referencing \u00A7 15.50.",
        "C5 outperformed C4 (3 Tier 1 cases vs. 0), reversing the assumption that focused queries outperform narrative ones.",
        "Marsh USA v. Cook citation displayed as \"33 I.E.R. Cas. (BNA) 999\" rather than \"354 S.W.3d 764.\"",
        "A2 returned exclusively federal regulations despite a Texas-specific query.",
        "Alex Sheshunoff v. Johnson appeared in C5 with citation \"50 Tex. Sup. Ct. J. 44 (2006)\" vs. golden eval \"209 S.W.3d 644 (Tex. 2006).\"",
      ].map(text => new Paragraph({
        spacing: { after: 100 },
        children: [
          new TextRun({ text: "\u2022 ", font: "Arial", size: 20 }),
          new TextRun({ text, font: "Arial", size: 20 }),
        ]
      })),
    ]
  }]
});

const outPath = process.argv[2] || "run-4-scorecard.docx";
Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync(outPath, buffer);
  console.log("Created: " + outPath);
});

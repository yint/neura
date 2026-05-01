# Work Memory POC

This is a self-contained browser POC for an on-demand work-memory dashboard.

Open `index.html` in a browser. No dependencies, build step, or API keys are required.

## What It Demonstrates

- Normalized source objects for Slack, Teams, email, and documents
- Chunk generation for retrieval and citation-style evidence
- Hot, warm, and cold storage tier simulation
- Generated dashboard tabs:
  - Summary
  - Customers with customer and project subtabs
  - Details
  - Evidence
  - Timeline
  - Decisions
  - Actions
  - Gaps
  - Sources
- Source viewer behavior, including cold-source hydration

## POC Boundaries

This version uses synthetic source data and deterministic ranking logic. A production version would replace those pieces with:

- OAuth connectors for source systems
- Background ingestion and parsing workers
- Full-text and vector indexes
- Permission-aware retrieval
- LLM summarization and extraction
- Durable dashboard snapshots

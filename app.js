const TODAY = new Date("2026-05-01T12:00:00-07:00");

const THEMES = {
  onboarding: {
    label: "Enterprise onboarding risk",
    summary:
      "Large customer onboarding remained the loudest operational theme. The risk moved from scattered implementation friction to a cross-team blocker involving import tooling, legal review, and support coverage.",
    why:
      "It affects revenue timing, customer trust, and the quality of the launch narrative.",
    keywords: ["enterprise", "onboarding", "customer", "import", "legal", "support"],
  },
  reliability: {
    label: "Search reliability and latency",
    summary:
      "Retrieval quality improved, but latency and source freshness were recurring concerns. Teams converged on a plan to separate active indexes from cold source bodies.",
    why:
      "The product promise depends on fast, trustworthy answers with source-level drill-down.",
    keywords: ["search", "retrieval", "latency", "index", "embedding", "freshness"],
  },
  launch: {
    label: "Launch scope discipline",
    summary:
      "The team repeatedly narrowed scope to keep the POC shippable. Dashboards, source citations, and saved refreshes were treated as core, while broader automation moved later.",
    why:
      "Scope pressure is the main threat to getting a useful first version in front of users.",
    keywords: ["launch", "scope", "poc", "dashboard", "milestone", "beta"],
  },
  revenue: {
    label: "Revenue and pipeline sensitivity",
    summary:
      "Sales conversations made the same point from several angles: customers want evidence-backed summaries, but procurement will press on privacy, export controls, and retention.",
    why:
      "The buying path is likely shaped as much by governance confidence as by AI quality.",
    keywords: ["sales", "pipeline", "pricing", "procurement", "security", "privacy"],
  },
  governance: {
    label: "Permissions and governance",
    summary:
      "Permission-aware retrieval surfaced as a product requirement rather than backend plumbing. The system needs conservative access rules, explainable source sets, and auditability.",
    why:
      "A workspace memory product can only be trusted if it never leaks private context.",
    keywords: ["permission", "privacy", "audit", "acl", "compliance", "governance"],
  },
  workflow: {
    label: "Follow-through workflow",
    summary:
      "Users need more than a summary. The dashboard should expose decisions, actions, owners, unanswered questions, and exportable updates.",
    why:
      "The product becomes valuable when synthesized knowledge turns into next steps.",
    keywords: ["action", "owner", "decision", "follow-up", "task", "brief"],
  },
};

const SOURCES = [
  {
    id: "slack-1021",
    type: "slack",
    title: "Enterprise import blockers",
    location: "#enterprise-sales",
    author: "Maya Chen",
    date: "2026-02-12",
    lastActivity: "2026-04-12",
    status: "active",
    priority: 8,
    people: ["Maya Chen", "Ari Patel", "Jon Bell"],
    themes: ["onboarding", "revenue", "workflow"],
    summary:
      "Sales and support flagged repeated delays in enterprise onboarding caused by data import edge cases and unclear owner routing.",
    content: [
      {
        author: "Maya Chen",
        time: "2026-02-12 09:42",
        text:
          "Three enterprise accounts are still waiting on import validation. The problem is not just the CSV parser. We do not have a clear owner when legal and support both need to review a customer's export.",
      },
      {
        author: "Ari Patel",
        time: "2026-02-12 09:55",
        text:
          "The import tool can cover two of those cases this sprint. The ownership gap is separate and should be tracked in the launch dashboard.",
      },
      {
        author: "Jon Bell",
        time: "2026-04-12 14:19",
        text:
          "Please mark onboarding risk as unresolved. The customer health update still depends on the legal review checklist.",
      },
    ],
    decisions: [
      {
        text: "Track onboarding risk as an unresolved launch item.",
        date: "2026-04-12",
        owner: "Jon Bell",
        status: "open",
      },
    ],
    actions: [
      {
        text: "Create legal review checklist for enterprise imports.",
        owner: "Maya Chen",
        due: "2026-04-22",
        status: "stale",
      },
    ],
  },
  {
    id: "email-2048",
    type: "email",
    title: "Procurement questions for workspace memory beta",
    location: "Outlook",
    author: "Priya Shah",
    date: "2026-03-03",
    lastActivity: "2026-03-17",
    status: "active",
    priority: 7,
    people: ["Priya Shah", "Maya Chen", "Security Review"],
    themes: ["revenue", "governance"],
    summary:
      "A late-stage prospect asked for retention, export controls, permission inheritance, and audit logs before committing to the beta.",
    content: [
      {
        author: "Priya Shah",
        time: "2026-03-03 16:08",
        text:
          "Procurement likes the dashboard concept, especially source-backed summaries. Before beta approval they need answers on retention windows, export controls, and whether Slack private-channel permissions are inherited exactly.",
      },
      {
        author: "Maya Chen",
        time: "2026-03-04 10:31",
        text:
          "We should prepare a security appendix. If we cannot explain ACL behavior in plain language, this deal will stall.",
      },
      {
        author: "Priya Shah",
        time: "2026-03-17 13:15",
        text:
          "Follow-up from procurement: they want audit logs for generated dashboard source sets, not just user login activity.",
      },
    ],
    decisions: [
      {
        text: "Add generated-dashboard source set logs to the beta security checklist.",
        date: "2026-03-17",
        owner: "Priya Shah",
        status: "open",
      },
    ],
    actions: [
      {
        text: "Draft beta security appendix covering retention and inherited permissions.",
        owner: "Maya Chen",
        due: "2026-03-24",
        status: "open",
      },
    ],
  },
  {
    id: "doc-3099",
    type: "doc",
    title: "POC Dashboard Requirements",
    location: "Google Drive",
    author: "Alex Rivera",
    date: "2026-03-18",
    lastActivity: "2026-04-25",
    status: "active",
    priority: 9,
    people: ["Alex Rivera", "Nina Park"],
    themes: ["launch", "workflow", "governance"],
    summary:
      "The POC should generate a dashboard with summary, evidence, details, timeline, actions, decisions, gaps, and source previews.",
    content: [
      {
        heading: "Dashboard contract",
        text:
          "Every generated dashboard must contain an answer layer, an evidence layer, and a workspace layer. The summary is useful only if the user can inspect citations and convert findings into work artifacts.",
      },
      {
        heading: "Required tabs",
        text:
          "The first POC should include Summary, Details, Evidence, Timeline, Decisions, Actions, Gaps, and Sources. Follow-up chat can come after the retrieval flow is stable.",
      },
      {
        heading: "Trust behavior",
        text:
          "All generated claims need source object IDs and chunk IDs. If the model cannot support a claim with at least two independent sources, the dashboard should show that uncertainty.",
      },
    ],
    decisions: [
      {
        text: "Ship the POC with auditable dashboard tabs before adding free-form automation.",
        date: "2026-03-18",
        owner: "Alex Rivera",
        status: "accepted",
      },
    ],
    actions: [
      {
        text: "Implement source preview from citations.",
        owner: "Nina Park",
        due: "2026-04-08",
        status: "done",
      },
    ],
  },
  {
    id: "teams-4111",
    type: "teams",
    title: "Retrieval latency review",
    location: "Teams / Platform",
    author: "Nina Park",
    date: "2026-03-27",
    lastActivity: "2026-04-18",
    status: "active",
    priority: 8,
    people: ["Nina Park", "Owen Mills", "Alex Rivera"],
    themes: ["reliability", "launch"],
    summary:
      "Platform reviewed retrieval latency and proposed keeping hot metadata and summaries in the active tier while moving old chunk bodies to cheaper storage.",
    content: [
      {
        author: "Nina Park",
        time: "2026-03-27 11:04",
        text:
          "The dashboard can load instantly if summaries, metadata, permissions, and source stubs stay hot. Full source bodies can hydrate when the user opens them.",
      },
      {
        author: "Owen Mills",
        time: "2026-03-27 11:15",
        text:
          "For cold objects, we should keep centroid embeddings and a source pointer. Rebuild fine-grained chunks only when the user reopens the item.",
      },
      {
        author: "Alex Rivera",
        time: "2026-04-18 15:02",
        text:
          "Agree. Put rehydration status in the source viewer so users understand why older documents take a moment.",
      },
    ],
    decisions: [
      {
        text: "Keep source stubs hot and hydrate full source bodies on open.",
        date: "2026-03-27",
        owner: "Nina Park",
        status: "accepted",
      },
    ],
    actions: [
      {
        text: "Prototype tier badges and rehydration messaging in source viewer.",
        owner: "Owen Mills",
        due: "2026-04-05",
        status: "done",
      },
    ],
  },
  {
    id: "email-5012",
    type: "email",
    title: "Launch scope reset",
    location: "Gmail",
    author: "Alex Rivera",
    date: "2026-04-02",
    lastActivity: "2026-04-04",
    status: "active",
    priority: 8,
    people: ["Alex Rivera", "Product Leads"],
    themes: ["launch", "workflow"],
    summary:
      "Product reset the POC launch scope to focus on one strong generated dashboard, with saved refresh and export left as lightweight affordances.",
    content: [
      {
        author: "Alex Rivera",
        time: "2026-04-02 08:22",
        text:
          "We are trimming the launch surface. One generated dashboard should feel excellent: summary, evidence, timeline, actions, source viewer. Broader agents can wait.",
      },
      {
        author: "Product Leads",
        time: "2026-04-04 17:46",
        text:
          "Accepted. Saved dashboard and refresh are still in, but only as POC-level controls.",
      },
    ],
    decisions: [
      {
        text: "Trim POC launch scope to one excellent generated dashboard.",
        date: "2026-04-02",
        owner: "Alex Rivera",
        status: "accepted",
      },
    ],
    actions: [
      {
        text: "Keep export as a mocked control until backend document generation exists.",
        owner: "Product Leads",
        due: "2026-04-10",
        status: "done",
      },
    ],
  },
  {
    id: "slack-6200",
    type: "slack",
    title: "Source-backed answer quality",
    location: "#ai-quality",
    author: "Owen Mills",
    date: "2026-04-09",
    lastActivity: "2026-04-28",
    status: "active",
    priority: 9,
    people: ["Owen Mills", "Nina Park", "Maya Chen"],
    themes: ["reliability", "governance", "workflow"],
    summary:
      "AI quality review found that unsupported claims dropped when the dashboard required per-theme citations and a gaps tab.",
    content: [
      {
        author: "Owen Mills",
        time: "2026-04-09 13:37",
        text:
          "The generated summaries are much safer when every theme must carry source IDs. The gaps tab is doing real work by keeping the model honest about thin evidence.",
      },
      {
        author: "Nina Park",
        time: "2026-04-09 14:02",
        text:
          "We should show used versus related sources. People need to know which evidence actually shaped the answer.",
      },
      {
        author: "Maya Chen",
        time: "2026-04-28 09:16",
        text:
          "This also helps sales. The source list is easier to trust than a polished paragraph with no trail.",
      },
    ],
    decisions: [
      {
        text: "Separate used sources from related sources in generated dashboards.",
        date: "2026-04-09",
        owner: "Nina Park",
        status: "accepted",
      },
    ],
    actions: [
      {
        text: "Add evidence grouping by theme and source type.",
        owner: "Owen Mills",
        due: "2026-04-16",
        status: "done",
      },
    ],
  },
  {
    id: "doc-7112",
    type: "doc",
    title: "Customer Onboarding Risk Plan",
    location: "SharePoint",
    author: "Jon Bell",
    date: "2026-04-14",
    lastActivity: "2026-04-27",
    status: "active",
    priority: 9,
    people: ["Jon Bell", "Maya Chen", "Support Ops"],
    themes: ["onboarding", "workflow", "revenue"],
    summary:
      "The onboarding plan names owners for import failures, support review, legal review, and customer communications.",
    content: [
      {
        heading: "Risk summary",
        text:
          "Onboarding risk is concentrated in four accounts. Import validation is mostly understood. The unresolved issue is coordination across support, legal, and customer communications.",
      },
      {
        heading: "Owner routing",
        text:
          "Support Ops owns import validation. Legal owns export approvals. Sales owns customer communication. Any account blocked for more than five business days escalates to Jon Bell.",
      },
      {
        heading: "Current status",
        text:
          "Two accounts are on track after import fixes. Two accounts remain blocked by legal review and need customer-facing timelines.",
      },
    ],
    decisions: [
      {
        text: "Escalate accounts blocked for more than five business days to Jon Bell.",
        date: "2026-04-14",
        owner: "Jon Bell",
        status: "accepted",
      },
    ],
    actions: [
      {
        text: "Send customer-facing timeline for two blocked accounts.",
        owner: "Sales",
        due: "2026-04-30",
        status: "open",
      },
    ],
  },
  {
    id: "teams-8220",
    type: "teams",
    title: "Cold storage promotion behavior",
    location: "Teams / Infrastructure",
    author: "Owen Mills",
    date: "2026-01-10",
    lastActivity: "2026-01-18",
    status: "resolved",
    priority: 5,
    people: ["Owen Mills", "Nina Park"],
    themes: ["reliability", "governance"],
    summary:
      "Infrastructure resolved the first pass of cold storage promotion: keep stubs searchable, restore chunk bodies on open, and record promotion events.",
    content: [
      {
        author: "Owen Mills",
        time: "2026-01-10 10:12",
        text:
          "Resolved objects older than 90 days should not keep all chunk bodies hot. Keep title, summary, ACL, entity links, and storage pointers.",
      },
      {
        author: "Nina Park",
        time: "2026-01-18 16:40",
        text:
          "Promotion should happen on open, refresh, or citation use. We also need an audit event so users can understand when archived context came back.",
      },
    ],
    decisions: [
      {
        text: "Move resolved inactive source bodies to cold storage after 90 days.",
        date: "2026-01-18",
        owner: "Owen Mills",
        status: "accepted",
      },
    ],
    actions: [
      {
        text: "Emit a source promotion event whenever cold content is reopened.",
        owner: "Nina Park",
        due: "2026-02-01",
        status: "done",
      },
    ],
  },
  {
    id: "email-9004",
    type: "email",
    title: "Beta customer weekly recap",
    location: "Gmail",
    author: "Maya Chen",
    date: "2026-04-21",
    lastActivity: "2026-04-26",
    status: "active",
    priority: 8,
    people: ["Maya Chen", "Priya Shah", "Customer Success"],
    themes: ["onboarding", "revenue", "launch"],
    summary:
      "The beta customer recap tied launch readiness to onboarding health and asked for a clearer customer-facing status update.",
    content: [
      {
        author: "Maya Chen",
        time: "2026-04-21 18:20",
        text:
          "The product story is landing, but customers still ask whether the dashboard can prove where every summary came from. Onboarding delays are coloring their reaction.",
      },
      {
        author: "Priya Shah",
        time: "2026-04-26 09:47",
        text:
          "We should combine the launch update with the onboarding risk plan. It gives customers a clearer view of what is fixed and what is still blocked.",
      },
    ],
    decisions: [
      {
        text: "Combine launch update with onboarding risk status for beta customers.",
        date: "2026-04-26",
        owner: "Priya Shah",
        status: "open",
      },
    ],
    actions: [
      {
        text: "Draft customer update connecting launch progress to onboarding status.",
        owner: "Maya Chen",
        due: "2026-05-03",
        status: "open",
      },
    ],
  },
];

const SOURCE_LABELS = {
  slack: "Slack",
  teams: "Teams",
  email: "Email",
  doc: "Document",
};

const CUSTOMERS = [
  {
    id: "acme-bank",
    name: "Acme Bank",
    segment: "Enterprise finance",
    owner: "Maya Chen",
    health: "At risk",
    projects: [
      {
        id: "acme-memory-beta",
        name: "Workspace Memory Beta",
        stage: "Implementation",
        status: "Blocked",
        progress: 62,
        due: "2026-05-15",
        summary:
          "Acme likes source-backed dashboards, but onboarding is slowed by import validation, legal review, and customer-facing timeline gaps.",
        blockers: ["Legal review checklist", "Two account imports still blocked", "Customer status update not sent"],
        nextSteps: ["Send timeline to customer", "Escalate any five-day blocker to Jon Bell", "Connect launch update to onboarding status"],
        sourceIds: ["slack-1021", "doc-7112", "email-9004"],
      },
      {
        id: "acme-security-review",
        name: "Security Review",
        stage: "Procurement",
        status: "Needs answers",
        progress: 48,
        due: "2026-05-08",
        summary:
          "Procurement needs plain-language retention, export control, ACL inheritance, and generated-dashboard audit log answers.",
        blockers: ["Security appendix is not finished", "Audit logging expectations need sign-off"],
        nextSteps: ["Draft appendix", "Document generated source-set logs", "Confirm private-channel ACL behavior"],
        sourceIds: ["email-2048", "slack-6200"],
      },
    ],
  },
  {
    id: "northstar-health",
    name: "Northstar Health",
    segment: "Healthcare",
    owner: "Priya Shah",
    health: "Watch",
    projects: [
      {
        id: "northstar-evidence-dashboard",
        name: "Evidence Dashboard Pilot",
        stage: "Pilot design",
        status: "On track",
        progress: 74,
        due: "2026-05-22",
        summary:
          "The strongest pilot path is one dashboard that proves evidence, timeline, decisions, actions, gaps, and source preview behavior.",
        blockers: ["Follow-up chat is intentionally deferred", "Export is still mocked"],
        nextSteps: ["Keep POC scope narrow", "Validate source preview flow", "Use gaps tab in customer demo"],
        sourceIds: ["doc-3099", "email-5012", "slack-6200"],
      },
      {
        id: "northstar-governance",
        name: "Governance Controls",
        stage: "Requirements",
        status: "Needs answers",
        progress: 55,
        due: "2026-05-29",
        summary:
          "Northstar's privacy review depends on conservative permission-aware retrieval and clear source set audit trails.",
        blockers: ["Permission behavior needs stronger demo", "Cold-source audit events need product wording"],
        nextSteps: ["Show used versus related sources", "Add audit event copy", "Prepare risk controls summary"],
        sourceIds: ["email-2048", "teams-8220", "slack-6200"],
      },
    ],
  },
  {
    id: "helio-retail",
    name: "Helio Retail",
    segment: "Retail operations",
    owner: "Alex Rivera",
    health: "Healthy",
    projects: [
      {
        id: "helio-launch-brief",
        name: "Launch Readiness Brief",
        stage: "Pre-beta",
        status: "On track",
        progress: 81,
        due: "2026-05-10",
        summary:
          "Helio is a fit for the first demo because launch scope is tight and the dashboard can explain changes across recent work.",
        blockers: ["Saved refresh is only a local affordance", "No live connector layer yet"],
        nextSteps: ["Demo summary-to-source drilldown", "Use decisions and actions tabs as follow-through proof"],
        sourceIds: ["email-5012", "doc-3099", "teams-4111"],
      },
      {
        id: "helio-storage-model",
        name: "Hot/Cold Source Model",
        stage: "Architecture review",
        status: "Validated",
        progress: 88,
        due: "2026-05-17",
        summary:
          "The storage model keeps stubs, metadata, ACLs, and summaries hot while hydrating full source bodies only when users inspect them.",
        blockers: ["Needs real object-store timings", "Promotion audit events are synthetic"],
        nextSteps: ["Measure hydrate latency", "Expose source tier in customer readout"],
        sourceIds: ["teams-4111", "teams-8220"],
      },
    ],
  },
];

const TABS = [
  "Summary",
  "Customers",
  "Details",
  "Evidence",
  "Timeline",
  "Decisions",
  "Actions",
  "Gaps",
  "Sources",
];

let state = {
  dashboard: null,
  activeTab: "Summary",
  activeCustomerId: null,
  activeProjectId: null,
  selectedSourceId: null,
  hydratedSources: new Set(),
};

const els = {
  queryInput: document.getElementById("queryInput"),
  windowSelect: document.getElementById("windowSelect"),
  scopeSelect: document.getElementById("scopeSelect"),
  generateButton: document.getElementById("generateButton"),
  refreshButton: document.getElementById("refreshButton"),
  saveButton: document.getElementById("saveButton"),
  sourceMix: document.getElementById("sourceMix"),
  sourceCount: document.getElementById("sourceCount"),
  tierList: document.getElementById("tierList"),
  tabs: document.getElementById("tabs"),
  tabContent: document.getElementById("tabContent"),
  dashboardTitle: document.getElementById("dashboardTitle"),
  metricSources: document.getElementById("metricSources"),
  metricChunks: document.getElementById("metricChunks"),
  metricDecisions: document.getElementById("metricDecisions"),
  metricActions: document.getElementById("metricActions"),
  metricImportance: document.getElementById("metricImportance"),
  previewTitle: document.getElementById("previewTitle"),
  previewTier: document.getElementById("previewTier"),
  previewMeta: document.getElementById("previewMeta"),
  previewBody: document.getElementById("previewBody"),
  toast: document.getElementById("toast"),
};

function daysBetween(dateString) {
  const date = new Date(`${dateString}T12:00:00-07:00`);
  return Math.floor((TODAY - date) / 86400000);
}

function tierForSource(source) {
  const inactiveDays = daysBetween(source.lastActivity);
  if (inactiveDays > 365) return "archive";
  if (source.status === "resolved" && inactiveDays >= 90) return "cold";
  if (inactiveDays >= 90) return "cold";
  if (inactiveDays >= 45) return "warm";
  return "hot";
}

function normalizeText(value) {
  return String(value).toLowerCase().replace(/[^a-z0-9\s]/g, " ");
}

function tokenize(value) {
  return normalizeText(value)
    .split(/\s+/)
    .filter((word) => word.length > 2);
}

function sourceText(source) {
  return source.content
    .map((item) => item.text)
    .join(" ");
}

function sourceMatchesScope(source, scope) {
  if (scope === "all") return true;
  return source.themes.includes(scope) || sourceText(source).toLowerCase().includes(scope);
}

function chunkSources(sources) {
  const chunks = [];
  sources.forEach((source) => {
    source.content.forEach((item, index) => {
      chunks.push({
        id: `${source.id}-chunk-${index + 1}`,
        sourceId: source.id,
        sourceType: source.type,
        title: source.title,
        date: item.time ? item.time.slice(0, 10) : source.date,
        text: item.text,
        heading: item.heading || null,
        author: item.author || source.author,
        themes: source.themes,
        tier: tierForSource(source),
      });
    });
  });
  return chunks;
}

function scoreSource(source, queryTokens, scope) {
  const text = normalizeText(`${source.title} ${source.summary} ${sourceText(source)} ${source.themes.join(" ")}`);
  const tokenHits = queryTokens.reduce((count, token) => count + (text.includes(token) ? 1 : 0), 0);
  const scopeBoost = sourceMatchesScope(source, scope) ? 3 : 0;
  const recencyBoost = Math.max(0, 80 - daysBetween(source.lastActivity)) / 20;
  const tierPenalty = tierForSource(source) === "cold" ? -0.6 : tierForSource(source) === "archive" ? -1.6 : 0;
  return tokenHits + scopeBoost + recencyBoost + source.priority / 5 + tierPenalty;
}

function buildDashboard() {
  const query = els.queryInput.value.trim() || "Top work themes";
  const windowDays = Number(els.windowSelect.value);
  const scope = els.scopeSelect.value;
  const queryTokens = tokenize(query);
  const eligibleSources = SOURCES.filter((source) => {
    const inWindow = daysBetween(source.date) <= windowDays || daysBetween(source.lastActivity) <= windowDays;
    return inWindow && sourceMatchesScope(source, scope);
  })
    .map((source) => ({ ...source, score: scoreSource(source, queryTokens, scope), tier: tierForSource(source) }))
    .filter((source) => source.score > 2.5)
    .sort((a, b) => b.score - a.score || new Date(b.lastActivity) - new Date(a.lastActivity));

  const chunks = chunkSources(eligibleSources);
  const themeRows = Object.entries(THEMES)
    .map(([themeId, theme]) => {
      const themeSources = eligibleSources.filter((source) => source.themes.includes(themeId));
      const themeChunks = chunks.filter((chunk) => chunk.themes.includes(themeId));
      const totalPriority = themeSources.reduce((sum, source) => sum + source.priority, 0);
      const recency = themeSources.reduce((sum, source) => sum + Math.max(0, 90 - daysBetween(source.lastActivity)), 0);
      const actionCount = themeSources.flatMap((source) => source.actions).filter((action) => action.status !== "done").length;
      const score = themeSources.length * 5 + totalPriority + recency / 10 + actionCount * 3;
      const confidence = confidenceForTheme(themeSources);
      const importance = judgeThemeImportance(themeId, themeSources, themeChunks, actionCount);
      return {
        id: themeId,
        ...theme,
        sources: themeSources,
        chunks: themeChunks,
        score,
        confidence,
        importance,
        actionCount,
        trend: trendForTheme(themeSources),
      };
    })
    .filter((theme) => theme.sources.length > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);

  const customerRows = buildCustomerProgress(eligibleSources);
  const customerFallbackRows = customerRows.length
    ? customerRows
    : buildCustomerProgress(SOURCES.map((source) => ({ ...source, score: 0, tier: tierForSource(source) })));

  const dashboard = {
    query,
    scope,
    windowDays,
    sources: eligibleSources,
    chunks,
    themes: themeRows,
    importance: summarizeImportance(themeRows.map((theme) => theme.importance)),
    customers: customerFallbackRows,
    customerFallback: !customerRows.length,
    decisions: eligibleSources.flatMap((source) =>
      source.decisions.map((decision) => ({ ...decision, sourceId: source.id, sourceTitle: source.title, sourceType: source.type }))
    ),
    actions: eligibleSources.flatMap((source) =>
      source.actions.map((action) => ({ ...action, sourceId: source.id, sourceTitle: source.title, sourceType: source.type }))
    ),
    generatedAt: TODAY.toLocaleString([], { month: "short", day: "numeric", year: "numeric", hour: "numeric", minute: "2-digit" }),
  };

  state.dashboard = dashboard;
  state.activeTab = "Summary";
  ensureCustomerSelection(dashboard.customers);
  state.selectedSourceId = eligibleSources[0]?.id || null;
  render();
  showToast("Dashboard generated");
}

function buildCustomerProgress(sources) {
  const sourceById = new Map(sources.map((source) => [source.id, source]));
  return CUSTOMERS.map((customer) => {
    const projects = customer.projects
      .map((project) => {
        const projectSources = project.sourceIds.map((sourceId) => sourceById.get(sourceId)).filter(Boolean);
        const projectActions = projectSources.flatMap((source) =>
          source.actions.map((action) => ({ ...action, sourceId: source.id, sourceTitle: source.title }))
        );
        const projectDecisions = projectSources.flatMap((source) =>
          source.decisions.map((decision) => ({ ...decision, sourceId: source.id, sourceTitle: source.title }))
        );
        const latestActivity = projectSources
          .map((source) => source.lastActivity)
          .sort((a, b) => new Date(b) - new Date(a))[0];
        const openActions = projectActions.filter((action) => action.status !== "done").length;
        const importance = judgeProjectImportance(project, projectSources, projectActions);

        return {
          ...project,
          sources: projectSources,
          actions: projectActions,
          decisions: projectDecisions,
          openActions,
          acceptedDecisions: projectDecisions.filter((decision) => decision.status === "accepted").length,
          importance,
          latestActivity,
          tierMix: ["hot", "warm", "cold", "archive"].map((tier) => ({
            tier,
            count: projectSources.filter((source) => source.tier === tier).length,
          })),
        };
      })
      .filter((project) => project.sources.length > 0);

    const progress = projects.length
      ? Math.round(projects.reduce((sum, project) => sum + project.progress, 0) / projects.length)
      : 0;
    const openActions = projects.reduce((sum, project) => sum + project.openActions, 0);
    const sourceCount = unique(projects.flatMap((project) => project.sources.map((source) => source.id))).length;
    const importance = summarizeImportance(projects.map((project) => project.importance));
    const latestActivity = projects
      .map((project) => project.latestActivity)
      .filter(Boolean)
      .sort((a, b) => new Date(b) - new Date(a))[0];

    return {
      ...customer,
      projects,
      progress,
      openActions,
      sourceCount,
      importance,
      latestActivity,
    };
  }).filter((customer) => customer.projects.length > 0);
}

function ensureCustomerSelection(customers) {
  const activeCustomerExists = customers.some((customer) => customer.id === state.activeCustomerId);
  if (!activeCustomerExists) {
    state.activeCustomerId = customers[0]?.id || null;
  }

  const activeCustomer = customers.find((customer) => customer.id === state.activeCustomerId);
  const activeProjectExists = activeCustomer?.projects.some((project) => project.id === state.activeProjectId);
  if (!activeProjectExists) {
    state.activeProjectId = activeCustomer?.projects[0]?.id || null;
  }
}

function judgeThemeImportance(themeId, sources, chunks, actionCount) {
  if (!sources.length) {
    return {
      score: 0,
      label: "None",
      model: "mock-backend-llm",
      reasons: ["No source evidence matched this dashboard request."],
    };
  }

  const baseByTheme = {
    onboarding: 72,
    revenue: 70,
    governance: 73,
    reliability: 68,
    launch: 64,
    workflow: 62,
  };
  const sourceTypes = new Set(sources.map((source) => source.type));
  const recentSources = sources.filter((source) => daysBetween(source.lastActivity) <= 21).length;
  const coldSources = sources.filter((source) => source.tier === "cold" || source.tier === "archive").length;
  const maxPriority = Math.max(...sources.map((source) => source.priority));
  const score = clamp(
    (baseByTheme[themeId] || 60) +
      Math.min(10, sources.length * 2) +
      Math.min(8, sourceTypes.size * 2) +
      Math.min(8, recentSources * 3) +
      Math.min(8, actionCount * 3) +
      Math.max(0, maxPriority - 7) * 2 -
      coldSources * 2,
    15,
    99
  );

  const reasons = [
    `${sources.length} supporting source${sources.length === 1 ? "" : "s"} across ${sourceTypes.size} system${sourceTypes.size === 1 ? "" : "s"}`,
    `${actionCount} unresolved action${actionCount === 1 ? "" : "s"} attached to the evidence set`,
  ];
  if (recentSources) {
    reasons.push(`${recentSources} recent source${recentSources === 1 ? "" : "s"} in the last 21 days`);
  }
  if (coldSources) {
    reasons.push(`${coldSources} older source${coldSources === 1 ? "" : "s"} need hydration before deep inspection`);
  }

  return {
    score,
    label: importanceLabel(score),
    model: "mock-backend-llm",
    reasons,
  };
}

function judgeProjectImportance(project, sources, actions) {
  const openActions = actions.filter((action) => action.status !== "done").length;
  const recentSources = sources.filter((source) => daysBetween(source.lastActivity) <= 21).length;
  const dueSoon = daysBetween(project.due) >= -21 && daysBetween(project.due) <= 5;
  const statusBoost = {
    Blocked: 18,
    "Needs answers": 14,
    "On track": 6,
    Validated: 4,
  }[project.status] || 8;
  const prioritySignal = sources.length ? Math.round(sources.reduce((sum, source) => sum + source.priority, 0) / sources.length) : 5;
  const score = clamp(
    42 +
      statusBoost +
      Math.min(12, openActions * 4) +
      Math.min(10, recentSources * 4) +
      Math.min(8, sources.length * 2) +
      prioritySignal +
      (dueSoon ? 8 : 0),
    10,
    99
  );

  const reasons = [
    `${project.status.toLowerCase()} project status`,
    `${openActions} open action${openActions === 1 ? "" : "s"}`,
    `${sources.length} linked evidence source${sources.length === 1 ? "" : "s"}`,
  ];
  if (dueSoon) {
    reasons.push(`due date is near: ${formatDate(project.due)}`);
  }

  return {
    score,
    label: importanceLabel(score),
    model: "mock-backend-llm",
    reasons,
  };
}

function summarizeImportance(items) {
  const scores = items.map((item) => item.score).filter((score) => score > 0);
  if (!scores.length) {
    return {
      score: 0,
      label: "None",
      model: "mock-backend-llm",
      reasons: ["No importance-bearing evidence was found."],
    };
  }
  const maxScore = Math.max(...scores);
  const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;
  const score = Math.round(maxScore * 0.65 + average * 0.35);
  return {
    score,
    label: importanceLabel(score),
    model: "mock-backend-llm",
    reasons: [`Highest item is ${importanceLabel(maxScore)}`, `Overall judgment is ${importanceLabel(score)}`],
  };
}

function importanceLabel(score) {
  if (score >= 85) return "Critical";
  if (score >= 70) return "High";
  if (score >= 50) return "Medium";
  return "Low";
}

function confidenceForTheme(sources) {
  const typeCount = new Set(sources.map((source) => source.type)).size;
  const hasRecent = sources.some((source) => daysBetween(source.lastActivity) < 21);
  if (sources.length >= 3 && typeCount >= 2 && hasRecent) return "High";
  if (sources.length >= 2) return "Medium";
  return "Low";
}

function trendForTheme(sources) {
  const recent = sources.filter((source) => daysBetween(source.lastActivity) < 30).length;
  const older = sources.length - recent;
  if (recent > older) return "Rising";
  if (recent === older) return "Steady";
  return "Cooling";
}

function render() {
  if (!state.dashboard) return;
  renderSidebar();
  renderMetrics();
  renderTabs();
  renderActiveTab();
  renderPreview();
}

function renderSidebar() {
  const sources = state.dashboard.sources;
  const maxCount = Math.max(1, sources.length);
  els.sourceCount.textContent = String(sources.length);
  els.sourceMix.innerHTML = ["slack", "email", "teams", "doc"]
    .map((type) => {
      const count = sources.filter((source) => source.type === type).length;
      return `
        <div class="mix-row">
          <span>${SOURCE_LABELS[type]}</span>
          <div class="bar"><span style="width:${(count / maxCount) * 100}%"></span></div>
          <strong>${count}</strong>
        </div>
      `;
    })
    .join("");

  const tiers = ["hot", "warm", "cold", "archive"];
  const maxTier = Math.max(1, ...tiers.map((tier) => sources.filter((source) => source.tier === tier).length));
  els.tierList.innerHTML = tiers
    .map((tier) => {
      const count = sources.filter((source) => source.tier === tier).length;
      return `
        <div class="tier-row ${tier}">
          <span>${capitalize(tier)}</span>
          <div class="bar"><span style="width:${(count / maxTier) * 100}%"></span></div>
          <strong>${count}</strong>
        </div>
      `;
    })
    .join("");
}

function renderMetrics() {
  const dashboard = state.dashboard;
  els.dashboardTitle.textContent = `${dashboard.themes.length} Work Themes, Last ${dashboard.windowDays} Days`;
  els.metricSources.textContent = dashboard.sources.length;
  els.metricChunks.textContent = dashboard.chunks.length;
  els.metricDecisions.textContent = dashboard.decisions.length;
  els.metricActions.textContent = dashboard.actions.length;
  els.metricImportance.textContent = dashboard.importance.label;
}

function renderTabs() {
  els.tabs.innerHTML = TABS.map(
    (tab) => `<button class="tab-button ${tab === state.activeTab ? "active" : ""}" type="button" data-tab="${tab}">${tab}</button>`
  ).join("");
}

function renderActiveTab() {
  const renderers = {
    Summary: renderSummary,
    Customers: renderCustomers,
    Details: renderDetails,
    Evidence: renderEvidence,
    Timeline: renderTimeline,
    Decisions: renderDecisions,
    Actions: renderActions,
    Gaps: renderGaps,
    Sources: renderSources,
  };
  els.tabContent.innerHTML = renderers[state.activeTab]();
}

function renderCustomers() {
  const customers = state.dashboard.customers;
  ensureCustomerSelection(customers);

  if (!customers.length) {
    return `
      <div class="empty-panel">
        <h3>No customer progress found</h3>
        <p>Try widening the time window or switching the scope back to all work.</p>
      </div>
    `;
  }

  const activeCustomer = customers.find((customer) => customer.id === state.activeCustomerId) || customers[0];
  const activeProject =
    activeCustomer.projects.find((project) => project.id === state.activeProjectId) || activeCustomer.projects[0];
  const customerSources = unique(activeCustomer.projects.flatMap((project) => project.sources.map((source) => source.id)));
  const projectSourceCount = activeProject.sources.length;

  return `
    <div class="customer-workspace">
      ${
        state.dashboard.customerFallback
          ? `
          <div class="notice-card">
            <strong>Showing full workspace customer model.</strong>
            <span>The current dashboard filters did not return customer-linked sources, so this tab falls back to all synthetic customer evidence.</span>
          </div>
        `
          : ""
      }

      <div class="subtab-row" aria-label="Customer tabs">
        ${customers
          .map(
            (customer) => `
            <button class="subtab-button ${customer.id === activeCustomer.id ? "active" : ""}" type="button" data-customer="${customer.id}">
              <span>${escapeHtml(customer.name)}</span>
              <strong>${customer.progress}%</strong>
            </button>
          `
          )
          .join("")}
      </div>

      <section class="customer-hero">
        <div>
          <p class="eyebrow">${escapeHtml(activeCustomer.segment)} / ${escapeHtml(activeCustomer.owner)}</p>
          <h3>${escapeHtml(activeCustomer.name)}</h3>
          <p>${escapeHtml(customerHealthNarrative(activeCustomer))}</p>
        </div>
        <div class="progress-ring" style="background: radial-gradient(circle at center, white 0 58%, transparent 59%), conic-gradient(var(--green) 0 ${activeCustomer.progress}%, var(--line) ${activeCustomer.progress}% 100%)" aria-label="${activeCustomer.progress}% complete">
          <span>${activeCustomer.progress}%</span>
        </div>
      </section>

      <div class="customer-stats">
        <div class="stat"><span>Health</span><strong>${escapeHtml(activeCustomer.health)}</strong></div>
        <div class="stat"><span>Projects</span><strong>${activeCustomer.projects.length}</strong></div>
        <div class="stat"><span>Sources</span><strong>${customerSources.length}</strong></div>
        <div class="stat"><span>Open Actions</span><strong>${activeCustomer.openActions}</strong></div>
        <div class="stat"><span>Importance</span><strong>${activeCustomer.importance.label}</strong></div>
      </div>

      <div class="subtab-row project-tabs" aria-label="Project tabs">
        ${activeCustomer.projects
          .map(
            (project) => `
            <button class="subtab-button project ${project.id === activeProject.id ? "active" : ""}" type="button" data-project="${project.id}">
              <span>${escapeHtml(project.name)}</span>
              <strong>${project.progress}%</strong>
            </button>
          `
          )
          .join("")}
      </div>

      <section class="project-board">
        <article class="project-main">
          <header>
            <div>
              <p class="eyebrow">${escapeHtml(activeProject.stage)} / due ${formatDate(activeProject.due)}</p>
              <h3>${escapeHtml(activeProject.name)}</h3>
            </div>
            <div class="badge-stack">
              <span class="status-badge">${escapeHtml(activeProject.status)}</span>
              <span class="importance-badge">${activeProject.importance.label}</span>
            </div>
          </header>
          <p>${escapeHtml(activeProject.summary)}</p>
          <p class="importance-note"><strong>Mock LLM judge:</strong> ${escapeHtml(activeProject.importance.reasons.join("; "))}.</p>
          <div class="progress-track" aria-label="${activeProject.progress}% project progress">
            <span style="width:${activeProject.progress}%"></span>
          </div>
          <div class="project-lists">
            <div>
              <h4>Blockers</h4>
              <ul>${activeProject.blockers.map((blocker) => `<li>${escapeHtml(blocker)}</li>`).join("")}</ul>
            </div>
            <div>
              <h4>Next Steps</h4>
              <ul>${activeProject.nextSteps.map((step) => `<li>${escapeHtml(step)}</li>`).join("")}</ul>
            </div>
          </div>
        </article>

        <aside class="project-side">
          <div class="stat"><span>Evidence</span><strong>${projectSourceCount}</strong></div>
          <div class="stat"><span>Decisions</span><strong>${activeProject.decisions.length}</strong></div>
          <div class="stat"><span>Open Actions</span><strong>${activeProject.openActions}</strong></div>
          <div class="stat"><span>Importance</span><strong>${activeProject.importance.label}</strong></div>
          <div class="stat"><span>Latest</span><strong>${formatShortDate(activeProject.latestActivity)}</strong></div>
        </aside>
      </section>

      <section class="project-evidence">
        <header>
          <div>
            <p class="eyebrow">Project evidence</p>
            <h3>Source trail</h3>
          </div>
        </header>
        <div class="source-list compact">
          ${activeProject.sources
            .map(
              (source) => `
              <article class="source-card">
                <header>
                  <div>
                    <p class="eyebrow">${SOURCE_LABELS[source.type]} / ${escapeHtml(source.location)}</p>
                    <h3>${escapeHtml(source.title)}</h3>
                  </div>
                  <span class="tier-badge">${capitalize(source.tier)}</span>
                </header>
                <p>${escapeHtml(source.summary)}</p>
                <div class="button-row">
                  <button class="small-button" type="button" data-source="${source.id}">Open source</button>
                </div>
              </article>
            `
            )
            .join("")}
        </div>
      </section>
    </div>
  `;
}

function renderSummary() {
  const dashboard = state.dashboard;
  return `
    <div class="summary-grid">
      ${dashboard.themes
        .map(
          (theme, index) => `
          <article class="theme-card">
            <header>
              <div>
                <p class="eyebrow">Theme ${index + 1}</p>
                <h3>${escapeHtml(theme.label)}</h3>
              </div>
              <div class="badge-stack">
                <span class="status-badge">${theme.confidence}</span>
                <span class="importance-badge">${theme.importance.label}</span>
              </div>
            </header>
            <p>${escapeHtml(theme.summary)}</p>
            <div class="theme-stats">
              <div class="stat"><span>Sources</span><strong>${theme.sources.length}</strong></div>
              <div class="stat"><span>Trend</span><strong>${theme.trend}</strong></div>
              <div class="stat"><span>Open</span><strong>${theme.actionCount}</strong></div>
              <div class="stat"><span>Importance</span><strong>${theme.importance.label}</strong></div>
            </div>
            <p class="importance-note"><strong>Mock LLM judge:</strong> ${escapeHtml(theme.importance.reasons.slice(0, 2).join("; "))}.</p>
            <div class="button-row">
              ${theme.sources
                .slice(0, 3)
                .map((source) => `<button class="small-button" type="button" data-source="${source.id}">${SOURCE_LABELS[source.type]}: ${escapeHtml(shortTitle(source.title))}</button>`)
                .join("")}
            </div>
          </article>
        `
        )
        .join("")}
    </div>
  `;
}

function renderDetails() {
  return `
    <div class="detail-list">
      ${state.dashboard.themes
        .map(
          (theme) => `
          <article class="detail-card">
            <header>
              <div>
                <p class="eyebrow">${theme.sources.length} sources, ${theme.chunks.length} chunks</p>
                <h3>${escapeHtml(theme.label)}</h3>
              </div>
              <div class="badge-stack">
                <span class="status-badge">${theme.trend}</span>
                <span class="importance-badge">${theme.importance.label}</span>
              </div>
            </header>
            <p><strong>Why it matters:</strong> ${escapeHtml(theme.why)}</p>
            <p><strong>Importance judgment:</strong> ${escapeHtml(theme.importance.reasons.join("; "))}.</p>
            <p class="source-quote">${escapeHtml(bestSnippet(theme))}</p>
            <div class="meta-line">
              ${unique(theme.sources.flatMap((source) => source.people))
                .slice(0, 8)
                .map((person) => `<span class="pill">${escapeHtml(person)}</span>`)
                .join("")}
            </div>
            <div class="button-row">
              ${theme.sources
                .map((source) => `<button class="small-button" type="button" data-source="${source.id}">${SOURCE_LABELS[source.type]}: ${escapeHtml(source.title)}</button>`)
                .join("")}
            </div>
          </article>
        `
        )
        .join("")}
    </div>
  `;
}

function renderEvidence() {
  const evidence = state.dashboard.themes.flatMap((theme) =>
    theme.chunks.slice(0, 4).map((chunk) => ({
      ...chunk,
      themeLabel: theme.label,
      source: state.dashboard.sources.find((source) => source.id === chunk.sourceId),
    }))
  );
  return `
    <div class="evidence-list">
      ${evidence
        .map(
          (item) => `
          <article class="evidence-card">
            <div class="meta-line">
              <span class="pill">${escapeHtml(item.themeLabel)}</span>
              <span class="pill">${SOURCE_LABELS[item.sourceType]}</span>
              <span class="pill">${escapeHtml(item.date)}</span>
              <span class="pill">${capitalize(item.tier)}</span>
            </div>
            <blockquote>${highlightKeywords(escapeHtml(item.text), THEMES[item.themes[0]]?.keywords || [])}</blockquote>
            <div class="button-row">
              <button class="small-button" type="button" data-source="${item.sourceId}">Open source</button>
            </div>
          </article>
        `
        )
        .join("")}
    </div>
  `;
}

function renderTimeline() {
  const events = state.dashboard.sources
    .flatMap((source) => [
      {
        date: source.date,
        title: source.title,
        body: source.summary,
        source,
        kind: "Source",
      },
      ...source.decisions.map((decision) => ({
        date: decision.date,
        title: "Decision",
        body: decision.text,
        source,
        kind: decision.status,
      })),
    ])
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  return `
    <div class="timeline-list">
      ${events
        .map(
          (event) => `
          <article class="timeline-card">
            <div class="timeline-date">${formatDate(event.date)}</div>
            <div>
              <div class="meta-line">
                <span class="pill">${escapeHtml(event.kind)}</span>
                <span class="pill">${SOURCE_LABELS[event.source.type]}</span>
              </div>
              <h3>${escapeHtml(event.title)}</h3>
              <p>${escapeHtml(event.body)}</p>
              <div class="button-row">
                <button class="small-button" type="button" data-source="${event.source.id}">Open source</button>
              </div>
            </div>
          </article>
        `
        )
        .join("")}
    </div>
  `;
}

function renderDecisions() {
  return `
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Decision</th>
            <th>Date</th>
            <th>Owner</th>
            <th>Status</th>
            <th>Source</th>
          </tr>
        </thead>
        <tbody>
          ${state.dashboard.decisions
            .map(
              (decision) => `
              <tr>
                <td>${escapeHtml(decision.text)}</td>
                <td>${formatDate(decision.date)}</td>
                <td>${escapeHtml(decision.owner)}</td>
                <td><span class="status-badge">${escapeHtml(decision.status)}</span></td>
                <td><button class="small-button" type="button" data-source="${decision.sourceId}">${escapeHtml(decision.sourceTitle)}</button></td>
              </tr>
            `
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderActions() {
  return `
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Action</th>
            <th>Owner</th>
            <th>Due</th>
            <th>Status</th>
            <th>Source</th>
          </tr>
        </thead>
        <tbody>
          ${state.dashboard.actions
            .map(
              (action) => `
              <tr>
                <td>${escapeHtml(action.text)}</td>
                <td>${escapeHtml(action.owner)}</td>
                <td>${formatDate(action.due)}</td>
                <td><span class="status-badge">${escapeHtml(action.status)}</span></td>
                <td><button class="small-button" type="button" data-source="${action.sourceId}">${escapeHtml(action.sourceTitle)}</button></td>
              </tr>
            `
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderGaps() {
  const gaps = [];
  state.dashboard.themes.forEach((theme) => {
    if (theme.confidence === "Low") {
      gaps.push({
        title: `${theme.label} has thin evidence`,
        body: "This theme is supported by one source in the current query window. Treat it as a lead rather than a conclusion.",
      });
    }
    const sourceTypes = new Set(theme.sources.map((source) => source.type));
    if (!sourceTypes.has("email")) {
      gaps.push({
        title: `${theme.label} has limited email evidence`,
        body: "The source set is weighted toward chats and documents. Customer-facing or leadership email context may change the interpretation.",
      });
    }
  });
  const coldCount = state.dashboard.sources.filter((source) => source.tier === "cold").length;
  if (coldCount) {
    gaps.push({
      title: `${coldCount} cold source ${coldCount === 1 ? "object is" : "objects are"} represented by stubs`,
      body: "The dashboard can find these items, but the full source body may need hydration before detailed inspection.",
    });
  }
  if (!gaps.length) {
    gaps.push({
      title: "No major source gaps detected",
      body: "The current source set has multiple systems, recent activity, and enough evidence for a POC-level summary.",
    });
  }

  return `
    <div class="gap-list">
      ${gaps
        .map(
          (gap) => `
          <article class="gap-card">
            <h3>${escapeHtml(gap.title)}</h3>
            <p>${escapeHtml(gap.body)}</p>
          </article>
        `
        )
        .join("")}
    </div>
  `;
}

function renderSources() {
  return `
    <div class="source-list">
      ${state.dashboard.sources
        .map(
          (source) => `
          <article class="source-card">
            <header>
              <div>
                <p class="eyebrow">${SOURCE_LABELS[source.type]} / ${escapeHtml(source.location)}</p>
                <h3>${escapeHtml(source.title)}</h3>
              </div>
              <span class="tier-badge">${capitalize(source.tier)}</span>
            </header>
            <p>${escapeHtml(source.summary)}</p>
            <div class="meta-line">
              <span class="pill">${formatDate(source.date)}</span>
              <span class="pill">${escapeHtml(source.author)}</span>
              ${source.themes.map((theme) => `<span class="pill">${escapeHtml(THEMES[theme].label)}</span>`).join("")}
            </div>
            <div class="button-row">
              <button class="small-button" type="button" data-source="${source.id}">Open source</button>
            </div>
          </article>
        `
        )
        .join("")}
    </div>
  `;
}

function renderPreview() {
  const source = state.dashboard?.sources.find((candidate) => candidate.id === state.selectedSourceId);
  if (!source) {
    els.previewTitle.textContent = "Select evidence";
    els.previewTier.textContent = "idle";
    els.previewMeta.innerHTML = "";
    els.previewBody.innerHTML = `<p class="empty-state">Open a citation, source, decision, or action to inspect the underlying material.</p>`;
    return;
  }

  els.previewTitle.textContent = source.title;
  els.previewTier.textContent = state.hydratedSources.has(source.id) || source.tier !== "cold" ? capitalize(source.tier) : "Cold stub";
  els.previewMeta.innerHTML = `
    <span class="pill">${SOURCE_LABELS[source.type]}</span>
    <span class="pill">${escapeHtml(source.location)}</span>
    <span class="pill">${formatDate(source.lastActivity)}</span>
  `;

  if (source.tier === "cold" && !state.hydratedSources.has(source.id)) {
    els.previewBody.innerHTML = `
      <p><strong>Summary available now.</strong></p>
      <p>${escapeHtml(source.summary)}</p>
      <div class="meta-line">
        ${source.themes.map((theme) => `<span class="pill">${escapeHtml(THEMES[theme].label)}</span>`).join("")}
      </div>
      <div class="button-row">
        <button id="hydrateButton" class="primary-button" type="button">Hydrate full source</button>
      </div>
    `;
    return;
  }

  els.previewBody.innerHTML = renderSourceBody(source);
}

function renderSourceBody(source) {
  if (source.type === "slack" || source.type === "teams") {
    return source.content
      .map(
        (item) => `
        <div class="chat-line">
          <div class="chat-author">${escapeHtml(item.author)}</div>
          <div class="chat-time">${escapeHtml(item.time)}</div>
          <p>${highlightKnownTerms(escapeHtml(item.text), source.themes)}</p>
        </div>
      `
      )
      .join("");
  }

  if (source.type === "email") {
    return source.content
      .map(
        (item) => `
        <div class="email-render">
          <div class="email-heading">${escapeHtml(item.author)}</div>
          <div class="email-sub">${escapeHtml(item.time)}</div>
          <p>${highlightKnownTerms(escapeHtml(item.text), source.themes)}</p>
        </div>
      `
      )
      .join("");
  }

  return source.content
    .map(
      (item) => `
      <div class="doc-render">
        <div class="doc-heading">${escapeHtml(item.heading)}</div>
        <div class="doc-sub">${escapeHtml(source.title)}</div>
        <p>${highlightKnownTerms(escapeHtml(item.text), source.themes)}</p>
      </div>
    `
    )
    .join("");
}

function bestSnippet(theme) {
  const chunk = theme.chunks
    .slice()
    .sort((a, b) => countKeywordHits(b.text, theme.keywords) - countKeywordHits(a.text, theme.keywords))[0];
  return chunk ? chunk.text : "No supporting snippet found.";
}

function countKeywordHits(text, keywords) {
  const normalized = normalizeText(text);
  return keywords.reduce((count, keyword) => count + (normalized.includes(keyword) ? 1 : 0), 0);
}

function highlightKnownTerms(html, themes) {
  const keywords = unique(themes.flatMap((themeId) => THEMES[themeId]?.keywords || []));
  return highlightKeywords(html, keywords);
}

function highlightKeywords(html, keywords) {
  return keywords.slice(0, 7).reduce((result, keyword) => {
    const regex = new RegExp(`\\b(${escapeRegExp(keyword)})\\b`, "gi");
    return result.replace(regex, '<span class="highlight">$1</span>');
  }, html);
}

function unique(values) {
  return Array.from(new Set(values));
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, Math.round(value)));
}

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function shortTitle(title) {
  return title.length > 28 ? `${title.slice(0, 25)}...` : title;
}

function customerHealthNarrative(customer) {
  const latest = customer.latestActivity ? formatDate(customer.latestActivity) : "No recent activity";
  return `${customer.health} across ${customer.projects.length} active project${customer.projects.length === 1 ? "" : "s"}, with ${customer.openActions} open action${customer.openActions === 1 ? "" : "s"} and latest source activity on ${latest}.`;
}

function formatDate(dateString) {
  if (!dateString) return "No date";
  return new Date(`${dateString}T12:00:00-07:00`).toLocaleDateString([], {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function formatShortDate(dateString) {
  if (!dateString) return "n/a";
  return new Date(`${dateString}T12:00:00-07:00`).toLocaleDateString([], {
    month: "short",
    day: "numeric",
  });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("visible");
  window.setTimeout(() => els.toast.classList.remove("visible"), 1800);
}

els.generateButton.addEventListener("click", buildDashboard);
els.refreshButton.addEventListener("click", () => {
  buildDashboard();
  showToast("Dashboard refreshed from source set");
});
els.saveButton.addEventListener("click", () => {
  showToast("Saved dashboard snapshot locally");
});
els.tabs.addEventListener("click", (event) => {
  const button = event.target.closest("[data-tab]");
  if (!button) return;
  state.activeTab = button.dataset.tab;
  renderTabs();
  renderActiveTab();
});
els.tabContent.addEventListener("click", (event) => {
  const customerButton = event.target.closest("[data-customer]");
  if (customerButton) {
    state.activeCustomerId = customerButton.dataset.customer;
    const activeCustomer = state.dashboard.customers.find((customer) => customer.id === state.activeCustomerId);
    state.activeProjectId = activeCustomer?.projects[0]?.id || null;
    renderActiveTab();
    return;
  }

  const projectButton = event.target.closest("[data-project]");
  if (projectButton) {
    state.activeProjectId = projectButton.dataset.project;
    renderActiveTab();
    return;
  }

  const button = event.target.closest("[data-source]");
  if (!button) return;
  state.selectedSourceId = button.dataset.source;
  renderPreview();
});
els.previewBody.addEventListener("click", (event) => {
  if (event.target.id !== "hydrateButton") return;
  state.hydratedSources.add(state.selectedSourceId);
  renderPreview();
  showToast("Cold source hydrated");
});

buildDashboard();

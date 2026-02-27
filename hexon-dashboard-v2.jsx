import { useState } from "react";

const HexIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 2l8.66 5v10L12 22l-8.66-5V7z" />
  </svg>
);

const securityLevels = {
  open: { label: "Open", color: "#74D4A5", icon: "🌐", desc: "Any connected AI or agent can access" },
  restricted: { label: "Restricted", color: "#D4A574", icon: "🔒", desc: "Only approved apps can access" },
  confidential: { label: "Private & Confidential", color: "#D47474", icon: "🔐", desc: "Locked — manual unlock only" },
};

const memories = {
  personal: [
    { id: 1, title: "Name & Identity", content: "Based in London, enjoys travel, values self-reliance and authenticity", updated: "2 hours ago", pinned: true, security: "open" },
    { id: 2, title: "Pets", content: "Has cats, they're an important part of daily life and routine", updated: "1 day ago", pinned: false, security: "open" },
    { id: 3, title: "Family Situation", content: "Single parent, manages parent care responsibilities", updated: "3 days ago", pinned: false, security: "restricted" },
  ],
  work: [
    { id: 4, title: "Career Background", content: "20+ years professional experience, qualified fitness nutritionist, building automation systems", updated: "5 hours ago", pinned: true, security: "open" },
    { id: 5, title: "Social Media Accounts", content: "Manages 10+ accounts across Twitter, Instagram, TikTok, YouTube, Facebook, BlueSky, Pinterest, Reddit, LinkedIn, Telegram", updated: "1 day ago", pinned: false, security: "open" },
    { id: 6, title: "Current Projects", content: "Website launch, automation platform integration, content strategy development", updated: "6 hours ago", pinned: false, security: "restricted" },
  ],
  preferences: [
    { id: 7, title: "Communication Style", content: "Prefers simple explanations, everyday examples, step-by-step guidance. No jargon.", updated: "1 day ago", pinned: true, security: "open" },
    { id: 8, title: "Emoji Preferences", content: "Specific approved emoji set for professional accounts. No suggestive emojis on SFW platforms.", updated: "4 days ago", pinned: false, security: "open" },
    { id: 9, title: "Tone Guidelines", content: "Keep professional accounts warm and authentic. Direct but kind.", updated: "2 days ago", pinned: false, security: "open" },
  ],
  health: [
    { id: 10, title: "Fitness Background", content: "Competition background, qualified nutritionist, passionate about health and wellness", updated: "1 week ago", pinned: false, security: "open" },
    { id: 11, title: "Medical History", content: "GP: Dr. Patel — full medical history and ongoing treatment details", updated: "2 weeks ago", pinned: true, security: "confidential" },
    { id: 12, title: "Mental Health Notes", content: "Personal therapy reflections and coping strategies", updated: "5 days ago", pinned: false, security: "confidential" },
  ],
  financial: [
    { id: 13, title: "Income Streams", content: "Multiple revenue sources across content platforms and services", updated: "1 day ago", pinned: true, security: "restricted" },
    { id: 14, title: "Bank & Tax Details", content: "Account details, tax reference numbers, accountant contact information", updated: "1 month ago", pinned: true, security: "confidential" },
  ],
  goals: [
    { id: 15, title: "Long-term Vision", content: "Transition to fully sustainable safe-for-work content. Build automation to scale independently.", updated: "3 days ago", pinned: true, security: "open" },
    { id: 16, title: "Hexon", content: "Building open source personal AI memory layer for every human being on earth.", updated: "Just now", pinned: true, security: "open" },
  ],
};

const categories = [
  { key: "personal", label: "Personal", icon: "👤", count: 3 },
  { key: "work", label: "Work", icon: "💼", count: 3 },
  { key: "preferences", label: "Preferences", icon: "⚙️", count: 3 },
  { key: "health", label: "Health", icon: "💚", count: 3 },
  { key: "financial", label: "Financial", icon: "💰", count: 2 },
  { key: "goals", label: "Goals", icon: "🎯", count: 2 },
];

const connectedAIs = [
  { name: "Claude", status: "connected", color: "#D4A574", messages: 1247 },
  { name: "ChatGPT", status: "connected", color: "#74D4A5", messages: 83 },
  { name: "Gemini", status: "disconnected", color: "#7474D4", messages: 0 },
];

const connectedApps = [
  { name: "OpenClaw", type: "AI Agent", status: "connected", color: "#A574D4", access: ["preferences", "work"], lastUsed: "2 hours ago", memoryReads: 342 },
  { name: "Cowork", type: "Desktop Agent", status: "connected", color: "#74A5D4", access: ["work", "financial"], lastUsed: "5 min ago", memoryReads: 1089 },
  { name: "Health Tracker Pro", type: "Health App", status: "connected", color: "#74D4A5", access: ["health"], lastUsed: "Yesterday", memoryReads: 56 },
  { name: "SmartHome AI", type: "Home Assistant", status: "pending", color: "#D4D474", access: [], lastUsed: "Never", memoryReads: 0 },
];

const trustedAccess = [
  { name: "Mum", role: "Family", access: "Emergency only", active: true },
  { name: "Dr. Patel", role: "GP", access: "Medical memories", active: true },
];

const activityLog = [
  { action: "Learned", detail: "Updated work projects with Hexon PRD details", time: "Just now", type: "learn" },
  { action: "Injected", detail: "15 memories into Claude conversation", time: "2 min ago", type: "inject" },
  { action: "App read", detail: "Cowork accessed 3 work memories", time: "5 min ago", type: "app" },
  { action: "Learned", detail: "New preference: explain concepts simply", time: "1 hour ago", type: "learn" },
  { action: "Blocked", detail: "OpenClaw tried to access financial — denied", time: "2 hours ago", type: "blocked" },
  { action: "Injected", detail: "8 memories into ChatGPT conversation", time: "3 hours ago", type: "inject" },
];

const accessLog = [
  { app: "Cowork", category: "Work", memories: 3, time: "5 min ago", level: "restricted" },
  { app: "OpenClaw", category: "Financial", memories: 0, time: "2 hours ago", level: "blocked" },
  { app: "Claude (Bridge)", category: "Preferences", memories: 8, time: "3 hours ago", level: "open" },
  { app: "Health Tracker Pro", category: "Health (Open)", memories: 1, time: "Yesterday", level: "open" },
  { app: "Claude (Bridge)", category: "Goals", memories: 2, time: "Yesterday", level: "open" },
];

export default function HexonDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [activeCategory, setActiveCategory] = useState("personal");
  const [searchQuery, setSearchQuery] = useState("");
  const [editingMemory, setEditingMemory] = useState(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(null);
  const [securityFilter, setSecurityFilter] = useState("all");
  const [confidentialUnlocked, setConfidentialUnlocked] = useState(false);
  const [pinEntry, setPinEntry] = useState("");
  const [showPinModal, setShowPinModal] = useState(false);
  const [expandedApp, setExpandedApp] = useState(null);

  const totalMemories = Object.values(memories).flat().length;
  const confidentialCount = Object.values(memories).flat().filter(m => m.security === "confidential").length;
  const restrictedCount = Object.values(memories).flat().filter(m => m.security === "restricted").length;

  const filteredMemories = (() => {
    let mems = searchQuery
      ? Object.values(memories).flat().filter(m =>
          m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          m.content.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : memories[activeCategory] || [];

    if (securityFilter !== "all") {
      mems = mems.filter(m => m.security === securityFilter);
    }

    return mems.map(m => {
      if (m.security === "confidential" && !confidentialUnlocked) {
        return { ...m, content: "🔐 This memory is locked. Enter PIN to view.", locked: true };
      }
      return { ...m, locked: false };
    });
  })();

  const SecurityBadge = ({ level, small = false }) => {
    const sec = securityLevels[level];
    return (
      <span style={{
        display: "inline-flex", alignItems: "center", gap: 4,
        fontSize: small ? 10 : 11, fontWeight: 600,
        color: sec.color,
        background: `${sec.color}15`,
        padding: small ? "2px 6px" : "3px 8px",
        borderRadius: 12,
        border: `1px solid ${sec.color}30`,
      }}>
        {sec.icon} {sec.label}
      </span>
    );
  };

  const PinModal = () => (
    <div style={{
      position: "fixed", inset: 0, background: "rgba(0,0,0,0.8)",
      display: "flex", alignItems: "center", justifyContent: "center",
      zIndex: 1000, backdropFilter: "blur(10px)",
    }}>
      <div style={{
        background: "#16161e", borderRadius: 16, padding: 32,
        border: "1px solid rgba(212,116,116,0.2)",
        width: 340, textAlign: "center",
      }}>
        <div style={{ fontSize: 40, marginBottom: 12 }}>🔐</div>
        <div style={{ fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 6 }}>
          Private & Confidential
        </div>
        <div style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginBottom: 24 }}>
          Enter your PIN to unlock confidential memories for this session
        </div>
        <div style={{ display: "flex", gap: 8, justifyContent: "center", marginBottom: 20 }}>
          {[0,1,2,3].map(i => (
            <div key={i} style={{
              width: 44, height: 50, borderRadius: 10,
              background: "rgba(255,255,255,0.06)",
              border: `1px solid ${pinEntry.length > i ? "#D47474" : "rgba(255,255,255,0.1)"}`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 22, color: "#fff", fontWeight: 700,
            }}>
              {pinEntry.length > i ? "●" : ""}
            </div>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, maxWidth: 220, margin: "0 auto 16px" }}>
          {[1,2,3,4,5,6,7,8,9,"",0,"⌫"].map((num, i) => (
            <button
              key={i}
              onClick={() => {
                if (num === "⌫") setPinEntry(p => p.slice(0, -1));
                else if (num !== "" && pinEntry.length < 4) {
                  const newPin = pinEntry + num;
                  setPinEntry(newPin);
                  if (newPin.length === 4) {
                    setTimeout(() => {
                      setConfidentialUnlocked(true);
                      setShowPinModal(false);
                      setPinEntry("");
                    }, 300);
                  }
                }
              }}
              style={{
                width: 56, height: 44, borderRadius: 10,
                background: num === "" ? "transparent" : "rgba(255,255,255,0.06)",
                border: num === "" ? "none" : "1px solid rgba(255,255,255,0.08)",
                color: "#fff", fontSize: 18, fontWeight: 500,
                cursor: num === "" ? "default" : "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >
              {num}
            </button>
          ))}
        </div>
        <button
          onClick={() => { setShowPinModal(false); setPinEntry(""); }}
          style={{
            background: "none", border: "none", color: "rgba(255,255,255,0.3)",
            fontSize: 13, cursor: "pointer", marginTop: 8,
          }}
        >Cancel</button>
      </div>
    </div>
  );

  const renderDashboard = () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      {/* Hero Stats */}
      <div style={{
        background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
        borderRadius: 16, padding: "32px 28px",
        border: "1px solid rgba(212,165,116,0.15)",
        position: "relative", overflow: "hidden"
      }}>
        <div style={{ position: "absolute", top: -30, right: -30, opacity: 0.05, fontSize: 200, lineHeight: 1 }}>⬡</div>
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ fontSize: 14, color: "#D4A574", fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>
            Your Memory Vault
          </div>
          <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 4 }}>
            <span style={{ fontSize: 56, fontWeight: 700, color: "#fff", fontFamily: "'Playfair Display', Georgia, serif" }}>
              {totalMemories}
            </span>
            <span style={{ fontSize: 18, color: "rgba(255,255,255,0.5)" }}>memories stored</span>
          </div>
          <div style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", marginBottom: 24 }}>
            Across {categories.length} categories · {confidentialCount} confidential · {restrictedCount} restricted
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {[
              { label: "Conversations analysed", value: "1,330" },
              { label: "Memories injected today", value: "23" },
              { label: "AIs connected", value: "2" },
              { label: "Apps connected", value: "3" },
            ].map((stat, i) => (
              <div key={i} style={{
                background: "rgba(255,255,255,0.06)", borderRadius: 10,
                padding: "12px 16px", minWidth: 120, flex: "1 1 120px",
              }}>
                <div style={{ fontSize: 22, fontWeight: 700, color: "#D4A574" }}>{stat.value}</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", marginTop: 2 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Security Overview */}
      <div style={{
        background: "#12121a", borderRadius: 14, padding: 20,
        border: "1px solid rgba(255,255,255,0.06)"
      }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: "#D4A574", letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
          Security Levels
        </div>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {Object.entries(securityLevels).map(([key, level]) => {
            const count = Object.values(memories).flat().filter(m => m.security === key).length;
            return (
              <div key={key} style={{
                flex: "1 1 160px", padding: "14px 16px",
                background: `${level.color}08`, borderRadius: 12,
                border: `1px solid ${level.color}20`,
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                  <span style={{ fontSize: 20 }}>{level.icon}</span>
                  <span style={{ fontSize: 14, fontWeight: 600, color: level.color }}>{level.label}</span>
                </div>
                <div style={{ fontSize: 24, fontWeight: 700, color: "#fff", marginBottom: 2 }}>{count}</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)" }}>{level.desc}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Activity + AI Status Row */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        {/* Recent Activity */}
        <div style={{
          background: "#12121a", borderRadius: 14, padding: 20,
          border: "1px solid rgba(255,255,255,0.06)"
        }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: "#D4A574", letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            Recent Activity
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {activityLog.map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <div style={{
                  width: 8, height: 8, borderRadius: "50%", marginTop: 5, flexShrink: 0,
                  background: item.type === "learn" ? "#D4A574" : item.type === "inject" ? "#74D4A5" : item.type === "blocked" ? "#D47474" : "#A574D4"
                }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,0.8)" }}>
                    <span style={{ fontWeight: 600, color: item.type === "blocked" ? "#D47474" : "#fff" }}>{item.action}</span> {item.detail}
                  </div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", marginTop: 2 }}>{item.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Connected AIs */}
        <div style={{
          background: "#12121a", borderRadius: 14, padding: 20,
          border: "1px solid rgba(255,255,255,0.06)"
        }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: "#D4A574", letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
            Connected AIs
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {connectedAIs.map((ai, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                background: "rgba(255,255,255,0.03)", borderRadius: 10, padding: "12px 14px",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: 8,
                    background: `${ai.color}20`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 14, fontWeight: 700, color: ai.color
                  }}>{ai.name[0]}</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "#fff" }}>{ai.name}</div>
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)" }}>
                      {ai.messages > 0 ? `${ai.messages} conversations` : "Not yet connected"}
                    </div>
                  </div>
                </div>
                <div style={{
                  fontSize: 11, fontWeight: 600,
                  color: ai.status === "connected" ? "#74D4A5" : "rgba(255,255,255,0.25)",
                  background: ai.status === "connected" ? "rgba(116,212,165,0.1)" : "rgba(255,255,255,0.04)",
                  padding: "4px 10px", borderRadius: 20,
                }}>
                  {ai.status === "connected" ? "● Connected" : "○ Connect"}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Category Overview */}
      <div style={{
        background: "#12121a", borderRadius: 14, padding: 20,
        border: "1px solid rgba(255,255,255,0.06)"
      }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: "#D4A574", letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
          Memory Categories
        </div>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {categories.map((cat) => (
            <button key={cat.key}
              onClick={() => { setActiveCategory(cat.key); setActiveTab("memories"); }}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 10, padding: "14px 18px", cursor: "pointer",
                display: "flex", alignItems: "center", gap: 10,
                transition: "all 0.2s", flex: "1 1 140px",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(212,165,116,0.08)"; e.currentTarget.style.borderColor = "rgba(212,165,116,0.2)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.04)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
            >
              <span style={{ fontSize: 22 }}>{cat.icon}</span>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#fff" }}>{cat.label}</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)" }}>{cat.count} memories</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const renderMemories = () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {/* Search */}
      <div style={{
        background: "#12121a", borderRadius: 12, padding: "12px 16px",
        border: "1px solid rgba(255,255,255,0.06)",
        display: "flex", alignItems: "center", gap: 10,
      }}>
        <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 18 }}>🔍</span>
        <input type="text" placeholder="Search all memories..."
          value={searchQuery} onChange={e => setSearchQuery(e.target.value)}
          style={{
            background: "none", border: "none", outline: "none",
            color: "#fff", fontSize: 15, flex: 1, fontFamily: "inherit",
          }}
        />
        {searchQuery && (
          <button onClick={() => setSearchQuery("")}
            style={{ background: "none", border: "none", color: "rgba(255,255,255,0.3)", cursor: "pointer", fontSize: 14 }}>✕</button>
        )}
      </div>

      {/* Security filter + Confidential unlock */}
      <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
        {["all", "open", "restricted", "confidential"].map(level => (
          <button key={level}
            onClick={() => {
              if (level === "confidential" && !confidentialUnlocked) {
                setShowPinModal(true);
                setSecurityFilter(level);
              } else {
                setSecurityFilter(level);
              }
            }}
            style={{
              padding: "6px 12px", borderRadius: 16, fontSize: 11, fontWeight: 600,
              cursor: "pointer", border: "1px solid",
              borderColor: securityFilter === level
                ? (level === "all" ? "#D4A574" : securityLevels[level]?.color || "#D4A574")
                : "rgba(255,255,255,0.08)",
              background: securityFilter === level
                ? `${level === "all" ? "#D4A574" : securityLevels[level]?.color || "#D4A574"}15`
                : "transparent",
              color: securityFilter === level
                ? (level === "all" ? "#D4A574" : securityLevels[level]?.color || "#D4A574")
                : "rgba(255,255,255,0.4)",
            }}
          >
            {level === "all" ? "All" : securityLevels[level]?.icon + " " + securityLevels[level]?.label}
          </button>
        ))}
        {confidentialUnlocked && (
          <button onClick={() => setConfidentialUnlocked(false)}
            style={{
              marginLeft: "auto", padding: "6px 12px", borderRadius: 16,
              fontSize: 11, fontWeight: 600, cursor: "pointer",
              border: "1px solid rgba(212,116,116,0.3)",
              background: "rgba(212,116,116,0.1)", color: "#D47474",
            }}
          >🔐 Lock confidential</button>
        )}
      </div>

      {/* Category tabs */}
      {!searchQuery && (
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {categories.map(cat => (
            <button key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              style={{
                padding: "8px 16px", borderRadius: 20,
                border: "1px solid",
                borderColor: activeCategory === cat.key ? "#D4A574" : "rgba(255,255,255,0.1)",
                background: activeCategory === cat.key ? "rgba(212,165,116,0.15)" : "transparent",
                color: activeCategory === cat.key ? "#D4A574" : "rgba(255,255,255,0.5)",
                fontSize: 13, fontWeight: 500, cursor: "pointer", transition: "all 0.2s",
              }}
            >{cat.icon} {cat.label}</button>
          ))}
        </div>
      )}

      {/* Memory cards */}
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {searchQuery && (
          <div style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginBottom: 4 }}>
            {filteredMemories.length} result{filteredMemories.length !== 1 ? "s" : ""} for "{searchQuery}"
          </div>
        )}
        {filteredMemories.map(memory => (
          <div key={memory.id} style={{
            background: memory.locked ? "rgba(212,116,116,0.03)" : "#12121a",
            borderRadius: 12, padding: 18,
            border: editingMemory === memory.id ? "1px solid #D4A574"
              : memory.locked ? "1px solid rgba(212,116,116,0.1)"
              : "1px solid rgba(255,255,255,0.06)",
            transition: "all 0.2s",
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                {memory.pinned && <span style={{ fontSize: 11, color: "#D4A574" }}>📌</span>}
                <span style={{ fontSize: 15, fontWeight: 600, color: memory.locked ? "rgba(255,255,255,0.4)" : "#fff" }}>{memory.title}</span>
                <SecurityBadge level={memory.security} small />
              </div>
              {!memory.locked && (
                <div style={{ display: "flex", gap: 6 }}>
                  <button onClick={() => setEditingMemory(editingMemory === memory.id ? null : memory.id)}
                    style={{
                      background: "rgba(255,255,255,0.05)", border: "none",
                      borderRadius: 6, padding: "4px 10px", fontSize: 11,
                      color: "rgba(255,255,255,0.4)", cursor: "pointer",
                    }}>✏️ Edit</button>
                  <button onClick={() => setShowDeleteConfirm(showDeleteConfirm === memory.id ? null : memory.id)}
                    style={{
                      background: "rgba(255,80,80,0.05)", border: "none",
                      borderRadius: 6, padding: "4px 10px", fontSize: 11,
                      color: "rgba(255,80,80,0.5)", cursor: "pointer",
                    }}>🗑️</button>
                </div>
              )}
            </div>
            {memory.locked ? (
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.3)", fontStyle: "italic", flex: 1 }}>
                  {memory.content}
                </div>
                <button onClick={() => setShowPinModal(true)}
                  style={{
                    padding: "6px 14px", borderRadius: 8, fontSize: 12,
                    background: "rgba(212,116,116,0.1)", border: "1px solid rgba(212,116,116,0.2)",
                    color: "#D47474", cursor: "pointer", fontWeight: 600, whiteSpace: "nowrap",
                  }}>Unlock</button>
              </div>
            ) : editingMemory === memory.id ? (
              <div>
                <textarea defaultValue={memory.content}
                  style={{
                    width: "100%", minHeight: 60, background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(212,165,116,0.2)", borderRadius: 8,
                    color: "#fff", fontSize: 13, padding: 10, fontFamily: "inherit",
                    resize: "vertical", outline: "none", boxSizing: "border-box",
                  }}
                />
                <div style={{ display: "flex", gap: 8, marginTop: 8, alignItems: "center" }}>
                  <button style={{
                    background: "#D4A574", border: "none", borderRadius: 6,
                    padding: "6px 16px", fontSize: 12, color: "#0a0a10", fontWeight: 600, cursor: "pointer",
                  }}>Save</button>
                  <button onClick={() => setEditingMemory(null)}
                    style={{
                      background: "rgba(255,255,255,0.06)", border: "none", borderRadius: 6,
                      padding: "6px 16px", fontSize: 12, color: "rgba(255,255,255,0.5)", cursor: "pointer",
                    }}>Cancel</button>
                  <select style={{
                    marginLeft: "auto", background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)", borderRadius: 6,
                    padding: "5px 8px", fontSize: 11, color: "rgba(255,255,255,0.6)",
                    outline: "none",
                  }}>
                    <option>🌐 Open</option>
                    <option>🔒 Restricted</option>
                    <option>🔐 Confidential</option>
                  </select>
                </div>
              </div>
            ) : (
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.5 }}>
                {memory.content}
              </div>
            )}
            {showDeleteConfirm === memory.id && (
              <div style={{
                marginTop: 10, padding: 12, background: "rgba(255,80,80,0.06)",
                borderRadius: 8, border: "1px solid rgba(255,80,80,0.15)",
              }}>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", marginBottom: 8 }}>
                  Delete this memory permanently?
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  <button style={{
                    background: "rgba(255,80,80,0.8)", border: "none", borderRadius: 6,
                    padding: "6px 14px", fontSize: 12, color: "#fff", fontWeight: 600, cursor: "pointer",
                  }}>Yes, delete</button>
                  <button onClick={() => setShowDeleteConfirm(null)}
                    style={{
                      background: "rgba(255,255,255,0.06)", border: "none", borderRadius: 6,
                      padding: "6px 14px", fontSize: 12, color: "rgba(255,255,255,0.5)", cursor: "pointer",
                    }}>Cancel</button>
                </div>
              </div>
            )}
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.2)", marginTop: 8 }}>
              Updated {memory.updated}
            </div>
          </div>
        ))}
      </div>

      <button style={{
        padding: "14px", background: "rgba(212,165,116,0.08)",
        border: "1px dashed rgba(212,165,116,0.3)",
        borderRadius: 12, color: "#D4A574", fontSize: 14, cursor: "pointer", fontWeight: 500,
      }}>+ Add a memory manually</button>
    </div>
  );

  const renderApps = () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {/* Intro */}
      <div style={{
        background: "linear-gradient(135deg, #1a1a2e 0%, #1e1a2e 100%)",
        borderRadius: 14, padding: 20,
        border: "1px solid rgba(165,116,212,0.15)",
      }}>
        <div style={{ fontSize: 15, fontWeight: 600, color: "#fff", marginBottom: 6 }}>
          🔌 App Connections
        </div>
        <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.5 }}>
          Any AI agent, app, or service can plug into your Hexon memories through the API.
          You control exactly which categories each app can see. Confidential memories are always locked — no app gets them automatically.
        </div>
      </div>

      {/* API Key */}
      <div style={{
        background: "#12121a", borderRadius: 14, padding: 20,
        border: "1px solid rgba(255,255,255,0.06)"
      }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: "#D4A574", letterSpacing: 1, textTransform: "uppercase", marginBottom: 12 }}>
          Your API
        </div>
        <div style={{
          display: "flex", alignItems: "center", gap: 10,
          background: "rgba(255,255,255,0.04)", borderRadius: 8,
          padding: "10px 14px", border: "1px solid rgba(255,255,255,0.08)",
        }}>
          <code style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", flex: 1, fontFamily: "monospace" }}>
            hxn_live_●●●●●●●●●●●●●●●●●●●●
          </code>
          <button style={{
            background: "rgba(212,165,116,0.15)", border: "none", borderRadius: 6,
            padding: "5px 12px", fontSize: 11, color: "#D4A574", cursor: "pointer", fontWeight: 600,
          }}>Copy</button>
          <button style={{
            background: "rgba(255,255,255,0.06)", border: "none", borderRadius: 6,
            padding: "5px 12px", fontSize: 11, color: "rgba(255,255,255,0.4)", cursor: "pointer",
          }}>Regenerate</button>
        </div>
        <div style={{ fontSize: 11, color: "rgba(255,255,255,0.25)", marginTop: 8 }}>
          Give this key to any app or agent to connect it to your memories. You can revoke it any time.
        </div>
      </div>

      {/* Connected Apps */}
      <div style={{
        background: "#12121a", borderRadius: 14, padding: 20,
        border: "1px solid rgba(255,255,255,0.06)"
      }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: "#D4A574", letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
          Connected Apps
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {connectedApps.map((app, i) => (
            <div key={i} style={{
              background: "rgba(255,255,255,0.03)", borderRadius: 12,
              border: expandedApp === i ? `1px solid ${app.color}30` : "1px solid rgba(255,255,255,0.04)",
              overflow: "hidden", transition: "all 0.2s",
            }}>
              <div
                onClick={() => setExpandedApp(expandedApp === i ? null : i)}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  padding: "14px 16px", cursor: "pointer",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: 10,
                    background: `${app.color}15`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 16, fontWeight: 700, color: app.color,
                  }}>{app.name[0]}</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "#fff" }}>{app.name}</div>
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)" }}>
                      {app.type} · {app.memoryReads} memory reads · Last used {app.lastUsed}
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{
                    fontSize: 11, fontWeight: 600,
                    color: app.status === "connected" ? "#74D4A5" : app.status === "pending" ? "#D4D474" : "rgba(255,255,255,0.25)",
                    background: app.status === "connected" ? "rgba(116,212,165,0.1)" : app.status === "pending" ? "rgba(212,212,116,0.1)" : "rgba(255,255,255,0.04)",
                    padding: "4px 10px", borderRadius: 20,
                  }}>
                    {app.status === "connected" ? "● Active" : app.status === "pending" ? "◐ Pending" : "○ Inactive"}
                  </span>
                  <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 12, transition: "transform 0.2s", transform: expandedApp === i ? "rotate(180deg)" : "none" }}>▼</span>
                </div>
              </div>

              {expandedApp === i && (
                <div style={{
                  padding: "0 16px 16px",
                  borderTop: "1px solid rgba(255,255,255,0.04)",
                }}>
                  <div style={{ padding: "14px 0 10px", fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.5)" }}>
                    Memory access permissions
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    {categories.map(cat => {
                      const hasAccess = app.access.includes(cat.key);
                      return (
                        <div key={cat.key} style={{
                          display: "flex", alignItems: "center", justifyContent: "space-between",
                          padding: "8px 12px", background: "rgba(255,255,255,0.02)", borderRadius: 8,
                        }}>
                          <span style={{ fontSize: 13, color: hasAccess ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.3)" }}>
                            {cat.icon} {cat.label}
                          </span>
                          <div style={{
                            width: 38, height: 20, borderRadius: 10,
                            background: hasAccess ? app.color : "rgba(255,255,255,0.1)",
                            position: "relative", cursor: "pointer", transition: "all 0.2s",
                          }}>
                            <div style={{
                              width: 16, height: 16, borderRadius: "50%", background: "#fff",
                              position: "absolute", top: 2,
                              left: hasAccess ? 20 : 2, transition: "all 0.2s",
                            }} />
                          </div>
                        </div>
                      );
                    })}
                    <div style={{
                      display: "flex", alignItems: "center", justifyContent: "space-between",
                      padding: "8px 12px", background: "rgba(212,116,116,0.04)", borderRadius: 8,
                      border: "1px solid rgba(212,116,116,0.08)",
                    }}>
                      <span style={{ fontSize: 13, color: "rgba(212,116,116,0.6)" }}>
                        🔐 Private & Confidential
                      </span>
                      <span style={{ fontSize: 10, fontWeight: 600, color: "rgba(212,116,116,0.5)", padding: "3px 8px", background: "rgba(212,116,116,0.08)", borderRadius: 10 }}>
                        ALWAYS LOCKED
                      </span>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 8, marginTop: 14 }}>
                    <button style={{
                      padding: "8px 16px", borderRadius: 8, fontSize: 12,
                      background: "rgba(255,80,80,0.08)", border: "1px solid rgba(255,80,80,0.15)",
                      color: "rgba(255,80,80,0.7)", cursor: "pointer", fontWeight: 500,
                    }}>Disconnect app</button>
                    <button style={{
                      padding: "8px 16px", borderRadius: 8, fontSize: 12,
                      background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)",
                      color: "rgba(255,255,255,0.5)", cursor: "pointer",
                    }}>View full access log</button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <button style={{
          width: "100%", marginTop: 14, padding: "12px",
          background: "rgba(165,116,212,0.08)",
          border: "1px dashed rgba(165,116,212,0.25)",
          borderRadius: 10, color: "#A574D4", fontSize: 13, cursor: "pointer", fontWeight: 500,
        }}>+ Connect a new app or agent</button>
      </div>

      {/* Access Log */}
      <div style={{
        background: "#12121a", borderRadius: 14, padding: 20,
        border: "1px solid rgba(255,255,255,0.06)"
      }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: "#D4A574", letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
          Access Log
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {accessLog.map((entry, i) => (
            <div key={i} style={{
              display: "flex", alignItems: "center", gap: 10, padding: "10px 12px",
              background: entry.level === "blocked" ? "rgba(212,116,116,0.04)" : "rgba(255,255,255,0.02)",
              borderRadius: 8,
              border: entry.level === "blocked" ? "1px solid rgba(212,116,116,0.1)" : "1px solid transparent",
            }}>
              <div style={{
                width: 8, height: 8, borderRadius: "50%", flexShrink: 0,
                background: entry.level === "blocked" ? "#D47474" : entry.level === "restricted" ? "#D4A574" : "#74D4A5",
              }} />
              <div style={{ flex: 1 }}>
                <span style={{ fontSize: 13, color: entry.level === "blocked" ? "#D47474" : "rgba(255,255,255,0.7)" }}>
                  <strong>{entry.app}</strong> {entry.level === "blocked" ? "was blocked from" : "accessed"} {entry.category}
                  {entry.memories > 0 && ` (${entry.memories} memories)`}
                </span>
              </div>
              <span style={{ fontSize: 11, color: "rgba(255,255,255,0.25)", whiteSpace: "nowrap" }}>{entry.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderSettings = () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {/* Emergency Trusted Access */}
      <div style={{
        background: "#12121a", borderRadius: 14, padding: 20,
        border: "1px solid rgba(255,255,255,0.06)"
      }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: "#D4A574", letterSpacing: 1, textTransform: "uppercase", marginBottom: 6 }}>
          Emergency Trusted Access
        </div>
        <div style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", marginBottom: 16 }}>
          People you trust to access your memories if you can't
        </div>
        {trustedAccess.map((person, i) => (
          <div key={i} style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "12px 14px", marginBottom: 8,
            background: "rgba(255,255,255,0.03)", borderRadius: 10,
          }}>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, color: "#fff" }}>{person.name}</div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)" }}>{person.role} · {person.access}</div>
            </div>
            <div style={{
              width: 38, height: 20, borderRadius: 10,
              background: person.active ? "#D4A574" : "rgba(255,255,255,0.15)",
              position: "relative", cursor: "pointer", transition: "all 0.2s",
            }}>
              <div style={{
                width: 16, height: 16, borderRadius: "50%", background: "#fff",
                position: "absolute", top: 2,
                left: person.active ? 20 : 2, transition: "all 0.2s",
              }} />
            </div>
          </div>
        ))}
        <button style={{
          width: "100%", marginTop: 8, padding: "10px",
          background: "rgba(212,165,116,0.08)", border: "1px dashed rgba(212,165,116,0.25)",
          borderRadius: 8, color: "#D4A574", fontSize: 13, cursor: "pointer", fontWeight: 500,
        }}>+ Add trusted person</button>
      </div>

      {/* Confidential Settings */}
      <div style={{
        background: "#12121a", borderRadius: 14, padding: 20,
        border: "1px solid rgba(212,116,116,0.1)"
      }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: "#D47474", letterSpacing: 1, textTransform: "uppercase", marginBottom: 6 }}>
          🔐 Private & Confidential Settings
        </div>
        <div style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", marginBottom: 16 }}>
          Controls for your most sensitive memories
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {[
            { label: "Require PIN to view", desc: "4-digit PIN needed to see confidential memories", active: true },
            { label: "Auto-lock on close", desc: "Re-lock confidential memories when you close Hexon", active: true },
            { label: "Include in emergency access", desc: "Let trusted people see confidential memories in emergencies", active: false },
            { label: "Show in search results", desc: "Confidential memories appear in search (still locked)", active: true },
          ].map((setting, i) => (
            <div key={i} style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "10px 14px", background: "rgba(255,255,255,0.03)", borderRadius: 10,
            }}>
              <div>
                <div style={{ fontSize: 13, color: "#fff" }}>{setting.label}</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>{setting.desc}</div>
              </div>
              <div style={{
                width: 38, height: 20, borderRadius: 10,
                background: setting.active ? "#D47474" : "rgba(255,255,255,0.15)",
                position: "relative", cursor: "pointer", transition: "all 0.2s",
              }}>
                <div style={{
                  width: 16, height: 16, borderRadius: "50%", background: "#fff",
                  position: "absolute", top: 2,
                  left: setting.active ? 20 : 2, transition: "all 0.2s",
                }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Data Control */}
      <div style={{
        background: "#12121a", borderRadius: 14, padding: 20,
        border: "1px solid rgba(255,255,255,0.06)"
      }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: "#D4A574", letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
          Your Data
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {[
            { icon: "📦", label: "Export all memories", detail: "JSON / CSV", danger: false },
            { icon: "📥", label: "Import memories", detail: "From backup", danger: false },
            { icon: "🔐", label: "Encryption settings", detail: "AES-256", danger: false },
            { icon: "🔑", label: "Change confidential PIN", detail: "", danger: false },
            { icon: "🗑️", label: "Delete all memories permanently", detail: "", danger: true },
          ].map((item, i) => (
            <button key={i} style={{
              padding: "12px 16px",
              background: item.danger ? "rgba(255,80,80,0.04)" : "rgba(255,255,255,0.04)",
              border: `1px solid ${item.danger ? "rgba(255,80,80,0.12)" : "rgba(255,255,255,0.08)"}`,
              borderRadius: 10,
              color: item.danger ? "rgba(255,80,80,0.6)" : "#fff",
              fontSize: 13, cursor: "pointer", textAlign: "left",
              display: "flex", justifyContent: "space-between", alignItems: "center",
            }}>
              <span>{item.icon} {item.label}</span>
              {item.detail && <span style={{ color: "rgba(255,255,255,0.25)", fontSize: 12 }}>{item.detail}</span>}
            </button>
          ))}
        </div>
      </div>

      {/* Server Info */}
      <div style={{
        background: "#12121a", borderRadius: 14, padding: 20,
        border: "1px solid rgba(255,255,255,0.06)"
      }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: "#D4A574", letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
          Server
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          {[
            { label: "Location", value: "🇪🇺 EU (Amsterdam)" },
            { label: "Storage used", value: "2.4 MB / 5 GB" },
            { label: "Encryption", value: "AES-256 ✓" },
            { label: "Last backup", value: "Today, 14:22" },
          ].map((item, i) => (
            <div key={i} style={{ padding: "10px 12px", background: "rgba(255,255,255,0.03)", borderRadius: 8 }}>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", marginBottom: 2 }}>{item.label}</div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.75)" }}>{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div style={{
      background: "#0a0a10", minHeight: "100vh", color: "#fff",
      fontFamily: "'DM Sans', -apple-system, sans-serif",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet" />

      {showPinModal && <PinModal />}

      {/* Top Bar */}
      <div style={{
        padding: "16px 24px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
        position: "sticky", top: 0,
        background: "rgba(10,10,16,0.95)", backdropFilter: "blur(20px)", zIndex: 100,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ color: "#D4A574", display: "flex" }}><HexIcon size={26} /></span>
          <span style={{
            fontSize: 20, fontWeight: 700, letterSpacing: 3,
            fontFamily: "'Playfair Display', Georgia, serif", color: "#D4A574",
          }}>HEXON</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {confidentialUnlocked && (
            <span style={{
              fontSize: 11, color: "#D47474", background: "rgba(212,116,116,0.1)",
              padding: "4px 10px", borderRadius: 12, fontWeight: 600,
            }}>🔓 Confidential unlocked</span>
          )}
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{
              width: 8, height: 8, borderRadius: "50%", background: "#74D4A5",
              boxShadow: "0 0 8px rgba(116,212,165,0.5)",
            }} />
            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>Vault secure</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div style={{
        display: "flex", gap: 0,
        borderBottom: "1px solid rgba(255,255,255,0.04)",
        padding: "0 24px", position: "sticky", top: 59,
        background: "rgba(10,10,16,0.95)", backdropFilter: "blur(20px)", zIndex: 99,
        overflowX: "auto",
      }}>
        {[
          { key: "dashboard", label: "Dashboard", icon: "⬡" },
          { key: "memories", label: "Memories", icon: "🧠" },
          { key: "apps", label: "App Connections", icon: "🔌" },
          { key: "settings", label: "Settings", icon: "⚙️" },
        ].map(tab => (
          <button key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            style={{
              padding: "14px 18px", background: "none", border: "none",
              borderBottom: activeTab === tab.key ? "2px solid #D4A574" : "2px solid transparent",
              color: activeTab === tab.key ? "#D4A574" : "rgba(255,255,255,0.35)",
              fontSize: 13, fontWeight: activeTab === tab.key ? 600 : 400,
              cursor: "pointer", transition: "all 0.2s", fontFamily: "inherit",
              whiteSpace: "nowrap",
            }}
          >{tab.icon} {tab.label}</button>
        ))}
      </div>

      {/* Content */}
      <div style={{ padding: 24, maxWidth: 800, margin: "0 auto" }}>
        {activeTab === "dashboard" && renderDashboard()}
        {activeTab === "memories" && renderMemories()}
        {activeTab === "apps" && renderApps()}
        {activeTab === "settings" && renderSettings()}
      </div>

      {/* Footer */}
      <div style={{
        padding: "20px 24px", textAlign: "center",
        borderTop: "1px solid rgba(255,255,255,0.04)",
        fontSize: 11, color: "rgba(255,255,255,0.15)",
      }}>
        Hexon v1.0 · Your memory. Your intelligence. Your soul. · Open Source
      </div>
    </div>
  );
}

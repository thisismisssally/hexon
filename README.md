<p align="center">
  <h1 align="center">⬡ HEXON</h1>
  <p align="center"><strong>The upgraded version of your brain that never forgets.</strong></p>
  <p align="center">Personal AI Memory Layer · Private · Portable · Permanent</p>
</p>

<p align="center">
  <a href="#-quick-start">Quick Start</a> ·
  <a href="#-how-it-works">How It Works</a> ·
  <a href="#-features">Features</a> ·
  <a href="#-contributing">Contributing</a> ·
  <a href="#-roadmap">Roadmap</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/licence-MIT-green" alt="MIT Licence" />
  <img src="https://img.shields.io/badge/status-Phase%201-orange" alt="Phase 1" />
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen" alt="PRs Welcome" />
</p>

---

## 🎬 Watch the Launch Video

<!-- Replace with your actual Synthesia video embed or YouTube link -->
[![Hexon Launch Video](https://img.youtube.com/vi/VIDEO_ID_HERE/maxresdefault.jpg)](https://youtube.com/watch?v=VIDEO_ID_HERE)

---

## The Problem

Every single day, hundreds of millions of people pour their lives into AI. Their ideas. Their health questions. Their business plans. Their most private thoughts.

**And then it all disappears.** Every conversation starts from zero. Switch AI — start again. Change device — start again.

Your intelligence is trapped inside each company's ecosystem. You own none of it.

## The Solution

Hexon is an open source personal AI memory layer that works across **every AI in the world**.

It stores everything that makes you YOU — your memories, preferences, knowledge, personality — in an **encrypted private vault that only you control**. Open any AI anywhere and Hexon automatically injects your relevant context. The AI knows you instantly. Every time.

**No AI company needs to agree to this.** Every AI accepts text input. That's the universal door. Hexon walks through it.

---

## 🚀 Quick Start

### Self-hosted (you control everything)

```bash
# Clone the repo
git clone https://github.com/hexon/hexon.git
cd hexon

# Install dependencies
npm install

# Set up your encrypted vault
cp .env.example .env
# Edit .env with your settings

# Run Hexon
npm start
```

### Hosted service (coming soon)

Sign up at [hexon.io](https://hexon.io) and be running in 2 minutes. No server needed.

---

## ⚙️ How It Works

```
You → Write a message to any AI
         ↓
Hexon → Intercepts the message
         ↓
Hexon → Searches your encrypted memory vault for relevant context
         ↓
Hexon → Injects your memories before the AI sees your message
         ↓
AI    → Responds as if it has always known you
         ↓
Hexon → Learns from the conversation and updates your memory
```

1. **Sign up** and tell Hexon about yourself
2. **Your vault** stores everything in encrypted memory on a server you control
3. **Open any AI** — Claude, ChatGPT, Gemini, anything
4. **Hexon injects** your relevant memories automatically
5. **The AI knows you** completely, instantly, every time
6. **Hexon learns** after every conversation, getting smarter forever

---

## ✨ Features

### Memory Vault
- Encrypted personal memory database
- Organised categories — Personal, Work, Health, Financial, Goals, Preferences, and custom
- Full search across all memories
- Manual add, edit, and delete
- Automatic learning from conversations

### Three-Tier Security
Every memory has a security level:

| Tier | Access | Use Case |
|------|--------|----------|
| 🌐 **Open** | Any connected AI or agent | Name, preferences, communication style |
| 🔒 **Restricted** | Only apps you've approved | Health data, financial info, work projects |
| 🔐 **Confidential** | Manual unlock only (PIN/biometric) | Medical diagnoses, legal matters, private notes |

Confidential memories are **never** shared automatically. Not with any app, agent, or AI. Ever.

### App Connections API
Hexon isn't just for chatbots. **Any AI product can plug in.**

```bash
# Connect any app with a single API call
curl -H "Authorization: Bearer hxn_live_your_key" \
     https://your-hexon-server/api/memories?category=preferences
```

- AI agents (OpenClaw, Cowork, etc.)
- Health apps and fitness trackers
- Smart home assistants
- Desktop automation tools
- Any app that would work better if it knew you

Per-app permission controls. Full access logs. Disconnect anything instantly.

### Bridge Layer
- Works with Claude, ChatGPT, Gemini — and any AI that will ever exist
- No special API permissions needed from AI companies
- Automatic context injection based on relevance
- Invisible to you — it just works

### Dashboard
Clean, mobile-friendly interface:
- **Dashboard** — vault overview, stats, recent activity
- **Memory Browser** — search, filter, edit, security badges
- **App Connections** — manage API access, permissions, access logs
- **Settings** — trusted access, encryption, data export

### Emergency Trusted Access
Choose who can access your memories if you can't:
- A doctor in a medical emergency
- A family member when you can no longer speak for yourself
- Configurable per-person, per-category
- Confidential tier can be included or excluded separately

---

## 🗺️ Roadmap

### Phase 1 — Build & Test ← **We are here**
- [x] Product requirements and architecture
- [x] Dashboard UI design
- [x] Three-tier security model design
- [x] App Connections API design
- [ ] Encrypted memory database
- [ ] Web app dashboard
- [ ] Bridge layer — Claude integration
- [ ] Bridge layer — ChatGPT integration
- [ ] Bridge layer — Gemini integration
- [ ] Basic learning memory
- [ ] Personal testing and refinement

### Phase 2 — Trusted Community
- [ ] Invite beta testers
- [ ] App Connections API live
- [ ] Developer documentation
- [ ] Onboarding flow
- [ ] Billing and pricing

### Phase 3 — Public Launch
- [ ] Free and paid tiers
- [ ] Open source AI model support
- [ ] Emergency trusted access
- [ ] Full independence from cloud AI APIs

---

## 🤝 Contributing

We need you. Seriously.

The competitors in this space are building for developers and enterprises — APIs and vector databases. **Nobody is building this for real people.** For your nan. For the person losing their memories to dementia. For the teenager who wants their AI to actually know them.

That's the gap. That's where Hexon lives. And that's where we need your help.

👉 **Read [CONTRIBUTING.md](CONTRIBUTING.md) to get started.**

### Good First Issues

Look for issues tagged `good-first-issue` — these are specifically picked for new contributors.

### What We Need Most Right Now
- **Backend developers** — encrypted database, API architecture
- **Frontend developers** — React dashboard, mobile responsiveness
- **Security specialists** — encryption review, penetration testing
- **AI/ML engineers** — memory relevance scoring, learning system
- **Technical writers** — documentation, API guides
- **Testers** — break things and tell us about it

---

## 🧠 Why This Matters

This isn't just a developer tool. This is about something bigger.

Every day, the wisdom of elders fades. The stories of ordinary people disappear. The memories of those living with dementia slip away. Gone forever.

**Hexon makes that loss optional.**

For the first time in history — being remembered is not a privilege of the wealthy or the famous. It belongs to everyone.

---

## 👋 Built By

<img src="founder.jpg" width="120" style="border-radius: 50%;" />

**Sally** — Creator of Hexon. Self-taught builder. 20+ years in the entertainment industry. Now building tools that give people ownership of their digital intelligence.

*"I started Hexon because I was tired of every AI forgetting who I am. If I'm pouring my life into these conversations, that knowledge should belong to me — not to a corporation. It should belong to everyone."*

---

## 📄 Licence

MIT — free forever. See [LICENSE](LICENSE) for details.

---

## 💬 Community

- [GitHub Discussions](https://github.com/hexon/hexon/discussions) — questions, ideas, feedback
- [Issues](https://github.com/hexon/hexon/issues) — bug reports and feature requests

---

<p align="center">
  <strong>Your memory. Your intelligence. Your soul.</strong><br/>
  Nobody takes it from you. Ever.<br/><br/>
  <strong>⬡ Hexon</strong>
</p>

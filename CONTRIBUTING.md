# Contributing to Hexon

First off — thank you. Every contribution matters, whether it's fixing a typo or building a core feature.

## How to Contribute

### 1. Find Something to Work On

- Check [Issues](https://github.com/hexon/hexon/issues) for open tasks
- Look for `good-first-issue` labels if you're new
- Look for `help-wanted` labels for priority items
- Or propose something new — open an issue and let's discuss

### 2. Fork and Clone

```bash
git clone https://github.com/YOUR-USERNAME/hexon.git
cd hexon
npm install
```

### 3. Create a Branch

```bash
git checkout -b feature/your-feature-name
```

Use clear branch names:
- `feature/memory-search` for new features
- `fix/bridge-timeout` for bug fixes
- `docs/api-guide` for documentation

### 4. Make Your Changes

- Write clean, readable code
- Add comments where the logic isn't obvious
- Include tests if you're adding new functionality
- Make sure existing tests still pass

### 5. Submit a Pull Request

- Push your branch to your fork
- Open a PR against the `main` branch
- Describe what you changed and why
- Link any related issues

## What We Need Most

### Right Now (Phase 1)

| Area | What | Skills |
|------|------|--------|
| Database | Encrypted memory store with security tier tagging | Node.js, PostgreSQL or SQLite, encryption |
| API | REST API for App Connections | Node.js, Express or Fastify |
| Frontend | Dashboard UI (React) | React, CSS, responsive design |
| Bridge | AI conversation interception and memory injection | API integration, Claude/OpenAI/Google APIs |
| Security | Encryption implementation, security audit | Cryptography, security best practices |
| Docs | API documentation, setup guides | Technical writing |

### Coming Soon (Phase 2)

- Learning system — automatic memory extraction from conversations
- Onboarding flow — making first-time setup effortless
- Mobile optimisation — dashboard works perfectly on phones
- Open source AI model support — local models, no cloud dependency

## Code Standards

- **Language:** JavaScript/TypeScript (Node.js backend, React frontend)
- **Style:** Use Prettier for formatting, ESLint for linting
- **Tests:** Jest for unit tests
- **Commits:** Clear, descriptive commit messages. One logical change per commit.

## Project Structure

```
hexon/
├── server/           # Backend API and bridge layer
│   ├── api/          # REST API routes
│   ├── bridge/       # AI conversation interception
│   ├── memory/       # Memory storage and retrieval
│   └── security/     # Encryption and access control
├── client/           # React frontend dashboard
│   ├── components/   # UI components
│   ├── pages/        # Dashboard, Memories, Apps, Settings
│   └── styles/       # CSS and theming
├── docs/             # Documentation
└── tests/            # Test suites
```

## Security

This project handles deeply personal data. Security is not optional.

- **Never** log memory contents in plain text
- **Never** transmit unencrypted data
- **Always** respect security tiers — confidential means confidential
- Report security vulnerabilities privately to security@hexon.io — do not open a public issue

## Code of Conduct

Be kind. Be respectful. Be constructive.

This project exists to help every human being who uses AI. That includes every human being who contributes to it. Harassment, discrimination, or disrespect of any kind will not be tolerated.

## Questions?

- Open a [Discussion](https://github.com/hexon/hexon/discussions) for general questions
- Open an [Issue](https://github.com/hexon/hexon/issues) for bugs or feature requests
- Tag your issue with the appropriate label

---

**Your memory. Your intelligence. Your soul.**
Nobody takes it from you. Ever.

# Agent Operating Rules

These rules apply to every AI agent working in this repository. They are mandatory: an agent must not start implementation or create a commit without following the applicable workflow below.

## At the start of every session

Before making changes, read these files in order:

1. `README.md` — repository structure and working conventions.
2. `CONTEXT.md` — company context and domain constraints.
3. `memory-bank/projectbrief.md` — project goals and business context.
4. `memory-bank/techContext.md` — selected stack, architecture, and technical constraints.
5. `memory-bank/progress.md` — current status and planned work.

Then read the `README.md` for each folder in the proposed change’s scope, along with any relevant skill instructions. Check the working tree for existing changes before editing; do not overwrite or discard work you did not create.

If a required file is missing or contradictory, stop and ask the developer for guidance rather than guessing.

## Before writing code

1. Restate the requested outcome and identify its scope.
2. Identify acceptance criteria, relevant constraints, and affected files.
3. Make a concise implementation plan, including the checks needed to validate it.
4. Resolve ambiguity with the developer before proceeding when it could change scope, architecture, data handling, or user-visible behavior.

Do not write code until these steps are complete. Do not broaden the task without approval.

## Repository Boundary

When creating project files, place them in the appropriate repository area:

| Path | What goes here when created |
| --- | --- |
| `/uis` | Frontend projects for the company. |
| `./uis/website` | Public-facing corporate website (home route `/`, brand and copy aligned with `BRIEFING.md`). |
| `./uis/backoffice` | Internal company app (own layout, separate from the public site; entry view on `/`). |
| `/services` | Backend APIs and services. |

## Mandatory workflow before every commit

Complete these steps **in order for every commit**:

1. **Check scope:** Compare the changes with the request and plan. Remove unrelated changes; do not include pre-existing work.
2. **Validate the change:** Run the relevant tests, build, lint, type-check, or other checks documented for the affected area. If a check cannot run, record why. Do not claim a check passed unless it ran successfully.
3. **Review the diff:** Inspect the complete staged and unstaged diffs. Look for accidental files, secrets, generated artifacts, unsafe data changes, regressions, and undocumented behavior.
4. **Update documentation:** Update relevant documentation when behavior, setup, interfaces, or decisions change.
5. **Confirm the delivery:** Summarize the change, files affected, checks and their results, and any known limitations. Stop if checks fail or the diff contains unexplained changes; fix them and repeat this workflow from step 1.
6. **Commit only with authorization:** Do not create a commit unless the developer explicitly asks or authorizes it. When authorized, commit only the reviewed, relevant changes.

## Files and folders requiring explicit developer confirmation

Do not create, edit, move, or delete the following without explicit developer confirmation:

- `BRIEFING.md`, `CONTEXT.md`, `CONTEXT.es.md`, and `company-choice.md` — company and assignment source material.
- `memory-bank/projectbrief.md` and `memory-bank/techContext.md` — project goals and technical decisions.
- `AGENTS.md` — repository-wide agent policy.
- `data/raw/**` — source data.
- `.devcontainer/**`, `infra/**`, and root deployment/orchestration files such as `docker-compose.yml`.
- CI/CD configuration, including `.github/workflows/**` if present.
- Dependency manifests and lockfiles, including `package.json`, `pyproject.toml`, and equivalent files.
- Environment, credential, or secret files (for example `.env*`, private keys, and tokens).
- Anything inside `.git/`.

Treat any newly discovered credential or sensitive-data file as protected too. Never add secrets to the repository. If a protected change appears necessary, explain why and request approval before editing it. Approval for one protected file does not authorize changes to other protected files.

## General rules

- Follow the conventions in the relevant folder README and existing code.
- Prefer the smallest change that satisfies the request.
- Do not fabricate test results, domain facts, or implementation status.
- Do not discard user changes, bypass failed checks, or commit unrelated files.
- If instructions conflict, stop and ask the developer which instruction takes precedence.

Update `memory-bank/progress.md` only for durable project-state changes.

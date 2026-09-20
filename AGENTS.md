# Workspace Instructions

This repository keeps additional workspace guidance under `.devin/rules/`.
Treat the following files as authoritative project instructions and apply the relevant ones for the task at hand:

- `.devin/rules/astro.md`
- `.devin/rules/ultracite.md`

Treat any rule file marked with `trigger: always_on` as always active.

If a repo-specific workflow is added under `.devin/workflows`, inspect and follow it when the user explicitly references it.

When we create written implementation plans for this repo, store them under `C:\Users\nicol\.windsurf\plans` with a descriptive Markdown filename.

## Memory bank

Project state, roadmap and release history live under `specs/`:

- `specs/memory-bank/active-context.yaml` – current focus, deliverables (I{issue}D{n}), progress log
- `specs/memory-bank/CHANGELOG.yaml` – version history (rotate with `scripts/rotate-changelog.sh`)
- `specs/memory-bank/goteborgpickleballklubb-pdd.yaml` – canonical product/tech document
- `specs/memory-bank/memory-bank-usage.yaml` – conventions
- `specs/current-changes/` – active plans and working documents

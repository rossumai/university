---
title: 'Sandboxes'
---

import PaidFeature from '../\_paid_feature.md';

<PaidFeature />

Rossum Sandboxes allow for isolated development of the solution and easy deployments of the tested solution to production.

Using Sandboxes currently requires installation of an external tooling available at: TODO

## Installation

:::warning[Work in progress]

_Work in progress._

:::

First, download the Sandboxing tool locally:

```bash
git clone …
cd …
```

And install it:

```bash
brew install pipx
pipx ensurepath
pipx install .
```

This will install the Sandboxing tool in the `~/.local/bin` folder making it available globally under command `prd`.

To upgrade to the latest version, run (from the same Git directory):

```bash
git pull
pipx install . --force
```

## First steps

:::warning[Work in progress]

_Work in progress._

:::

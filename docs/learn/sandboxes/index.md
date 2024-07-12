---
title: 'Sandboxes'
---

import PaidFeature from '../\_paid_feature.md';

<PaidFeature />

Rossum Sandboxes allow for isolated development of the solution and easy deployments of the tested solution to production.

Using Sandboxes currently requires installation of an external tooling available at: https://github.com/rossumai/prd

## Installation

First, download the Sandboxing tool `prd` locally:

```bash
git clone git@github.com:rossumai/prd.git
cd prd
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

## Available configuration options

The only necessary configuration is in the `credentials.json` file right after running `prd init`.

Default configuration using username and password:

```json
{
  // Source organization (typically the only one needed).
  "source": {
    // API base URL. Consult with your support team (SA) in case you are not sure what
    // the value should be.
    "api_base": "https://api.elis.rossum.ai/v1",

    // Username under which `prd` will be calling the API.
    "username": "...",

    // Password for the user under which `prd` will be calling the API.
    "password": "..."
  },

  // Configures whether source organization should be used as a target organization or not.
  "use_same_org_as_target": true,

  // Target organization in case it is necessary to release into a different organization
  // from source. The configuration is identical with `source` parameter.
  "target": {
    "api_base": "...",
    "username": "...",
    "password": "..."
  }
}
```

Alternatively, you can use API token instead of username and password if you have it:

```json
{
  "source": {
    "api_base": "https://api.elis.rossum.ai/v1",
    // highlight-start
    "token": "..." // use API token instead of username/password
    // highlight-end
  },
  "use_same_org_as_target": true,
  "target": {
    "api_base": "...",
    "token": "..."
  }
}
```

## Configuring `mapping.yaml` file

:::warning[Work in progress]

_Work in progress._

:::

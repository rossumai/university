---
title: 'Sandboxes'
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import PaidFeature from '../\_paid_feature.md';

<PaidFeature />

Rossum Sandboxes allow for isolated development of the solution and easy deployments of the tested solution to production.

Using Sandboxes currently requires installation of an external tooling available at: https://github.com/rossumai/deployment-manager

## Installation

<Tabs groupId="prd">
  <TabItem value="prd2" label="v2 (latest)" default>

First, download the installation script for our Sandboxing tool `deployment-manager` from its Rossum GitHub repository:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/rossumai/deployment-manager/main/install.sh)"
```

The script will automatically run and install the Sandboxing tool in the `~/.local/bin` folder making it available globally under the command `prd2`.

To upgrade to the latest version, run:

```bash
prd2 update
```

You can find more information here: https://github.com/rossumai/deployment-manager

:::warning[Using Microsoft Windows?]

Sandboxes are currently not supported on Windows. You can, however, use WSL to run the `prd2` command: https://learn.microsoft.com/en-us/windows/wsl/install

:::

Alternatively, you can install the tool manually (advanced):

```bash
cd $(mktemp -d)
git clone git@github.com:rossumai/deployment-manager.git
cd deployment-manager

python3 -m venv .
source bin/activate
python3 -m pip install pipx

python3 -m pipx install . --force
```

  </TabItem>
  <TabItem value="prd" label="v1 (deprecated)">

First, download the installation script for our Sandboxing tool `deployment-manager` from its Rossum GitHub repository:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/rossumai/deployment-manager/main/install.sh)"
```

The script will automatically run and install the Sandboxing tool in the `~/.local/bin` folder making it available globally under the command `prd`.

To upgrade to the latest version, run:

```bash
prd update
```

You can find more information here: https://github.com/rossumai/deployment-manager

:::warning[Using Microsoft Windows?]

Sandboxes are currently not supported on Windows. You can, however, use WSL to run the `prd` command: https://learn.microsoft.com/en-us/windows/wsl/install

:::

  </TabItem>
</Tabs>

## Available CLI commands

`prd` is a CLI tool and offers the following main commands:

- `prd init`: Initialize a new project (creates mainly `credentials.json` and `prd_config.yaml` files). When called with a project name, it also initialized an empty Git repository.
- `prd pull`: Pulls all objects from both `source` and `target` organizations (as per your configuration). It is possible to explicitly specify `source`/`target` to pull only that one environment, for example: `prd pull source`
- `prd push`: Pushes the latest changes to the `source` organization. This is effectively a counterpart of the `pull` command.
- `prd release`: Pushes the latest changes to the `target` organization. Visit [Deployment patterns](./deployment-patterns.md#two-environments-for-sandbox-and-production) to learn more about this use-case.
- `prd purge`: Removes all objects in the target organization.
- `prd purge unused_schemas`: Removes old unused schemas.

Complete list of commands and their parameters can be found when running `prd --help`.

## Available configuration options

The only necessary configuration is in the `credentials.json` and in the `prd_config.yaml` files right after running `prd init`.

First, we will setup credentials in the `credentials.json` file, where we can work with username and password combination ([Example 1](#example-1)), or alternatively we can use `token` ([Example 2](#example-2)).

#### Example 1

Authentication using username and password.

```json title="credentials.json"
{
  // Source organization (typically the only one needed).
  "source": {
    // Username under which `prd` will be calling the API.
    "username": "...",

    // Password for the user under which `prd` will be calling the API.
    "password": "..."
  },

  // Target organization in case it is necessary to release into a different organization
  // from source. The configuration is identical with `source` parameter.
  "target": {
    "username": "...",

    "password": "..."
  }
}
```

#### Example 2

Alternatively, you can use API token instead of username and password (if you have it):

```json title="credentials.json"
{
  "source": {
    // highlight-start
    "token": "..." // use API token instead of username/password
    // highlight-end
  },
  "target": {
    "token": "..."
  }
}
```

Finally, to set up the organization's URL, we need to edit the `prd_config.yaml` file, where we specify the source API URL. If the target API URL is different from the source, we can also specify `target_api_base`.

If the URLs are identical, you can add the `use_same_org_as_target` parameter with the value `true`. In this case, you can remove `target_api_base`.

```yaml title="prd_config.yaml"
# You can specify source and target API URL:
source_api_base: 'https://api.elis.rossum.ai/v1'
target_api_base: 'https://api.elis.rossum.ai/v1'

# Or add this to your YAML file in case the source and target are identical (and omit the target_api_base):
use_same_org_as_target: true
```

## Configuring `mapping.yaml` file

Note that this file is automatically generated by the `prd pull` command. It is typically not necessary to configure it manually unless some more advanced use-case is needed.

```yaml
# The main key describing `source` organization details:
ORGANIZATION:
  # ID of the `source` organization:
  id: 123456
  # Name of the `source` organization:
  name: MyOrganization (Sandbox)
  targets:
    # ID of the `target` organization (if any):
    - target_id: 654321
  WORKSPACES:
    # IDs of the `source` workspaces:
    - id: 123456
      # Name of the `source` workspace:
      name: 'My Test Workspace'
      targets:
        # ID(s) of the `target` workspace(s) (there can be none or more than one):
        - target_id: null
      QUEUES:
        # IDs of the `source` queues belonging to the `source` workspace above:
        - id: 123456
          # Name of the `source` queue:
          name: Invoices
          targets:
            # ID(s) of the `target` queue(s) (there can be none or more than one):
            - target_id: null
              # (optional) You could override attribute on the target using `attribute_override`
              ## - for example you can have `name:` on `target` different from the `source`
              attribute_override:
                name: Invoices (PROD)
          INBOX:
            # IDs of the `source` inbox belonging to the `source` queue above:
            id: 123456
            # Name of the `source` inbox:
            name: Invoices
            targets:
              # ID(s) of the `target` inbox(s) (there can be none or more than one):
              - target_id: null
  HOOKS:
    # IDs of the `source` hooks:
    - id: 123456
      # Name of the `source` hook:
      name: Supplier Data Matching
      targets:
        # ID(s) of the `target` hook(s) (there can be none or more than one):
        - target_id: null
  SCHEMAS:
    # IDs of the `source` schemas:
    - id: 123456
      # Name of the `source` schema:
      name: Tax invoices (US) schema
      targets:
        # ID(s) of the `target` schema(s) (there can be none or more than one):
        - target_id: null
```

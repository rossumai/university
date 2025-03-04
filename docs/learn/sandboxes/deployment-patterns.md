---
sidebar_position: 1
sidebar_label: 'Deployment patterns'
title: 'Sandboxes: Deployment patterns'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import WIP from '../\_wip.md';

# Deployment patterns

Each company has its own deployment pattern. The most common ones (supported by Rossum Sandboxing tool) are:

## Single environment for sandbox and production

This is the simplest pattern for companies who do not have the need for separate sandbox environment.

![](./_img/one-environment-diagram.png)

<Tabs groupId="prd">
  <TabItem value="prd2" label="v2 (latest)" default>

To start using this patten, simply initialize a new project in some empty directory using the following command:

```bash
prd2 init
```

This command will create a directory structure according to your choices when executing the `init` command. For example:

```bash
? ORG-LEVEL directory name: production-org
? ORG ID: 123123
? Base API URL: (e.g., https://my-org.rossum.app/api/v1) https://example.rossum.app/api/v1
? API token: b1946ac92492d2347c6235b4d2611184
? SUBDIR name: default
? subdir regex (OPTIONAL):
? Would you like to specify another **SUBDIR** inside production-org? No
? Would you like to specify another **ORG-LEVEL** directory? No
╭──────────────────────────────────────────────────────────────────────────────────────────────────╮
│ Initialized a new PRD directory in "."                                                           │
╰──────────────────────────────────────────────────────────────────────────────────────────────────╯
```

Will create the following tree structure:

```text
.
├── prd_config.yaml
└── production-org
    ├── credentials.yaml
    └── default
```

The project should be ready to go! Try it by pulling all the changes from your remote organization:

```bash
prd2 pull production-org
```

Once you commit this initial version to Git, you can update any configuration and deploy it to the same organization using the following command:

```bash
prd2 push
```

  </TabItem>
  <TabItem value="prd" label="v1 (deprecated)">

To start using this patten, simply initialize a new project in some empty directory using the following command:

```bash
prd init
```

This command will create a new `credentials.json` file. Fill in your username and password for `source` (you can leave `target` section as is for this simple setup):

```json title="credentials.json"
{
  "source": {
    "username": "CHANGE ME",
    "password": "CHANGE ME"
  },
  "target": {
    "username": "...",
    "password": "..."
  }
}
```

Also configure the `source_api_base` in `prd_config.yaml` file. By default, it would be:

```yaml title="prd_config.yaml"
source_api_base: 'https://api.elis.rossum.ai/v1'
use_same_org_as_target: true
```

Now you can pull (and eventually commit into Git) your whole organization configuration:

```bash
prd pull
```

Once you commit this initial version to Git, you can update any configuration and deploy it to the same organization using the following command:

```bash
prd push
```

  </TabItem>
</Tabs>

## Two environments for sandbox and production

A bit more advanced setup with two environments: sandbox and production. Typically, the solution is first deployed to the sandbox organization (`source`) and once tested, released to production (`target`).

![](./_img/two-environments-diagram.png)

<Tabs groupId="prd">
  <TabItem value="prd2" label="v2 (latest)" default>

<WIP />

  </TabItem>
  <TabItem value="prd" label="v1 (deprecated)">

To use this pattern, follow the same steps as outlined in the [Simple environment example](#single-environment-for-sandbox-and-production) and first init your local repository:

```bash
prd init
```

However, now setup both `source` and `target` organizations:

```json title="credentials.json"
{
  "source": {
    "username": "CHANGE ME",
    "password": "CHANGE ME"
  },
  "target": {
    "username": "CHANGE ME",
    "password": "CHANGE ME"
  }
}
```

Notice that `use_same_org_as_target` is now set to false:

```yaml title="prd_config.yaml"
source_api_base: 'https://api.elis.rossum.ai/v1'
target_api_base: 'https://api.elis.rossum.ai/v1'
use_same_org_as_target: false
```

To push local changes to the sandbox, run `push` command:

```bash
prd push
```

And to release changes to production, run `release` command:

```bash
# Preview the changes first:
prd release --plan-only

# Run the actual release:
prd release
```

The local repository should always contain both `source` and `target` organization configurations. They can both be updated by calling `prd pull` command. You can also run `prd pull source` or `prd pull target` to update only one.

  </TabItem>
</Tabs>

## Three environments for sandbox, UAT, and production

Finally, the most complex pattern with three environments: sandbox, UAT, and production. In this scenario, several environments are chained one after the other.

![](./_img/three-environments-diagram.png)

<Tabs groupId="prd">
  <TabItem value="prd2" label="v2 (latest)" default>

<WIP />

  </TabItem>
  <TabItem value="prd" label="v1 (deprecated)">

For sandbox and UAT environment configurations, see the [Two environments example](#two-environments-for-sandbox-and-production).

To configure the remaining production environment, it is necessary create a new Git branch and maintain there the configuration (from UAT to Production). Alternatively, for better transparency, create a new folder to store this configuration. This is necessary because `prd` currently doesn't support multi-target configurations out of the box.

  </TabItem>
</Tabs>

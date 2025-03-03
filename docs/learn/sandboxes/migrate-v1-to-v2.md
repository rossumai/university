---
sidebar_position: 2
sidebar_label: 'Migrate from v1 to v2'
title: 'Sandboxes: Migration guide from v1 to v2'
---

# Migration guide from v1 to v2

The second version of our Sandboxing tool `prd` is **not backward compatible** with the first version. We recommend downloading the whole project again via the new version and going from there. You can keep using the old version (v1) command under `prd` and new version (v2) command under `prd2`.

To get the latest `prd` version, run the following command:

```bash
prd update
```

This will make the `prd2` command available, so you can initialize and download the project from scratch. First, you need to initialize a new project (in the relevant folder):

```bash
prd2 init
```

This command will prompt you for the following information (your options and preferences might slightly differ):

```bash
? ORG-LEVEL directory name: sandbox-org
? ORG ID: 255255
? Base API URL: (e.g., https://my-org.rossum.app/api/v1) https://example.rossum.app/api/v1
? API token: b1946ac92492d2347c6235b4d2611184
? SUBDIR name: default
? subdir regex (OPTIONAL):
? Would you like to specify another **SUBDIR** inside sandbox-org? No
? Would you like to specify another **ORG-LEVEL** directory? No
╭──────────────────────────────────────────────────────────────────────────────────────────────────╮
│ Initialized a new PRD directory in "."                                                           │
╰──────────────────────────────────────────────────────────────────────────────────────────────────╯
```

In case you made a mistake, or you want to add new folders, run the `init` command again. Later, you can pull your project configuration from the Rossum app:

```bash
prd2 pull sandbox-org
```

Learn more on how to work with this new version [here](./index.md)

Once everything is migrated and working, you can delete the original folder structure (created via `prd`) and use the new one instead (created via `prd2`).

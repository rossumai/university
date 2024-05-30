---
unlisted: true
sidebar_position: 1
---

# Archive

import PageArchivedMessage from './\_page_archived_message.md';

This is an archive of old pages and articles from Rossum.ai University.

If you reached this page accidentally, please return back to [Rossum.ai University homepage](/).

## Notes for maintainers

Some rules for the archive:

1. All pages in the archive should be marked as "unlisted". Simply add `unlisted: true` to the frontmatter.
1. A redirect should be created in `docusaurus.config.js` to point to the new page (we don't want to break the old links).
1. All pages should have the following warning message on top:

<PageArchivedMessage test="**a**" />

Use the following MDX code to render the warning message:

```text
import PageArchivedMessage from './\_page_archived_message.md';

<PageArchivedMessage />
```

This message could be accompanied by an explanation of why the page is archived:

:::tip

A successor to this extension is [Formula Fields](../extensions/formula-fields/index.md).

Consider contacting [Rossum.ai Sales](https://rossum.ai/form/contact/) if you need assistance migrating your legacy extensions.

:::

```markdown
:::tip

A successor to this extension is [Formula Fields](../extensions/formula-fields/index.md).

Consider contacting [Rossum.ai Sales](https://rossum.ai/form/contact/) if you need assistance migrating your legacy extensions.

:::
```

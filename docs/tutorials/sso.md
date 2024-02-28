---
sidebar_position: 1
title: 'Single Sign-On (SSO)'
---

:::info

The initial configuration of SSO requires involvement of Rossum.ai technical teams. Please contact us via https://rossum.ai/form/contact/

:::

## Changing existing users to SSO

By default, all users are created with email and password. To change an existing user to SSO, you need to:

1. Contact Rossum.ai support to enable SSO for your account.
1. Go to the user's profile and click on **Settings**.
1. Find the relevant user and click on it.
1. In the user's profile, click on **Personal info**.
1. In the **Authentication** section, select **Log in with SSO**.

Note that if you do not see this section, it means that SSO is not enabled for your account.

![SSO settings](./img/sso/sso-settings.png)

The **External user ID** can be used to connect the user to your system (Azure, Google). It is a unique identifier that is used to match the user in your system with the user in Rossum.ai. In most cases, this ID is the same as user email.

For more technical information about SSO please visit our API reference: https://elis.rossum.ai/api/docs/#single-sign-on-sso

---
title: 'Single Sign-On (SSO)'
---

:::info

The initial configuration of SSO requires involvement of Rossum.ai technical teams. Please contact us via https://rossum.ai/form/contact/

:::

## Creating users with SSO

When the SSO is configured, all newly created users are created with SSO enabled by default. Follow these steps:

1. Go to the user's profile and click on **Settings**.
1. Click **Add user**
1. Fill in all the required users and click **Add user** button

It might be necessary is to update the **External user ID** so that it matches the 3rd party system. However, by default, we use the same email address and the user might be able to log in without any changes needed.

## Changing existing users to SSO

When SSO is enabled on the organization, older users that were still using password-based login are not switched automatically. To change an existing user to SSO, you need to:

1. Contact Rossum.ai support to enable SSO for your account.
1. Go to the user's profile and click on **Settings**.
1. Find the relevant user and click on it.
1. In the user's profile, click on **Personal info**.
1. In the **Authentication** section, select **Log in with SSO**.

Note that if you do not see this section, it means that SSO is not enabled for your account.

![SSO settings](./_img/sso-settings.png)

The **External user ID** can be used to connect the user to your system (Azure, Google). It is a unique identifier that is used to match the user in your system with the user in Rossum.ai. In most cases, this ID is the same as user email.

For more technical information about SSO please visit our API reference: https://elis.rossum.ai/api/docs/#single-sign-on-sso

## Changing existing users back to password

Users with enabled SSO can be switched back to password based login following these steps:

1. Go to the user's profile and click on **Settings**.
1. Find the relevant user and click on it.
1. In the user's profile, click on **Personal info**.
1. In the **Authentication** section, select **Log in with Password**.

After saving the changes it is necessary to click on **Reset password** which will send an email with password reset link. This is necessary even when the user previously had a password but was switched to SSO! It is because when switching to SSO, we purge the passwords for security reasons.

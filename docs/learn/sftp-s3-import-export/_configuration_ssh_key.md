Secrets:

```json
{
  "type": "sftp",
  "ssh_key": "-----BEGIN OPENSSH PRIVATE KEY-----\nabcd…wxyz\n-----END OPENSSH PRIVATE KEY-----"
}
```

The easiest way to convert the SSH key to one-line format is to use the following command:

```bash
awk '{printf "%s\\n", $0}' id_rsa_demo.txt
```

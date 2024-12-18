# How to create service account for integrations 

## 1. Login with an admin account using username/password 

```bash
curl -H 'Content-Type: application/json' -d '{"username": "myusername@company.com", "password": "thisismypassword"}' -X POST 'https://mycompany.rossum.app/api/v1/auth/login'
```

After successful login you will receive a bearer token in the key attribute of the response
```json
{
  "key": "ltcg2p2w7o9vxju313f04rq7lcc4xu2bwso423b3",
  "domain": null
}
```

The `key` value will be referred as `<token>` in the rest of the article.

## 2. Get your organization ID 

```bash
curl -H 'Authorization: Bearer <token> -X GET 'https://mycompany.rossum.app/api/v1/organizations'
```

Note the `id` of an organization you want to create the user in.
```json
{
    "pagination": {
        "total": 1,
        "total_pages": 1,
        "next": null,
        "previous": null
    },
    "results": [
        {
            "id": 1234,
            "url": "https://mycompany.rossum.app/api/v1/organizations/1234",
            ...
```

## 3. Use bearer token to create service account
Technical users must be created via API call because that’s the only way to set user's password explicitly.

```bash
curl -s -X POST -H 'Content-Type: application/json' -H 'Authorization: Bearer <token> -d '{"organization": "https://mycompany.rossum.app/api/v1/organizations/1234", "username": "api_user@mycompany", "password": "myserviceaccoutpassword", "groups": [ "https://mycompany.rossum.app/api/v1/groups/3" ] }' 'https://mycompany.rossum.app/api/v1/users'
```

### 3.1 Exchange one time for long lasting reusable token
In the integration application Login with the newly created service account and immediatelly exchange it for long lasting reusable token. Use this long lasting token until it expires. When that happens, login again with the first command and exchange for long lasting token. /auth/login endpoin is throttled and too many login attempts will cause the login endpoint to stop generating new tokens.

```bash
curl -H 'Content-Type: application/json' -d '{"username": "api_user@mycompany", "password": "myserviceaccoutpassword"}' 'https://mycompany.rossum.app/api/v1/auth/login'
```

```bash
curl -X POST -H 'Authorization: Bearer <token> 'https://mycompany.rossum.app/api/v1/auth/token'
```

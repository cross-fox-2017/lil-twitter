# lil-twitter

API dashboard simple twitter

## Usage
```
npm install
```

## Endpoints
```
| Routes               |  HTTP  | Description          |
|----------------------|:------:|----------------------|
| /api/twatt           |   GET  | Get all tweets       |
| /api/twatt/:id       |   GET  | Get tweets by userid |
| /api/twatt/search    |   GET  | Search tweets by content |
| /api/twatt           |  POST  | Post new tweet       |
| /api/twatt/:id       | DELETE | Delete tweet by id   |
| /auth/users/register |  POST  | Create new user      |
| /auth/users/login    |  POST  | Verify login         |
| /auth/users          |   GET  | Get all users        |
| /auth/users/:id      |   GET  | Get user by id       |
| /auth/users/:id      |   PUT  | Edit user            |
| /auth/users/:id      | DELETE | Delete user          |
```

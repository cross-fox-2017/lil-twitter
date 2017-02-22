# lil-twitter

### Routes
| Routes             | HTTP   | Desc              |
|--------------------|--------|-------------------|
| api/twits          | GET    | GET list Twit     |
| api/twits/search   | POST   | Search twit       |
| api/twits/         | POST   | Post new twit     |
| api/twits/:id      | DELETE | delete twit       |
| api/users          | GET    | get list users    |
| api/users/register | POST   | register new user |
| api/users/login    | POST   | login user        |
|                    |        |                   |

### Schema
twits --> content, hashtag, createdAt, userid
users --> username, password, avatar

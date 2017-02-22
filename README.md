# lil-twitter

User can post and delete a post. Including a search by keyword

# API
## Posts API

| Routes                     | Method  | Description   
| -------------------------  |---------| ---------------
| `api/posts`                | GET     | GET all posts
| `api/posts`                | POST    | Posting
| `api/posts/:id`            | DELETE  | Delete a post
| `api/posts/:id`            | GET     | Get a post
| `api/posts/search/:search` | GET     | Search a post by post content and tag

## Users API

| Routes          | Method  | Description   
| -------------   |---------| ---------------
| `api/users`     | GET     | GET all users
| `api/users/:id` | GET     | Get a user
| `api/users/:id` | DELETE  | Delete a user
| `api/users`     | POST    | Post a user

# Schema

## Users Schema

| Field          | Datatype  | Description   
| -------------  |---------  | ---------------
| username       | `STRING`  | Display name
| password       | `STRING`  | -
| avatar         | `STRING`  | User avatar
| createdAt      | `DATE`    | -


## Posts Schema

| Field          | Datatype  | Description   
| -------------  | --------- | ---------------
| post           | `STRING`  | User posting
| userId         | `STRING`  | User ID who post
| createdAt      | `DATE`    | -
| tag            | `ARRAY`   | tag posting

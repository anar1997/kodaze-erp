import axios from 'axios';

export default axios.create({
    baseURL: "https://dev.kodaze.com/api/v1",
    headers: {
        "Content-Type" : "application/json",
        "Authorization" : "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjcxMTgwNDE0LCJpYXQiOjE2NzA5MjEyMTQsImp0aSI6ImU1NTQ4ZTYyOTIwZjRlMzNhYjA3YmE0MDlkOTY3ZjgxIiwidXNlcl9pZCI6MX0.NlmBVj8dIo17wsyE-CCXdSldYGR3skmrR3BnY35wFuM" 
    }
})
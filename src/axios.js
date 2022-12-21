import axios from 'axios';

export default axios.create({
    baseURL: "https://dev.kodaze.com/api/v1",
    headers: {
        "Content-Type" : "application/json",
        "Authorization" : "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjcxNzkxOTY5LCJpYXQiOjE2NzE1MzI3NjksImp0aSI6Ijg5MGRmOGM5ZGQ0ODQxMGM4NDkwZTM0MWY2MGI4NzE0IiwidXNlcl9pZCI6MX0.WHWa6BD0BZyvfhVyZkI38KT9-8Td0eg_TEh06YcLTas"
    }
})
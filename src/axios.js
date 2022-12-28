import axios from 'axios';

export default axios.create({
    baseURL: "https://dev.kodaze.com/api/v1",
    headers: {
        "Content-Type" : "application/json",
        "Authorization" : "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjcyMDU2OTAwLCJpYXQiOjE2NzE3OTc3MDAsImp0aSI6ImMzM2Y5OTJmNGM1MDQxYzJiNjMzYWI5M2ViY2I5ZDI3IiwidXNlcl9pZCI6MX0.jrKonRkbcZVpc9VxmOSVyEUPzcn5EfzjmLTC7lT8P4Y"
    }
})
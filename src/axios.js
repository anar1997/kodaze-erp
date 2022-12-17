import axios from 'axios';

export default axios.create({
    baseURL: "https://dev.kodaze.com/api/v1",
    headers: {
        "Content-Type" : "application/json",
        "Authorization" : "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjcxNTI1OTMwLCJpYXQiOjE2NzEyNjY3MzAsImp0aSI6IjU1Mjk5ODY0NWUyZTQ2OTk4ZTk0YTZjY2FjZGEzNzgzIiwidXNlcl9pZCI6MX0.MnWvlLLnAhhWEnHq4Rj07qoESQ9h7eHE3ovz4ilwPEU"
    }
})
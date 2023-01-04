import axios from 'axios';

export default axios.create({
    baseURL: "https://dev.kodaze.com/api/v1",
    headers: {
        "Content-Type" : "application/json",
        "Authorization" : "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjczMDEwMzI3LCJpYXQiOjE2NzI3NTExMjcsImp0aSI6ImY3NWM1ZGViOTc3NzQyMmM4MjJhOWU1YTIxNTljOWJmIiwidXNlcl9pZCI6MX0.PgGRah-gVnXW08pNTxgqZ6i63PToYTsT5oWjH0rNEqc"
    }
})
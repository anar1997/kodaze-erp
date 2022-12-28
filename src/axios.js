import axios from 'axios';

export default axios.create({
    baseURL: "https://dev.kodaze.com/api/v1",
    headers: {
        "Content-Type" : "application/json",
        "Authorization" : "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjcyNDgyMDUwLCJpYXQiOjE2NzIyMjI4NTAsImp0aSI6IjZlNTMyMmQ3MjBhYjQyYzViZmQxZGY2MjQ4YTExYWU1IiwidXNlcl9pZCI6MX0.WkDiK09zH6SSW4_xZge1Lasrnx9FowKdbfzAiGe3yvc"
    }
})
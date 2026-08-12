import axios from 'axios'

const authApi = axios.create({
    baseURL: '/firebase-api/v1/accounts',
    params:{
        key: 'REDACTED_SECRET'
    }
})

export default authApi
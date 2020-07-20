import axios from 'axios'

const instances = axios.create({
    baseURL: 'https://burger-app-19e3c.firebaseio.com/'
})

export default instances
import axios from 'axios'

const KEY = 'AIzaSyChhG7XzD3t3ATWZcxrGlbCXLGg06mKfz0'

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params : {
        part : 'snippet',
        type : 'video',
        maxResult : 5,
        key : `${KEY}`
    }
})
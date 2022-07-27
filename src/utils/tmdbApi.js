import axios from 'axios'

const api_key = '60f0ae49f3be0cf104e66513d5cc9ad6'
axios.defaults.baseURL = 'https://api.themoviedb.org/3'
export async function getApi(url){
    try{
        const response = await axios({
            url:url,
            method:'get',
            params:{
                api_key:api_key
            }
        })

        // console.log(response.data)
        return response.data.results
    }
    catch(error){
        // console.log(error.message)
        return []
    }
}
export async function fetchMovieById(id)
{
    try{
        const response = await axios({
            url: 'movie/' + id,
            method: 'get',
            params: {
                api_key: api_key
            }
        })
        // console.log(response.data)
        return response.data
    }
    catch(error){
        console.log(error.message)
    }
}
export async function fetchMovieForSearch(movieName){
    try{
        const response = await axios({
            url: '/search/movie',
            method: 'get',
            params:{
                api_key:api_key,
                query: movieName,
                include_adult: true
            }
        })
        return response.data
        // console.log(response.data)
    }
    catch(error){
        console.log(error.message)
    }
}

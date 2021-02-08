import {useState,useEffect} from 'react'
import yelp from "../API/Yelp"

export default () =>{
    const[results,Setresuts] = useState([])

    const SearchAPI = async(searchTerm)  =>{
        console.log("Hi there")
        const response = await yelp.get('/search',{
            params:{
                limit:50,
                term:searchTerm,
                location:'Atlanta'
            }

        })
        Setresuts(response.data.businesses)
      
   
    }

    useEffect(() => {
        SearchAPI('pasta');
        
    }, [])

return [SearchAPI,results];
}
import axios from 'axios'
export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer JEMPM4byhY1Ty-fBfKkLqgX5-ysl_d8qi1V3Tr-PhrheMfaA-GeyWoXC5FCusEVGJJOoB9hyxE89TIiWO_Iir2fDT9tNWJT3zFGzlIGcqVwLxA-ZrOfkln4Iqe0kXXYx'
        
    }
})
import React,{useState,useEffect} from 'react'
import {View,Text,StyleSheet,Image,FlatList} from 'react-native'
import yelp from "../API/Yelp"

const MoreDetailScreen = ({navigation}) =>{
    const[result,setResult] = useState(null)
    const id= navigation.getParam('id');
    console.log(id)
    console.log(result)

    const getResult = async id =>{
        const response = await yelp.get(`/${id}`);
        setResult(response.data)  

    }

    useEffect(()=>{
        getResult(id)

    },[])

    if(!result){
        return null
    }
    return(
        <View style={styles.container}>
         
            <Text style={styles.name}>{result.name}</Text>
    <Text style={styles.address}>{result.location.address1},{result.location.city},{result.location.state}</Text>
    <Text style={{ fontSize:15,marginBottom:10}}> Rating: {result.rating} star</Text>
    <FlatList  data ={result.photos}
    keyExtractor ={(item)=>item}
    renderItem ={({item})=>{
        return(
            <Image style={styles.image}source ={{uri:item}}/>
        )
        

    }}
    />
   
    
        </View>

    )
}
const styles = StyleSheet.create({
    image:{
        width:250,
        height:250,
        marginBottom:20,
        borderRadius:10
    },
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
        
    },
    name:{
        fontSize:20,
        fontWeight:'bold',
        margin:10
        
    },
    address:{
        fontSize:15,
        marginBottom:10,
        fontWeight:'bold'
    }

})

export default MoreDetailScreen
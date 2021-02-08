import React from 'react'
import {View,Text,StyleSheet ,FlatList,TouchableOpacity} from 'react-native'
import ResultsDetail from "./ResultsDetails"
import {withNavigation} from 'react-navigation'

const ResultsList = ({title,results,navigation}) =>{
    return(
        <View style={styles.container}>
         
            <Text style={styles.title}> {title}</Text>
         <FlatList data={results} 
         horizontal 
         showsHorizontalScrollIndicator={false}
         keyExtractor={(result)=>result.id}
         renderItem ={({item})=>{
         return (
             <TouchableOpacity onPress={()=>navigation.navigate('detail',{id:item.id})}>
         <ResultsDetail result={item}/>
         </TouchableOpacity>
         )
         }}
         
         
         />
   
            
        </View>
    )
}

const styles= StyleSheet.create({
    title:{
        fontWeight:'bold',
        fontSize:18,
        marginLeft:5,
        marginBottom:5
    },
    container:{
        marginBottom:10

    }
})



export default withNavigation(ResultsList)
import React from 'react'
import {View,Text,StyleSheet,TextInput } from 'react-native'

const SearchBar = ({term,onSearchTerm,onTermSubmit}) =>{

    
    return(
        <View style={styles.background}>
            
            <TextInput placeholder ='serach' 
            value={term}
            autoCapitalize ='none'
            autoCorrect={false}
            onEndEditing ={onTermSubmit}
            onChangeText ={onSearchTerm}/>
            
        </View>
    )

}

const styles = StyleSheet.create({
    background:{
        backgroundColor:'lightgray',
        height:50,
        borderRadius:10,
        marginHorizontal:15,
        marginBottom:10

    }

})

export default SearchBar
import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView } from 'react-native'

import SearchBar from "./SearchBar"
import useResults from "../hooks/useResults"
import ResultList from "../screens/ResultsList"
import ResultsList from '../screens/ResultsList'


const SearchScreen = () => {
    const [term, Setterm] = useState("");
    const [SearchAPI, results] = useResults();

    console.log(results)

    const filterbyPrice = (price) => {
        return results.filter(result => {
            return result.price === price
        })

    }



    return (
        <View style={{flex:1}}>
            <SearchBar onTermSubmit={() => SearchAPI(term)} term={term} onSearchTerm={(newterm) => Setterm(newterm)} />
          
            <ScrollView>

                <ResultsList  results={filterbyPrice('$')} title="Cost Effective" />
                <ResultsList results={filterbyPrice('$$')} title="Bit Pricier" />
                <ResultsList  results={filterbyPrice('$$$')} title="Big Spender" />
            </ScrollView>
        </View>
    )

}

export default SearchScreen
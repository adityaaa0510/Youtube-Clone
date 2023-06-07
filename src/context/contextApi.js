import React,{createContext, useState, useEffect} from "react"
import{fetchDataFromApi} from "../utils/api"


export const Context = createContext();
export const AppContext = (props)=>{

    const[loading,setLoading] = useState(false);
    const[searchResult,setsearchResult] = useState(false);
    const[selectCategories,setselectCategories] = useState("new");
    const[mobileMenu,setmobileMenu] = useState(false);

    useEffect(()=>{
        fetchSelectedCategorydData(selectCategories);
    },[selectCategories]);

    const fetchSelectedCategorydData = (query)=>{
        setLoading(true);
        fetchDataFromApi(`search/?q=${query}`).then(({contents})=>{
            console.log(contents);
            setsearchResult(contents);
            setLoading(false);
        })
    }
    return (
        <Context.Provider 
        value={{
            loading,
            setLoading,
            searchResult,
            setsearchResult,
            selectCategories,
            setselectCategories,
            mobileMenu,
            setmobileMenu,
             }}
        >
            {props.children}
            </Context.Provider>

    )
}
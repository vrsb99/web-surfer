import React, { createContext, useContext, useState } from 'react';

const ResultContext = createContext();
const baseURL = 'https://google-search3.p.rapidapi.com/api/v1';
export const ResultContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("president+united+states");

    // /videos, /search, /images
    const getResults = async (type) => {
        setIsLoading(true);
        const response = await fetch(`${baseURL}${type}`, {
            method: 'GET',
            headers: {
                'X-User-Agent': 'desktop',
                'X-Proxy-Location': 'SG',
                'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
              }
        });

    const data = await response.json();

    
    console.log({type, data})
        if(type.includes('/news')) {
            setResults(data.entries);
        } else if (type.includes('/image')) {
            setResults(data.image_results);
        } else {
            setResults(data.results);
        }
    setIsLoading(false);

    };

    return(
        <ResultContext.Provider value={{getResults, results, searchTerm, setSearchTerm, isLoading}}>
            {children}
        </ResultContext.Provider>
    );
};

export const useResultContext =  () => useContext(ResultContext);
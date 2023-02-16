import {useState} from "react";
import API from "../api/API";

const api = new API()

export const useWebAppApi = () => {
    const initialResults = { answers: [], noAnswers: false, error: false }

    // useState hook to manage the loading state
    const [loading, setLoading] = useState(false);
    // useState hook to manage the results state
    const [results, setResults] = useState({ answers: [], noAnswers: false, error: false });

    // function to send a question to the API
    const getAnswers = (value) => {
        // Clear all results from the state
        clearAll()
        // Set loading to true
        setLoading(true)

        // Make an API call
        api.sendQuestion(value).then((response) => {
            // Set the results with the response and set noAnswers to true if the response length is 0
            setResults({
                ...initialResults,
                answers: response,
                noAnswers: response.length <= 0
            })
        }).catch((error) => {
            // Set the results with the error
            setResults({ ...initialResults, error })
        }).finally(() => {
            // Set loading to false
            setLoading(false)
        })
    }

    // Clear all results from the state
    const clearAll = () => setResults(initialResults)

    // Return loading, results and the two functions
    return {
        loading,
        results,
        getAnswers,
        clearAll
    }
}

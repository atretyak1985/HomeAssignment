// Export constant to store API configuration for accessing inference runner
export const inferenceApiConfig = {
    // URL of inference runner
    url: 'https://inference-runner.hw.ask-ai.co',
    // Headers to include in API requests
    headers: {
        common: {
            // API key to be used in requests
            'X-API-Key': '3211bc12-9ba4-4169-b8a3-dbc92494fa76'
        }
    }
};

// Export the chunksApiConfig object to be used by other components
export const chunksApiConfig = {
    // The url of the chunk-holder
    url: 'https://chunk-holder.hw.ask-ai.co',
    // Headers for the get request
    headers: {
        common: {
            // API key to be used in requests
            'X-API-Key': 'd486a94c-29f4-453a-a822-f909a97dbfa7'
        },
        get: {
            // Authorization
            'Authorization': ''
        }
    }
};

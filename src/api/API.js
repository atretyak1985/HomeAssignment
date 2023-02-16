import axios from "axios";
import {inferenceApiConfig, chunksApiConfig} from "./config";

/* This class is an API class that is used to send a question, get an answer,
and then get chunks of that answer with a generated token. The getAnswer method is used to send the question
and the getChunksByID method is used to get the chunks of the answer with the generated token.
The generateToken method is used to generate a token.
 */
class API {
    //Send a question to the inference API and get an answer
    async sendQuestion (value) {
        const chunksData = await this.getAnswer(value)

        //If the response has data, generate a token and get the chunks by ID
        if (chunksData.data) {
            const token = await this.generateToken()
            return await this.getChunksByID(chunksData.data.chunks, token)
        }

        //Return undefined if there is no data
        return undefined
    }

    //Get an answer from the inference API
    async getAnswer(question) {
        const { url, headers } = inferenceApiConfig

        return await axios.post(url+ '/ask', { question }, { headers })
    }

    //Get the chunks by ID from the chunks API
    async getChunksByID(chunks = [], token) {
        //Filter chunks with a confidence level greater than 70
        chunks = chunks.filter((chunk) => chunk.confidence > 70)

        //Check if there are chunks and if there is a token
        if (chunks.length === 0 || !token) {
            return []
        }

        const { url, headers } = chunksApiConfig
        const results = []

        headers.get.Authorization = token

        //Loop through the chunks and get the result from each one
        for (const chunk of chunks) {
            const result = await axios.get(url + '/chunks/' + chunk.chunkId, { headers });

            //If the result has data, push it to the results array
            if (result.data) {
                results.push({ answer: result.data, confidence: chunk.confidence, id: chunk.chunkId })
            }
        }

        return results
    }

    //Generate a token from the chunks API
    async generateToken () {
        const { url, headers } = chunksApiConfig
        const results = await axios.post(url + '/auth/generate-token', {}, { headers })

        //Return the token if there is one
        return results.data?.token ?? undefined
    }
}

export default API

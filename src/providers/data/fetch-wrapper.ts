
import { GraphQLFormattedError } from "graphql";

type Error = {
    message: string;
    statusCode: string | number;
}

const customFetch = async (url:string, options:RequestInit ) => {
    const accessToken = localStorage.getItem('access_token');
    const headers = options.headers as Record<string, string>;

    // Debug log to see what's being sent
    console.log('Request options:', options);
    console.log('Request body:', options.body);

    return await fetch(url,{
        ...options,
        headers: {
            ...headers,
            Authorization: headers?.Authorization || `Bearer ${accessToken}`,
            "Content-Type": "application/json",
            "Apollo-Require-Preflight": "true",
        }
    })
}

const getGarphQLError = (body: Record<"errors", GraphQLFormattedError[] | undefined>):
Error | undefined => {
    if(!body){
        return {
            message:'Unknown error',
            statusCode: "INTERNAL_SERVER_ERROR",
        }
    }

    if("errors" in body){
        const errors = body?.errors;

        const messages = errors?.map((error) => error?.message).join("");
        const code = errors?.[0]?.extensions?.code;

        return{
            message: messages || JSON.stringify(errors), 
            statusCode: code || 500
        }


    }
    return undefined;
}



export const fetchWrapper = async (url:string,  options: RequestInit) => {
    const response = await customFetch(url, options);
    const responseClone = response.clone();
    
    // Debug log response
    console.log('Response status:', response.status);
    console.log('Response headers:', response.headers);
    
    let body;
    try {
        body = await responseClone.json();
        console.log('Response body:', body);
    } catch (error) {
        console.log('Failed to parse JSON response:', error);
        // If response is not JSON, return original response
        return response;
    }

    const error = getGarphQLError(body);
    if(error){
        console.log('GraphQL error:', error);
        throw error;
    }
    return response;

 }
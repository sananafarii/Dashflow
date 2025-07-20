
import { GraphQLFormattedError } from "graphql";

const customFetch = async (url:string, options:RequestInit ) => {
    const accessToken = localStorage.getItem('accessToken');

    const headers = options.headers as Record<string, string>;

    return await fetch(url,{
        ...options,
        headers: {
            ...headers,
            Authorization:headers?.Authorization || `Bearer ${accessToken}`,
            "content-type": "application/json",
            "Apollo-Require-Preflight: true",
        }
    })
}

const getGarphQLError = (body: Record<"errors", GraphQLError[] | undefined>):
Error | undefined => {
    if(!body){
        return {
            message:'Unknown error',
            statusCode: "INTERNAL_SERVER_ERROR",
        }
    }
}
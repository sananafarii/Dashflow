
import { GraphQLFormattedError } from "graphql";

type Error = {
    message: string;
    statusCode: string | number;
}

const customFetch = async (url:string, options:RequestInit ) => {
    const accessToken = localStorage.getItem('accessToken');

    const headers = options.headers as Record<string, string>;

    return await fetch(url,{
        ...options,
        headers: {
            ...headers,
            Authorization:headers?.Authorization || `Bearer ${accessToken}`,
            "content-type": "application/json",
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
    const respone = await customFetch(url, options);
    const responeClone = respone.clone();
    const body = await responeClone.json();

    const error = getGarphQLError(body);
    if(error){
        throw error;
    }
    return response;

 }
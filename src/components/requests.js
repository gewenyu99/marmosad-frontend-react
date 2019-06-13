import rp from "request-promise-native";

export const createBoard = async (form) => {
    return rp({
        method: 'POST',
        uri: 'https://27hbrxz5f0.execute-api.us-east-1.amazonaws.com/test/createBoard',
        body: form,
        json: true, // Automatically stringify the body to JSON
        headers: {
            'Content-Type': "application/json"
        }
    })
};
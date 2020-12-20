const axios = require("axios");
const email = "shahteryshka@gmail.com";
const password = "Pad5440_99";

const WORD = "test";
const BASE_URL = 'https://api.lingualeo.com';

const axiosInstance = axios.create({
    baseURL: BASE_URL
})

const userAuth = async (email, password) => {
    try {
        const response = await axiosInstance.get(`/login?email=${email}&password=${password}`);
        console.log(response.data);
        return response.data;

    } catch (error) {
        console.error(error);
    }
    // .then(data => console.log(data.data))
    // .catch(e => console.log(e));

}
//https
const getTranslates = async (word) => {
    try {
        const response = await axiosInstance.post(`/getTranslates`, {
            text: word
        });
        console.log(response);
        return response;
    } catch (error) {
        console.error(error);
    }
}

const addWordToDict = async (word, tword, context = '') => {
    try {
        const response = await axiosInstance.get(`/addword&word=${word}&tword=${tword}&context=${context}`)
        console.log(response);
        return response;
    } catch (error) {
        console.error(error);
    }
}

const translateWord = async (word, sourceLang = 'en', targetLang = 'ru') => {
    try {
        const response = await axiosInstance.get(`/translate.php?q=${encodeURIComponent(word)}
        &from=&source=${sourceLang}&target=${targetLang}`);
        console.log(response.data);
        return response;
    } catch (error) {
        console.error(error);
    }
}
// create new Dict Set
// SetWordSets / post /
const addWordSet = async (title) => {
    try {
        const response = await axiosInstance.get(`/&wordSet[name]=${title}`);
        console.log(response);
        return response;
    }
    catch (error) {
        console.error(error);
    }
}
// userAuth(email, password);
// getTranslates(WORD);
// translateWord(WORD);
// addWordSet('test') // not work
// addWordToDict(WORD, WORD) // not work
// export {userAuth};
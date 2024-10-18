import axios from "axios";

const baseUrl = 'http://localhost:8080';

const getSuggestions = async () => {
    try {
        const response = await axios.get(`${baseUrl}/suggestions`);
        return response.data;
    } catch (error) {
        console.error(`${error.status}: GET request for suggestions failed`);
    }
};

const postSuggestion = async () => {
    try {
        const response = await axios.post(`${baseUrl}/suggestions`);
        return response.data;
    } catch (error) {
        console.error(`${error.status}: Post request for suggestion failed`);
    }
};

export { getSuggestions, postSuggestion };
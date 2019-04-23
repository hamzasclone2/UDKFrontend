import axios from 'axios';

const PORT = '3001';
const IP = '104.248.235.9'; 

const getData = async function getData(category = "top", search = "") {
    let response;
    let articles;
    try {
        if (category == 'top') {
            response = await axios.get("http://" + IP + ":" + PORT + "/api/top");
        } else if (category == 'news') {
            response = await axios.get("http://" + IP + ":" + PORT + "/api/news");
        } else if (category == 'sports') {
            response = await axios.get("http://" + IP + ":" + PORT + "/api/sports");
        } else if (category == 'arts') {
            response = await axios.get("http://" + IP + ":" + PORT + "/api/arts");
        } else if (category == 'opinion') {
            response = await axios.get("http://" + IP + ":" + PORT + "/api/opinion");
        } else if (category == 'chalk') {
            response = await axios.get("http://" + IP + ":" + PORT + "/api/chalk");
        } else if (category == 'multimedia') {
            response = await axios.get("http://" + IP + ":" + PORT + "/api/multimedia");
        } else if (category == 'specials') {
            response = await axios.get("http://" + IP + ":" + PORT + "/api/specials");
        } else if (category == 'search') {

            let keywords = stringToKeywords(search);
            let n_keywords = keywords.length;

            if (n_keywords == 1) {
                response = await axios.get("http://" + IP + ":" + PORT + "/api/search?headline=" + keywords[0]);
            } else if (n_keywords == 2) {
                response = await axios.get("http://" + IP + ":" + PORT + "/api/search?headline=" + keywords[0] + "&headline=" + keywords[1]);
            } else if (n_keywords > 2) {
                response = await axios.get("http://" + IP + ":" + PORT + "/api/search?headline=" + keywords[0] + "&headline=" + keywords[1] + "&headline=" + keywords[2]);
            } else {
                response = await axios.get("http://" + IP + ":" + PORT + "/api/top");
            }
        }
        articles = response.data;


    }catch (error){
        articles = [{id: 1, headline: "No data, a possible connection problem.", body: "Please try later."}];
        console.log("Error connecting to an api server:", error);
    }

    return articles;
}

const contains = ({headline}, keywords) => {

    let n_keywords = keywords.length;
    let headlineLowercase = headline.toLowerCase();

    if ( n_keywords == 1 && headlineLowercase.includes( keywords[0].toLowerCase() ) ){
        return true;
    } else if ( n_keywords == 2 && headlineLowercase.includes( keywords[0].toLowerCase() ) 
                                && headlineLowercase.includes( keywords[1].toLowerCase() ) ){
        return true;
    } else if ( n_keywords > 2  && headlineLowercase.includes( keywords[0].toLowerCase() ) 
                                && headlineLowercase.includes( keywords[1].toLowerCase() )  
                                && headlineLowercase.includes( keywords[2].toLowerCase() ) ){
        return true;
    }
    return false;
};

const stringToKeywords = (s) => {
    return s.toString().replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, " ").trim().split(" ").filter(word => word.length > 1);
}

module.exports = {
    getData,
    contains,
    stringToKeywords
}

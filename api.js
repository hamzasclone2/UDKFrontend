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
            console.log("api search", search)
            response = await axios.get("http://" + IP + ":" + PORT + "/api/search?headline=" + search);
        }
        articles = response.data;


    }catch (error){
        articles = [{id: 1, headline: "No data, a possible connection problem.", body: "Please try later."}];
        console.log("Error connecting to an api server:", error);
    }

    return articles;
}

const contains = ({headline}, search= "") => {

    let headlineLowercase = headline.toLowerCase();
    let searchLowercase = search.toLowerCase();    

    if ( headlineLowercase.includes( searchLowercase ) ){
        return true;
    }
    return false;
};

module.exports = {
    getData,
    contains
}

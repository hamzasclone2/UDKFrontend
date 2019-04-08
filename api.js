import axios from 'axios';

module.exports.getData = async function getData(call, search) {
    console.log("search in api:", search)
    let response;
    if (call == 'top') {
        response = await axios.get("http://104.248.235.9:3001/api/top");
    } else if (call == 'news') {
        response = await axios.get("http://104.248.235.9:3001/api/news");
    } else if (call == 'sports') {
        response = await axios.get("http://104.248.235.9:3001/api/sports");
    } else if (call == 'arts') {
        response = await axios.get("http://104.248.235.9:3001/api/arts");
    } else if (call == 'opinion') {
        response = await axios.get("http://104.248.235.9:3001/api/opinion");
    } else if (call == 'chalk') {
        response = await axios.get("http://104.248.235.9:3001/api/chalk");
    } else if (call == 'multimedia') {
        response = await axios.get("http://104.248.235.9:3001/api/multimedia");
    } else if (call == 'specials') {
        response = await axios.get("http://104.248.235.9:3001/api/specials");
    } else if (call == 'search') {
        response = await axios.get("http://104.248.235.9:3001/api/search?headline=" + search);
    }

    return response.data;
}

module.exports.contains = ({headline}, search) => {
    if (headline.includes(search.toLowerCase())) {
        return true;
    }
    return false;
};


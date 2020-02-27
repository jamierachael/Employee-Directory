import axios from "axios";


// const APIKEY = "&apikey=trilogy";

export default function getEmployeeName(query) {
    // search: function (query) {
    //     return axios.get(BASEURL);
    // }
    const BASEURL = "https://randomuser.me/api/?results=200&nat=us";
    return axios.get(BASEURL);


};

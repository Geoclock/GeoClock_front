import React from "react";
import Http from "../../ConnectionToFlask";



const GetAllGeolocations = async (user_id) => {
    const data = new FormData();
    data.append('user_id',user_id);
    //const resp = {};
    let list = [];
    try {
        const response = await Http.post("/AllGeolocationsRead", data);
        list = response.data["geolocations"];
    } catch (err) {
        console.error(err);
    }
    return(list);
}

const AddGeolocation = (user_id) => {

}

const GeolocationCommunication = (type, user_id) => {
    switch (type){
        case "GetAllGeolocations":
        {
            return( GetAllGeolocations(user_id));
        }
        case "AddGeolocation":
        {
            return (AddGeolocation(user_id));
        }
        default:
            return null;
    }
}
export default GeolocationCommunication

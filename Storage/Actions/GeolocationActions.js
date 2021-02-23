import {ADD_GEOLOCATION, EDIT_GEOLOCATION, REMOVE_GEOLOCATION, CLEAR_GEOLOCATION} from "../Actions/types";

export function addGeolocation (geolocation){
    console.log('addGeolocation',geolocation)
    return{
        type: ADD_GEOLOCATION,
        geolocation: geolocation
    }
}

export function editGeolocation(geolocation,id){
    return{
        type: EDIT_GEOLOCATION,
        id: id,
        geolocation: geolocation
    }
}

export  function removeGeolocation(id){
    return{
        type: REMOVE_GEOLOCATION,
        id: id
    }
}

export function clearGeolocation(){
    return{
        type: CLEAR_GEOLOCATION
    }
}

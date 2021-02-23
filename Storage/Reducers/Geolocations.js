import {ADD_GEOLOCATION, EDIT_GEOLOCATION, REMOVE_GEOLOCATION, CLEAR_GEOLOCATION} from "../Actions/types";

const initialState = {
    geolocations: []
};

export default function GeolocationReducer(state = initialState, action){
    console.log(state,action)
    switch (action.type){
        case ADD_GEOLOCATION:
        {
            return{
                ...state,
                geolocations: [...state.geolocations,action.geolocation]
            };
        }
        case EDIT_GEOLOCATION:
        {
            const new_state = [...state.geolocations];
            const edited_state = new_state.map(geolocation => {
                    if (geolocation.id !==  action.id ){
                        return geolocation
                    }
                    else {
                        return action.geolocation
                    }
            });
            return  {
                ...state,
                geolocations: edited_state
            };

        }
        case REMOVE_GEOLOCATION:
        {
            const new_state=[...state.geolocations];
            new_state.splice(action.id,1);
            return {
                ...state,
                geolocations: new_state
            };
        }
        case CLEAR_GEOLOCATION:
        {
            return {
                ...state,
                geolocations: []
            };
        }
        default:
            return state;
    }
}

/*export default function (){
    return [
        {
            id: 1,
            geo_name: 'some name',
            lattitute: 12.34,
            longtitude: 12.34,
            geo_address: 'address',
            folder_id: 1
        }
    ]
}*/

import {ADD_USERINFO, CLEAR_USERINFO} from "./types";

export function addUserINFO (userINFO){
        console.log("ff",userINFO)
        return {
                type: ADD_USERINFO,
                userINFO: userINFO
        }
}

export function clearUserINFO (){
        return{
                type: CLEAR_USERINFO
        }
}

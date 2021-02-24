import React from "react";
import Http from "../../ConnectionToFlask";



const GetAllFolders = async (user_id) => {
    const data = new FormData();
    data.append('user_id',user_id);
    //const resp = {};
    let list = [];
    try {
        const response = await Http.post("/AllFoldersRead", data);
        list = response.data["folders"];
    } catch (err) {
        console.error(err);
    }
    return(list);
}


const AddFolder = (user_id) => {

}


const FolderCommunication = (type, user_id) => {
    switch (type){
        case "GetAllFolders":
        {
            return (GetAllFolders(user_id));
        }
        case "AddFolder":
        {
            return (AddFolder(user_id));
        }
        default:
            return null;
    }
}

export default FolderCommunication

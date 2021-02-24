import React from 'react';
import Http from "../../ConnectionToFlask";


const GetAllNoteSubjections = async (user_id) => {
    const data = new FormData();
    data.append('user_id',user_id);
    //const resp = {};
    let list = [];
    try {
        const response = await Http.post("/AllNoteSubjectionsRead", data);
        list = response.data["notesubjections"];
    } catch (err) {
        console.error(err);
    }
    return(list);
}

export default GetAllNoteSubjections

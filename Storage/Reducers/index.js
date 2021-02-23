import {combineReducers} from "redux";
import GeolocationReducer from './Geolocations';
import NotificationReducer from './Notifications';
import FolderReducer from './Folders';
import UserReducer from './UserINFO';
import NotesubjectionReducer from './Notesubjection';

const combinedReducers = combineReducers({
    geolocations: GeolocationReducer,
    notifications: NotificationReducer,
    folders: FolderReducer,
    userINFO: UserReducer,
    notesubjection: NotesubjectionReducer
});

export default combinedReducers

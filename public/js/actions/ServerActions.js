import AppDispatcher from "../AppDispatcher";
import {ActionTypes} from "../Constants";

let ServerActions = {

  receiveLinks(links) {
    console.log(" I\'m in ServerActions...");
    console.log('links: ', links);
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVE_LINKS,
      links
    });
  }

};

export default ServerActions;

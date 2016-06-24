import AppDispatcher from "../AppDispatcher";
import {ActionTypes} from "../Constants";
import {EventEmitter} from "events";


let _links = [];

class linkStore extends EventEmitter {
  constructor(props) {
    super(props);

    AppDispatcher.register(action => {
      switch (action.actionType) {
        case ActionTypes.RECEIVE_LINKS:
          // data propcessing
          console.log("Data processing in Store...");
          _links = action.links;
          this.emit("change");
          break;
        default:
          // do nothing
      }
    });
  }

  getAll() {
    console.log("_links: ", _links);
    return _links;
  }
}

export default new linkStore();

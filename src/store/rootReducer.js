import { combineReducers } from "redux";
import catcall from "./catcall/reducer";
import responses from "./responses/reducer";
import scene from "./scene/reducer";

export default combineReducers({
  catcall,
  responses,
  scene,
});

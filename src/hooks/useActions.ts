import {themeActionsObject} from "../store/themeReducer/actionCreator";

import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {messagesActionsObject} from "../store/messagesReducer/actionCreator";
import {appActionsObject} from "../store/appReducer/actionCreator";

const allActions = {
  ...themeActionsObject,
  ...messagesActionsObject,
  ...appActionsObject,
};

const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(allActions, dispatch);
};

export default useActions;

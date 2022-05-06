import React from "react";
import {useSelector} from "react-redux";
import {Navigate, useLocation} from "react-router-dom";
import {selectIsAuth} from "../store/selectors";

interface Props {
  children: React.ReactElement;
}

const RequireAuth: React.FC<Props> = ({children}) => {
  const location = useLocation();
  const isAuth = useSelector(selectIsAuth);
  if (!isAuth) {
    return <Navigate to="/login" state={{from: location}} />;
  }
  return children;
};

export default RequireAuth;

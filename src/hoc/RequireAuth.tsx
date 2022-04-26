import React from "react";
import {useSelector} from "react-redux";
import {Navigate, useLocation, useNavigate} from "react-router-dom";
import {selectUserName} from "../store/selectors";

interface Props {
  children: React.ReactElement;
}

const RequireAuth: React.FC<Props> = ({children}) => {
  const location = useLocation();
  const currentUser = useSelector(selectUserName);
  if (!currentUser) {
    return <Navigate to="/login" state={{from: location}} />;
  }
  return children;
};

export default RequireAuth;

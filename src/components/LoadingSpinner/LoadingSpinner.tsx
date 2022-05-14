import {LoadingSpinnerBody} from "./LoadingSpinned.styled";
import {CgSpinnerTwoAlt as LoadingIcon} from "react-icons/cg";

const LoadingSpinner = () => {
  return (
    <LoadingSpinnerBody>
      <LoadingIcon />
    </LoadingSpinnerBody>
  );
};

export default LoadingSpinner;

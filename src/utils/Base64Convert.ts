import {messageTypes} from "../store/messagesReducer/state";

function base64Converter(file: any, callback: Function) {
  if (file.file) {
    const blob = new Blob([file.file], {type: file.type});
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => {
      callback(reader.result);
    };
  }
  return null;
}

export default base64Converter;

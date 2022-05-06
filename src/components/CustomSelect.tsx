import React from "react";
import {useSelector} from "react-redux";
import Select, {Theme} from "react-select";
import {selectThemeColors} from "../store/selectors";

type Props = {
  onChangeHandler: (roomValue: string) => void;
};

const CustomSelect: React.FC<Props> = ({onChangeHandler}) => {
  const theme = useSelector(selectThemeColors);

  const options = [
    {value: "room1", label: "Room 1"},
    {value: "room2", label: "Room 2"},
    {value: "room3", label: "Room 3"},
    {value: "random", label: "Чат со случайным пользователем"},
  ];
  const customSelectStyles = {
    menu: (provided: any, state: any) => ({
      ...provided,
      width: "100%",
      color: theme.accentColor,
      border: "none",
      background: theme.bgColor,
    }),
    container: (provided: any, state: any) => ({
      ...provided,
      width: "100%",
      color: theme.accentColor,
    }),
    control: (provided: any, state: any) => ({
      ...provided,
      background: theme.bgColor,
    }),
    placeholder: (provided: any, state: any) => ({
      ...provided,
      color: theme.reversedTextColor,
      background: theme.bgColor,
    }),
    input: (provided: any, state: any) => ({
      ...provided,
      color: "theme.reversedTextColor",
    }),

    dropdownIndicator: (p: any, s: any) => ({
      ...p,
      color: theme.accentColor,
      border: "none",
    }),
    option: (p: any, s: any) => ({
      ...p,
      color: s.isFocused ? "white" : theme.accentColor,
      background: s.isFocused ? theme.accentColor : theme.bgColor,
      border: "none",
      cursor: "pointer",
    }),
    singleValue: (p: any, s: any) => ({
      ...p,
      color: theme.reversedTextColor,
    }),
  };

  return (
    <Select
      onChange={(roomValue) => roomValue && onChangeHandler(roomValue.value)}
      defaultMenuIsOpen={true}
      isClearable={true}
      options={options}
      placeholder={"Доступные комнаты"}
      styles={customSelectStyles}
      theme={(themes: Theme) => ({
        ...themes,
        borderRadius: 3,
        border: "none",
        colors: {
          ...themes.colors,
          primary: theme.accentColor,
        },
      })}
    />
  );
};

export default CustomSelect;

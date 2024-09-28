/** @jsxImportSource @emotion/react */
import {
  InputFocusStyle,
  InputStyle,
} from "@shared/CommonUI/input/model/OutlinedInputWithLabelStyle";
import { useState } from "react";

export const OutlinedInputWithLabel = ({
  title,
  name,
  value,
  onChange,
}: {
  title: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const isPassword = name.includes("password");

  const focusStyle = isFocused ? InputFocusStyle : {};

  return (
    <div css={{ ...InputStyle, ...focusStyle }}>
      <label>{title}</label>
      <input
        type={isPassword ? "password" : "text"}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  );
};

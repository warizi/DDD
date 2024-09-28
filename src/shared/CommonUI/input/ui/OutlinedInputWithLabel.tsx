/** @jsxImportSource @emotion/react */
import { InputStyle } from "@shared/CommonUI/input/model/OutlinedInputWithLabelStyle";
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
  const isPassword = name === "password";

  const focusStyle = isFocused
    ? {
        border: "2px solid #000",
        "& label": {
          color: "#000",
          marginRight: "10px",
        },
      }
    : {};
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

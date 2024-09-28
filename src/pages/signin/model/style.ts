import { background } from "@shared/theme";

//page
export const SigninContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100vh",
  backgroundColor: background.deep,
};

//SigninBox
export const SigninBoxStyle = {
  display: "flex",
  alignItems: "center",
  width: "400px",
  padding: "20px",
  backgroundColor: background.base,
  borderRadius: "10px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
};

export const InputBoxWrapper = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  "& > span": {
    color: "#666",
    cursor: "pointer",
  },
  "& > span:hover": {
    textDecoration: "underline",
  },
  "& > button": {
    width: "100%",
    height: "50px",
    backgroundColor: "#0077cc",
    color: "white",
    fontSize: "20px",
    borderRadius: "15px",
    cursor: "pointer",
    border: "none",
    "&:hover": {
      backgroundColor: "#005fa3",
    },
  },
};
